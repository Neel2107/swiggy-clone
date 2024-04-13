import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { truncateText } from "@/utils/helper";
import { Ionicons } from "@expo/vector-icons";
import { Chip } from "react-native-paper";
import HomeCards from "@/components/HomeCards/HomeCards";
import { StatusBar } from "expo-status-bar";
import Membership from "@/components/HomeCards/Membership";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

export default function TabTwoScreen() {
  const inests = useSafeAreaInsets();
  return (
    <View
    style={{ paddingTop: inests.top }}
    className="flex-1 flex flex-col bg-white"
  >
    <StatusBar style="dark" />
    <View className="flex mt-2 flex-row justify-between px-4 items-center">
      <View className="flex flex-col">
        <View className="flex flex-row items-center ">
          <FontAwesome5 name="location-arrow" size={17} color="#fc801a" />
          <Text className="text-base font-bold ml-2">
            {truncateText("Cadena", 30)}
          </Text>
          <View className="mt-1">
            <Feather name="chevron-down" size={17} color="#8b8a8d" />
          </View>
        </View>
        <Text className="text-zinc-500">
          {truncateText("1920, Calyso, Candenza, Kuldu Main Road", 36)}
        </Text>
      </View>
      <View className="flex flex-row space-x-2">
        <View className=" border flex items-center justify-center border-primary  rounded-full px-4 ">
          <Text style={{lineHeight: 20}} className="text-xl   text-[#f4604a]  font-extrabold">one</Text>
        </View>
        <View className="bg-[#4d4f54]  rounded-full p-2">
          <Ionicons name="person" size={24} color="white" />
        </View>
      </View>
    </View>
    <View className="flex flex-col mt-4   ">


        <ScrollView contentContainerStyle={{paddingBottom: 50}}>

       
    <View className="border border-zinc-300 rounded-xl p-4 mx-4 flex flex-row items-center justify-between">
          <TextInput
            placeholder="Search for food, restaurants"
            className="text-zinc-500 w-60 text-base"
          />
          <View className="flex flex-row items-center space-x-3">
            <TouchableOpacity>
              <Fontisto name="search" size={20} color="#6d7072" />
            </TouchableOpacity>
            <View className="h-[20px] w-[1px] bg-[#cccccc]"></View>
            <TouchableOpacity>

            <FontAwesome6 name="microphone" size={20} color="#fc801a" />
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
        </View>
    </View>
  );
}

