import { Button, Text, View } from "react-native";

import HomeStackScreen from "./stacks/HomeStackScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import SettingsStackScreen from "./stacks/SettingsStackScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>

      <Tab.Navigator screenOptions={{ headerShown: false }}>

            <Tab.Screen name="HomeMenu" component={HomeStackScreen} />
            <Tab.Screen name="SettingsMenu" component={SettingsStackScreen} />
            
      </Tab.Navigator>

    </NavigationContainer>
  );
};

export default Tabs;
