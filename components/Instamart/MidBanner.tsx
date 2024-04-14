import { View, Text, Image } from "react-native";
import React from "react";

const MidBanner = () => {
  return (
    <View className="mt-4   flex flex-row items-center justify-center space-x-4 bg-[#ffdaeb]">
      <Image
      className="w-24 h-24"
      source={require("../../assets/images/instamart/ice-choc.png")} />
      <View className="flex flex-col items-center space-x-2">
        <Text className="text-lg text-[#4d072f] font-extrabold">
          FREE 750ML ICECREAM
        </Text>
        <Text className="text-zinc-600 font-bold">
          on all orders above ₹999
        </Text>
      </View>
    </View>
  );
};

export default MidBanner;
