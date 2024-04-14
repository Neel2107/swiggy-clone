import { View, Text, Image, FlatList, ImageBackground } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Star from "../../assets/images/food-page/star.svg";
import { FoodCardsData } from "@/utils/foodCards";
import { yourMindData } from "@/utils/yourMindData";

interface FoodCard {
  id: number;
  img: any;
  title: string;
  rating: string;
  time: string;
}
const YourMind = () => {
  const renderItem = ({ item } : { item: FoodCard }) => {
   
    return (
      <View className="relative  mx-2">
        <View className="rounded-md overflow-hidden">

        <ImageBackground
          style={{ borderRadius: 20 }}
          className=" flex justify-end  rounded-md w-[128px] h-[128px]"
          source={item.img}
          // source={require("../../assets/images/food-card/1.png")}
          >
          {/* <Text>{item.title}</Text> */}
        </ImageBackground>
          </View>
       
      </View>
    );
  };

  return (
    <View className="ml-4  pt-4 flex flex-col space-y-4">
      <View className="flex flex-row items-center space-x-2">
        <Text className="text-lg font-bold tracking-widest">
         WHAT'S ON YOUR MIND
        </Text>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#bcbcc7", "#a8a8b7", "#fff"]}
          style={{ height: 1, width: "40%" }}
        />
      </View>
      <View>
        <FlatList
          data={yourMindData}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default YourMind;
