import React from 'react';
import { chunkList } from 'src/utils/Utils';
import { View, Text } from 'react-native';
import ItemBackup from '../itemBackup/ItemBackup';

export function separateWordList(originalWordList){
    numberOfColumn = 2;
    tmpList = originalWordList.slice(0);
    chunk = tmpList.length / numberOfColumn;
    separateList = chunkList(tmpList, chunk);
    return separateList;
}

export function renderWordListView(wordList){
    return wordList.map((item, index) => {
        return <View key={index} style={{flex: 1}}>
                {item.map((element, index) => {
                    return <ItemBackup key={element.id} item={element}/>
                })}
            </View>
    })
}

