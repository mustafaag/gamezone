import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/About';
import React from 'react';
import Header from '../shared/Header';

screens = {
    About: {
        screen: About,
        navigationOptions:({navigation})=> {
            return{
                headerTitle: () => <Header navigation={navigation} title="About GameZone" />
            }
          
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: '#eee',
            height: 70,
        },
        headerTintColor: '#444'
    }
});

export default AboutStack;