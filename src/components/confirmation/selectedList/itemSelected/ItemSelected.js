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
    
    componentDidUpdate(){
        this.notifyChangeSelectionList();
    }

    //It will be call if current item is selected. The selection list need to be change to approriate data
    notifyChangeSelectionList(){
        if(this.props.item.isSelected){
            this.props.changeSelectionList(this.props.item.id);
        }
    }

    touchOnSelectedItem(id) {
        this.props.touchOnSelectedItem(id);
    }

    getBackground(isSelected) {
        if (isSelected) return { backgroundColor: 'lightgray' };

        return { backgroundColor: 'white' };
    }

    

    render() {
        const { item } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.touchOnSelectedItem(item.id)}>
                <View>
                    <View style={[styles.chileContainer, this.getBackground(item.isSelected)]}>
                        <Text style={styles.generalText}>{item.index + 1}. </Text>

                        <Text style={[styles.generalText, { fontWeight: 'bold' }]}>{item.name}</Text>
                    </View>

                    <View style={{ backgroundColor: 'lightgray', height: 1 }} />
                </View>
            </TouchableOpacity>
        );
    }
}

export default connect(null, { touchOnSelectedItem, changeSelectionList })(ItemSelected);

