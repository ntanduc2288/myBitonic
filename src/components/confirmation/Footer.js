import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Text,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
class Footer extends Component {

    render() {
        const bottomView = (!this.props.isDone) ? this.doneView() : this.announceView();
        return (
            <View style={styles.container}>
                {bottomView}
            </View>
        );
    }

    clickedDone(){

    }

    announceView() {
        return (
            <Text style={styles.announceStyle}>Please fill each position with correct word</Text>
        )
    }

    doneView() {
        return (
            <TouchableOpacity style={styles.doneStyle} onPress={() => this.clickedDone()}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Done</Text>
            </TouchableOpacity>
        )
    }
}

function mapStateToProps(state){
    return {
        isDone: state.isDone,
    }
}

export default connect(mapStateToProps)(Footer);

const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: 'stretch',
        
        height: 80,
        justifyContent:'center'
    },
    announceStyle: {
        fontSize: 20,
        color: 'gray',
    },
    doneStyle: {
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