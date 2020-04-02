/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import injectReducer from 'utils/injectReducer';
import FromSignUp from '../../components/drawerLeftsiteSignup';
import {
  loginWithEmail,
  registerWithEmail,
  logout,
} from './actions/authActions';
import saga from './saga';
import reducer from './reducers/authResucers';

const mapStateToProps = state => ({
  auth: state,
  // auth: state.firebase.auth,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loginWithEmail,
      registerWithEmail,
      logout,
    },
    dispatch,
  );
const withSaga = injectSaga({ key: 'LoginSaga', saga, mode: DAEMON });
const withReducer = injectReducer({ key: 'LoginReducer', reducer });
// const withReducer = injectReducer({ key: 'homePage', reducer})
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(
  withSaga,
  withReducer,
  withConnect,
)(FromSignUp);
