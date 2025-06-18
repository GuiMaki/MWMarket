import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { Text, TouchableWithoutFeedback, Keyboard, View } from "react-native";
import { Image } from "expo-image";
import Animated, { FadeIn } from "react-native-reanimated";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import GradientButton from "@/components/GradientButton";
import InputComponent from "@/components/InputComponent";
import colors from "@/global/colors";
import fontFamily from "@/global/fontFamily";
import {
  RegisterForm1,
  RegisterSchema1,
} from "@/validations/Register.Validation";
import { logoAlt } from "@/assets";
import BackButton from "@/components/BackButton";

const Step2 = () => {
  const router = useRouter();

  const { control, handleSubmit } = useForm<RegisterForm1>({
    resolver: zodResolver(RegisterSchema1),
  });

  const onSubmit = (data: RegisterForm1) => {
    console.log(JSON.stringify(data, null, 2));
    router.push("./step3");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        <KeyboardAwareScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            flexGrow: 1,
            paddingTop: 20,
            paddingHorizontal: 30,
          }}
          extraScrollHeight={30}
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
        >
          <Animated.View
            entering={FadeIn.delay(400).duration(600)}
            style={{ marginTop: 40, alignItems: "center" }}
          >
            <BackButton />
            <Image
              source={logoAlt}
              contentFit="contain"
              style={{ width: 100, height: 30 }}
            />
          </Animated.View>

          <Animated.Text
            entering={FadeIn.delay(700).duration(600)}
            style={{
              fontSize: 34,
              fontWeight: "bold",
              width: "100%",
              marginTop: 40,
              fontFamily: fontFamily.nunito_bold,
            }}
          >
            Insira seus dados pessoais
          </Animated.Text>

          <Animated.View
            entering={FadeIn.delay(1000).duration(600)}
            style={{ width: "100%", gap: 16, marginTop: 60 }}
          >
            <InputComponent
              name="name"
              control={control}
              label="Nome *"
              placeholder="Insira seu nome"
            />

            <InputComponent
              name="surname"
              control={control}
              label="Sobrenome *"
              placeholder="Insira seu sobrenome"
            />

            <InputComponent
              name="celphone"
              control={control}
              label="Celular *"
              placeholder="Insira seu número"
              keyboardType="numeric"
              type="cel-phone"
              options={{ mask: "([00]) [00000]-[0000]" }}
            />

            <InputComponent
              name="telephone"
              control={control}
              label="Telefone"
              placeholder="Insira seu telefone"
              type="cel-phone"
              options={{ mask: "([00]) [00000]-[0000]" }}
            />

            <Text
              style={{
                fontFamily: fontFamily.nunito_light,
                color: colors.primary[100],
                fontSize: 13,
                textAlign: "right",
              }}
            >
              * campos obrigatórios
            </Text>
          </Animated.View>

          <Animated.View
            entering={FadeIn.delay(1300).duration(600)}
            style={{ marginTop: 170, alignSelf: "center" }}
          >
            <GradientButton
              title="Continuar"
              onPress={handleSubmit(onSubmit)}
              gradientColors={["#8e2de2", "#4a00e0"]}
              textColor={colors.white}
            />
          </Animated.View>
        </KeyboardAwareScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Step2;
