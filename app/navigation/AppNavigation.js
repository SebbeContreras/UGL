import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../Screens/dashboard";
import Library from "../Screens/Library";
import Profile from "../Screens/Profile";
import Progress from "../Screens/Progress";
import MusicPLayer from "../Screens/MusicPlayer";
import { Ionicons } from "@expo/vector-icons";
import "expo-dev-client";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function MyTab() {
  const size = "24";
  const color = "black";
  return (
    <NavigationContainer>
      <Tab.Navigator sceneAnimationEnabled={false}>
        <Tab.Screen
          name="Home"
          component={Dashboard}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={Library}
          options={{
            tabBarLabel: "library",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="library" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="MusicPlayer"
          component={MusicPLayer}
          options={{
            tabBarLabel: "musical-notes",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="musical-notes" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "person",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Progress"
          component={Progress}
          options={{
            tabBarLabel: "bar-chart",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bar-chart" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
