import {combineReducers} from 'redux';

import entities from './entities_reducer';
import session from './entities_reducer';
import errors from './entities_reducer';

const rootReducer = combineReducers({
  entities,
  session,
  errors

})


export default rootReducer;
