import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

interface CategoryTypeState {
  type: string;
}

const initialState: CategoryTypeState = {
  type: "Now Playing",
};

export const categorySlice = createSlice({
  name: "categoryType",
  initialState,
  reducers: {
    changeCategory(state, action: PayloadAction<string>) {
      state.type = action.payload;
    },
  },
});

export const { changeCategory } = categorySlice.actions;
export const categorySliceReducer = categorySlice.reducer;
