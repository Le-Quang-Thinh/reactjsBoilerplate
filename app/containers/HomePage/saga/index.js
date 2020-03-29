import { call, put, takeEvery, all } from 'redux-saga/effects';
import firebase from '../../../../config/configFb';

import {
  loginWithEmailSuccess,
  loginWithEmailFailure,
  registerWithEmailSuccess,
  registerWithEmailFailure,
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
    yield put(loginWithEmailSuccess(result));
  } catch (error) {
    yield put(loginWithEmailFailure(error));
  }
}

function* registerWithEmailSaga(payload) {
  try {
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    const result = yield call(
      [auth, auth.createUserWithEmailAndPassword],
      payload.email,
      payload.password,
    );
    yield call(
      firestore
        .collection('users')
        .doc(result.user.uid)
        .set({
          name: payload.name,
          createdAt: new Date(),
        }),
    );
    yield put(registerWithEmailSuccess(result));
  } catch (error) {
    yield put(registerWithEmailFailure(error));
  }
}

export default function* loginRootSaga() {
  yield all([
    takeEvery(types.LOGIN_WITH_EMAIL.REQUEST, loginWithEmailSaga),
    takeEvery(types.REGISTER_WITH_EMAIL.REQUEST, registerWithEmailSaga),
  ]);
}
