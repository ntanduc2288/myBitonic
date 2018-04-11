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

    announceView() {
        return (
            <Text style={styles.announceStyle}>{this.props.announcement}</Text>
        )
    }

    doneView() {
        return (
            <TouchableOpacity style={styles.doneStyle} onPress={this.props.doneClicked}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Done</Text>
            </TouchableOpacity>
        )
    }
    
    render() {
        const bottomView = (this.props.isDone) ? this.doneView() : this.announceView();
        return (
            <View style={styles.container}>
                {bottomView}
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
        isDone: state.selectedListReducer.isDone,
        announcement: state.selectedListReducer.announcement,
    }
}

export default connect(mapStateToProps)(Footer);

