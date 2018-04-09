import Constants from '../constants/Constants';
import { combineReducers } from 'redux';
import selectedListReducer from './reducers/SelectedListReducer';
import wordListReducer from './reducers/WordListReducer';

const rootReducer = combineReducers({
    wordListReducer,
    selectedListReducer,
});
export default rootReducer;




