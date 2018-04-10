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
import  { resetSelectedList } from '../../redux/Actions';
import { connect } from 'react-redux';

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Home' })
    ]
})

class Confirmation extends Component {

    backToHomeScreen() {
        this.props.navigation.dispatch(resetAction);
    }

    resetSelectedList(){
        this.props.resetSelectedList();
    }

    onDoneClicked(){
        this.backToHomeScreen();
        this.resetSelectedList();
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Backup wallet</Text>
                <View style={styles.choosenList}>
                    <SelectedList />
                    <SelectionList />
                </View>

                <Footer doneClicked={() => this.onDoneClicked()} />
            </View>
        );
    }

    
}


export default connect(null, {resetSelectedList})(Confirmation);