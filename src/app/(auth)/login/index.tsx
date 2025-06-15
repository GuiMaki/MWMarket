import {
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import Animated, { FadeIn } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";

import { logoAlt } from "@/assets";
import BackButton from "@/components/BackButton";
import fontFamily from "@/global/fontFamily";
import InputComponent from "@/components/InputComponent";
import CheckBox from "@/components/CheckBox";
import colors from "@/global/colors";
import GradientButton from "@/components/GradientButton";
import LoginSeparator from "@/components/LoginSeparator";
import SocialLoginButton from "@/components/SocialLoginButton";

const Login = () => {
  const { control, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = (data: any) => {
    console.log("Dados do formulário:", data);
  };

  const handleForgetPassword = () => {
    router.navigate("./ForgetPassword");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView
        style={{ marginTop: 20, marginLeft: 30, marginRight: 30, flex: 1 }}
      >
        <Animated.View
          entering={FadeIn.delay(500).duration(500)}
          style={{ flex: 1 }}
        >
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <BackButton />

            <Image
              source={logoAlt}
              contentFit="contain"
              style={{
                width: 100,
                height: 30,
              }}
            />
          </View>

          <Text
            style={{
              fontFamily: fontFamily.nunito_bold[0],
              fontSize: 35,
              fontWeight: "900",
              marginTop: 40,
            }}
          >
            {" "}
            Bem-vindo de volta {"\n"} sentimos sua falta
          </Text>
          <View style={{ marginTop: 60, gap: 25 }}>
            <InputComponent
              name="email"
              label="E-mail"
              placeholder="example@email.com"
              keyboardType="email-address"
              control={control}
            />

            <InputComponent
              name="password"
              label="Senha"
              placeholder="********"
              control={control}
              password
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 0,
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <CheckBox />
                <Text
                  style={{
                    marginLeft: 7,
                    fontFamily: fontFamily.nunito_light,
                    color: colors.text,
                    fontSize: 12,
                  }}
                >
                  Manter Conectado
                </Text>
              </View>
              <TouchableOpacity onPress={handleForgetPassword}>
                <Text
                  style={{
                    fontFamily: fontFamily.nunito_light,
                    fontSize: 12,
                    color: colors.primary[100],
                  }}
                >
                  Esqueci minha senha
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <GradientButton
            title="Fazer Login"
            onPress={handleSubmit(onSubmit)}
            gradientColors={["#8e2de2", "#4a00e0"]}
            textColor={colors.white}
            style={{ marginTop: 70 }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <LoginSeparator />
          </View>

          <View 
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              gap: 50,
            }}
          >
            <SocialLoginButton icon="googleIcon"/>
            <SocialLoginButton icon="facebookIcon"/>
            <SocialLoginButton icon="appleIcon"/>
          </View>
        </Animated.View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
