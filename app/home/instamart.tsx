import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";

export default function TabTwoScreen() {
  const [fontsLoaded, fontError] = useFonts({
    ProximaNovaBold: require("../../assets/fonts/ProximaNovaBold.otf"),
  });

  console.log("fontError", fontError);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View className=" flex-1 flex items-center  justify-center">
      <Text style={{ fontFamily: "ProximaNovaBold" }} className="text-xl font-extrabold">Tab Two</Text>
    </View>
  );
}
