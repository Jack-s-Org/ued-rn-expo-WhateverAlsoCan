import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";

const LogInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.LogInBox}
        onPress={() => {
          navigation.replace("Main", { screen: "Home" });
        }}
      >
        <Text style={styles.LogInText}>LOG IN</Text>
      </TouchableOpacity>

      <Image
        source={require("@/assets/LogInPage/LogIn_Logo.png")}
        resizeMode="contain"
        style={styles.Logo}
      ></Image>

      {/* Username Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>USERNAME</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>PASSWORD</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
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
  LogInBox: {
    position: "absolute",
    width: 360,
    height: 47,
    backgroundColor: "#D81159",
    borderRadius: 6,
    top: 400,
  },
  LogInText: {
    fontFamily: "Normal-Font",
    fontSize: 16,
    color: "#0F0F0F",
    alignSelf: "center",
    top: 16,
  },
  inputContainer: {
    width: "94%",
    marginBottom: 20,
    top: -140,
  },
  label: {
    fontFamily: "Normal-Font",
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 5,
  },
  input: {
    height: 50,
    width: "100%",
    borderColor: "#D81159",
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: "#1E1E1E",
    color: "#fff",
    paddingHorizontal: 10,
  },
  Logo: {
    width: 84,
    height: 47,
    position: "absolute",
    top: 110,
    left: 20,
  },
});

export default LogInScreen;
