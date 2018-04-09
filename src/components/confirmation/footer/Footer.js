import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Text,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

class Footer extends Component {

    render() {
        const bottomView = (this.props.isDone) ? this.doneView() : this.announceView();
        return (
            <View style={styles.container}>
                {bottomView}
            </View>
        );
    }

    announceView() {
        return (
            <Text style={styles.announceStyle}>Please fill each position with correct word</Text>
        )
    }

    doneView() {
        return (
            <TouchableOpacity style={styles.doneStyle} onPress={this.props.doneClicked}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Done</Text>
            </TouchableOpacity>
        )
    }
}

function mapStateToProps(state){
    return {
        isDone: state.selectedListReducer.isDone,
    }
}

export default connect(mapStateToProps)(Footer);

