import { View, Text, Image } from "react-native";
import React from "react";
import Dineout from "../../assets/images/home/dineout.svg"

const HomeCards = () => {
  return (
    <View className="flex mt-5 flex-row items-center justify-between">
      <View className="flex flex-col space-y-4">
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.02,
            shadowRadius: 20,
            elevation: 3,
          }}
          className="rounded-[30px] flex flex-col  bg-white  overflow-hidden "
        >
          <Text className="text-lg px-3 pt-3 font-extrabold text-[#414345] tracking-[-0.5px]">
            FOOD DELIVERY
          </Text>
          <Text className="text-sm font-bold px-3 text-zinc-400">
            <Text className="text-xl text-[#f4604a] font-extrabold">one</Text>{" "}
            FOOD FIESTA
          </Text>
          <Text className="text-sm font-bold px-3 text-primary">
            UP TO 60% OFF + FREE DEL
          </Text>
          <View className="h-48 relative overflow-hidden">
            <View className="absolute -bottom-10 -right-5">
              <Image source={require("../../assets/images/home/healty.png")} />
            </View>
          </View>
        </View>
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.02,
            shadowRadius: 20,
            elevation: 3,
          }}
          className="rounded-[30px] flex flex-col  bg-white  overflow-hidden "
        >
          <Text className="text-lg px-3 pt-3 font-extrabold text-[#414345] tracking-[-0.5px]">
            DINEOUT
          </Text>
          <Text className="text-sm font-bold px-3 text-zinc-400">
          
           EATOUT AND CELEBRATE
          </Text>
          <Text className="text-sm font-bold px-3 text-primary">
         FLAT 50% OFF
          </Text>
          <View className="h-36 relative overflow-hidden">
            <View className="absolute -bottom-0 -right-0">
              {/* <Image source={require("../../assets/images/home/dineout.png")} /> */}
              <Dineout/>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeCards;
