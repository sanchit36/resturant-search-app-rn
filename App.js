import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
      title: "Tomato",
    },
    ResultsShow: {
      screen: ResultsShowScreen,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
      }),
    },
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Tomato",
      cardStyle: {
        backgroundColor: "#FFFFFF",
      },
    },
  }
);

export default createAppContainer(navigator);
