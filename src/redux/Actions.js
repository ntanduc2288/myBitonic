import Constants from 'src/constants/Constants';
export function touchOnSelectedItem(id) {
    return {
        type: Constants.TOUCH_ON_SELECTED_ITEM,
        id
    }
}

export function touchOnSelectionItem(item) {
    return {
        type: Constants.TOUCH_ON_SELECTION_ITEM,
        value: item,
    }
}

export function resetSelectedList(){
    return {
        type: Constants.RESET_SELECTED_LIST,
    }
}

export function changeSelectionList(id){
    return {
        type: Constants.CHANGE_SELECTION_LIST,
        id
    }
}