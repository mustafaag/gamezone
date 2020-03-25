import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Home from '../screens/Home';
import ReviewDetails from  '../screens/ReviewDetails';
import Header from '../shared/Header';


screens = {
    Home: {
        screen: Home,
        navigationOptions:({navigation}) => {
            return{
                headerTitle: () => <Header navigation={navigation} title="GameZone" />
            }
        }
    },
    Details: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details'
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: '#eee',
            height: 70,
        },
        headerTintColor: '#444'
    }
});

export default HomeStack;