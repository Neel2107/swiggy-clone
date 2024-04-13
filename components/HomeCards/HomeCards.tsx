import { View, Text, Image } from "react-native";
import React from "react";
import Dineout from "../../assets/images/home/dineout.svg";
import Instamart from "../../assets/images/home/instamart.svg";
import Gifts from "../../assets/images/home/gifts.svg";
import Minis from "../../assets/images/home/minis.svg";
import { Link } from "expo-router";
import { useFonts } from "expo-font";
const HomeCards = () => {

 const [fontsLoaded, fontError] = useFonts({
  'ProximaNovaAltRegular': require('../../assets/fonts/ProximaNovaAltRegular.otf'),
});

console.log("fontError", fontError);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View className="flex mb-4  flex-row items-center justify-evenly">
      <View className="flex flex-col   space-y-4">
        
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
          className="rounded-[20px] flex flex-col  bg-white  overflow-hidden "
        >
          <Text className="text-lg px-3 pt-3 font-[900] text-[#414345] tracking-[-0.5px]" style={{ fontFamily: 'ProximaNovaAltRegular' }}>
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
        {/* <Link className="w-full bg-blue-300" href={"/home/dineout"}> */}
       
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
          className="rounded-[20px] flex flex-col  bg-white w-full   overflow-hidden "
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
              <Dineout />
            </View>
          </View>
        </View>
        {/* </Link> */}
      </View>
      <View className="flex flex-col space-y-4">
        <Link href={"/home/instamart"}>
      
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
          className="rounded-[20px] flex flex-col  bg-white  overflow-hidden "
        >
          <Text className="text-lg px-3 pt-3 font-extrabold text-[#414345] tracking-[-0.5px]">
            INSTAMART
          </Text>
          <Text className="text-sm font-bold px-3 text-zinc-400">
            FESTIVAL ESSNETIALS
          </Text>
          <Text className="text-sm font-bold px-3 text-primary">
            FREE DELIVERY
          </Text>
          <View className="h-36 relative overflow-hidden">
            <View className="absolute -bottom-5 -right-0">
              <Instamart />
            </View>
          </View>
        </View>
        </Link>

       

       
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
          className="rounded-[20px] flex flex-col  bg-white  overflow-hidden "
        >
          <Text className="text-lg px-3 pt-3 font-extrabold text-[#414345] tracking-[-0.5px]">
            GENIE
          </Text>
          <Text className="text-sm font-bold px-3 text-zinc-400">
            PICK-UP & DROP
          </Text>

          <View className="h-20 relative overflow-hidden">
            <View className="absolute -bottom-7 -right-5">
              <Gifts />
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
          className="rounded-[20px] flex flex-col  bg-white  overflow-hidden "
        >
          <Text className="text-lg px-3 pt-3 font-extrabold text-[#414345] tracking-[-0.5px]">
            MINIS
          </Text>
          <Text className="text-sm font-bold px-3 text-zinc-400">
            FESTIVE FINDS
          </Text>

          <View className="h-14 relative overflow-hidden">
            <View className="absolute -bottom-2 -right-0">
              <Minis />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeCards;
