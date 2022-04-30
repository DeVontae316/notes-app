import { call, put, takeEvery, select } from "redux-saga/effects";
import { postNoteSuccess } from "../reducers/notesReducer/postNoteState";
import * as selectors from "./selectors";

function* postNote() {
  const note = yield select(selectors.userNote);

  const url = "https://mock-server-play.loca.lt/notes";
  let data = {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(note),
  };
  const req = yield call(() => fetch(url, data));
  const res = yield req.json();
  yield put(postNoteSuccess());

  console.log("res", res);
}

function* watchPostNotesSaga() {
  yield takeEvery("postNote/postNote", postNote);
}

export default watchPostNotesSaga;
