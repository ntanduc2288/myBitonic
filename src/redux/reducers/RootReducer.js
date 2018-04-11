import Constants from 'src/constants/Constants';
import { combineReducers } from 'redux';
import selectedListReducer from './SelectedListReducer';
import selectionListReducer from './SelectionListReducer';
const rootReducer = combineReducers({
    selectedListReducer,
    selectionListReducer,
});
export default rootReducer;




