import styled from "@emotion/styled";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { fetchNowPlaying, fetchUpComing } from "../Service/movieService";
import Movie from "./Movie";

export default function MovieList(props: any) {
  const { movies, setMovies, category } = props;

  const [infiniteRef] = useInfiniteScroll({
    loading: false,
    hasNextPage: movies.page < movies.total_pages,
    onLoadMore:
      category == "Now Playing"
        ? async () => {
            const nextPage = movies.page + 1;
            const moreMovies = await fetchNowPlaying(nextPage);

            setMovies({
              ...moreMovies,
              results: [...movies.results, ...moreMovies.results],
            });
          }
        : async () => {
            const nextPage = movies.page + 1;
            const moreMovies = await fetchUpComing(nextPage);

            setMovies({
              ...moreMovies,
              results: [...movies.results, ...moreMovies.results],
            });
          },
    disabled: false,
    rootMargin: "0px 0px 400px 0px",
  });

  return (
    <>
      <List>
        {movies?.results.map((movie: any, index: number) => {
          return (
            <Movie
              key={`${index}_${movie.id}`}
              name={movie.title}
              originalName={movie.original_title}
              image={movie.poster_path}
              genre={movie.genre_ids}
              overview={movie.overview}
            />
          );
        })}
      </List>
      <Loading ref={infiniteRef}>Loading</Loading>
    </>
  );
}

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 32px 48px;
`;

const Loading = styled.div`
  color: #fff;
`;
