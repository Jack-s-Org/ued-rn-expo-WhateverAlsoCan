import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* SafeArea for Header */}
      <View style={styles.header}>
        <Image
          source={require("@/assets/F1_logo_white.png")}
          style={{
            height: 25,
            width: 100,
            alignSelf: "center",
            zIndex: 5,
            marginBottom: 19,
          }}
        />
      </View>
      {/* <SafeAreaView> */}
      <View style={{ backgroundColor: "grey" }}>
        <Image
          source={require("@/assets/TopSectionHome.png")}
          style={{
            height: 250,
            width: "100%",
            alignSelf: "center",
            // marginTop: -80,
            zIndex: 1,
          }}
        />

        <Image
          source={require("@/assets/SecondSectionHome.png")}
          style={styles.SecondSection}
        ></Image>

        <Image
          source={require("@/assets/backgroundbackground.png")}
          resizeMode="cover"
          style={styles.background}
        ></Image>
      </View>
      {/* </SafeAreaView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: "red",
  },
  header: {
    width: "100%",
    height: 110,
    backgroundColor: "#D81159",
    alignItems: "center",
    justifyContent: "flex-end",
    zIndex: 1,
    // textAlignVertical: "top",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  background: {
    height: "100%",
    width: "100%",
    zIndex: 1,
    opacity: 1,
  },
  SecondSection: {
    height: 250,
    width: "100%",
    zIndex: 2,
    opacity: 1,
  },
});

export default HomeScreen;
