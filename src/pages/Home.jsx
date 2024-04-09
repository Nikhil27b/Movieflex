import React, { useState, useEffect, useRef } from "react";
import MovieCard from "../components/MovieCard";
import BannerSlider from "../components/Banner";

const BASE_URL = "https://api.themoviedb.org/3/discover/movie";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [sections, setSections] = useState([]);
  const currentPageRef = useRef(1);

  const fetchMovies = async (selectedYear) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc&primary_release_year=${selectedYear}&page=${currentPageRef.current}&vote_count.gte=100`
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
        !isLoading
      ) {
        const nextYear = Math.min(sections.length + 2012, 2024);
        console.log("You're at the bottom of the homepage");
        fetchMovies(nextYear);
      }
    };

    window.addEventListener("scroll", onBottomOfHomePage);
    return () => window.removeEventListener("scroll", onBottomOfHomePage);
  }, [sections, isLoading]);

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
