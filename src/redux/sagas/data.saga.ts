import { call, put } from "redux-saga/effects";

import { AppActions } from "redux/store";

import { AppApiInstances } from "utils";

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export function* getDataSaga(action: any) {
  try {
    const result: ResponseGenerator = yield call(
      async () => await AppApiInstances.mainApiInstance.get("/")
    );

    if (result) {
      yield put(AppActions.data.getDataSuccess(result));
    }
  } catch (error) {
    yield put(AppActions.data.getDataSuccess(error));
  }
}
