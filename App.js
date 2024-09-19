import RootNavigator from "./screens/RootNavigator";
import "./gesture-handler";
import { useFonts } from "expo-font";
import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";
import { /*View,*/ Image, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import VideoPlayer from "@/components/VideoPlayer";

// const Icon = createIconSetFromIcoMoon(
//   // require("@/assets/icomoon/selection.json"),
//   // "IcoMoon",
//   // "icomoon.ttf"
// );

// export default function App() {
//   const [fontsLoaded] = useFonts({
//     // IcoMoon: require("@/assets/icomoon/icomoon.ttf"),
//     // "Gilroy-Regular": require("./"),
//   });

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={{ height: "100%" }}>
//         {/* <RootNavigator /> */}
//         {/* <Icon name="Home-icon" size={32} />
//       <Image source={require("@/assets/Home.png")} />
//       <Text>Hello</Text> */}
//         <VideoPlayer />
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// }

export default function App() {
  const [fontsLoaded] = useFonts({
    "F1-Bold": require("./assets/fonts/Formula1-Bold.otf"),
    "F1-Regular": require("@/assets/fonts/Formula1-Regular.otf"),
    "Normal-Font": require("@/assets/fonts/Bahnschrift.ttf"),
    // "Sofia-bold": require("./assets/fonts/static/SofiaSans-Bold.ttf"),
    // "Sofia-semi-bold": require("./assets/fonts/static/SofiaSans-SemiBold.ttf"),
    // "Sofia-bold-italic": require("./assets/fonts/static/SofiaSans-BlackItalic.ttf"),
  });

  if (!fontsLoaded) {
    return <View />; // or <Text>Loading fonts...</Text>
  }

  return (
    // <SafeAreaView>
    <RootNavigator />
    // </SafeAreaView>
  );
}
