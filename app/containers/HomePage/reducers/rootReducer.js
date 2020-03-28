import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './authResucers';

const rootReducer = {
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
};

export default rootReducer;
