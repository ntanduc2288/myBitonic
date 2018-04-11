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
import { touchOnSelectedItem, changeSelectionList } from '../../../redux/Actions';

class SelectedList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstVisibleItemIndex: 0,
            latestVisibleItemIndex: 0,
        }
    
    }

    componentDidMount(){

        //Notify to selection list that we are currently select the first item
        this.props.touchOnSelectedItem(1);
        
    }


    onViewableItemsChanged = ({ viewableItems, changed }) => {
        this.setState({
            latestVisibleItemIndex: viewableItems[viewableItems.length - 1].index,
            firstVisibleItemIndex: viewableItems[0].index,
        })
    }

    componentDidUpdate() {
        // this.scrollToNextPosition(this.state.firstVisibleItemIndex, this.state.latestVisibleItemIndex, this.props.currentSelectedIndex);
    }

    scrollToNextPosition(startIndex, endIndex, currentIndex){
        if (currentIndex > endIndex) {
            this.myFlatList.scrollToIndex({ index: startIndex + 1, animated: true });
        }
    }


    render() {
        const myList = this.props.mySelectedList;
        return (
            <View style={styles.container}>
                <FlatList
                    ref={(ref) => { this.myFlatList = ref; }}
                    data={myList}
                    renderItem={({ item, index }) => <ItemSelected item={item} index={index} />}
                    keyExtractor={item => item.index.toString()}
                    onViewableItemsChanged={this.onViewableItemsChanged}

                />
            </View>
        );
    }

}

function mapStateToProps(state) {
    return {
        mySelectedList: state.selectedListReducer.selectedList,
        currentSelectedIndex: state.selectedListReducer.currentIndexSelected
    }
}

export default connect(mapStateToProps, {touchOnSelectedItem, changeSelectionList})(SelectedList);

