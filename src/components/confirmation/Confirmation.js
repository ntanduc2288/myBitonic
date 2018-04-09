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
import Footer from './footer/Footer';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Home' })
    ]
})

class Confirmation extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Backup wallet</Text>
                <View style={styles.choosenList}>
                    <SelectedList />
                    <SelectionList />
                </View>

                <Footer doneClicked={() => this.backToHomeScreen()} />
            </View>
        );
    }

    backToHomeScreen() {
        this.props.navigation.dispatch(resetAction);
    }
}


export default Confirmation;