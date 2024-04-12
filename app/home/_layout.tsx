import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, Text, useColorScheme } from "react-native";
import Swiggy from "../../assets/images/bottom-tab/swiggy-gray.svg";
import SwiggyInactive from "../../assets/images/bottom-tab/swiggy-inactive.svg";
import FoodInactive from "../../assets/images/bottom-tab/food-gray.svg";
import Colors from "@/constants/Colors";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#36393c",
        tabBarStyle: {
          height: 60,
        },
        
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShadowVisible: false,
          title: "Swiggy",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Swiggy fontSize={24} color={color} />
            ) : (
              <SwiggyInactive fontSize={24} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="food"
        options={{
          title: "Food",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <FoodInactive fontSize={24} color={color} />
            ) : (
              <FoodInactive fontSize={24} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="instamart"
        options={{
          title: "instamart",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <FoodInactive fontSize={24} color={color} />
            ) : (
              <FoodInactive fontSize={24} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="dineout"
        options={{
          title: "dineout",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <FoodInactive fontSize={24} color={color} />
            ) : (
              <FoodInactive fontSize={24} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="credit-card"
        options={{
          title: "credit-card",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <FoodInactive fontSize={24} color={color} />
            ) : (
              <FoodInactive fontSize={24} color={color} />
            ),
        }}
      />
    </Tabs>
  );
}
