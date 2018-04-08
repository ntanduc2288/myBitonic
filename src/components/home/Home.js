import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
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
            <View>
                <Button onPress={this.goToBackupScreen} title="Go to backup screen" />
            </View>
        );
    }
}




export default Home;

