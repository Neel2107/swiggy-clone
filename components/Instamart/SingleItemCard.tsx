import { View, Text, Image, FlatList, ImageBackground } from "react-native";
import React from "react";
import { InstamartCardsData } from "@/utils/instamartCards";
import { singleCardData } from "@/utils/singleCards";

interface FoodCard {
  id: number;
  img: any;
  title: string;
  offer: string;
}
const SingleItemCard = () => {
  const renderItem = ({ item }: { item: FoodCard }) => {
    return (
      <View className="relative  mx-2">
        <View className="rounded-[20px] bg-[#85155f] overflow-hidden flex flex-col space-y-2 p-2">
        <Text className="text-center text-xs font-extrabold text-[#fff] mt-2">
            {item.offer}
          </Text>
          <Text className="text-center text-xl font-extrabold text-[#fff] ">
            {item.title}
          </Text>
          <Image
            style={{ borderRadius: 20 }}
            className=" flex justify-end  rounded-md w-[150px] h-[150px]"
            source={item.img}
          />
        </View>
      </View>
    );
  };

  return (
    <View className="ml-4  pt-4 flex flex-col space-y-4">
      <View>
        <FlatList
          data={singleCardData}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default SingleItemCard;
