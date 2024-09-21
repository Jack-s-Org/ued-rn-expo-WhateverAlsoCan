import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  UIManager,
  LayoutAnimation,
  Platform,
} from "react-native";

const NewsScreen = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Enable LayoutAnimation for Android
  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("@/assets/HomePage/F1_logo_white.png")}
          style={{
            height: 25,
            width: 100,
            alignSelf: "center",
            zIndex: 5,
            marginBottom: 19,
          }}
        />
      </View>

      <ScrollView
        style={{ flex: 1, backgroundColor: "transparent" }}
        contentContainerStyle={{ paddingVertical: 24 }}
      >
        {/* Background Image */}
        <View>
          <Image
            source={require("@/assets/NewsPage/News_Background.png")}
            resizeMode="contain"
            style={styles.background}
          />
        </View>
        <View>
          <Image
            source={require("@/assets/ProfilePage/Profile-Background.png")}
            resizeMode="stretch"
            style={{
              position: "absolute",
              height: 100,
              top: -3050,
              width: "100%",
              alignSelf: "center",
              zIndex: 1,
            }}
          ></Image>
          <Image
            source={require("@/assets/LivePage/Live_Profile_Pic.png")}
            resizeMode="contain"
            style={{
              position: "absolute",
              height: 100,
              top: -3000,
              left: 10,
              width: 100,
              alignSelf: "center",
              zIndex: 2,
              marginBottom: 1,
            }}
          ></Image>
          <Text
            style={{
              position: "absolute",
              height: 100,
              width: 1000,
              top: -3000,
              left: 140,
              fontFamily: "F1-Bold",
              fontStyle: "Bold",
              fontSize: 18,
              color: "#FFFFFF",
              zIndex: 2,
            }}
          >
            IM A LEGIT DRIVER
          </Text>
          <Text
            style={{
              position: "absolute",
              height: 100,
              width: 1000,
              top: -2980,
              left: 140,
              fontFamily: "F1-Regular",
              fontStyle: "Bold",
              fontSize: 18,
              color: "#FFFFFF",
              zIndex: 2,
            }}
          >
            @THESTIG
          </Text>
          <Text
            style={{
              position: "absolute",
              height: 100,
              width: 1000,
              top: -2950,
              left: 140,
              fontFamily: "F1-Regular",
              fontStyle: "Bold",
              fontSize: 14,
              color: "#FFFFFF",
              zIndex: 2,
            }}
          >
            LV. 57
          </Text>
          <Text
            style={{
              position: "absolute",
              height: 100,
              width: 1000,
              top: -2950,
              left: 300,
              fontFamily: "F1-Regular",
              fontStyle: "Bold",
              fontSize: 14,
              color: "#FFFFFF",
              zIndex: 2,
            }}
          >
            40,000 xp
          </Text>
          <Text
            style={{
              position: "absolute",
              height: 100,
              width: 1000,
              top: -2910,
              left: 140,
              fontFamily: "F1-Regular",
              fontStyle: "Bold",
              fontSize: 14,
              color: "#FFFFFF",
              zIndex: 2,
            }}
          >
            15,636 xp
          </Text>
          <Image
            source={require("@/assets/ProfilePage/LevelBar.png")}
            resizeMode="contain"
            style={{
              position: "absolute",
              height: 250,
              top: -3050,
              left: 140,
              width: 230,
              alignSelf: "center",
              zIndex: 2,
              marginBottom: 1,
            }}
          ></Image>
          <Image
            source={require("@/assets/ProfilePage/BioContainer.png")}
            resizeMode="contain"
            style={{
              position: "absolute",
              height: 250,
              top: -2980,
              alignSelf: "center",
              width: 360,
              zIndex: 2,
              marginBottom: 1,
            }}
          ></Image>
          <Image
            source={require("@/assets/ProfilePage/SectionLine.png")}
            resizeMode="contain"
            style={{
              position: "absolute",
              height: 470,
              top: -2800,
              width: 470,
              alignSelf: "center",
              zIndex: 2,
              marginBottom: 1,
            }}
          ></Image>
          <Image
            source={require("@/assets/ProfilePage/Trophy.png")}
            resizeMode="contain"
            style={{
              position: "absolute",
              height: 40,
              top: -2790,
              left: 10,
              width: 50,
              alignSelf: "center",
              zIndex: 2,
              marginBottom: 1,
            }}
          ></Image>
          <Text
            style={{
              position: "absolute",
              height: 100,
              width: 1000,
              top: -2785,
              left: 60,
              fontFamily: "Bahnschrift",
              fontStyle: "Bold",
              fontSize: 22,
              color: "#FFFFFF",
              zIndex: 2,
            }}
          >
            273
          </Text>
          <Text
            style={{
              position: "absolute",
              height: 100,
              width: 1000,
              top: -2765,
              left: 60,
              fontFamily: "Bahnschrift",
              fontStyle: "Bold",
              fontSize: 12,
              color: "#D81159",
              zIndex: 2,
            }}
          >
            Achievements
          </Text>
          <Image
            source={require("@/assets/ProfilePage/Convos.png")}
            resizeMode="contain"
            style={{
              position: "absolute",
              height: 40,
              top: -2790,
              left: 130,
              width: 50,
              alignSelf: "center",
              zIndex: 2,
              marginBottom: 1,
            }}
          ></Image>
          <Text
            style={{
              position: "absolute",
              height: 100,
              width: 1000,
              top: -2785,
              left: 180,
              fontFamily: "Bahnschrift",
              fontStyle: "Bold",
              fontSize: 22,
              color: "#FFFFFF",
              zIndex: 2,
            }}
          >
            141
          </Text>
          <Text
            style={{
              position: "absolute",
              height: 100,
              width: 1000,
              top: -2765,
              left: 180,
              fontFamily: "Bahnschrift",
              fontStyle: "Bold",
              fontSize: 12,
              color: "#D81159",
              zIndex: 2,
            }}
          >
            Achievements
          </Text>
          <Image
            source={require("@/assets/ProfilePage/Topics.png")}
            resizeMode="contain"
            style={{
              position: "absolute",
              height: 35,
              top: -2788,
              left: 260,
              width: 35,
              alignSelf: "center",
              zIndex: 2,
              marginBottom: 1,
            }}
          ></Image>
          <Text
            style={{
              position: "absolute",
              height: 100,
              width: 1000,
              top: -2785,
              left: 300,
              fontFamily: "Bahnschrift",
              fontStyle: "Bold",
              fontSize: 22,
              color: "#FFFFFF",
              zIndex: 2,
            }}
          >
            20
          </Text>
          <Text
            style={{
              position: "absolute",
              height: 100,
              width: 1000,
              top: -2765,
              left: 300,
              fontFamily: "Bahnschrift",
              fontStyle: "Bold",
              fontSize: 12,
              color: "#D81159",
              zIndex: 2,
            }}
          >
            Achievements
          </Text>
          <Image
            source={require("@/assets/NewsPage/Section_Cutter.png")}
            resizeMode="contain"
            style={{
              position: "absolute",
              height: 100,
              top: -2780,
              left: 0,
              width: 370,
              alignSelf: "center",
              zIndex: 2,
              marginBottom: 1,
            }}
          ></Image>
          <Text
            style={{
              position: "absolute",
              height: 100,
              width: 1000,
              top: -2680,
              left: 20,
              fontFamily: "F1-Bold",
              fontStyle: "Bold",
              fontSize: 20,
              color: "#D81159",
              zIndex: 2,
            }}
          >
            Recent Acheivements
          </Text>
          <Image
            source={require("@/assets/ProfilePage/Achievement_Tab.png")}
            resizeMode="contain"
            style={{
              position: "absolute",
              height: 100,
              top: -2660,
              left: -10,
              width: 370,
              alignSelf: "center",
              zIndex: 2,
              marginBottom: 1,
            }}
          ></Image>
          <Image
            source={require("@/assets/ProfilePage/Trophy.png")}
            resizeMode="contain"
            style={{
              position: "absolute",
              height: 40,
              top: -2630,
              left: 10,
              width: 50,
              alignSelf: "center",
              zIndex: 2,
              marginBottom: 1,
            }}
          ></Image>
          <Text
            style={{
              position: "absolute",
              height: 100,
              width: 1000,
              top: -2625,
              left: 60,
              fontFamily: "F1-Bold",
              fontStyle: "Bold",
              fontSize: 20,
              color: "#D81159",
              zIndex: 2,
            }}
          >
            Convo Master
          </Text>
          <Text
            style={{
              position: "absolute",
              height: 100,
              width: 1000,
              top: -2603,
              left: 60,
              fontFamily: "Bahnschrift",
              fontStyle: "Bold",
              fontSize: 14,
              color: "#FFFFFF",
              zIndex: 2,
            }}
          >
            Create over 100 convo starters
          </Text>
          <Image
            source={require("@/assets/ProfilePage/Achievement_Tab.png")}
            resizeMode="contain"
            style={{
              position: "absolute",
              height: 100,
              top: -2570,
              left: -10,
              width: 370,
              alignSelf: "center",
              zIndex: 2,
              marginBottom: 1,
            }}
          ></Image>
          <Image
            source={require("@/assets/ProfilePage/Trophy.png")}
            resizeMode="contain"
            style={{
              position: "absolute",
              height: 40,
              top: -2540,
              left: 10,
              width: 50,
              alignSelf: "center",
              zIndex: 2,
              marginBottom: 1,
            }}
          ></Image>
          <Text
            style={{
              position: "absolute",
              height: 100,
              width: 1000,
              top: -2535,
              left: 60,
              fontFamily: "F1-Bold",
              fontStyle: "Bold",
              fontSize: 20,
              color: "#D81159",
              zIndex: 2,
            }}
          >
            Convo Master
          </Text>
          <Text
            style={{
              position: "absolute",
              height: 100,
              width: 1000,
              top: -2513,
              left: 60,
              fontFamily: "Bahnschrift",
              fontStyle: "Bold",
              fontSize: 14,
              color: "#FFFFFF",
              zIndex: 2,
            }}
          >
            Create over 100 convo starters
          </Text>
          <Image
            source={require("@/assets/ProfilePage/Achievement_Tab.png")}
            resizeMode="contain"
            style={{
              position: "absolute",
              height: 100,
              top: -2480,
              left: -10,
              width: 370,
              alignSelf: "center",
              zIndex: 2,
              marginBottom: 1,
            }}
          ></Image>
          <Image
            source={require("@/assets/ProfilePage/Trophy.png")}
            resizeMode="contain"
            style={{
              position: "absolute",
              height: 40,
              top: -2450,
              left: 10,
              width: 50,
              alignSelf: "center",
              zIndex: 2,
              marginBottom: 1,
            }}
          ></Image>
          <Text
            style={{
              position: "absolute",
              height: 100,
              width: 1000,
              top: -2445,
              left: 60,
              fontFamily: "F1-Bold",
              fontStyle: "Bold",
              fontSize: 20,
              color: "#D81159",
              zIndex: 2,
            }}
          >
            Convo Master
          </Text>
          <Text
            style={{
              position: "absolute",
              height: 100,
              width: 1000,
              top: -2423,
              left: 60,
              fontFamily: "Bahnschrift",
              fontStyle: "Bold",
              fontSize: 14,
              color: "#FFFFFF",
              zIndex: 2,
            }}
          >
            Create over 100 convo starters
          </Text>
          <Image
            source={require("@/assets/NewsPage/Section_Cutter.png")}
            resizeMode="contain"
            style={{
              position: "absolute",
              height: 100,
              top: -2390,
              left: 0,
              width: 370,
              alignSelf: "center",
              zIndex: 2,
              marginBottom: 1,
            }}
          ></Image>
        </View>

        {/* Rest of the content */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#0F0F0F",
    width: "100%",
    height: "100%",
  },
  header: {
    width: "100%",
    height: 116,
    backgroundColor: "#D81159",
    alignItems: "center",
    justifyContent: "flex-end",
    zIndex: 5,
    top: -6,
  },
  background: {
    zIndex: -1,
    width: 393,
    top: -26,
    height: 3023,
    alignSelf: "center",
  },
  image: {
    width: "100%",
  },
});

export default NewsScreen;
