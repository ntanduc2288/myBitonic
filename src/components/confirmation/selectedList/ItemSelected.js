import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

class ItemSelected extends Component {
    state = {}
    render() {
        const { item } = this.props;
        const index = this.props.index;
        return (
            <TouchableOpacity style={styles.container}>
                <View>
                    <View style={styles.chileContainer}>
                        <Text style={styles.generalText}>{index}. </Text>

                        <Text style={[styles.generalText, { fontWeight: 'bold' }]}>ABC</Text>
                    </View>

                    <View style={{backgroundColor:'lightgray', height: 1}}/>
                </View>
            </TouchableOpacity>
        );
    }
}

export default ItemSelected;

const styles = StyleSheet.create({
    container: {
       
    },
    generalText: {
        color: 'black',
        fontSize: 15
    },
    chileContainer: {
        height: 35,
        flexDirection: 'row',

        alignItems: 'center',

    }

})