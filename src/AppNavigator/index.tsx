import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default AppNavigator;
