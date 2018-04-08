import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Text,
} from 'react-native';

class ItemBackup extends Component {

    render() {
        const { id, name } = this.props.item;
        return (
            <View style={style.container}>
                <Text style={style.item}>{id}. {name}</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
        marginTop: 10,
        marginBottom: 10
    },
    item: {
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default ItemBackup;