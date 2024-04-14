import React, { useCallback, useMemo, useRef } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { List } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Accordion from "@/components/Accordion/Accordion";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import LoginModal from "@/components/LoginModal/LoginModal";
import { StatusBar } from "expo-status-bar";
const LoginScreen = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["50%", "97%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleModalDismiss = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  },[])
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  return (
    <View className="flex-1 flex flex-col  bg-white ">
      <StatusBar style="dark" />
      <BottomSheetModal
        handleIndicatorStyle={{ backgroundColor: "transparent" }}
        backdropComponent={({ style }) => (
          <TouchableOpacity
            style={[
              style,
              {
                backgroundColor: "rgba(0,0,0,0.3)",
              },
            ]}
            activeOpacity={1}
            onPress={handleModalDismiss}
          />
        )}
        ref={bottomSheetModalRef}
    
        // snapPoints={snapPoints}
        snapPoints={["55%", "97%"]}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={{ flex: 1 }}>
          <LoginModal handleModalDismiss={handleModalDismiss} />
        </BottomSheetView>
      </BottomSheetModal>
      <View className="h-60 px-4 bg-[#f2f6fc] relative">
        <View className="mt-8  " style={{ width: 200 }}>
          <Text
            className="text-[70px] tracking-[-3px]  text-[#dde0e8] font-[900]  "
            style={{ lineHeight: 70 }}
          >
            LIVE FOR FOOD
          </Text>
        </View>
        <View
          className="bg-white rounded-full w-40 h-40 absolute top-10 left-36 flex items-center justify-center"
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <Image
            source={require("../../assets/images/login/wrap.png")}
            className="w-28 h-28"
          />
        </View>
      </View>
      <View className="flex mt-8  flex-col px-4 ">
        <Text className="text-lg font-bold">ACCOUNT</Text>
        <Text className="text-sm text-zinc-500">
          Login/Create Account to manage orders
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handlePresentModalPress}
          className="w-full rounded-md bg-primary flex items-center justify-center py-4 mt-4"
        >
          <Text className="font-semibold text-base text-white">LOGIN</Text>
        </TouchableOpacity>
        <Text className="text-sm pl-2 text-zinc-500 mt-3">
          By clicking, I accept the{" "}
          <Text className="font-semibold text-black">Terms & Conditions</Text> &{" "}
          <Text className="font-semibold text-black">Privacy Policy</Text>
        </Text>
        <View className="h-[1px] bg-black w-full mt-10" />

        <Accordion />
      </View>
      <View className="flex-1 w-full bg-[#f4f4f5]">
        <Text className="text-center mt-5 text-zinc-500">
          App version 5.0.4 (7)
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
