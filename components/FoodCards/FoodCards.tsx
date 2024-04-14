import { View, Text, Image } from "react-native";
import React from "react";
import Dineout from "../../assets/images/home/dineout.svg";
import Instamart from "../../assets/images/home/instamart.svg";
import Gifts from "../../assets/images/home/gifts.svg";
import Minis from "../../assets/images/home/minis.svg";
import { Link } from "expo-router";
import { useFonts } from "expo-font";

const FoodCards = () => {
  return (
    <View className="flex pt-4 mx-4  flex-row items-center justify-between">
    

      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.001,
          shadowRadius: 20,
          elevation: 2,
        }}
        className="rounded-[20px] flex flex-row w-48 overflow-hidden  bg-white  justify-between   h-24  "
      >
        <Text
          className="text-base px-3 mt-3  font-extrabold text-[#414345] tracking-[-0.5px]"
          style={{ fontFamily: "ProximaNova-Bold" }}
        >
          GUILTFREE{"\n"}OPTIONS
        </Text>
        <View className="relative h-24  bg-red-300  ">
       
          <View className=" absolute bottom-0 -right-0">
          <Image
            className="  h-16 w-24"
            
            source={require("../../assets/images/food-page/guilt-free.png")}
            />
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
          elevation: 2,
        }}
        className="rounded-[20px] flex flex-row w-48 overflow-hidden  bg-white  justify-between   h-24  "
      >
        <Text
          className="text-base px-3 mt-3  font-extrabold text-[#414345] tracking-[-0.5px]"
          style={{ fontFamily: "ProximaNova-Bold" }}
        >
          GOURMET{"\n"}DELIGHT
        </Text>
        <View className="relative h-24  bg-red-300  ">
       
          <View className=" absolute bottom-0 -right-0">
          <Image
            className="  h-16 w-24"
            
            source={require("../../assets/images/food-page/soup.png")}
            />
            </View>
        </View>
      </View>
    </View>
  );
};

export default FoodCards;
  {/* <View
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
        className="rounded-[20px] flex flex-row  bg-white  overflow-hidden "
      >
        <Text
          className="text-base px-3 pt-3 font-extrabold text-[#414345] tracking-[-0.5px]"
          style={{ fontFamily: "ProximaNova-Bold" }}
        >
          FOOD{"\n"}DELIVERY
        </Text>
        <View className="relative overflow-hidden ">
          <Image
            className=""
            source={require("../../assets/images/food-page/coffee.png")}
          />
        </View>
      </View> */}