import { Text, TouchableOpacity, StyleSheet, View, Image } from "react-native";

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/SignInPage/SignIn_Background.png")}
        resizeMode="cover"
        style={styles.SignInBackground}
      ></Image>

      <Text style={styles.HeaderText}>
        WHAT DOES IT FEEL LIKE TO SEE EVERYTHING
      </Text>

      <Text style={styles.HeaderText2}>
        MAKING YOUR VIEWING EXPERIENCE BETTER WITHIN A FEW TAPS
      </Text>

      <TouchableOpacity
        style={styles.box}
        onPress={() => {
          navigation.replace("Main", { screen: "LogIn" });
        }}
      >
        <Text style={styles.text}>LOG IN</Text>
      </TouchableOpacity>

      <View style={styles.box2}>
        <Text style={styles.text2}>SIGN IN</Text>
      </View>

      <Image
        source={require("@/assets/SignInPage/SignIn_Bottom.png")}
        resizeMode="contain"
        style={styles.SignInBottom}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  SignInBackground: {
    width: "100%",
    height: "100%",
  },
  HeaderText: {
    fontFamily: "Normal-Font",
    fontSize: 40,
    position: "absolute",
    color: "#FFFFFF",
    top: 110,
    left: 20,
    paddingRight: 60,
  },
  HeaderText2: {
    fontFamily: "Normal-Font",
    fontSize: 14,
    position: "absolute",
    color: "#FFFFFF",
    bottom: 200,
    left: 20,
    paddingRight: 100,
    lineHeight: 20,
  },
  box: {
    padding: 10,
    borderBottomWidth: 4,
    borderBottomColor: "#D81159",
    position: "absolute",
    width: 180,
    bottom: 140,
    left: 25,
  },
  text: {
    fontFamily: "Normal-Font",
    fontSize: 20,
    color: "#FFFFFF",
    alignSelf: "center",
  },
  box2: {
    padding: 10,
    borderBottomWidth: 4,
    borderBottomColor: "transparent",
    position: "absolute",
    width: 180,
    bottom: 140,
    right: 25,
    opacity: 0.5,
  },
  text2: {
    fontFamily: "Normal-Font",
    fontSize: 20,
    color: "#FFFFFF",
    alignSelf: "center",
  },
  SignInBottom: {
    width: 360,
    height: 78,
    position: "absolute",
    bottom: 40,
  },
});

export default SignInScreen;
