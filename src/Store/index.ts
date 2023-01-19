import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { categorySliceReducer } from "./categoryTypeSlice";

export const store = configureStore({
  reducer: {
    category: categorySliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
