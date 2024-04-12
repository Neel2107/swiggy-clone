import React from "react";
import { Link, Tabs } from "expo-router";
import Swiggy from "../../assets/images/bottom-tab/swiggy-gray.svg";
import SwiggyInactive from "../../assets/images/bottom-tab/swiggy-inactive.svg";
import FoodInactive from "../../assets/images/bottom-tab/food-gray.svg";
import { Text, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#36393c",
        tabBarStyle: {
          height: 60,
        },
        // headerShadowVisible: false,
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
