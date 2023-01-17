import axios from "axios";

const api_key = import.meta.env.VITE_TMDB_API_KEY;

const remote = axios.create();

export interface MovieListResponseType {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: string;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_avarage: number;
    vote_count: number;
  }[];
  total_pages: number;
}

export const fetchNowPlaying = async (nextPage?: number) => {
  const pageCount = nextPage ? nextPage : 1;
  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=ko-KR&page=${pageCount}&region=KR`;

  const res = await remote.get<MovieListResponseType>(URL);
  return res.data;
};

export const fetchUpComing = async (nextPage?: number) => {
  const pageCount = nextPage ? nextPage : 1;
  const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=ko-KR&page=${pageCount}&region=KR`;

  const res = await remote.get<MovieListResponseType>(URL);
  return res.data;
};
