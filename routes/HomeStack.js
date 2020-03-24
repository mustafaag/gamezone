import { createStackNavigator } from 'react-navigation-stack';
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