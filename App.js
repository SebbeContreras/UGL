import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native";
import * as React from "react";
import MyTab from "./app/navigation/AppNavigation";
import "expo-dev-client";
import * as SplashScreen from "expo-splash-screen";

function App() {
  SplashScreen.hideAsync();
  return <MyTab />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
