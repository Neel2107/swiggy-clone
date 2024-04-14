import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Dineout from "../../assets/images/home/dineout.svg";
import Instamart from "../../assets/images/home/instamart.svg";
import Gifts from "../../assets/images/home/gifts.svg";
import Minis from "../../assets/images/home/minis.svg";
import { Link, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const HomeCards = () => {
  const route = useRouter();
  return (
    <View className="flex mb-4  flex-row  justify-evenly">
      <View className="flex flex-col   space-y-4">
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => route.push("/home/food")}
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
          className="rounded-[20px] flex flex-col  bg-white  overflow-hidden "
        >
          <Text className="text-lg font-extrabold px-3 pt-3 text-[#414345] tracking-[-0.5px]">
            FOOD DELIVERY
          </Text>
          <Text className="text-sm font-bold px-3 text-zinc-400">
            <Text className="text-xl text-[#f4604a] font-extrabold">one</Text>{" "}
            FOOD FIESTA
          </Text>
          <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            colors={["transparent", "#f2641d3d"]}
            style={{ borderRadius: 20, marginLeft: 5 }}
          >
            <View style={{ overflow: "hidden" }}>
              <Text className="text-xs font-bold px-3 text-primary">
                UP TO 60% OFF + FREE DEL
              </Text>
            </View>
          </LinearGradient>
          <View className="h-36 relative overflow-hidden">
            <View className="absolute -bottom-10 -right-10">
              <Image
                className="h-36 w-36 object-contain"
                source={require("../../assets/images/home/home.png")}
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => route.push("/home/dineout")}
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
          className="rounded-[20px] flex flex-col  bg-white w-full   overflow-hidden "
        >
          <Text className="text-lg px-3 pt-3 font-extrabold text-[#414345] tracking-[-0.5px]">
            DINEOUT
          </Text>
          <Text className="text-sm font-bold px-3 text-zinc-400">
            EATOUT AND CELEBRATE
          </Text>
          <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            colors={["transparent", "#f2641d3d"]}
            style={{ borderRadius: 20, marginLeft: 5, marginTop: 5 }}
          >
            <Text className="text-xs font-bold px-3  text-primary">
              FLAT 50% OFF
            </Text>
          </LinearGradient>
          <View className="h-28 relative overflow-hidden">
            <View className="absolute -bottom-0 -right-0">
              <Dineout />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View className="flex flex-col space-y-4">
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => route.push("/home/instamart")}
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
          className="rounded-[20px] flex flex-col  bg-white  overflow-hidden "
        >
          <Text className="text-lg px-3 pt-3 font-extrabold text-[#414345] tracking-[-0.5px]">
            INSTAMART
          </Text>
          <Text className="text-sm font-bold px-3 text-zinc-400">
            FESTIVAL ESSNETIALS
          </Text>
          <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            colors={["transparent", "#f2641d3d"]}
            style={{ borderRadius: 20, marginLeft: 5, marginTop: 10 }}
          >
            <Text className="text-xs font-bold px-3 text-primary">
              FREE DELIVERY
            </Text>
          </LinearGradient>
          <View className="h-24 relative overflow-hidden">
            <View className="absolute -bottom-5 -right-0">
              <Instamart />
            </View>
          </View>
        </TouchableOpacity>

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
          className="rounded-[20px] flex flex-col  bg-white  overflow-hidden "
        >
          <Text className="text-lg px-3 pt-3 font-extrabold text-[#414345] tracking-[-0.5px]">
            GENIE
          </Text>
          <Text className="text-sm font-bold px-3 text-zinc-400">
            PICK-UP & DROP
          </Text>

          <View className="h-10 relative overflow-hidden">
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
            elevation: 2,
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
