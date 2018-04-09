import Constants from 'src/constants/Constants';
export function touchOnSelectedItem(index) {
    return {
        type: Constants.TOUCH_ON_SELECTED_ITEM,
        index
    }
}

export function touchOnSelectionItem(item) {
    return {
        type: Constants.TOUCH_ON_SELECTION_ITEM,
        value: item,
    }
}