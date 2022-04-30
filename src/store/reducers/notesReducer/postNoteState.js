import { createSlice } from "@reduxjs/toolkit";

export const postNoteState = createSlice({
  name: "postNote",
  initialState: {
    userNote: {},
    isIdle: true,
    isLoading: false,
    isError: false,
    isSuccess: false,
  },
  reducers: {
    postNote: (state, action) => {
      state.isLoading = true;
      state.isIdle = false;
      state.userNote = action.payload;
      state.isSuccess = false;
    },
    postNoteSuccess: (state) => {
      state.isLoading = false;
      state.isSuccess = true;
    },
    postNoteError: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    resetApiState: (state) => {
      state.isLoading = true;
      state.isIdle = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
});

export const { postNote, postNoteSuccess, postNoteError, resetApiState } =
  postNoteState.actions;
export default postNoteState.reducer;
