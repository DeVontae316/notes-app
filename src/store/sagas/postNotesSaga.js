import { call, put, takeEvery } from "redux-saga/effects";
import { postNotesSuccess } from "../reducers/notesReducer/addNotesState";

function* postNotes() {
  console.log("post notes generator function hit");
  const url = "https://application-mock-server.loca.lt/notes";
  const req = yield call(() => fetch(url));
  const res = yield req.json();
  yield put(postNotesSuccess(res));
  console.log("res", res);
}

function* watchPostNotesSaga() {
  yield takeEvery("notes/postNotes", postNotes);
}

export default watchPostNotesSaga;
