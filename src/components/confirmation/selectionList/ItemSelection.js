import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { touchOnSelectionItem } from '../../../redux/Actions';

class ItemSelection extends Component {

    render() {
        const item = this.props.item;
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.touchOnSelectionItem(item)}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>{item.name}</Text>
            </TouchableOpacity>
        );
    }
}

export default connect(null, {touchOnSelectionItem})(ItemSelection);

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