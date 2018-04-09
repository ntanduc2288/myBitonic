import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    choosenList: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        backgroundColor: 'lightblue'
    },
    title: {
        padding: 10,
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

export default styles;