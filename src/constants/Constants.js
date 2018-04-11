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

const backupDescription = "Please carefully write down this words. We will check correctness of your backup on the next screen.";

export default {
    wordList: wordList,
    TOUCH_ON_SELECTED_ITEM: 'TOUCH_ON_SELECTED_ITEM',
    TOUCH_ON_SELECTION_ITEM: 'TOUCH_ON_SELECTION_ITEM',
    backupDescription,
    RESET_SELECTED_LIST: 'RESET_SELECTED_LIST',
    CHANGE_SELECTION_LIST: 'CHANGE_SELECTION_LIST', 
}
