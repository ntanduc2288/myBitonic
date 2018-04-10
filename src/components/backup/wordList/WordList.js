import React, { Component } from 'react';
import Constants from 'src/constants/Constants';
import { ScrollView, View, Text } from 'react-native';
import { separateWordList, renderWordListView } from './WordListController';
import ItemBackup from '../itemBackup/ItemBackup';

class WordList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            datas: []
        };
    }

    componentWillMount(){
        this.initializeWordList();
    }

    initializeWordList(){
        let newList = separateWordList(Constants.wordList);
        console.log("DUC: new list " + newList.length);
        this.setState({
            datas: newList,
        })
    }

    render() {
        const childView = renderWordListView(this.state.datas);
        return (
            <ScrollView>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    {childView}
                </View>
            </ScrollView>
        );
    }
}

export default WordList;