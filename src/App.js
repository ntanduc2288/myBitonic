import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './components/home/Home';
import Backup from './components/backup/Backup';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import Confirmation from './components/confirmation/Confirmation';

const RootStack = StackNavigator(
    {
        Home: {
            screen: Home
        },
        Backup: {
            screen: Backup
        },
        Confirmation: {
            screen: Confirmation
        }
        
    },
    {
        initialRouteName: 'Confirmation',
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