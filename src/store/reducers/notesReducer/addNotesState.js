import { createSlice } from "@reduxjs/toolkit";

export const postNotesState = createSlice({
  name: "postNotes",
  initialState: {
    notes: [],
    isIdle: true,
    isLoading: false,
    isError: false,
    isSuccess: false,
  },
  reducers: {
    postNotes: (state) => {
      state.isLoading = true;
      state.isIdle = false;
    },
    postNotesSuccess: (state, action) => {
      state.notes = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    },
    postNotesError: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { postNotes, postNotesSuccess, postNotesError } =
  postNotesState.actions;
export default postNotesState.reducer;
