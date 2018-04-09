import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import ItemSelection from './ItemSelection';
import ItemBackup from '../../backup/ItemBackup';
class SelectionList extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                        data={this.props.mySelectionList}
                        
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
    },
    choosenList: {
        flex: 1,
        marginTop: 10,
        marginLeft: 10,
        backgroundColor: 'lightblue'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30
    },
    bottom: {
        alignItems: 'stretch',
        backgroundColor: 'green',
        height: 80
    },
    button: {
        backgroundColor: 'blue',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    }
})