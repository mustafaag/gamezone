import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import About from '../screens/About';
import Home from '../screens/Home';
import ReviewDetails from  '../screens/ReviewDetails';


screens = {
    Home: {
        screen: Home
    },
    Details: {
        screen: ReviewDetails
    },
    About: {
        screen: About
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack)