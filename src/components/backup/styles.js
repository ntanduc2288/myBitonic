import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
    listContainer: {
        flex: 1,
        margin: 20,
        marginLeft: 40,
        marginRight: 40,
       
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30
    },
    bottom: {
        alignItems:'stretch'
    },
    button:{
        backgroundColor: 'blue',
        height: 50, 
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 5
    }
})

export default styles;