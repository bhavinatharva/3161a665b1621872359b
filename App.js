import * as React from "react";

import { Provider, connect } from "react-redux";
import { persistor, store } from "./src/redux/index";

import LocationList from "./src/screens/LocationList";
import MapViewScreen from "./src/screens/MapViewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
