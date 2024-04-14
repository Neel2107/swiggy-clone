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
      <View className="rounded-[20px] bg-[#85155f] flex flex-col  space-y-2 mx-2">
        <Text className="text-center text-xs font-extrabold text-[#fff] mt-2">
          {item.offer}
        </Text>
        <Text
          className="text-center  text-xl font-extrabold text-[#fff] "
          style={{ lineHeight: 20 }}
        >
          {item.title}
        </Text>
        <View className="">
          <Image className="  w-[170px] h-[170px]" source={item.img} />
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
