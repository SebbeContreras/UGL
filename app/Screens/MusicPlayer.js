import React, { useEffect } from "react";
import { View, Button, Text } from "react-native";
import { songs } from "../model/data";
import { playbackServices } from "../model/playbackService";
import TrackPlayer, { State } from "react-native-track-player";

TrackPlayer.registerPlaybackService(() => playbackServices);
const MusicPLayer = ({ route, navigation }) => {
  useEffect(() => {
    setupPlayer();
  }, []);

  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(songs)
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Play" onPress={() => togglePlayback} />
    </View>
  );
};

export default MusicPLayer;
