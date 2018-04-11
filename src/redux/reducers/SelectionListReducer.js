import Constants from 'src/constants/Constants';
import RandomWords from 'random-words';

function initParentItem(id, mainName, datas){
    return {
        id,
        mainName,
        datas,
    }
}


//Create random list based on WordList
function initDefaultList() {
    wordList = Constants.wordList.slice(0);
    newList = [];
    wordList.forEach(element => {
        item = initParentItem(element.id, element.name, []);
        newList.push(item);
    });

    newList.forEach(element => {

        words = RandomWords(11);
        words.filter(word => element.mainName != word);

        let nextIndex = wordList.length;
        words = words.map(function(word, i) {
            nextIndex++;
            return {
                id: nextIndex,
                name: word,
            }
        });

        test = words;

        words.push({
            id: element.id,
            name: element.mainName,
        })

        words.sort((a, b) => {
            return a.name > b.name ? 1 : -1;
        })

        element.datas = words;
        

    });

    // alert(JSON.stringify(newList))

    return newList;

}

const defaultState = {
    parentList: initDefaultList(),
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