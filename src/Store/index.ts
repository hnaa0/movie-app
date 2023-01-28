import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { categorySliceReducer } from "./categoryTypeSlice";
import { nowPlayingReducer, upComingReducer } from "./movieSlice";

export const store = configureStore({
  reducer: {
    category: categorySliceReducer,
    nowPlaying: nowPlayingReducer,
    upComing: upComingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
