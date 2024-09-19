import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* SafeArea for Header */}
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
      <ScrollView>
        {/* <SafeAreaView> */}
        <View
          style={{
            backgroundColor: "#0f0f0f",
            alignItems: "center",
          }}
        >
          <Image
            source={require("@/assets/HomePage/TopSectionHome.png")}
            style={{
              height: 250,
              width: "100%",
              alignSelf: "center",
              marginTop: -30,
              zIndex: 1,
            }}
          />

          <Image
            resizeMode="stretch"
            source={require("@/assets/HomePage/SecondSectionHome.png")}
            style={styles.SecondSection}
          ></Image>

          <Image
            resizeMode="stretch"
            source={require("@/assets/HomePage/ThirdSectionHome.png")}
            style={styles.ThirdSection}
          ></Image>

          <ImageBackground
            source={require("@/assets/HomePage/backgroundreplaced.png")}
            resizeMode="cover"
            style={styles.background}
          ></ImageBackground>

          <Text style={styles.WidgetFirstText}>708 Tires used</Text>
          <Text style={styles.WidgetSecondText}>463.3 KM covered</Text>
          <Text style={styles.WidgetThirdText}>11 Grand Prix completed</Text>
          <Text style={styles.PercentageText}>43%</Text>
          <Text style={styles.NewsText}>NEWS</Text>
          <View>
            <Image
              resizeMode="stretch"
              source={require("@/assets/HomePage/Subtractpanel.png")}
              style={styles.Panel}
            ></Image>
            <Image
              resizeMode="stretch"
              source={require("@/assets/HomePage/News1.png")}
              style={styles.RussellNews}
            ></Image>
            <Image
              resizeMode="stretch"
              source={require("@/assets/HomePage/divider.png")}
              style={styles.SectionDivider}
            ></Image>

            <View
              style={{
                position: "absolute",
                height: 264,
                top: 415,
                width: 381,
                left: -30,
                zIndex: 5,
              }}
            >
              <ScrollView
                horizontal={true}
                contentContainerStyle={{
                  flexDirection: "row",
                  paddingLeft: 24,
                }}
                showsHorizontalScrollIndicator={false}
                style={{
                  flex: 1,
                  marginBottom: 16,
                  // top: -500,
                }}
              >
                <View>
                  <Image
                    resizeMode="contain"
                    source={require("@/assets/HomePage/ScrollNews1.png")}
                    style={styles.ScrollImages}
                  ></Image>
                </View>
                <View>
                  <Image
                    resizeMode="contain"
                    source={require("@/assets/HomePage/ScrollNews2.png")}
                    style={styles.ScrollImages}
                  ></Image>
                </View>
                <View>
                  <Image
                    resizeMode="contain"
                    source={require("@/assets/HomePage/ScrollNews3.png")}
                    style={styles.ScrollImages}
                  ></Image>
                </View>
                <View>
                  <Image
                    resizeMode="contain"
                    source={require("@/assets/HomePage/ScrollNews4.png")}
                    style={styles.ScrollImages}
                  ></Image>
                </View>
                <View>
                  <Image
                    resizeMode="contain"
                    source={require("@/assets/HomePage/ScrollNews5.png")}
                    style={styles.ScrollImages}
                  ></Image>
                </View>
                <View>
                  <Image
                    resizeMode="contain"
                    source={require("@/assets/HomePage/ScrollNews6.png")}
                    style={styles.ScrollImages}
                  ></Image>
                </View>
              </ScrollView>
            </View>

            <View
              style={{
                backgroundColor: "white",
                zIndex: 6,
                width: 154,
                height: 40,
                position: "absolute",
                top: -260,
                left: 188,
                borderRadius: 4,
              }}
            >
              <Text style={{ alignSelf: "center", top: 12 }}>ENTER LIVE</Text>
            </View>
          </View>
        </View>
        {/* </SafeAreaView> */}
      </ScrollView>
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
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: -1,
    opacity: 1,
  },
  SecondSection: {
    height: 220,
    width: "90%",
    zIndex: 2,
    opacity: 1,
    marginTop: 20,
  },
  ThirdSection: {
    height: 125,
    width: "100%",
    marginLeft: -38,
    marginTop: 20,
  },
  WidgetFirstText: {
    fontFamily: "Normal-Font",
    color: "#FFFFFF",
    fontSize: 14,
    right: 125,
    top: -22,
  },
  WidgetSecondText: {
    fontFamily: "Normal-Font",
    color: "#FFFFFF",
    fontSize: 14,
    right: 25,
    top: -34,
  },
  WidgetThirdText: {
    fontFamily: "Normal-Font",
    color: "#FFFFFF",
    fontSize: 14,
    left: 100,
    top: -46,
  },
  PercentageText: {
    fontFamily: "F1-Bold",
    color: "#FFFFFF",
    fontSize: 25,
    right: 136,
    top: -145,
  },
  Panel: {
    height: 728,
    width: 365,
    marginLeft: -12,
    marginTop: -40,
  },
  NewsText: {
    fontFamily: "F1-Bold",
    color: "#FFFFFF",
    fontSize: 18,
    right: 143,
    top: -30.5,
  },
  RussellNews: {
    height: 350.48,
    width: 355,
    zIndex: 5,
    top: -700,
    left: -17,
    // marginTop: 0,
  },
  SectionDivider: {
    height: 20,
    width: 355,
    left: -17,
    top: -660,
  },
  ScrollImages: {
    height: 250,
    width: 200,
    marginRight: 24,
  },
});

export default HomeScreen;
