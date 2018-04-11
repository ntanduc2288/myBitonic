import RandomWords from 'random-words';

//This section used for SelectionList view
export const initSelectionList = (originalList) => {
    newList = [];

    //Create category base on default word list
    defautlWordList = originalList.slice(0);
    defautlWordList.forEach(element => {
        item = initParentSelectionItem(element.id, element.name, []);
        newList.push(item);
    });

    //Create random words
    newList.forEach(element => {

        let words = RandomWords(11);
        words.filter(word => element.mainName != word);

        let nextIndex = defautlWordList.length;
        words = words.map(function (word, i) {
            nextIndex++;
            return {
                id: nextIndex,
                name: word,
            }
        });

        //Push original item to current ramdom words
        words.push({
            id: element.id,
            name: element.mainName,
        })

        words.sort((a, b) => {
            return a.name > b.name ? 1 : -1;
        })

        element.datas = words;


    });


    return newList;
}

function initParentSelectionItem(id, mainName, datas){
    return {
        id,
        mainName,
        datas,
    }
}

////////////////////////////////////////////////////////////



//This section is used for SelectedList view
export const initSelectedList = (originalList) => {
    let newList = [];
    originalList.forEach(element => {
        let item = {};
        let isSelected = false;

        item = {
            index: element.id - 1,
            id: element.id, //This id is word list ID, it used to compare with seleted ID
            selectedId: "", //This id is an id which user touch on selection
            name: "",
            isSelected: false,
        }

        newList.push(item);
    });

    return newList;
}


export const initItemSelected = () => {
    return {
        id: '',
        name: '',
    }
}

export const initPickedSelectionItem = () => {
    return {
        id: '',
        name: '',
    }
}
////////////////////////////////////////////////////////////////////////


function initializeSelectionItem(id, name) {
    return {
        id,
        name
    }
}


export function chunkList(list, chunk) {
    newList = [];
    while (list.length > 0) {
        newList.push(list.splice(0, chunk));
    }

    return newList;
}