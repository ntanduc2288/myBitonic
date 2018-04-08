export function touchOnSelectedItem(index) {
    return {
        type: "TOUCH_ON_SELECTED_ITEM",
        index
    }
}

export function touchOnSelectionItem(item) {
    return {
        type: "TOUCH_ON_SELECTION_ITEM",
        value: item,
    }
}