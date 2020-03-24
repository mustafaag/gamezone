import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/About';



screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'About GameZone'
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