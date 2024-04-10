import { useState, useEffect } from "react";

const useFetchMovies = (url, dependencies = []) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${responseData.status_message}`);
        }
        setData(responseData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchData();
    }

    return () => setData(null);
  }, dependencies);

  return { loading, error, data };
};


export default useFetchMovies;