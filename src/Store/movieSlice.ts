import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchNowPlayingAPI,
  fetchUpComingAPI,
  MovieListResponseType,
} from "../Service/movieService";

export const fetchNowPlaying = createAsyncThunk(
  "movie/fetchNowPlaying",
  async (nextPage?: number) => {
    const res = await fetchNowPlayingAPI(nextPage);
    return res;
  }
);

interface MoviesState {
  movies: MovieListResponseType;
}

const initialState = {
  movies: {
    dates: {
      maximum: "",
      minimum: "",
    },
    page: 1,
    results: [],
    total_pages: 0,
  },
} as MoviesState;

export const nowPlayingSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchNowPlaying.fulfilled,
      (state, action: PayloadAction<MovieListResponseType>) => {
        if (state.movies.results.length > 0) {
          state.movies = {
            ...action.payload,
            results: [...state.movies.results, ...action.payload.results],
          };
        } else {
          state.movies = action.payload;
        }
      }
    );
  },
});

export const fetchUpComing = createAsyncThunk(
  "movie/fetchUpComing",
  async (nextPage?: number) => {
    const res = await fetchUpComingAPI(nextPage);
    return res;
  }
);

export const upComingSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchUpComing.fulfilled,
      (state, action: PayloadAction<MovieListResponseType>) => {
        if (state.movies.results.length > 0) {
          state.movies = {
            ...action.payload,
            results: [...state.movies.results, ...action.payload.results],
          };
        } else {
          state.movies = action.payload;
        }
      }
    );
  },
});

export const nowPlayingReducer = nowPlayingSlice.reducer;
export const upComingReducer = upComingSlice.reducer;
