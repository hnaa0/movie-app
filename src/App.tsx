import { useCallback, useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import PageHeader from "./components/PageHeader";
import {
  fetchNowPlaying,
  fetchUpComing,
  MovieListResponseType,
} from "./Service/movieService";

function App() {
  const [category, setCategory] = useState("Now Playing");
  const [movies, setMovies] = useState<MovieListResponseType>({
    dates: {
      maximum: "",
      minimum: "",
    },
    page: 1,
    results: [],
    total_pages: 0,
  });

  const onSelect = useCallback((category: string) => setCategory(category), []);

  useEffect(() => {
    if (category == "Now Playing") {
      (async () => {
        const result = await fetchNowPlaying();
        setMovies(result);
      })();
    } else {
      (async () => {
        const result = await fetchUpComing();
        setMovies(result);
      })();
    }
  }, [category]);

  return (
    <>
      <PageHeader category={category} onSelect={onSelect} />
      <MovieList category={category} movies={movies} setMovies={setMovies} />
    </>
  );
}

export default App;
