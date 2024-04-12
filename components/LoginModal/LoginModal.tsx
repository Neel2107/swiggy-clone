import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { useRouter } from "expo-router";

interface LoginModalProps {
  handleModalDismiss: () => void;
}
const LoginModal: React.FC<LoginModalProps> = ({ handleModalDismiss }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const isValidNumber = phoneNumber.length === 10;
  const route = useRouter();

  return (
    <View className="flex-1 flex flex-col space-y-4">
      <View className="flex  flex-col px-4 ">
        <Text className="text-lg font-bold">LOGIN</Text>
        <Text className="text-sm text-zinc-500">
          Enter your phone number to proceed
        </Text>

        <View className="flex flex-col   my-5 ">
          <Text className="font-semibold text-zinc-500">PHONE NUMBER</Text>
          <TextInput
            onChangeText={setPhoneNumber}
            mode="flat"
            cursorColor="#fc801a"
            inputMode="numeric"
            keyboardType="numeric"
            left={
              <TextInput.Affix
                textStyle={{ paddingLeft: 0, marginLeft: -15 }}
                text="+91"
              />
            }
            maxLength={10}
            activeUnderlineColor="#fc801a"
            underlineColor="#fc801a"
            value={phoneNumber}
            style={{ height: 30 }}
            className=" p-0"
            contentStyle={{ paddingLeft: 40 }}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          className={`w-full rounded-md ${
            isValidNumber ? "bg-primary" : "bg-[#ffc695]"
          } flex items-center justify-center py-4 mt-4`}
          disabled={!isValidNumber}
          onPress={() => {
            handleModalDismiss();
            route.push("/(login)/verify");
          }}
        >
          <Text className="font-semibold text-base text-white">CONTINUE</Text>
        </TouchableOpacity>

        <Text className="text-sm pl-2 text-zinc-500 mt-3">
          By clicking, I accept the{" "}
          <Text className="font-semibold text-black">Terms & Conditions</Text> &{" "}
          <Text className="font-semibold text-black">Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginModal;
