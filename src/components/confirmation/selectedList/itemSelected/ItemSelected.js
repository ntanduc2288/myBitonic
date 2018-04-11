import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { touchOnSelectedItem, changeSelectionList } from '../../../../redux/Actions';
import styles from './styles';
class ItemSelected extends Component {
    state = {}

    clickedOnItem(index){
        if(this.props.item.id !== ""){
            this.props.touchOnSelectedItem(index);
            this.props.changeSelectionList(this.props.item.id);
        }
        
    }

    getBackground(isSelected){
        if(isSelected) return {backgroundColor: 'lightgray'};

        return {backgroundColor: 'white'};
    }

    render() {
        const { item } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.clickedOnItem(item.index)}>
                <View>
                    <View style={[styles.chileContainer, this.getBackground(item.isSelected)]}>
                        <Text style={styles.generalText}>{item.index + 1}. </Text>

                        <Text style={[styles.generalText, { fontWeight: 'bold' }]}>{item.name}</Text>
                    </View>

                    <View style={{backgroundColor:'lightgray', height: 1}}/>
                </View>
            </TouchableOpacity>
        );
    }
}

export default connect(null, {touchOnSelectedItem, changeSelectionList})(ItemSelected);

