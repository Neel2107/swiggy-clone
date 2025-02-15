import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { truncateText } from "@/utils/helper";
import { Ionicons } from "@expo/vector-icons";
import { Chip, Searchbar } from "react-native-paper";
import HomeCards from "@/components/HomeCards/HomeCards";
import { StatusBar } from "expo-status-bar";
import Membership from "@/components/HomeCards/Membership";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "@/components/Carousel/Carousel";
import CarouselComp from "@/components/Carousel/Carousel";
import FoodCards from "@/components/FoodCards/FoodCards";
import FoodOffers from "@/components/FoodCards/FoodOffers";
import Trusted from "@/components/FoodCards/Trusted";
import SearchBarComp from "@/components/LoginModal/SearchBar";
import One from "../../assets/images/header/one.svg"
import YourMind from "@/components/FoodCards/YourMind";


export default function TabTwoScreen() {
  const inests = useSafeAreaInsets();
  return (
    <View className="flex-1 items-center justify-center">
      <StatusBar style="dark" />
      <LinearGradient
        // Background Linear Gradient
        colors={["#fff0e7", "#fff"]}
        style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <View
          style={{ paddingTop: inests.top }}
          className="flex-1 min-h-screen flex flex-col "
        >
          <View className="flex mt-2 flex-row justify-between pb-1 px-4 items-center">
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
                {truncateText("1920, Calyso, Candenza, Kuldu Main Road", 30)}
              </Text>
            </View>
            <View className="flex flex-row space-x-2">
             
               <View
                className="flex
               items-center justify-center"
              >
                <One />
              </View>
              <View className="bg-[#4d4f54]  rounded-full p-2">
                <Ionicons name="person" size={24} color="white" />
              </View>
            </View>
          </View>
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingBottom: 80 }}
          >
            <SearchBarComp />
            <CarouselComp />
            <FoodCards />
            <FoodOffers />
            <Trusted />
            <YourMind />
          </ScrollView>
        </View>
      </LinearGradient>
    </View>
  );
}
