import Constants from '../constants/Constants';
import { initSelectionList, initSelectedList, initItemSelected, initPickedSelectionItem } from '../utils/Utils';


const selectedList = initSelectedList(Constants.wordList);
const selectionList = initSelectionList(Constants.wordList);

const defaultState = {
    wordList: Constants.wordList,
    selectionList,
    selectedList,
    initItemSelected,
    initPickedSelectionItem,
    isDone: false,
    currentIndexSelected: 0,
}

const Reducer = (state = defaultState, action) => {
    switch (action.type) {
        case Constants.TOUCH_ON_SELECTED_ITEM:
            return {
                ...state,
                selectedList: getNewSelectedList1(state.selectedList, action.index),
                currentIndexSelected: action.index,
            };
        case Constants.TOUCH_ON_SELECTION_ITEM:
            return handleTouchOnSelectionItem(state, action.value);
    }
    return state;
}

//This function is used for "TOUCH_ON_SELECTED_ITEM" case
function getNewSelectedList1(currentList, clickedIndex) {
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
function getNewSelectedList2(currentList, item) {
    let alreadyJumped = false;
    let newList = currentList
        //update value for current item selected
        .map(element => {
            if (element.isSelected) {
                element = { ...element, name: item.name, id: item.id, isSelected: false }
            }
            return element;
        })
        //Jump to next position which has not value yet
        .map(element => {
            if (element.id === "" && !alreadyJumped) {
                alreadyJumped = true;
                element = { ...element, isSelected: true }
            }
            return element;
        });
    return newList;
}

function handleTouchOnSelectionItem(state, item) {
    const newList = getNewSelectedList2(state.selectedList, item);
    let isEqual = true;
    let currentIndexSelected = 0;
    for (let i = 0; i < Constants.wordList.length; i++) {
        if (newList[i].id !== Constants.wordList[i].id) {
            isEqual = false;
        }

        if(newList[i].isSelected){
            currentIndexSelected = i;
        }
    }
    return {
        ...state,
        selectedList: newList,
        isDone: isEqual,
        currentIndexSelected
    }
}

export default Reducer;


