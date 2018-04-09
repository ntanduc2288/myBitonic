import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Text,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import ItemBackup from './itemBackup/ItemBackup';
import Constants from '../../constants/Constants';
import styles from './styles';
class Backup extends Component {

    constructor(props) {
        super(props);
    }

    gotoConfirmation(){
        this.props.navigation.navigate('Confirmation');
    }

    render() {
        const wordList = Constants.wordList;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Backup wallet</Text>
                <Text style={{marginTop: 10, color:'gray'}}>{Constants.backupDescription}</Text>
                <View style={styles.listContainer}>
                    <FlatList
                        data={wordList}
                        renderItem={({ item }) => <ItemBackup item={item} />}
                        keyExtractor={item => item.id.toString()}
                        numColumns='2'
                    />
                </View>

                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.button} onPress={() => this.gotoConfirmation()}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>I've written it down</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

export default Backup;

