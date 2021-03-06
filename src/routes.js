import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './pages/Home'
import Details from './pages/Details'
import Favorites from './pages/Favorites'
import Colors from './statics/colors'

const RootStack = createStackNavigator({
  Home,
  Details,
  Favorites,
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.PRIMARY,
    },
    headerTintColor: Colors.WHITE,
  },
})

const AppContainer = createAppContainer(RootStack)

export default AppContainer
