import Constants from 'src/constants/Constants';
import { combineReducers } from 'redux';
import selectedListReducer from './SelectedListReducer';

const rootReducer = combineReducers({
    selectedListReducer,
});
export default rootReducer;




