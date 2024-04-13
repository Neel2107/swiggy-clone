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
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import CarouselComp from "@/components/Carousel/Carousel";
import FoodCards from "@/components/FoodCards/FoodCards";
import FoodOffers from "@/components/FoodCards/FoodOffers";
import Trusted from "@/components/FoodCards/Trusted";
import SearchBarComp from "@/components/LoginModal/SearchBar";
import InstamartCards from "@/components/Instamart/InstamartCards";
import MidBanner from "@/components/Instamart/MidBanner";
import SingleItemCard from "@/components/Instamart/SingleItemCard";

export default function TabTwoScreen() {
  const inests = useSafeAreaInsets();
  return (
    <View className="flex-1 items-center justify-center">
      <StatusBar style="dark" />
      <LinearGradient
        // Background Linear Gradient
        colors={["#ffdfee", "#fff"]}
        style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <View
          style={{ paddingTop: inests.top }}
          className="flex-1 min-h-screen flex flex-col "
        >
          <View className="flex mt-2 flex-row justify-between px-4 items-center">
            <View className="flex space-x-2 flex-row">
              <View className="flex flex-col px-2 rounded-[8px] bg-primary">
                <Text className="text-base text-center font-bold text-white">
                  10
                </Text>
                <Text className="text-xs font-bold text-white">MINS</Text>
              </View>
              <View className="flex flex-col">
                <View className="flex flex-row items-center ">
                  <Text className="text-base font-bold">
                    {truncateText("Delivery to Salarpuria Sattava College", 30)}
                  </Text>
                  <View className="mt-1 ml-2">
                    <Feather name="chevron-down" size={17} color="#121212" />
                  </View>
                </View>
                <Text className="text-zinc-500">
                  {truncateText("1920, Calyso, Candenza, Kuldu Main Road", 36)}
                </Text>
              </View>
            </View>
            <View className="flex flex-row space-x-2">
              <View className="bg-[#4d4f54]  rounded-full p-2">
                <Ionicons name="person" size={24} color="white" />
              </View>
            </View>
          </View>
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingBottom: 50 }}
          >
            <SearchBarComp />
            {/* <CarouselComp /> */}
            <View className="flex items-center justify-center">
              <Image
                className="w-[100%] h-32 object-contain  mt-4"
                source={require("../../assets/images/instamart/mega-fest.png")}
              />
            </View>
            <InstamartCards />
            <MidBanner />
            <View className="flex items-center justify-center">
              <Image
                className="w-[100%] h-6 object-contain  mt-4"
                source={require("../../assets/images/instamart/best-price.png")}
              />
            </View>
            <SingleItemCard />
            {/* <FoodCards /> */}
            {/* <FoodOffers /> */}
          </ScrollView>
        </View>
      </LinearGradient>
    </View>
  );
}
