import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Text,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Constants from 'src/constants/Constants';
import styles from './styles';
import WordList from './wordList/WordList';

class Backup extends Component {

    gotoConfirmation(){
        this.props.navigation.navigate('Confirmation');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Backup wallet</Text>
                <Text style={{marginTop: 10, color:'gray'}}>{Constants.backupDescription}</Text>
                <View style={styles.listContainer}>
                    <WordList/>   
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

