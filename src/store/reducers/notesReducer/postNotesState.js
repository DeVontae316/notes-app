import { createSlice } from "@reduxjs/toolkit";

export const postNotesState = createSlice({
  name: "postNotes",
  initialState: {
    userNotes: {},
    isIdle: true,
    isLoading: false,
    isError: false,
    isSuccess: false,
  },
  reducers: {
    postNotes: (state, action) => {
      state.isLoading = true;
      state.isIdle = false;
      state.userNote = action.payload;
    },
    postNotesSuccess: (state, action) => {
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
