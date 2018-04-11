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
        EventBus.on(Constants.NOTIFY_SCROLLING, this.callback);
        //Notify to selection list that we are currently select the first item
        this.props.touchOnSelectedItem(1);

    }

    componentWillUnmount(){
        EventBus.unregisterAllCallbacks();
    }


    callback = (id) => {
        this.scrollTo(id);
    
    };

    scrollTo(id) {

        console.log("DUC: this.heightOfFlatlist: " + heightOfFlatlist)
        //this value 50 is the same with value in styles of Item Selected -- testing
        let offsetValue = id * 50 - heightOfFlatlist;
        console.log("DUC: offsetvalue: " + offsetValue)
        console.log("DUC: //////////////////////////////////////////////////////")
        
        if(this.props.currentSelectedIndex >= this.state.latestVisibleItemIndex){
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
        currentSelectedIndex: state.selectedListReducer.currentIndexSelected
    }
}

export default connect(mapStateToProps, { touchOnSelectedItem, changeSelectionList })(SelectedList);

