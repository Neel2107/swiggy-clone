import * as React from "react";
import { ScrollView } from "react-native-gesture-handler";
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";

// import { SBItem } from "../../components/SBItem";
// import SButton from "../../components/SButton";
// import { ElementsText, window } from "../../constants";
import { Image, Text, View, useWindowDimensions } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { Dimensions, ScaledSize } from "react-native";
import { carouselItems } from "@/utils/data";

const window: ScaledSize = Dimensions.get("window");
const PAGE_WIDTH = window.width;

const CarouselComp = () => {
  const windowWidth = useWindowDimensions().width;
  const scrollOffsetValue = useSharedValue<number>(0);
  
  const ref = React.useRef<ICarouselInstance>(null);
  const baseOptions = ({
        vertical: false,
        width: windowWidth,
        height: PAGE_WIDTH / 2,
      } as const);
  return (
    <SafeAreaView
      className="mx-4    mt-5"
      edges={["bottom"]}
      style={{ flex: 1 }}
    >
      <Carousel
        {...baseOptions}
        loop
        enabled // Default is true, just for demo
        ref={ref}
        defaultScrollOffsetValue={scrollOffsetValue}
        testID={"xxx"}
        style={{ width: "100%" }}
        autoPlay={true}
        autoPlayInterval={4000}
        data={carouselItems}
        // onScrollStart={()=>{console.log('===1')}}
        // onScrollEnd={()=>{console.log('===2')}}

        onConfigurePanGesture={(g) => g.enabled(false)}
        pagingEnabled={true}
        // onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ item }) => (
          <View className="border border-zinc-200 rounded-md w-[92%]">
          <Image
          
          source={item.image}
          className="h-full  rounded-md w-full object-cover"
          />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default CarouselComp;
