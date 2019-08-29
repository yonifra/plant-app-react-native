import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {Platform, Image} from 'react-native';


import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ExploreScreen from '../screens/ExploreScreen';
import BrowseScreen from '../screens/BrowseScreen';
import ProductsScreen from '../screens/ProductsScreen';
import SettingsScreen from '../screens/SettingsScreen';

import {theme} from '../constants';


const screens = createStackNavigator(
    {
        welcome: WelcomeScreen,
        login: LoginScreen,
        signup: SignupScreen,
        explore: ExploreScreen,
        browse: BrowseScreen,
        products: ProductsScreen,
        settings: SettingsScreen,
    },
    {
        
        defaultNavigationOptions: {
            headerStyle: {
                height: theme.sizes.base*4,
                backgroundColor: theme.colors.white,
                borderBottomColor: "transparent",
                elevation: 0 //for android devices. Disabling the elevation of header
            },
            headerBackImage: <Image source={require('../../assets/icons/back.png')}/>,
            headerBackTitle: null,
            headerLeftContainerStyle: {
                alignItems: 'center',
                marginLeft: Platform.OS === 'ios' ? theme.sizes.base : 0,
                padding: theme.sizes.base,
            },
            headerRightContainerStyle: {
                alignItems: 'center',
                marginLeft: Platform.OS === 'ios' ? theme.sizes.base : 0,
                padding: theme.sizes.base,
            },
        }
    }
);

export default createAppContainer(screens);