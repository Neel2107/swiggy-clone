import { View, Text, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const FoodOffers = () => {
  return (
    <View className="mx-4  pt-4 flex flex-col space-y-4">
      <View className="flex flex-row items-center space-x-2">
        <Text className="text-lg font-bold tracking-widest">OFFERS FOR YOU</Text>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#bcbcc7", "#a8a8b7", "#fff"]}
          style={{ height: 1, width: "50%" }}
        />
       
      </View>
      <View className="flex flex-row justify-between items-center">

     
      <View className="flex flex-row items-center justify-between">
      <LinearGradient
  start={{ x: 1, y: 0 }}
  end={{ x: 0, y: 0 }}
  colors={['#f2641d3d', 'transparent']}
  style={{ borderRadius: 20, paddingRight: 10,  }}
>
  <View className="flex flex-row  items-center s">
    <Image
      source={require("../../assets/images/food-page/user.png")}
      className="h-20 w-20 rounded-full"
    />
    <View className="flex flex-col ">
      <Text className="text-lg font-extrabold text-primary">Pocket Hero</Text>
      <Text className="text-[#f2641dab]">Up to 60% off</Text>
    </View>
  </View>
</LinearGradient>

      </View>
      <View className="flex flex-row items-center justify-between">
      <LinearGradient
  start={{ x: 1, y: 0 }}
  end={{ x: 0, y: 0 }}
  colors={['#8fb0f6ab', 'transparent']}
  style={{ borderRadius: 20, paddingRight: 10, paddingVertical: 10,  }}
>
  <View className="flex flex-row  items-center s">
    <Image
      source={require("../../assets/images/food-page/box.png")}
      className="h-16 w-16 rounded-full"
    />
    <View className="flex flex-col ">
      <Text className="text-lg font-extrabold text-[#0653bb]">MORE DEALS</Text>
      <Text className="text-[#0654bb7a]">Buy1 & Get1</Text>
    </View>
  </View>
</LinearGradient>

      </View>
      </View>
    </View>
  );
};

export default FoodOffers;
