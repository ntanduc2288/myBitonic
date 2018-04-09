import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { touchOnSelectedItem } from '../../../../redux/Actions';

class ItemSelected extends Component {
    state = {}

    clickedOnItem(index){
        if(this.props.item.id !== ""){
            this.props.touchOnSelectedItem(index);
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

export default connect(null, {touchOnSelectedItem})(ItemSelected);

const styles = StyleSheet.create({
    container: {
       
    },
    generalText: {
        color: 'black',
        fontSize: 15
    },
    chileContainer: {
        height: 120,
        flexDirection: 'row',

        alignItems: 'center',

    }

})