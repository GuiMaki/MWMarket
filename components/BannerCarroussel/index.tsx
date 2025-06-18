import * as React from "react";
import {
  Image,
  FlatList,
  View,
  StatusBar,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ImageSourcePropType,
} from "react-native";

import { banner } from "@/assets";
import colors from "@/global/colors";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width;

const BANNER_RATIO = 9 / 21;
const ITEM_HEIGHT = ITEM_WIDTH * BANNER_RATIO;

const images: ImageSourcePropType[] = [
  banner,
  banner,
  banner,
  banner,
  banner,
  banner,
  banner,
  banner,
  banner,
];

const BannerCarroussel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / ITEM_WIDTH);
    setCurrentIndex(index);
  };

  return (
    <View>
      <StatusBar hidden />
      <View style={{ height: ITEM_HEIGHT }}>
        <FlatList
          data={images}
          horizontal
          keyExtractor={(_, index) => index.toString()}
          snapToInterval={ITEM_WIDTH}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          renderItem={({ item }) => (
            <View style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT }}>
              <Image
                source={item}
                style={{
                  width: ITEM_WIDTH,
                  height: ITEM_HEIGHT,
                  resizeMode: "cover", 
                }}
              />
            </View>
          )}
        />

        <View
          style={{
            position: "absolute",
            bottom: 10,
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {images.map((_, index) => (
            <View
              key={index}
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor:
                  index === currentIndex ? colors.secondary[100] : colors.white,
                marginHorizontal: 4,
              }}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default BannerCarroussel;
