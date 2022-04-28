import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./reducers/notesReducer/noteState";
import watchNotesSaga from "./sagas/notesSaga";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
  middleware: [saga],
});
saga.run(watchNotesSaga);
