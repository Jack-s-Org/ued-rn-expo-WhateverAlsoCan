import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import NewsScreen from "./NewsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MeScreen from "./MeScreen";
import LeaderboardScreen from "./LeaderboardScreen";
import AppDrawer from "./AppDrawer";
import SettingsScreen from "./SettingsScreen";
import AddScreen from "./AddScreen";
import Octicons from "@expo/vector-icons/Octicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import LiveScreen from "./LiveScreen";
import LogInScreen from "./LogInScreen";

const MainStacks = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = ({ navigation }) => {
  return (
    <AppDrawer navigation={navigation}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#D81159",
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 92,
            backgroundColor: "#000000",
            opacity: 1,
            paddingBottom: 26,
            paddingHorizontal: 5,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons name="home" size={24} color={color} />
            ),
            tabBarLabel: "Home",
          }}
        />

        <Tab.Screen
          name="Leaderboard"
          component={LeaderboardScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="Trophy" size={24} color={color} />
            ),
            tabBarLabel: "Leaderboard",
          }}
        />

        <Tab.Screen
          name="Live"
          component={LiveScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="record-circle-outline"
                size={40}
                color={color}
              />
            ),
            tabBarLabel: "Live",
          }}
        />

        <Tab.Screen
          name="News"
          component={NewsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="newspaper-variant-outline"
                size={24}
                color={color}
              />
            ),
            tabBarLabel: "News",
          }}
        />

        <Tab.Screen
          name="SettingsDrawer"
          component={MeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="user" size={24} color={color} />
            ),
            tabBarLabel: "Me",
          }}
        />
      </Tab.Navigator>
    </AppDrawer>
  );
};

const MainScreens = () => {
  return (
    <MainStacks.Navigator>
      <MainStacks.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Add"
        component={AddScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="News"
        component={NewsScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="Live"
        component={LiveScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="LogIn"
        component={LogInScreen}
        options={{ animation: "fade_from_bottom", headerShown: false }}
      />
    </MainStacks.Navigator>
  );
};

export default MainScreens;
