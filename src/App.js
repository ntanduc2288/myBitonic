import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './components/home/Home';
import Backup from './components/backup/Backup';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import Confirmation from './components/confirmation/Confirmation';

const AppStack = StackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: "Home"
            }
        },
        Backup: {
            screen: Backup,
            navigationOptions: {
                title: "Backup"
            }
        },

        Confirmation: {
            screen: Confirmation,
            navigationOptions: {
                title: "Confirmation"
            }
        },
    },
    {
        initialRouteName: 'Confirmation',
    }
)

class BitnoicApp extends Component {
    render() {
        return (
            <Provider store={Store}>
                <AppStack />
            </Provider>
        );
    }
}

export default BitnoicApp;