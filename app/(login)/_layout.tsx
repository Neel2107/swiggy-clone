import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Stack, Tabs, useRouter } from "expo-router";
import { Pressable, Text, TouchableOpacity, useColorScheme } from "react-native";

import Colors from "@/constants/Colors";

import { AntDesign } from "@expo/vector-icons";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const route = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "",
          headerLeft: () => (
            <TouchableOpacity className="">
              <AntDesign name="arrowleft" size={24} color="#848692" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="verify"
        
        options={{
          title: "",
         headerTransparent:true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => route.back()} className="">
              <AntDesign name="arrowleft" size={24} color="#848692" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}

{
  /* <Tabs
screenOptions={{
  tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
  // Disable the static render of the header on web
  // to prevent a hydration error in React Navigation v6.
  headerShown: useClientOnlyValue(false, true),
}}
>
<Tabs.Screen
  name="index"
  options={{
    title: "",
    headerLeft: () => (
      <TouchableOpacity className="px-4">
        <AntDesign name="arrowleft" size={24} color="#848692" />
      </TouchableOpacity>
    ),
    // remove the tabBarIcon property
  }}
/>
<Tabs.Screen
  name="verify"
  options={{
    title: "",
    // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
    headerLeft: () => (
      <TouchableOpacity>
        <Text>back</Text>
      </TouchableOpacity>
    ),
  }}
/>
</Tabs> */
}
