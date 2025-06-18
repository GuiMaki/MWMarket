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
import { zodResolver } from "@hookform/resolvers/zod";

import { logoAlt } from "@/assets";
import BackButton from "@/components/BackButton";
import fontFamily from "@/global/fontFamily";
import InputComponent from "@/components/InputComponent";
import CheckBox from "@/components/CheckBox";
import colors from "@/global/colors";
import GradientButton from "@/components/GradientButton";
import LoginSeparator from "@/components/LoginSeparator";
import SocialLoginButton from "@/components/SocialLoginButton";
import { LoginSchema, LoginForm } from "@/validations/Login.Validation";

const Login = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data: LoginForm) => {
    router.push("../(main)/home");
  };

  const onError = (errors: any) => {
    console.log("Erros de validação:", errors);
  };

  const handleForgetPassword = () => {
    router.push("./forgetPassword");
  };

  const handleRegister = () => {
    router.push("./register/step1");
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
            justifyContent: "space-around",
          }}
        >
          <Animated.View
            entering={FadeIn.delay(500).duration(500)}
            style={{ flex: 1, justifyContent: "space-around" }}
          >
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <BackButton to="/lp" />

              <Image
                source={logoAlt}
                contentFit="contain"
                style={{ width: 100, height: 30 }}
              />
            </View>

            <Text
              style={{
                fontFamily: fontFamily.nunito_bold[0],
                fontSize: 35,
                fontWeight: "900",
                marginTop: 30,
              }}
            >
              Bem-vindo de volta {"\n"}sentimos sua falta
            </Text>

            <View style={{ marginTop: 40, gap: 25 }}>
              <InputComponent
                name="email"
                label="E-mail"
                placeholder="example@email.com"
                keyboardType="email-address"
                control={control}
                error={errors.email}
              />

              <InputComponent
                name="password"
                label="Senha"
                placeholder="********"
                control={control}
                password
                error={errors.password}
              />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
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
              onPress={handleSubmit(onSubmit, onError)}
              gradientColors={["#8e2de2", "#4a00e0"]}
              textColor={colors.white}
              style={{ marginTop: 50, alignSelf: "center" }}
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
                marginTop: 10,
                marginBottom: 70,
                gap: 50,
              }}
            >
              <SocialLoginButton icon="googleIcon" />
              <SocialLoginButton icon="facebookIcon" />
              <SocialLoginButton icon="appleIcon" />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: 30,
              }}
            >
              <Text
                style={{ fontFamily: fontFamily.nunito_bold, fontSize: 17 }}
              >
                Novo usuário?
              </Text>
              <TouchableOpacity onPress={handleRegister}>
                <Text
                  style={{
                    color: colors.primary[100],
                    fontFamily: fontFamily.nunito_bold,
                    fontWeight: "900",
                    fontSize: 17,
                  }}
                >
                  {" "}
                  Crie Uma conta
                </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
