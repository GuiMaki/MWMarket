import { View } from "react-native";
import { Image } from "expo-image";
import Animated, { FadeIn } from "react-native-reanimated";
import { useRouter } from "expo-router";
import { useEffect } from "react";

import { bigLogo } from "@/assets";

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(auth)/lp");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={{ flex: 1 }}>
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
