import React from "react";
import { Link, Tabs } from "expo-router";
import Swiggy from "../../assets/images/bottom-tab/swiggy-gray.svg";
import SwiggyInactive from "../../assets/images/bottom-tab/swiggy-inactive.svg";
import FoodInactive from "../../assets/images/bottom-tab/food-gray.svg";
import FoodInactive2 from "../../assets/images/bottom-tab/food-gray-2.svg";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import FoodActive from "../../assets/images/bottom-tab/food-active.svg";
import Food from "../../assets/images/bottom-tab/food-gray.svg";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#36393c",
        tabBarStyle: {
          height: 65,
          elevation: 10, // for Android
          shadowOpacity: 0.5, // for iOS
          shadowRadius: 10, // for iOS
          shadowColor: "#000", // for iOS
          shadowOffset: { width: 0, height: -2 },
        },

        tabBarLabelStyle: {
          fontSize: 14,
          marginBottom: 3,
          fontWeight: "500",
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
              <Swiggy fontSize={20} color={color} />
            ) : (
              <SwiggyInactive fontSize={20} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="food"
        options={{
          title: "Food",
          tabBarLabel: "Food",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
             <FoodActive fontSize={20} color={color} />
            ) : (
             <Food fontSize={20} color={color}/>
            ),
        }}
      />
      <Tabs.Screen
        name="instamart"
        options={{
          title: "instamart",
          tabBarLabel: "Instamart",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="cart-sharp" size={30} color="#36393c" />
            ) : (
              <Ionicons name="cart-outline" size={30} color="#93959F" />
            ),
        }}
      />
      <Tabs.Screen
        name="dineout"
        options={{
          title: "dineout",
          tabBarLabel: "Dineout",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <MaterialCommunityIcons name="medal" size={30} color="#36393c" />
            ) : (
              <MaterialCommunityIcons
                name="medal-outline"
                size={30}
                color="#93959F"
              />
            ),
        }}
      />
      <Tabs.Screen
        name="credit-card"
        options={{
          title: "credit-card",
          tabBarLabel: "Credit Card",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="card" size={30} color="#36393c" />
            ) : (
              <Ionicons name="card-outline" size={30} color="#93959F" />
            ),
        }}
      />
    </Tabs>
  );
}
