import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Image } from "expo-image";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  RegisterForm,
  RegisterSchema,
} from "@/validations/Register.Validation";
import GradientButton from "@/components/GradientButton";
import InputComponent from "@/components/InputComponent";
import colors from "@/global/colors";
import fontFamily from "@/global/fontFamily";
import { logoAlt } from "@/assets";
import BackButton from "@/components/BackButton";
import StateDropdown from "@/components/StateDropdown"; // ✅ Importando o Dropdown separado

const Step1 = () => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

  const { control, handleSubmit, setValue } = useForm<RegisterForm>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = (data: RegisterForm) => {
    console.log(JSON.stringify(data, null, 2));
    router.push("./step2");
  };

  const handleCitySelect = (selectedCity: string) => {
    setValue("stateAndCity", selectedCity);
    setShowDropdown(false);
    Keyboard.dismiss();
  };

  const cities = [
    "São Paulo, São Paulo, Brasil",
    "São Bernardo do Campo, São Paulo, Brasil",
    "Guarulhos, São Paulo, Brasil",
    "Osasco, São Paulo, Brasil",
    "Santo André, São Paulo, Brasil",
    "São Caetano do Sul, São Paulo, Brasil",
    "Piracicaba, São Paulo, Brasil",
    "Carapicuíba, São Paulo, Brasil",
    "Diadema, São Paulo, Brasil",
    "Cotia, São Paulo, Brasil",
    "Taboão da Serra, São Paulo, Brasil",
    "Itapevi, São Paulo, Brasil",
    "Suzano, São Paulo, Brasil",
    "Americana, São Paulo, Brasil",
    "Barueri, São Paulo, Brasil",
    "São Carlos, São Paulo, Brasil",
  ];

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setShowDropdown(false);
        Keyboard.dismiss();
      }}
      accessible={false}
    >
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
        >
          <KeyboardAwareScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{
              flexGrow: 1,
              paddingTop: 20,
              paddingHorizontal: 30,
              paddingBottom: 50,
            }}
            keyboardShouldPersistTaps="handled"
            extraScrollHeight={120}
            enableOnAndroid
          >
            <Animated.View
              entering={FadeIn.delay(500).duration(500)}
              style={{ marginTop: 40, alignItems: "center" }}
            >
              <BackButton />
              <Image
                source={logoAlt}
                contentFit="contain"
                style={{ width: 100, height: 30 }}
              />
            </Animated.View>

            <Animated.View
              entering={FadeIn.delay(700).duration(500)}
              style={{ flex: 1, width: "100%", gap: 16, marginTop: 60 }}
            >
              <Text
                style={{
                  fontSize: 34,
                  fontWeight: "bold",
                  width: "100%",
                  marginBottom: 20,
                  fontFamily: fontFamily.nunito_bold,
                }}
              >
                Para começar, insira seu endereço
              </Text>

              <View style={{ zIndex: 1000 }}>
                <InputComponent
                  name="stateAndCity"
                  control={control}
                  placeholder="Insira sua cidade"
                  leftIcon={{ name: "planeIcon", size: 20 }}
                  style={{ color: "#6B46C1", paddingLeft: 30 }}
                  autoCapitalize="words"
                  onPressIn={() => setShowDropdown(true)}
                />

                {showDropdown && (
                  <Animated.View
                    entering={FadeIn}
                    exiting={FadeOut}
                    style={{
                      backgroundColor: "white",
                      paddingVertical: 8,
                      paddingHorizontal: 16,
                      borderRadius: 6,
                      elevation: 5,
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.2,
                      shadowRadius: 4,
                      maxHeight: 300,
                      marginTop: 4,
                    }}
                  >
                    <ScrollView
                      nestedScrollEnabled
                      showsVerticalScrollIndicator
                      keyboardShouldPersistTaps="handled"
                    >
                      {cities.map((cityName) => (
                        <StateDropdown
                          key={cityName}
                          stateAndCity={cityName}
                          onSelect={handleCitySelect}
                        />
                      ))}
                    </ScrollView>
                  </Animated.View>
                )}
              </View>

              <InputComponent
                name="cep"
                control={control}
                label="CEP *"
                placeholder="Insira seu CEP"
                type="zip-code"
                options={{ mask: "99999-999" }}
              />

              <InputComponent
                name="street"
                control={control}
                label="Endereço *"
                placeholder="Insira seu endereço"
              />

              <InputComponent
                name="number"
                control={control}
                label="Número *"
                placeholder="Insira seu número"
                keyboardType="numeric"
              />

              <InputComponent
                name="complement"
                control={control}
                label="Complemento"
                placeholder="Insira seu complemento"
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
              entering={FadeIn.delay(900).duration(500)}
              style={{ marginTop: 60, alignSelf: "center" }}
            >
              <GradientButton
                title="Continuar"
                onPress={handleSubmit(onSubmit)}
                gradientColors={["#8e2de2", "#4a00e0"]}
                textColor={colors.white}
              />
            </Animated.View>
          </KeyboardAwareScrollView>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Step1;
