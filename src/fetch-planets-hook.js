import { useState, useEffect } from "react";

/* hook to fetch and setup data, includes error and loading state*/
export default function useFetchData() {
  const [data, setData] = useState({
    planetInfo: {},
    loading: true,
    error: false
  });

  async function fetchPlanetData() {
    await fetch('https://swapi.dev/api/planets/')
      .then(response => response.json())
      .then(parsedResponse => setData({planetInfo: parsedResponse, loading: false, error: false }))
      .catch(() => setData({planetInfo: {}, loading: false, error: true }));
  }

  useEffect(() => {
    fetchPlanetData();
  }, []);
  return [data];
}

