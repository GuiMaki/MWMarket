import { View } from "react-native";
import { Image } from "expo-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { FadeIn } from "react-native-reanimated";
import { useRouter } from "expo-router";
import { useEffect } from "react";

import { bgImg, bigLogo } from "@/assets";
import { width, height } from "@/global/constants";

const SplashScreen = () => {
  const router = useRouter();
  const { top, bottom, left, right } = useSafeAreaInsets();

  const screenHeight = height + top + bottom;
  const screenWidth = width + left + right;

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(auth)/lp");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={bgImg}
        style={{
          width: screenWidth,
          height: screenHeight,
          position: "absolute",
          top: -top,
        }}
      />

      <Animated.View
        entering={FadeIn.delay(500).duration(1000)}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Image
          source={bigLogo}
          contentFit="contain"
          style={{
            width: "80%",
            height: 120,
          }}
        />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
