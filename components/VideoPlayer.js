import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Video, ResizeMode } from "expo-av";

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        //style={StyleSheet.absoluteFill}
        //source={{
        //uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        //}}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
});
