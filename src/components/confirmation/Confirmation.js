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

class Confirmation extends Component {
    static navigationOptions = {
        title: 'Confirmation',
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Backup wallet</Text>
                <View style={styles.choosenList}>
                    <SelectedList/>
                    <SelectionList/>
                </View>

                <View style={styles.bottom}>

                </View>
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