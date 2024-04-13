import * as React from "react";
import { ScrollView } from "react-native-gesture-handler";
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";
 
// import { SBItem } from "../../components/SBItem";
// import SButton from "../../components/SButton";
// import { ElementsText, window } from "../../constants";
import {  Text, useWindowDimensions } from "react-native";
import { useSharedValue } from "react-native-reanimated";import { Dimensions, ScaledSize } from "react-native";

const window: ScaledSize = Dimensions.get("window");
const PAGE_WIDTH = window.width;

const CarouselComp = () => {
    const windowWidth = useWindowDimensions().width;
  const scrollOffsetValue = useSharedValue<number>(0);
  const [data, setData] = React.useState([...new Array(4).keys()]);
  const [isVertical, setIsVertical] = React.useState(false);
  const [isFast, setIsFast] = React.useState(false);
  const [isAutoPlay, setIsAutoPlay] = React.useState(false);
  const [isPagingEnabled, setIsPagingEnabled] = React.useState(true);
  const ref = React.useRef<ICarouselInstance>(null);
    const baseOptions = isVertical
    ? ({
      vertical: true,
      width: windowWidth,
      height: PAGE_WIDTH / 2,
    } as const)
    : ({
      vertical: false,
      width: windowWidth,
      height: PAGE_WIDTH / 2,
    } as const);
  return (
    <SafeAreaView className="mx-4 h-20 bg-blue-300 mt-5" edges={["bottom"]} style={{ flex: 1 }}>

<Carousel
        {...baseOptions}
        loop
        enabled // Default is true, just for demo
        ref={ref}
        defaultScrollOffsetValue={scrollOffsetValue}
        testID={"xxx"}
        style={{ width: "100%" }}
        autoPlay={isAutoPlay}
        autoPlayInterval={isFast ? 100 : 2000}
        data={data}
        
        // onScrollStart={()=>{console.log('===1')}}
        // onScrollEnd={()=>{console.log('===2')}}
 
        onConfigurePanGesture={g => g.enabled(false)}
        pagingEnabled={isPagingEnabled}
        onSnapToItem={index => console.log("current index:", index)}
        renderItem={({ index }) =><Text key={index}>{index}</Text>}
      />
  
    </SafeAreaView>
  )
}

export default CarouselComp