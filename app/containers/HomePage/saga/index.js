import { call, put, takeEvery } from 'redux-saga/effects';
import firebase from '../../../../config/configFb';

import {
  loginWithEmailSuccess,
  loginWithEmailFailure,
} from '../actions/authActions';

import { types } from '../../../constants/authConstants';

function* loginWithEmailSaga(payload) {
  try {
    const auth = firebase.auth();
    const result = yield call(
      [auth, auth.signInWithEmailAndPassword],
      payload.email,
      payload.password,
    );
    console.log(result);
    yield put(loginWithEmailSuccess(result));
  } catch (error) {
    yield put(loginWithEmailFailure(error));
  }
}
export default function* loginRootSaga() {
  yield takeEvery(types.LOGIN_WITH_EMAIL.REQUEST, loginWithEmailSaga);
}
