import { call, put, takeEvery, select } from "redux-saga/effects";
import { postNotesSuccess } from "../reducers/notesReducer/postNotesState";
import * as selectors from "./selectors";

function* postNotes() {
  const note = yield select(selectors.userNote);
  const url = "https://application-mock-server.loca.lt/notes";
  let data = {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(note),
  };
  const req = yield call(() => fetch(url, data));
  const res = yield req.json();
  yield put(postNotesSuccess(res));
  console.log("res", res);
}

function* watchPostNotesSaga() {
  yield takeEvery("postNotes/postNotes", postNotes);
}

export default watchPostNotesSaga;
