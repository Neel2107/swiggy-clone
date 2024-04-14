import { View, Text, Image, FlatList, ImageBackground } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Star from "../../assets/images/food-page/star.svg";
import { FoodCardsData } from "@/utils/foodCards";
import { InstamartCardsData } from "@/utils/instamartCards";

interface FoodCard {
  id: number;
  img: any;
  title: string;
}
const InstamartCards = () => {
  const renderItem = ({ item }: { item: FoodCard }) => {
    return (
      <View className="relative  mx-2">
        <View className="rounded-[25px] bg-[#ffd4eb] overflow-hidden">
          <Image
            style={{ borderRadius: 20 }}
            className=" flex justify-end  rounded-md w-[90px] h-[90px]"
            source={item.img}
          />
        </View>
        <Text className="text-center text-zinc-700 mt-2">{item.title}</Text>
      </View>
    );
  };

  return (
    <View className="ml-4  pt-4 flex flex-col space-y-4">
      
      <View>
        <FlatList
          data={InstamartCardsData}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default InstamartCards;
