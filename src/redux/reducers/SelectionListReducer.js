import Constants from 'src/constants/Constants';
import { initSelectionList } from 'src/utils/Utils'

const defautlSelectionList = initSelectionList(Constants.wordList);
const defaultState = {
    parentList: defautlSelectionList,
    childList: [],
}

function getNewStateById(state, selectedId) {
    let newChildList = [];
    for (let i = 0; i < state.parentList.length; i++) {
        if (state.parentList[i].id === selectedId) {
            newChildList = state.parentList[i].datas;
            break;
        }
    }
    
    return {
        ...state,
        childList: newChildList,
    }
}

function Reducer(state = defaultState, action) {
    switch (action.type) {
        case Constants.CHANGE_SELECTION_LIST:
            return getNewStateById(state, action.id);
        default:
            return state;
    }

    return state;
}



export default Reducer;