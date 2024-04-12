import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { truncateText } from "@/utils/helper";
import { Ionicons } from "@expo/vector-icons";
import { Chip } from "react-native-paper";
import HomeCards from "@/components/HomeCards/HomeCards";
export default function TabOneScreen() {
  const inests = useSafeAreaInsets();
  return (
    <View
      style={{ paddingTop: inests.top }}
      className="flex-1 flex flex-col bg-white"
    >
      <View className="flex mt-2 flex-row justify-between px-4 items-center">
        <View className="flex flex-col">
          <View className="flex flex-row items-center ">
            <FontAwesome5 name="location-arrow" size={17} color="#fc801a" />
            <Text className="text-base font-bold ml-2">{truncateText("Cadena", 30)}</Text>
            <View className="mt-1">

            <Feather name="chevron-down" size={17}  color="#8b8a8d" />
            </View>
          </View>
          <Text className="text-zinc-500">
            {truncateText("1920, Calyso, Candenza, Kuldu Main Road", 36)}
          </Text>
        </View>
        <View className="flex flex-row space-x-2">
          <View className=" border flex items-center justify-center border-primary rounded-full px-4 ">
            <Text className="text-base font-[900]">one</Text>
          </View>
          <View className="bg-[#4d4f54]  rounded-full p-2">
            <Ionicons name="person" size={24} color="white" />
          </View>
        </View>
      </View>
      <View className="flex flex-col mt-4 px-4 ">
        <View className="border border-zinc-300 rounded-xl p-4">
          <Text className="text-zinc-500">Search1</Text>
        </View>
<View className="h-40">

</View>
       <HomeCards/>
      </View>
    </View>
  );
}
