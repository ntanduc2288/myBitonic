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
import EventBus from 'eventing-bus';
import Constants from 'src/constants/Constants';

var heightOfFlatlist = 0;
class SelectedList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstVisibleItemIndex: 0,
            latestVisibleItemIndex: 0,
        }
        
    }

    componentDidMount() {
        //Register for scrolling event trigger
        EventBus.on(Constants.NOTIFY_SCROLLING, this.callback);
        //Notify to selected list that we are currently select the first item with ID = 1
        this.props.touchOnSelectedItem(1);

    }

    componentWillUnmount(){
        EventBus.unregisterAllCallbacks();
    }


    callback = (id) => {
        this.scrollToItemID(id);
    
    };

    scrollToItemID(id) {

        console.log("DUC: this.heightOfFlatlist: " + heightOfFlatlist)
        if(id < this.state.firstVisibleItemIndex || id > this.state.latestVisibleItemIndex){
            let offsetValue = id * Constants.HEIGHT_OF_ITEM_SELECTED_VIEW - heightOfFlatlist;
            this.myFlatList.scrollToOffset({ offset: offsetValue })
        }
       

    }

    handleTextLayout(evt) {
        
        heightOfFlatlist = evt.nativeEvent.layout.height;
    }

    onViewableItemsChanged = ({ viewableItems, changed }) => {
        this.setState({
            latestVisibleItemIndex: viewableItems[viewableItems.length - 1].index,
            firstVisibleItemIndex: viewableItems[0].index,
        })
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
                    onLayout={this.handleTextLayout}
                />
            </View>
        );
    }

}

function mapStateToProps(state) {
    return {
        mySelectedList: state.selectedListReducer.selectedList,
    }
}

export default connect(mapStateToProps, { touchOnSelectedItem, changeSelectionList })(SelectedList);

