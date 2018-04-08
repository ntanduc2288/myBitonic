import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

class ItemSelection extends Component {

    clickedOnItem(item){
        this.props.dispatch({
            type: "TOUCH_ON_SELECTION_ITEM",
            value: item,
        })
    }

    render() {
        const item = this.props.item;
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.clickedOnItem(item)}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>{item.name}</Text>
            </TouchableOpacity>
        );
    }
}

export default connect()(ItemSelection);

const styles = StyleSheet.create({
    container: {
        margin: 5,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'blue',
        height: 35, 
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 5
    },
    
})