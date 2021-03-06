/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabPortraitScreen from "../screens/TabPortraitScreen";
import TabCharactersScreen from "../screens/TabCharactersScreen";
import TabMomentsScreen from "../screens/TabMomentsScreen";
import TabAboutItScreen from "../screens/TabAboutItScreen";

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { View, Text } from "../components/Themed";
import TabMyLifeScreen from "../screens/TabMyLifeScreen";
import TabContactScreen from "../screens/TabContactScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

const Comp = () => {
  return (
    <View>
      <Text>fs</Text>
    </View>
  );
};

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="characters"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="portrait"
        component={TabPortraitScreen}
        options={({ navigation }: RootTabScreenProps<"portrait">) => ({
          title: "Portada",

          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="characters"
        component={TabCharactersScreen}
        options={({ navigation }: RootTabScreenProps<"characters">) => ({
          title: "Personajes",
          tabBarIcon: ({ color }) => <TabBarIcon name="users" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="moments"
        component={TabMomentsScreen}
        options={({ navigation }: RootTabScreenProps<"moments">) => ({
          title: "Momentos",
          tabBarIcon: ({ color }) => <TabBarIcon name="image" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="aboutIt"
        component={TabAboutItScreen}
        options={({ navigation }: RootTabScreenProps<"aboutIt">) => ({
          title: "Acerca De",
          tabBarIcon: ({ color }) => <TabBarIcon name="info" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="myLife"
        component={TabMyLifeScreen}
        options={({ navigation }: RootTabScreenProps<"myLife">) => ({
          title: "En Mi Vida",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="history" color={color} />
          ),
        })}
      />
      <BottomTab.Screen
        name="contact"
        component={TabContactScreen}
        options={({ navigation }: RootTabScreenProps<"contact">) => ({
          title: "Contratame",
          tabBarIcon: ({ color }) => <TabBarIcon name="github" color={color} />,
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
