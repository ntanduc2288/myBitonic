import { StyleSheet } from 'react-native';
import Constants from 'src/constants/Constants';

const styles = StyleSheet.create({
    container: {
       
    },
    generalText: {
        color: 'black',
        fontSize: 15
    },
    chileContainer: {
        height: Constants.HEIGHT_OF_ITEM_SELECTED_VIEW,
        flexDirection: 'row',

        alignItems: 'center',

    }

})
export default styles;