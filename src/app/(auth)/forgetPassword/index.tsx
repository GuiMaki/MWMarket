import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  Keyboard,
} from "react-native";
import { Image } from "expo-image";
import Animated, { FadeIn } from "react-native-reanimated";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import BackButton from "@/components/BackButton";
import { logoAlt } from "@/assets";
import fontFamily from "@/global/fontFamily";
import colors from "@/global/colors";
import InputComponent from "@/components/InputComponent";
import { RecoverPasswordSchema, RecoverPasswordForm } from "@/validations/Login.Validation";
import GradientButton from "@/components/GradientButton";

const ForgetPassword = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RecoverPasswordForm>({
    resolver: zodResolver(RecoverPasswordSchema),
  });

  const onSubmit = () => {
    router.push("./recoverPasswordSuccess");
  };

  const onError = (errors: any) => {
    console.log("Erros de validação:", errors);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
          style={{ marginTop: 40, gap:20}}
        >
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
              position: "fixed",
              top: 0
            }}
          >
            <BackButton />

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
            Esqueçeu a senha?
          </Text>

          <Text
            style={{
              fontFamily: fontFamily.nunito,
              fontSize: 16,
              marginTop: 20,
              marginBottom: 20,
              color: colors.gray,
            }}
          >
            Digite seu e-mail abaixo para receber as instruções de redefinição
            de senha.
          </Text>

          <InputComponent
            name="email"
            label="E-mail"
            placeholder="example@email.com"
            keyboardType="email-address"
            control={control}
            error={errors.email}
          />

          <GradientButton
            title="Recuperar Senha"
            gradientColors={["#8e2de2", "#4a00e0"]}
            textColor={colors.white}
            style={{ marginTop: 100, alignSelf: "center" }}
            onPress={handleSubmit(onSubmit, onError)}
          />
        </Animated.View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ForgetPassword;
