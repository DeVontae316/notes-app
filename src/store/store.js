import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./reducers/notesReducer/notesState";
import postNotesReducer from "./reducers/notesReducer/postNotesState";
import rootSaga from "./sagas";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    post: postNotesReducer,
  },
  middleware: [saga],
});
saga.run(rootSaga);
