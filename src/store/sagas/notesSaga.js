import { call, put, takeEvery } from "redux-saga/effects";
import { getNotesSuccess } from "../reducers/notesReducer/noteState";

function* getNotes() {
  const url = "https://application-mock-server.loca.lt/notes";
  const req = call(() => fetch(url));
  const res = yield req.json();
  yield put(getNotesSuccess(res));
  console.log("res", res);
}

function* watchNotesSaga() {
  yield takeEvery("notes/getNotes", getNotes);
}

export default watchNotesSaga;
