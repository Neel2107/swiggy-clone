import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { useRouter } from "expo-router";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { useAppContext } from "@/context/AppContext";

interface LoginModalProps {
  handleModalDismiss: () => void;
}
const LoginModal: React.FC<LoginModalProps> = ({ handleModalDismiss }) => {
  const { setConfirmation, userPhoneNumber,
    setUserPhoneNumber, } = useAppContext();
  // const [phoneNumber, setPhoneNumber] = useState("");

const isValidNumber = (userPhoneNumber || "").length === 10; 
 const route = useRouter();

  const signInWithPhoneNumber = async () => {
   
    try {
      const confirmation = await auth().signInWithPhoneNumber(
        `+91${userPhoneNumber}`
      );
      // console.log("confirmation", confirmation);
      setConfirmation(confirmation);
      route.push("/(login)/verify");
    } catch (error) {
      console.log(error);
    }
  };

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
            onChangeText={setUserPhoneNumber}
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
            value={userPhoneNumber}
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
            signInWithPhoneNumber();
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
