import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

class Home extends Component {
    state = {}

    constructor(props) {
        super(props)
        this.goToBackupScreen = this.goToBackupScreen.bind(this);
    }

    goToBackupScreen() {
        this.props.navigation.navigate('Backup');
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonStyle} onPress={this.goToBackupScreen}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Go to backup screen</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'stretch',
        justifyContent:'center',
        backgroundColor:'white'
    },
    buttonStyle: {
        margin: 5,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'blue',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
})
