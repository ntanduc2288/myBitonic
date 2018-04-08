import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './components/home/Home';
import Backup from './components/backup/Backup';
import { Provider } from 'react-redux';
import Store from './redux/Store';

const RootStack = StackNavigator(
    {
        Home: {
            screen: Home
        },
        Backup: {
            screen: Backup
        },
        
    },
    {
        initialRouteName: 'Home',
    }
)

class BitnoicApp extends Component {
    render() {

        return (
            <Provider store={Store}>
                <RootStack />
            </Provider>
        );
    }
}

export default BitnoicApp;