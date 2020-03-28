import { createSelector } from 'reselect';
import rootReducer from './reducers/rootReducer';

/**
 * Direct selector to the languageToggle state domain
 */
const selectRoot = state => state.language || rootReducer;

/**
 * Select the language locale
 */

const makeSelectLocale = () => createSelector(selectRoot);

export { selectRoot, makeSelectLocale };
