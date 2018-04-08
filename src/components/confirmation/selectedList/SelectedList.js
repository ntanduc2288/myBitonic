import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Text,
} from 'react-native';
import { connect } from 'react-redux';
import ItemSelected from './ItemSelected';


class SelectedList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstVisibleItemIndex: 0,
            latestVisibleItemIndex: 0,
        }
    }
    render() {
        const myList = this.props.mySelectedList;

        return (
            <View style={styles.container}>
                <FlatList
                    ref='flatlist'
                    data={myList}
                    renderItem={({ item, index }) => <ItemSelected item={item} index={index} />}
                    keyExtractor={item => item.index.toString()}
                    onViewableItemsChanged={this.onViewableItemsChanged}

                />
            </View>
        );
    }

    onViewableItemsChanged = ({ viewableItems, changed }) => {
        this.setState({
            latestVisibleItemIndex: viewableItems[viewableItems.length - 1].index,
            firstVisibleItemIndex: viewableItems[0].index,
        })
    }

    componentDidUpdate() {
        this.scrollToNextPosition(this.state.firstVisibleItemIndex, this.state.latestVisibleItemIndex, this.props.currentSelectedIndex);
    }

    scrollToNextPosition(startIndex, endIndex, currentIndex){
        if (currentIndex > endIndex) {
            this.refs.flatlist.scrollToIndex({ index: startIndex + 1, animated: true });
        }
    }


}

function mapStateToProps(state) {
    return {
        mySelectedList: state.selectedList,
        currentSelectedIndex: state.currentIndexSelected
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