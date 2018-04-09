import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import ItemSelection from './itemSelection/ItemSelection';
import { initSelectionList } from '../../../utils/Utils';
import Constants from 'src/constants/Constants';
import styles from './styles';

class SelectionList extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            selectionList: [],
        }
    }

    componentDidMount(){
        this.generateSelectionList();
    }

    generateSelectionList(){
        const selectionList = initSelectionList(Constants.wordList);
        this.setState({
            selectionList
        })
    }
    
    render() {
        const selectionList = this.state.selectionList;
        return (
            <View style={styles.container}>
                <FlatList
                        data={selectionList}
                    
                        renderItem={({ item }) => <ItemSelection item={item} />}
                        keyExtractor={item => item.id.toString()}
                        
                    />
            </View>
        );
    }

    
}

function mapStateToProps(state){
    return {
        mySelectionList: state.selectedListReducer.selectionList,
    }
}
export default connect(mapStateToProps)(SelectionList);

