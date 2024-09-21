import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
  TextInput,
} from "react-native";

const LiveScreen = () => {
  const [selectedNumber, setSelectedNumber] = useState(1); // Initial lap number set to 1
  const [time, setTime] = useState({ hours: 1, minutes: 42, seconds: 45 });
  const [commentsVisible, setCommentsVisible] = useState(false); // Track visibility
  const [slideAnim] = useState(new Animated.Value(0)); // Initial position of comment section
  const [number, onChangeNumber] = React.useState("");

  // Function to handle left arrow click
  const decrementNumber = () => {
    if (selectedNumber > 1) {
      // Prevent decrementing below 1
      console.log("Decreasing number");
      setSelectedNumber((prevNumber) => prevNumber - 1);
    } else {
      console.log("Min value reached");
    }
  };

  // Function to handle right arrow click
  const incrementNumber = () => {
    console.log("Increasing number");
    setSelectedNumber((prevNumber) => prevNumber + 1);
  };

  // Timer logic
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime((prevTime) => {
        const { hours, minutes, seconds } = prevTime;
        let newSeconds = seconds + 1;
        let newMinutes = minutes;
        let newHours = hours;

        if (newSeconds === 60) {
          newSeconds = 0;
          newMinutes += 1;
        }

        if (newMinutes === 60) {
          newMinutes = 0;
          newHours += 1;
        }

        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    return () => window.clearInterval(intervalId); // Cleanup function
  }, []);

  const toggleComments = () => {
    const toValue = commentsVisible ? 0 : 1; // 0 = hidden, 1 = shown
    Animated.timing(slideAnim, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setCommentsVisible(!commentsVisible);
  };

  // Format time for display
  const formatTime = (num) => (num < 10 ? `0${num}` : num);

  return (
    <View style={styles.container}>
      {/* Static Header with Lap Counter */}
      <View style={styles.StaticContent}>
        <Text style={styles.HeaderText}>LAP</Text>
        <View style={styles.LapCounterContainer}>
          {/* Left Arrow */}
          <TouchableOpacity
            onPress={decrementNumber}
            style={styles.ArrowContainer}
          >
            <Text style={styles.Arrow}>{"<"}</Text>
          </TouchableOpacity>

          {/* Display Lap Number */}
          <View style={styles.LapNumberContainer}>
            <Text style={styles.LapNumber}>{selectedNumber - 1}</Text>
            <Text style={styles.SelectedLapNumber}>{selectedNumber}</Text>
            <Text style={styles.LapNumber}>{selectedNumber + 1}</Text>
          </View>

          {/* Right Arrow */}
          <TouchableOpacity
            onPress={incrementNumber}
            style={styles.ArrowContainer}
          >
            <Text style={styles.Arrow}>{">"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Image
        source={require("@/assets/LivePage/Map_Background.png")}
        style={styles.MapBackground}
      ></Image>

      {/* Scrollable Map */}
      <View style={styles.MapContainer}>
        <ScrollView
          contentContainerStyle={styles.ScrollViewContent}
          maximumZoomScale={5}
          minimumZoomScale={1}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          pinchGestureEnabled={true}
        >
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            bounces={false}
          >
            {/* Map Image */}
            <Image
              source={require("@/assets/LivePage/Map.png")}
              style={styles.MapImage}
            />
          </ScrollView>
        </ScrollView>
      </View>

      {/* Static Footer with Timer */}
      <View style={styles.FooterTimer}>
        <Text style={styles.FooterText}>TIME ELASPED</Text>

        <View style={styles.TimerContainer}>
          <View style={styles.TimeSection}>
            <Text style={styles.TimerText}>{formatTime(time.hours)}</Text>
            <Text style={styles.Label}>HRS</Text>
          </View>

          <Text style={styles.Spacing}></Text>

          <View style={styles.TimeSection}>
            <Text style={styles.TimerText}>{formatTime(time.minutes)}</Text>
            <Text style={styles.Label}>MINS</Text>
          </View>

          <Text style={styles.Spacing}></Text>

          <View style={styles.TimeSection}>
            <Text style={styles.TimerText}>{formatTime(time.seconds)}</Text>
            <Text style={styles.Label}>SECS</Text>
          </View>
        </View>

        <Image
          source={require("@/assets/LivePage/Rolex_Logo.png")}
          style={styles.RolexImage}
        ></Image>
      </View>

      <Text style={styles.FooterText2}>
        Drag and drop the icon to add a discussion.
      </Text>

      <Image
        source={require("@/assets/LivePage/Live_Sidebar.png")}
        style={styles.SidebarImage}
      ></Image>

      {/* Arrow to reveal comments */}
      <TouchableOpacity style={styles.ArrowContainer2} onPress={toggleComments}>
        <Text style={styles.ArrowBottom}>{"^"}</Text>
      </TouchableOpacity>

      {/* Animated Comment Section */}
      <Animated.View
        style={[
          styles.commentSection,
          {
            transform: [
              {
                translateY: slideAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [900, 180],
                }),
              },
            ],
          },
        ]}
      >
        <ScrollView>
          <Image
            source={require("@/assets/LivePage/Live_Profile_Pic.png")}
            style={styles.commentProfilePic}
            resizeMode="contain"
          />

          <Text style={styles.commentHeader}>MAX OVERTAKES LEWIS WOOOOO</Text>

          <Text style={styles.comment}>@thef1guy</Text>

          <Image
            source={require("@/assets/LivePage/Live_Comments.png")}
            style={styles.commentImage}
            resizeMode="contain"
          />

          <View
            style={{
              backgroundColor: "pink",
              width: "100%",
              top: -180,
              marginBottom: 70,
            }}
          >
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholderTextColor="#FFFFFF"
              placeholder="Add a comment..."
            />
          </View>
        </ScrollView>

        {/* Always visible button for toggling comments */}
        {commentsVisible && (
          <TouchableOpacity style={styles.hideButton} onPress={toggleComments}>
            <Text style={styles.hideButtonText}>{"^"}</Text>
          </TouchableOpacity>
        )}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
  },
  StaticContent: {
    padding: 6,
    top: 30,
    alignItems: "center",
    zIndex: 10,
  },
  HeaderText: {
    fontFamily: "Normal-Font",
    color: "#FFFFFF",
    fontSize: 24,
    marginTop: 24,
  },
  LapCounterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 10,
  },
  ArrowContainer: {
    padding: 20,
    backgroundColor: "transparent",
  },
  Arrow: {
    fontSize: 30,
    color: "#FFFFFF",
  },
  LapNumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 0,
  },
  LapNumber: {
    fontFamily: "Normal-Font",
    fontSize: 18,
    color: "#FFFFFF",
    opacity: 0.5,
    marginHorizontal: 24,
  },
  SelectedLapNumber: {
    fontFamily: "Normal-Font",
    fontSize: 30,
    color: "#fff",
    marginHorizontal: 10,
  },
  ScrollViewContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  MapImage: {
    width: 390,
    height: 500,
    resizeMode: "contain",
    top: -50,
    left: 16,
  },
  MapBackground: {
    width: "100%",
    zIndex: -5,
    position: "absolute",
  },
  MapContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 200,
    overflow: "hidden",
  },
  FooterTimer: {
    position: "absolute",
    bottom: 80,
    width: "100%",
    padding: 20,
    alignItems: "center",
    zIndex: 5,
  },
  TimerText: {
    fontFamily: "Normal-Font",
    fontSize: 24,
    color: "#FFFFFF",
    paddingBottom: 10,
  },
  TimerContainer: {
    flexDirection: "row",
    alignItems: "center",
    left: 38,
  },
  Spacing: {
    paddingHorizontal: 10,
  },
  TimeSection: {
    alignItems: "center",
  },
  Label: {
    fontFamily: "Normal-Font",
    fontSize: 12,
    color: "#FFFFFF",
  },
  RolexImage: {
    width: 70,
    height: 40,
    left: -74,
    top: -42,
    marginBottom: -40,
  },
  FooterText: {
    fontFamily: "Normal-Font",
    fontSize: 18,
    color: "#B1B1B1",
    paddingBottom: 16,
  },
  FooterText2: {
    fontFamily: "Normal-Font",
    fontSize: 14,
    color: "#B1B1B1",
    alignSelf: "center",
    bottom: 50,
  },
  ArrowBottom: {
    fontSize: 30,
    color: "#FFFFFF",
    alignSelf: "center",
    bottom: -20,
  },
  ArrowContainer2: {
    zIndex: 10,
    position: "absolute",
    left: "56%",
    transform: [{ translateX: -50 }],
    alignSelf: "center",
    bottom: 6,
    padding: 16,
  },
  commentSection: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#0F0F0F",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
    elevation: 3,
    zIndex: 10,
  },
  commentHeader: {
    fontSize: 24,
    fontFamily: "Normal-Font",
    color: "#FFFFFF",
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 5,
    left: 66,
    top: 16,
  },
  comment: {
    fontFamily: "Normal-Font",
    fontSize: 14,
    color: "#FFFFFF",
    marginVertical: 2,
    left: 290,
  },
  hideButton: {
    position: "absolute",
    bottom: 176,
    left: "48%",
    padding: 10,
    zIndex: 10,
    transform: [{ rotate: "180deg" }],
  },
  hideButtonText: {
    color: "#FFFFFF",
    fontSize: 30,
  },
  commentImage: {
    width: 380,
    height: 740,
    top: -76,
  },
  commentProfilePic: {
    height: 52,
    left: -44,
    top: 6,
    marginBottom: -60,
  },
  input: {
    height: 40,
    width: 348,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#4B4B4B",

    alignSelf: "center",
    position: "absolute",
  },
  SidebarImage: {
    width: 50,
    height: 214.5,
    position: "absolute",
    bottom: 80,
    right: 0,
  },
});

export default LiveScreen;
