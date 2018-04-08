
const selectionList = [
    {
        id: 1,
        name: "witch"
    },
    {
        id: 2,
        name: "collapse"
    },
    {
        id: 3,
        name: "practice"
    },
    {
        id: 4,
        name: "feed"
    },
    {
        id: 5,
        name: "shame"
    },
    {
        id: 6,
        name: "open"
    },
    {
        id: 7,
        name: "despair"
    },
    {
        id: 8,
        name: "creek"
    },
    {
        id: 9,
        name: "road"
    },
    {
        id: 10,
        name: "again"
    },
    {
        id: 11,
        name: "ice"
    },
    {
        id: 12,
        name: "least"
    },
]

const selectedList = [
    {
        index: 1,
        id: '',
        name: '',
        isSelected: true,
    },
    {
        index: 2,
        id: '',
        name: '',
        isSelected: false,
    },
    {
        index: 3,
        id: '',
        name: '',
        isSelected: false,
    },
    {
        index: 4,
        id: '',
        name: '',
        isSelected: false,
    },
    {
        index: 5,
        id: '',
        name: '',
        isSelected: false,
    },
    {
        index: 6,
        id: '',
        name: '',
        isSelected: false,
    },
    {
        index: 7,
        id: '',
        name: '',
        isSelected: false,
    },
    {
        index: 8,
        id: '',
        name: '',
        isSelected: false,
    },
    {
        index: 9,
        id: '',
        name: '',
        isSelected: false,
    },
    {
        index: 10,
        id: '',
        name: '',
        isSelected: false,
    },
    {
        index: 11,
        id: '',
        name: '',
        isSelected: false,
    },
    {
        index: 12,
        id: '',
        name: '',
        isSelected: false,
    },



]

const wordList = [
    {
        id: 1,
        name: "witch"
    },
    {
        id: 2,
        name: "collapse"
    },
    {
        id: 3,
        name: "practice"
    },
    {
        id: 4,
        name: "feed"
    },
    {
        id: 5,
        name: "shame"
    },
    {
        id: 6,
        name: "open"
    },
    {
        id: 7,
        name: "despair"
    },
    {
        id: 8,
        name: "creek"
    },
    {
        id: 9,
        name: "road"
    },
    {
        id: 10,
        name: "again"
    },
    {
        id: 11,
        name: "ice"
    },
    {
        id: 12,
        name: "least"
    },
]

const itemSelected = {
    id: '',
    name: '',
}

const pickedSelectionItem = {
    id: '',
    name: '',
}

const defaultState = {
    wordList,
    selectionList,
    selectedList,
    itemSelected,
    pickedSelectionItem
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
function getNewSelectedList1(currentList, index){
    let newList = currentList.map(e => {
        if (e.index === index) {
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
    let newList = currentList.map(e => {
        if (e.isSelected) {
            e = { ...e, name: item.name, id: item.id }
        }
        return e;
    });
    return newList;
}

export default Reducer;


