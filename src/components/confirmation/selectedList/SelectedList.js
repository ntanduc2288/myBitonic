import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Text,
} from 'react-native';
import { connect } from 'react-redux';
import ItemSelected from './itemSelected/ItemSelected';
import styles from './styles';

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
        mySelectedList: state.selectedListReducer.selectedList,
        currentSelectedIndex: state.selectedListReducer.currentIndexSelected
    }
}

export default connect(mapStateToProps)(SelectedList);

