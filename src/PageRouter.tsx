import { Routes, Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";
import MovieList from "./components/MovieList";

export default function PateRouter() {
  return (
    <Routes>
      <Route path="/" element={<MovieList />}></Route>
      <Route path="/movie/:movieId" element={<MovieDetail />}></Route>
    </Routes>
  );
}
