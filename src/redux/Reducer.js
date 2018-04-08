
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
        isSelected: false,
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

const defaultState = {
    wordList,
    selectionList,
    selectedList,
    itemSelected
}
const Reducer = (state = defaultState, action) => {
    return state;
}

export default Reducer;


