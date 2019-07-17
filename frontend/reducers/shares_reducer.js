import {RECEIVE_ALL_SHARES, RECEIVE_SHARES} from '../actions/share_actions';
import {merge} from 'lodash';

const SharesReducer = (state = [], action) => {


    switch (action.type) {
      case RECEIVE_ALL_SHARES:
        return action.shares;
      default:
        return state;
    }
}

export default SharesReducer;
