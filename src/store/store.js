import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./reducers/notesReducer/notesState";
import postNoteReducer from "./reducers/notesReducer/postNoteState";
import rootSaga from "./sagas";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    post: postNoteReducer,
  },
  middleware: [saga],
});
saga.run(rootSaga);
