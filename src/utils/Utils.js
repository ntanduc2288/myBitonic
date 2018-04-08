export const initSelectionList = (originalList) => {
    let newList = [];
    let count = originalList.length;

    originalList.forEach(element => {
        let item1 = initializeSelectionItem(element.id, element.name);
        count++;
        let item2 = initializeSelectionItem(count, getRandomName(element.name));

        let childList = [];
        childList.push(item1);
        childList.push(item2);
        childList.sort(function (a, b) {
            return a.name > b.name;
        });

        Array.prototype.push.apply(newList, childList);

        console.log("DUC: size: " + childList.length + "   " + newList.length)
    });
    return newList;
}

export const initSelectedList = (originalList) => {
    let newList = [];
    originalList.forEach(element => {
        let isSelectedTmp = false;
        if (element.id === 1) {
            isSelectedTmp = true;
        }
        let item = {
            index: element.id,
            id: "",
            name: "",
            isSelected: isSelectedTmp,
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