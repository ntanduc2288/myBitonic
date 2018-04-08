import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import ItemSelected from './ItemSelected';

class SelectedList extends Component {
    state = {}
    render() {
        const myList = this.props.mySelectedList;
        myList.forEach(e => {
            console.log(e.index)
        })
        return (
            <View style={styles.container}>
                <FlatList
                    data={myList}
                    renderItem={({ item, index }) => <ItemSelected item={item} index={index} />}
                    keyExtractor={item => item.index.toString()}

                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    console.log("DUC: mapStateToProps() " )
    return {
        mySelectedList: state.selectedList,
    }
}

export default connect(mapStateToProps)(SelectedList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    choosenList: {
        flex: 1,
        marginTop: 10,
        marginLeft: 10,
        backgroundColor: 'lightblue'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30
    },
    bottom: {
        alignItems: 'stretch',
        backgroundColor: 'green',
        height: 80
    },
    button: {
        backgroundColor: 'blue',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    }
})