import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { touchOnSelectionItem } from '../../../../redux/Actions';
import styles from './styles';

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

