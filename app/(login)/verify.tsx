import React, { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Verify from "../../assets/images/verify/phone-2.svg";
import { useRouter } from "expo-router";
import firestore from "@react-native-firebase/firestore";
import { useAppContext } from "@/context/AppContext";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
const CELL_COUNT = 6;

const VerifyScreen = () => {
  const inests = useSafeAreaInsets();
  const route = useRouter();
  const [code, setCode] = useState("");
  const { confirmation, userPhoneNumber } = useAppContext();
  const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  });


// ...

const confirmCode = async () => {
  console.log("code", code);
  if (code.length === 6) {
    try {
      await confirmation.confirm(code);
      route.push("/home/");
    } catch (error) {
      console.log(error);
      ToastAndroid.show("Invalid OTP. Please try again.", ToastAndroid.SHORT);
    }
  }
};

 
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
            OTP sent to {userPhoneNumber}
          </Text>
        </View>
        <View className="self-end ">
          <Verify fontSize={24} />
        </View>
      </View>
      <View className="flex flex-col px-4 mt-10">
        <Text className="text-[#8b8a8d]  ">ENTER OTP</Text>
        <View className="h-16  flex justify-end  w-full">
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={code}
            onChangeText={setCode}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            autoComplete={Platform.select({
              android: "sms-otp",
              default: "one-time-code",
            })}
            testID="my-code-input"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                className="text-zinc-500"
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
        <Text className="text-[#8b8a8d] mt-4">
          Didn't receive the OTP?
          {/* Retry in 00:24 */}
        </Text>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={confirmCode}
          className={`w-full rounded-md ${
            code.length === 6 ? "bg-primary" : "bg-[#fed8ba]"
          }  flex items-center justify-center py-4 mt-10`}
        >
          <Text className="font-semibold text-base text-white">
            VERIFY AND PROCEED
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifyScreen;
const styles = StyleSheet.create({
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderBottomWidth: 2,

    borderColor: "#fc801a",
    textAlign: "center",
  },
  focusCell: {
    borderColor: "#fc801a",
  },
});
