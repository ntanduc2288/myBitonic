export const initSelectionList = (originalList) => {
    let newList = [];
    let count = originalList.length;

    originalList.forEach(element => {
        let item1 = initializeSelectionItem(element.id, element.name);
        newList.push(item1);

        if(element.name.length > 1){
            count++;
            let item2 = initializeSelectionItem(count, getRandomName(element.name));
            newList.push(item2);
        }
    
    });

    newList.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
    })
    return newList;
}

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


function initializeSelectionItem(id, name) {
    return {
        id,
        name
    }
}

function getRandomName(originalName) {
    let maxLength = originalName.length;
    if(maxLength <= 1){
        return originalName;
    }
    
    let index1 = Math.floor(Math.random() * (maxLength / 2));
    let index2 = Math.floor(maxLength / 2 + Math.random() * (maxLength - maxLength / 2));

    let wordList = originalName.split("");
    let tmp = wordList[index1];
    wordList[index1] = wordList[index2];
    wordList[index2] = tmp;

    let newWord = wordList.join('');
    if (newWord === originalName) {
        return getRandomName(originalName);
    }
    return wordList.join('');

}

export function chunkList(list, chunk){
    newList = [];
    while(list.length > 0){
        newList.push(list.splice(0, chunk));
    }

    return newList;
}