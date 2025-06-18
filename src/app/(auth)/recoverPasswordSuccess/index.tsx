import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  Keyboard,
} from "react-native";
import { Image } from "expo-image";
import Animated, { FadeIn, FadeInUp } from "react-native-reanimated";
import { useRouter } from "expo-router";

import { logoAlt, resetPasswordSuccess } from "@/assets";
import fontFamily from "@/global/fontFamily";
import colors from "@/global/colors";
import GradientButton from "@/components/GradientButton";

const RecoverPasswordSuccess = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("./login");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        <SafeAreaView
          style={{
            marginTop: 20,
            marginLeft: 30,
            marginRight: 30,
            flex: 1,
          }}
        >
          <Animated.View
            entering={FadeIn.delay(500).duration(500)}
            style={{ marginTop: 40, alignItems: "center" }}
          >
            <Image
              source={logoAlt}
              contentFit="contain"
              style={{ width: 100, height: 30 }}
            />
          </Animated.View>

          <Animated.View
            entering={FadeInUp.delay(700).duration(500)}
            style={{ marginTop: 140, gap: 20 }}
          >
            <Image
              source={resetPasswordSuccess}
              style={{ height: 300, width: 300, alignSelf: "center" }}
            />
          </Animated.View>

          <Animated.View
            entering={FadeIn.delay(900).duration(500)}
            style={{ alignItems: "center" }}
          >
            <Text
              style={{
                color: colors.primary[100],
                fontFamily: fontFamily.nunito_bold,
                fontWeight: "900",
                fontSize: 35,
              }}
            >
              Confira seu e-mail
            </Text>
          </Animated.View>

          <Animated.View
            entering={FadeIn.delay(1100).duration(500)}
            style={{ alignItems: "center", marginTop: 20 }}
          >
            <Text
              style={{
                color: colors.gray,
                fontFamily: fontFamily.nunito,
                fontSize: 17,
                textAlign: "center",
                width: "90%",
              }}
            >
              Enviamos as instruções em seu e-mail para redefinir sua senha.
            </Text>
          </Animated.View>

          <Animated.View entering={FadeIn.delay(1300).duration(500)}>
            <GradientButton
              title="Entrar"
              gradientColors={["#8e2de2", "#4a00e0"]}
              textColor={colors.white}
              style={{ marginTop: 100, alignSelf: "center" }}
              onPress={handleNavigate}
            />
          </Animated.View>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RecoverPasswordSuccess;
