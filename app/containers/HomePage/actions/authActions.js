import { types } from '../../../constants/authConstants';

export const login = () => ({
  type: types.LOGIN.REQUEST,
});

export const loginSuccess = credential => ({
  type: types.LOGIN.SUCCESS,
  credential,
});

export const loginFailure = error => ({
  type: types.LOGIN.FAILURE,
  error,
});

export const loginWithEmail = (email, password) => ({
  type: types.LOGIN_WITH_EMAIL.REQUEST,
  email,
  password,
});

export const loginWithEmailSuccess = credential => ({
  type: types.LOGIN_WITH_EMAIL.SUCCESS,
  credential,
});

export const loginWithEmailFailure = error => ({
  type: types.LOGIN_WITH_EMAIL.FAILURE,
  error,
});

export const registerWithEmail = (email, password) => ({
  type: types.REGISTER_WITH_EMAIL.REQUEST,
  email,
  password,
});

export const registerWithEmailSuccess = credential => ({
  type: types.REGISTER_WITH_EMAIL.SUCCESS,
  credential,
});

export const registerWithEmailFailure = error => ({
  type: types.REGISTER_WITH_EMAIL.FAILURE,
  error,
});

export const passwordChange = password => ({
  type: types.PASSWORD_CHANGE.REQUEST,
  password,
});

export const passwordChangeSuccess = () => ({
  type: types.PASSWORD_CHANGE.SUCCESS,
});

export const passwordChangeFailure = error => ({
  type: types.PASSWORD_CHANGE.FAILURE,
  error,
});

export const passwordForget = email => ({
  type: types.PASSWORD_FORGET.REQUEST,
  email,
});

export const passwordForgetSuccess = () => ({
  type: types.PASSWORD_FORGET.SUCCESS,
});

export const passwordForgetFailure = error => ({
  type: types.PASSWORD_FORGET.FAILURE,
  error,
});

export const logout = () => ({
  type: types.LOGOUT.REQUEST,
});

export const logoutSuccess = () => ({
  type: types.LOGOUT.SUCCESS,
});

export const logoutFailure = error => ({
  type: types.LOGOUT.FAILURE,
  error,
});

export const syncUser = user => ({
  type: types.SYNC_USER,
  user,
});
