import {
  View,
  Text,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Star from "../../assets/images/food-page/star.svg";
import { FoodCardsData } from "@/utils/foodCards";
import { ExclusiveData } from "@/utils/exclusive";
import Svg, { Path } from "react-native-svg";

interface FoodCard {
  id: number;
  img: any;
  title: string;
  old: string;
  new: string;
  offer: string;
}
const Exclusive = () => {
  const renderItem = ({ item }: { item: FoodCard }) => {
    return (
      <View className="relative flex flex-col space-y-1  mx-2">
        <View className="rounded-md border  border-zinc-100">
          <ImageBackground
            style={{ borderRadius: 20 }}
            className=" flex justify-end  rounded-md w-[128px] h-[128px]"
            source={item.img}
          ></ImageBackground>
        </View>
        <View className="absolute bg-primary rounded-tl-md rounded-br-md px-1 -top-1 left-0">
          <Text className="text-xs text-white">{item.offer}</Text>
          <Text className="text-xs text-white">OFF</Text>
        </View>
        <Text className="text-base text-zinc-700  font-extrabold ">
          {item.title}
        </Text>
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-col">
            <Text className="text-xs text-zinc-400  font-thin line-through ">
              {item.old}
            </Text>
            <Text className="text-sm text-zinc-700 font-extrabold">
              {item.new}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.02,
              shadowRadius: 20,
              elevation: 1,
            }}
            activeOpacity={0.6}
            className="border px-2 py-1 bg-white border-zinc-200 rounded-md"
          >
            <Text className="font-extrabold text-green-600">ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View className="ml-4  pt-4 flex flex-col space-y-4">
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center space-x-2">
          <Text className="text-lg font-bold tracking-widest">
            TRENDING NEAR YOU
          </Text>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#bcbcc7", "#a8a8b7", "#fff"]}
            style={{ height: 1, width: "30%" }}
          />
        </View>
        <Text className="text-sm text-primary mr-4 font-bold tracking-tighter">
          See All
        </Text>
      </View>
      <View>
        <FlatList
          data={ExclusiveData}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default Exclusive;
