import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const LeaderboardScreen = () => {
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

      <View
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <ScrollView
          style={{ flex: 1, backgroundColor: "transparent" }}
          contentContainerStyle={{ paddingVertical: 24 }}
        >
          <View>
            <Image
              source={require("@/assets/LeaderboardPage/Graphic_2.png")}
              resizeMode="contain"
              style={styles.graphic}
            ></Image>

            <Image
              source={require("@/assets/LeaderboardPage/Background_2.png")}
              resizeMode="contain"
              style={styles.background}
            ></Image>
          </View>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 696,
              left: 34,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 20,
            }}
          >
            4
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 690,
              left: 64,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 16,
            }}
          >
            Oscar PIASTRI
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 712,
              left: 64,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 12,
            }}
          >
            Mclaren
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 756,
              left: 34,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 20,
            }}
          >
            5
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 750,
              left: 64,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 16,
            }}
          >
            Carlos SAINZ
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 772,
              left: 64,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 12,
            }}
          >
            Scuderia Ferrari
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 816,
              left: 34,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 20,
            }}
          >
            6
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 808,
              left: 64,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 16,
            }}
          >
            Lewis HAMILTON
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 830,
              left: 64,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 12,
            }}
          >
            Mercedes
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 876,
              left: 34,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 20,
            }}
          >
            7
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 868,
              left: 64,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 16,
            }}
          >
            Sergio PEREZ
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 890,
              left: 64,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 12,
            }}
          >
            Red Bull Racing
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 932,
              left: 34,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 20,
            }}
          >
            8
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 928,
              left: 64,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 16,
            }}
          >
            George RUSSELL
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 950,
              left: 64,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 12,
            }}
          >
            Mercedes
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 992,
              left: 34,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 20,
            }}
          >
            9
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 986,
              left: 64,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 16,
            }}
          >
            Fernando ALONSO
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1008,
              left: 64,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 12,
            }}
          >
            Aston Martin
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1052,
              left: 34,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 20,
            }}
          >
            10
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1044,
              left: 64,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 16,
            }}
          >
            Lance STROLL
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1066,
              left: 64,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 12,
            }}
          >
            Aston Martin
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1112,
              left: 34,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 20,
            }}
          >
            11
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1104,
              left: 64,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 16,
            }}
          >
            Nico HULKENBURG
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1126,
              left: 64,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 12,
            }}
          >
            Haas
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1172,
              left: 34,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 20,
            }}
          >
            12
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1164,
              left: 66,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 16,
            }}
          >
            Yuki TSUNODA
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1186,
              left: 66,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 12,
            }}
          >
            RB
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1230,
              left: 34,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 20,
            }}
          >
            13
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1224,
              left: 66,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 16,
            }}
          >
            Daniel RICCIARDO
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1246,
              left: 66,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 12,
            }}
          >
            RB
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1290,
              left: 34,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 20,
            }}
          >
            14
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1282,
              left: 66,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 16,
            }}
          >
            Oliver BEARMAN
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1304,
              left: 66,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 12,
            }}
          >
            Scuderia Ferrari
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1348,
              left: 34,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 20,
            }}
          >
            15
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1342,
              left: 66,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 16,
            }}
          >
            Pierre GASLY
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1364,
              left: 66,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 12,
            }}
          >
            Alpine
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1408,
              left: 34,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 20,
            }}
          >
            16
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1402,
              left: 66,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 16,
            }}
          >
            Kevin MAGNUSSEN
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1424,
              left: 66,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 12,
            }}
          >
            Haas
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1466,
              left: 34,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 20,
            }}
          >
            17
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1460,
              left: 66,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 16,
            }}
          >
            Esteban OCON
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1482,
              left: 66,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 12,
            }}
          >
            Alpine
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1524,
              left: 34,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 20,
            }}
          >
            18
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1518,
              left: 66,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 16,
            }}
          >
            Alexander ALBON
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1540,
              left: 66,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 12,
            }}
          >
            Williams
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1584,
              left: 34,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 20,
            }}
          >
            19
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1576,
              left: 66,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 16,
            }}
          >
            Zhou GUANYU
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1598,
              left: 66,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 12,
            }}
          >
            Kick Sauber
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1642,
              left: 34,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 20,
            }}
          >
            20
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1634,
              left: 66,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 16,
            }}
          >
            Logan SARGEANT
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1656,
              left: 66,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 12,
            }}
          >
            Williams
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1702,
              left: 34,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 20,
            }}
          >
            21
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1694,
              left: 66,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 16,
            }}
          >
            Valterri BOTTAS
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              top: 1716,
              left: 66,
              position: "absolute",
              fontFamily: "Normal-Font",
              color: "white",
              fontSize: 12,
            }}
          >
            Kick Sauber
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0F0F0F",
  },
  header: {
    width: "100%",
    height: 116,
    backgroundColor: "#D81159",
    alignItems: "center",
    justifyContent: "flex-end",
    zIndex: 5,
    top: 52,
  },
  background: {
    zIndex: -1,
    width: 393,
    top: -550,
    height: 1786.31,
    alignSelf: "center",
    marginBottom: -550,
  },
  background2: {
    zIndex: -1,
    position: "absolute",
    height: 1689,
    width: 393,
    top: 2690,
  },
  graphic: {
    top: 50,
    width: 376,
    height: 548,
  },
  ranking1: {
    top: -1690,
    alignSelf: "center",
  },
});

export default LeaderboardScreen;
