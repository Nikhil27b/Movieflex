import { useState, useEffect,useRef } from "react";
import MovieCard from "../components/MovieCard";
import BannerSlider from "../components/Banner";

const BASE_URL = "https://api.themoviedb.org/3/";   
const API_KEY = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [sections, setSections] = useState([]);
  const currentPageRef = 1;
  const currentYearRef = useRef(2012); 
  
  const fetchMovies = async (selectedYear) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&primary_release_year=${selectedYear}&page=${currentPageRef}&vote_count.gte=100`
      );
      const data = await response.json();
      const newSection = {
        year: selectedYear,
        movies: data.results,
      };
  
      setSections((prevSections) => [...prevSections, newSection]);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchMovies(2012);
  }, []);
  
  useEffect(() => {
    const onBottomOfHomePage = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        !isLoading &&
        currentYearRef.current < 2024
      ) {
        const nextYear = currentYearRef.current + 1; 
        currentYearRef.current = nextYear;
        fetchMovies(nextYear);
      }
    };
  
    window.addEventListener("scroll", onBottomOfHomePage);
    return () => window.removeEventListener("scroll", onBottomOfHomePage);
  }, [isLoading]);
  

  return (
    <>
      <section className="homepage">
        <div className="container-fluid">
          <BannerSlider></BannerSlider>
          {sections.map((section, index) => (
            <div key={index} className="all-movies">
              <h2 className="year-movie">{section.year}</h2>
              <div className="movie-grid">
                {section.movies.map((movie, index) => (
                  <MovieCard key={index} movie={movie} />
                ))}
              </div>
            </div>
          ))}
          {isLoading && <p>Loading more movies...</p>}
        </div>
      </section>
    </>
  );
};

export default Home;
