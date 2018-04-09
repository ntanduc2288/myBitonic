import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Text,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import ItemBackup from './ItemBackup';
import Constants from '../../constants/Constants';

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
                <Text style={{marginTop: 10, color:'gray'}}>{description}</Text>
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

const description = "Please carefully write down this words. We will check correctness of your backup on the next screen.";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
    listContainer: {
        flex: 1,
        margin: 20,
        marginLeft: 40,
        marginRight: 40,
       
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30
    },
    bottom: {
        alignItems:'stretch'
    },
    button:{
        backgroundColor: 'blue',
        height: 50, 
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 5
    }
})