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
import { changeSelectionList } from '../../../redux/Actions';

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
        const selectionList = this.props.mySelectionList;
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
        // mySelectionList: state.selectedListReducer.selectionList,
        mySelectionList: state.selectionListReducer.childList,
        
    }
}
export default connect(mapStateToProps, {changeSelectionList})(SelectionList);

