import * as React from "react";

import { Provider, connect } from "react-redux";

import LocationList from "./src/screens/LocationList";
import MapViewScreen from "./src/screens/MapViewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { RootTabParamList } from "./src/navigation/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import store from "./src/redux/createStore";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            testID="navigation-locations-tab"
            name="LocationList"
            component={LocationList}
          />
          <Tab.Screen
            testID="navigation-map-tab"
            name="MapView"
            component={MapViewScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
