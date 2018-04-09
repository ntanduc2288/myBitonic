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
        return a.name > b.name;
    })
    return newList;
}

export const initSelectedList = (originalList) => {
    let newList = [];
    originalList.forEach(element => {
        let item = {};
        if (element.id === 1) {
            item = {
                index: element.id - 1,
                id: element.id,
                name: element.name,
                isSelected: false,
            }
        }else {
            let isSelectedTmp = false;
            if(element.id === 2) isSelectedTmp = true;
            item = {
                index: element.id - 1,
                id: "",
                name: "",
                isSelected: isSelectedTmp,
            }
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