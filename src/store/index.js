import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import ticketsReducer from './tickets';

const reducers = combineReducers({
  tickets: ticketsReducer,
});

const store = () => createStore(reducers, composeWithDevTools());

export default store();
