import { wordList } from '../constants/Constants';
import { initSelectionList, initSelectedList, initItemSelected, initPickedSelectionItem} from '../utils/Utils';


const selectedList = initSelectedList(wordList);
const selectionList = initSelectionList(wordList);

const defaultState = {
    wordList,
    selectionList,
    selectedList,
    initItemSelected,
    initPickedSelectionItem
}

const Reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "TOUCH_ON_SELECTED_ITEM":
            return {
                ...state,
                selectedList: getNewSelectedList1(state.selectedList, action.index),
            };
        case "TOUCH_ON_SELECTION_ITEM":
            return {
                ...state,
                selectedList: getNewSelectedList2(state.selectedList, action.value)
            };
    }
    return state;
}

//This function is used for "TOUCH_ON_SELECTED_ITEM" case
function getNewSelectedList1(currentList, clickedIndex){
    let newList = currentList.map(e => {
        if (e.index === clickedIndex && e.id !== "") {
            e = { ...e, isSelected: !e.isSelected }
        } else {
            e = { ...e, isSelected: false };
        }
        return e;
    });

    return newList;
}

//This function is used for "TOUCH_ON_SELECTION_ITEM" case
function getNewSelectedList2(currentList, item){
    let alreadyJumped = false;
    let newList = currentList.map(e => {
        if (e.isSelected) {
            e = { ...e, name: item.name, id: item.id, isSelected: false }
        }
        return e;
    }).map(e => {
        if(e.id === "" && !alreadyJumped){
            alreadyJumped = true;
            e = {...e, isSelected: true}
        }
        return e;
    });
    return newList;
}

export default Reducer;


