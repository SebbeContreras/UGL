import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import MyList from "../components/librarylist";

const Library = () => {
  return (
    <View>
      <MyList
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
    </View>
  );
};

export default Library;
