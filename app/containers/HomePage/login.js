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
import FormLogin from '../../components/formLogin';
import { loginWithEmail } from './actions/authActions';
import saga from './saga';
import reducer from './reducers/authResucers';

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state,
    // auth: state.firebase.auth,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loginWithEmail,
    },
    dispatch,
  );
const withSaga = injectSaga({ key: 'FormLogin', saga, mode: DAEMON });
const withReducer = injectReducer({ key: 'FormLogin', reducer });
// const withReducer = injectReducer({ key: 'homePage', reducer})
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(
  withSaga,
  withReducer,
  withConnect,
)(FormLogin);
