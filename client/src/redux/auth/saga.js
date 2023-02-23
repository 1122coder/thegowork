import { takeLatest, call, put } from "redux-saga/effects";
import {
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR,
  VERIFICATION_REQUEST, VERIFICATION_SUCCESS, VERIFICATION_ERROR, LOGIN_REQUEST,
  LOGIN_ERROR, LOGIN_SUCCESS,OTP_ERROR, OTP_SUCCESS, OTP_REQUEST, SEND_EMAIL_REQUEST,
  SEND_EMAIL_SUCCESS, SEND_EMAIL_ERROR
}
  from "./constants";
import { registerRequest, verifyRequest, loginRequest , otpRequest, send_email} from '../../api/api'
function* authSaga() {
  yield takeLatest(OTP_REQUEST, resendCode)
  yield takeLatest(REGISTER_REQUEST, register);
  yield takeLatest(VERIFICATION_REQUEST, verify);
  yield takeLatest(LOGIN_REQUEST, login);
  yield takeLatest(SEND_EMAIL_REQUEST, sendEmail);
}

function* register(payload) {
  try {
    const resp = yield call(() => registerRequest(payload.query))
    yield put({ type: REGISTER_SUCCESS, resp })
  }
  catch (err) {
    console.log(err)
    yield put({ type: REGISTER_ERROR, err })
  }
}


function* verify(payload) {
  try {
    console.log('in')
    const resp = yield call(() => verifyRequest(payload.query))
    yield put({ type: VERIFICATION_SUCCESS ,resp})

  }
  catch (err) {
    console.log(err)
    yield put({ type: VERIFICATION_ERROR, err })
  }
}


function* login(payload) {
  try {
    const resp = yield call(() => loginRequest(payload.query))
    console.log(resp)
    yield put({ type: LOGIN_SUCCESS ,resp})

  }
  catch (err) {
    console.log(err)
    yield put({ type: LOGIN_ERROR, err })
  }
}

function* resendCode() {
  console.log('saga middle')
  try {
    const resp = yield call(() => otpRequest())
    console.log(resp)
    yield put({ type: OTP_SUCCESS ,resp})

  }
  catch (err) {
    console.log(err)
    yield put({ type: OTP_ERROR, err })
  }
}

function* sendEmail(payload){
  try {
    const resp = yield call(()=> send_email(payload.query))
    yield put({type:SEND_EMAIL_SUCCESS,resp})
  }
  catch(err){
    yield put({type:SEND_EMAIL_ERROR,err})
  }
}


export default authSaga;
