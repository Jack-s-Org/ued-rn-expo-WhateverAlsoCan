import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

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
            marginBottom: -300,
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

            <TouchableOpacity onPress={() => navigation.navigate("Live")}>
              <View
                style={{
                  backgroundColor: "white",
                  zIndex: 6,
                  width: 154,
                  height: 40,
                  position: "absolute",
                  top: -1390,
                  left: 188,
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    top: 13,
                    fontFamily: "Normal-Font",
                  }}
                >
                  ENTER LIVE
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("News")}>
              <View
                style={{
                  backgroundColor: "white",
                  zIndex: 6,
                  width: 349,
                  height: 56,
                  position: "absolute",
                  top: -470,

                  left: -5,

                  borderRadius: 8,
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    top: 20,
                    fontFamily: "F1-Bold",
                    fontSize: 18,
                    color: "#8647D6",
                  }}
                >
                  SEE MORE
                </Text>
              </View>
            </TouchableOpacity>
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
    fontSize: 12,
    right: 125,
    top: -22,
  },
  WidgetSecondText: {
    fontFamily: "Normal-Font",
    color: "#FFFFFF",
    fontSize: 12,
    right: 25,
    top: -34,
  },
  WidgetThirdText: {
    fontFamily: "Normal-Font",
    color: "#FFFFFF",
    fontSize: 12,
    left: 100,
    top: -46,
  },
  PercentageText: {
    fontFamily: "F1-Bold",
    color: "#FFFFFF",
    fontSize: 25,

    left: -144,
    top: -145,
  },
  Panel: {
    height: 800,
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

    top: -760,
    left: -17,
  },
  SectionDivider: {
    height: 20,
    width: 355,
    left: -10,

    top: -740,
  },
  ScrollImages: {
    height: 250,
    width: 200,
    marginRight: 24,
    top: -20,
  },
});

export default HomeScreen;
