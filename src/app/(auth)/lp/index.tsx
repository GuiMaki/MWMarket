import { View, Text } from "react-native";
import { Image } from "expo-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { FadeInDown, FadeIn } from "react-native-reanimated";
import { useRouter } from "expo-router";

import { smallLogo, onBoardImg } from "@/assets";
import { width, height } from "@/global/constants";
import fontFamily from "@/global/fontFamily";
import Button from "@/components/Button";
import colors from "@/global/colors";

const OnBoard = () => {
  const router = useRouter();
  const { top, bottom, left, right } = useSafeAreaInsets();

  const screenHeight = height + top + bottom;
  const screenWidth = width + left + right;

  const handleNavigate = () => {
    router.navigate("./login");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: top,
        paddingBottom: 60,
        paddingLeft: 35,
        paddingRight: 35,
      }}
    >
      <Animated.View entering={FadeInDown.delay(500).duration(1000)}>
        <Image
          source={smallLogo}
          contentFit="contain"
          style={{
            width: 100,
            height: 80,
          }}
        />
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(700).duration(1000)}>
        <Text
          style={{
            color: "white",
            fontFamily: fontFamily.nunito_bold[0],
            fontSize: 50,
            fontWeight: "900",
            textAlign: "center",
          }}
        >
          Marketplace inteligente {"\n"}para você{" "}
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(900).duration(1000)}>
        <Image
          source={onBoardImg}
          style={{ width: 400, height: 400, marginBottom: -50 }}
        />
      </Animated.View>

      <Animated.View entering={FadeIn.delay(1100).duration(1000)}>
        <Button
          title="Continuar"
          backgroundColor={colors.white}
          textColor={colors.text}
          onPress={handleNavigate}
        />
      </Animated.View>
    </View>
  );
};

export default OnBoard;
