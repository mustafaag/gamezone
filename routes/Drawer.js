import { createDrawerNavigator } from "react-navigation-drawer";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";
import { createAppContainer } from "react-navigation";


const rootDrawerNavigator = createDrawerNavigator({
    Home:{
        screen: HomeStack
    },
    About: {
        screen: AboutStack
    }
});


export default createAppContainer(rootDrawerNavigator);