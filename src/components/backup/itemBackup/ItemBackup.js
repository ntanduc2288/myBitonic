import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Text,
} from 'react-native';
import styles from './styles';

class ItemBackup extends Component {

    render() {
        const { id, name } = this.props.item;
        return (
            <View style={styles.container}>
                <Text style={styles.item}>{id}. {name}</Text>
            </View>
        );
    }
}

export default ItemBackup;