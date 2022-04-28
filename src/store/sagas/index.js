import { all, fork } from "redux-saga/effects";
import watchNotesSaga from "./notesSaga";
import watchPostNotesSaga from "./postNoteSaga";

export default function* rootSaga() {
  yield all([fork(watchNotesSaga), fork(watchPostNotesSaga)]);
}
