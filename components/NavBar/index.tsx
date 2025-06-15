import { TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeIn } from "react-native-reanimated";

import { categories, home, profilePic, stack } from "@/assets";

const NavBar = () => {
  return (
    <LinearGradient
      colors={["#8e2de2", "#6a1bbd", "#4a00e0"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      locations={[0, 0.5, 1]}
      style={{
        justifyContent: "space-evenly",
        alignItems: "center",
        position: "absolute",
        bottom: 40,
        width: 340,
        height: 75,
        borderRadius: 100,
        alignSelf: "center",
        flexDirection: "row",
      }}
    >
      <Animated.View entering={FadeIn.delay(600).duration(500)}>
        <TouchableOpacity>
          <Image source={home} style={{ width: 28, height: 28 }} />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View entering={FadeIn.delay(700).duration(500)}>
        <TouchableOpacity>
          <Image source={categories} style={{ width: 28, height: 28 }} />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View entering={FadeIn.delay(800).duration(500)}>
        <TouchableOpacity>
          <Image
            source={stack}
            contentFit="contain"
            style={{ width: 28, height: 28 }}
          />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View entering={FadeIn.delay(900).duration(500)}>
        <TouchableOpacity>
          <Image source={profilePic} style={{ width: 32, height: 32 }} />
        </TouchableOpacity>
      </Animated.View>
    </LinearGradient>
  );
};

export default NavBar;
