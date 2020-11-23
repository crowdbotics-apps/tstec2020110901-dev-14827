import { createStackNavigator } from "react-navigation-stack";

import Test from "./screens/";

export default TestBlueprintNavigator = createStackNavigator(
  {
    Test: { screen: Test }
  },
  {
    initialRouteName: "Test"
  }
);
