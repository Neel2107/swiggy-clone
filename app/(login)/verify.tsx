import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Verify from "../../assets/images/verify/phone-2.svg";
import { useRouter } from "expo-router";
 const VerifyScreen = () => {
  const inests = useSafeAreaInsets();
  const route = useRouter();
  return (
    <View
      style={{ paddingTop: inests.top }}
      className="flex-1 flex-col bg-white"
    >
      <View className="h-40 bg-[#f2f6fc] flex flex-row justify-between items-center px-4">
        <View className="flex  flex-col ">
          <Text className="text-xl text-[#292c42] font-bold">
            VERIFY DETAILS
          </Text>
          <Text className="text-sm mt-2 text-[#8b8a8d] ">
            OTP sent to 7779034621
          </Text>
        </View>
        <View className="self-end ">
          <Verify fontSize={24} />
          
        </View>
      </View>
      <View className="flex flex-col px-4 mt-10">
        <Text className="text-[#8b8a8d]  ">ENTER OTP</Text>
        <View className="h-20 bg-blue-100 w-full">

        </View>
        <Text className="text-[#8b8a8d] mt-4">Didn't receive the OTP? Retry in 00:24</Text>

        <TouchableOpacity
          activeOpacity={0.7}
        onPress={() => route.push("/home/")}
          className="w-full rounded-md bg-[#fed8ba] flex items-center justify-center py-4 mt-10"
        >
          <Text className="font-semibold text-base text-white">VERIFY AND PROCEED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifyScreen;
