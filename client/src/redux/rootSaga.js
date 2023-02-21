import { all } from "redux-saga/effects";
import authSaga from "./auth/saga";
import pricingSaga from "./pricing/saga";
import adminAuthSaga from "./AdminAuth/saga";
export default function* rootSaga() {
  yield all([
    authSaga(),
    pricingSaga(),
    adminAuthSaga(),
  ]);
}
