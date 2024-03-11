import React from "react";
import { View, FlatList, Text } from "react-native";
import songs from "../model/data";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MyList = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("MusicPlayer", { songId: item.id })}>
      <View>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={songs}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MyList;
