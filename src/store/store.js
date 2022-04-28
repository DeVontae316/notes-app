import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {},
  middleware: [saga],
});
