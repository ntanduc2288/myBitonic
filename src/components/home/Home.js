import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import styles from './styles'

class Home extends Component {
    goToBackupScreen() {
        this.props.navigation.navigate('Backup');
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => this.goToBackupScreen()}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Go to backup screen</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Home;
