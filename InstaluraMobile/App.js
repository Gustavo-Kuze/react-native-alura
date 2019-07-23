import {createStackNavigator, createAppContainer} from 'react-navigation';
import Feed from "./src/screens/Feed";
import Login from "./src/screens/Login";
const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  Feed: {screen: Feed},
});

const App = createAppContainer(MainNavigator);

export default App;