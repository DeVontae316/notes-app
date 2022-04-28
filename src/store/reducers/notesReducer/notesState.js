import { createSlice } from "@reduxjs/toolkit";

export const notesState = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    isIdle: true,
    isLoading: false,
    isError: false,
    isSuccess: false,
  },
  reducers: {
    getNotes: (state) => {
      state.isLoading = true;
      state.isIdle = false;
    },
    getNotesSuccess: (state, action) => {
      state.notes = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    },
    getNotesError: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { getNotes, getNotesSuccess, getNotesError } = notesState.actions;
export default notesState.reducer;
