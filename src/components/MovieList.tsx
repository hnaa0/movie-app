import styled from "@emotion/styled";
import { useEffect } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../Store";
import { fetchNowPlaying, fetchUpComing } from "../Store/movieSlice";
import Movie from "./Movie";

export default function MovieList() {
  const dispatch = useAppDispatch();
  const category = useSelector((state: RootState) => state.category.type);
  const movies = useSelector((state: RootState) =>
    category == "Now Playing" ? state.nowPlaying.movies : state.upComing.movies
  );

  const [infiniteRef] = useInfiniteScroll({
    loading: false,
    hasNextPage: movies.page < movies.total_pages,
    onLoadMore:
      category == "Now Playing"
        ? async () => {
            const nextPage = movies.page + 1;
            dispatch(fetchNowPlaying(nextPage));
          }
        : async () => {
            const nextPage = movies.page + 1;
            dispatch(fetchUpComing(nextPage));
          },
    disabled: false,
    rootMargin: "0px 0px 400px 0px",
  });

  useEffect(() => {
    if (category == "Now Playing") {
      dispatch(fetchNowPlaying());
    } else {
      dispatch(fetchUpComing());
    }
  }, [category]);

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
      <Loading ref={infiniteRef}>Loading...</Loading>
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  color: #fff;
`;
