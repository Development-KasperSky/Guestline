import { AppActions } from "../store";
import { all, takeLatest } from "redux-saga/effects";

import { getDataSaga } from "./data.saga";

function* rootSaga() {
  yield all([takeLatest(AppActions.data.getData.type, getDataSaga)]);
}

export default rootSaga;
