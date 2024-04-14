import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Membership = () => {
  return (
    <View className="h-40 py-4 mx-4  ">
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
        className="bg-purple-50 p-4 flex flex-row justify-between h-full rounded-[20px]"
      >
        <View>
          <Text className="text-xl font-extrabold text-zinc-800">
            <Text className="text-2xl text-[#f4604a] font-extrabold">one</Text>{" "}
            memebership has expired
          </Text>
          <Text className="text-base mt-4">
            You're missing membership benefits
          </Text>
          <Text className="text-base">Renew today to enjoy max savings!</Text>
        </View>
        <View className="flex justify-end">
          <TouchableOpacity className="px-4 py-2 bg-[#6541e4] rounded-lg">
            <Text className="text-white font-bold">RENEW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Membership;
