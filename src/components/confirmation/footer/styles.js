import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: 'stretch',
        
        height: 80,
        justifyContent:'center'
    },
    announceStyle: {
        fontSize: 20,
        color: 'gray',
    },
    doneStyle: {
        margin: 5,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'blue',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
})

export default styles;