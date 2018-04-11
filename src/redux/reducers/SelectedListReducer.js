import Constants from 'src/constants/Constants';
import { initSelectedList, initItemSelected, initPickedSelectionItem } from 'src/utils/Utils';


const selectedList = initSelectedList(Constants.wordList);

//////DEFAULT SELECTED LIST REDUCER
const defaultSelectedListState = {
    selectedList,
    initItemSelected,
    initPickedSelectionItem,
    isDone: false,
    currentIndexSelected: 0,
}

//Get new state when touch on selected item
function getNewStateFromSelectedItem(state, id) {
    let newList = state.selectedList.map(e => {
    
        let isSelectedTemp = false;
        if(e.id === id){
            isSelectedTemp = true;
        }

        e = {...e, isSelected: isSelectedTemp};
        return e;
    });

    return {
        ...state,
        selectedList: newList,
        currentIndexSelected: id,
    };
}

//Get new state when touch on selection item
function getNewStateFromSelectionItem(state, item) {
    const newList = getNewSelectedList(state.selectedList, item);

    //Verify currentSelectedList with WordList
    let isEqual = true;
    let currentIndexSelected = 0;
    for (let i = 0; i < Constants.wordList.length; i++) {
        if (newList[i].id !== newList[i].selec) {
            isEqual = false;
        }

        if (newList[i].isSelected) {
            currentIndexSelected = i;
        }
    }

    return {
        ...state,
        selectedList: newList,
        isDone: isEqual,
        currentIndexSelected: currentIndexSelected
    }
}

//This function is used for "TOUCH_ON_SELECTION_ITEM" case
function getNewSelectedList(currentList, item) {
    let isFilledAllItems = true;
    let newList = currentList
        //update name and selectedId for current item selected
        .map(element => {
            if (element.isSelected) {
                element = { ...element, name: item.name, selectedId: item.id }
            }

            if(element.selectedId === ""){
                isFilledAllItems = false;
            }

            return element;
        });

        //Jump to next position
        if(!isFilledAllItems){
            let alreadyJumped = false;
            newList = newList.map(element => {
                needToHighline = false;
                if (element.selectedId === "" && !alreadyJumped){
                    needToHighline = true;
                    alreadyJumped = true;
                }
    
                return element = { ...element, isSelected: needToHighline }
            });
        }

    return newList;
}

function resetSelectedList(state){
    return {
        ...state,
        selectedList: initSelectedList(Constants.wordList),
    }
}

const Reducer = (state = defaultSelectedListState, action) => {
    switch (action.type) {
        case Constants.TOUCH_ON_SELECTED_ITEM:
            return getNewStateFromSelectedItem(state, action.id);
        case Constants.TOUCH_ON_SELECTION_ITEM:
            return getNewStateFromSelectionItem(state, action.value);
        case Constants.RESET_SELECTED_LIST:
            return resetSelectedList(state);
    }
    return state;
}


export default Reducer;






