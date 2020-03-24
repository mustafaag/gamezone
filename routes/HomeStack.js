import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import About from '../screens/About';
import Home from '../screens/Home';
import ReviewDetails from  '../screens/ReviewDetails';


screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'GameZone'
        }
    },
    Details: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details'
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            title: 'About'
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

export default createAppContainer(HomeStack)