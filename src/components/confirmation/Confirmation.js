import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Text,
    TouchableOpacity,
} from 'react-native';
import SelectedList from './selectedList/SelectedList';
import SelectionList from './selectionList/SelectionList';
import Footer from './Footer';

class Confirmation extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Backup wallet</Text>
                <View style={styles.choosenList}>
                    <SelectedList/>
                    <SelectionList/>
                </View>

                <Footer/>
            </View>
        );
    }
}

export default Confirmation;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    choosenList: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        backgroundColor: 'lightblue'
    },
    title: {
        padding:10,
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