import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import Animated, { FadeIn } from "react-native-reanimated";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from "expo-image-picker";

import GradientButton from "@/components/GradientButton";
import colors from "@/global/colors";
import fontFamily from "@/global/fontFamily";
import {
  RegisterForm3,
  RegisterSchema3,
} from "@/validations/Register.Validation";
import { logoAlt } from "@/assets";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import { profilePicPicker, defaultProfilePic } from "@/assets";
import { useState } from "react";

const FinalStep = () => {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const { control, handleSubmit } = useForm<RegisterForm3>({
    resolver: zodResolver(RegisterSchema3),
  });

  const onSubmit = (data: RegisterForm3) => {
    console.log(JSON.stringify(data, null, 2));
    router.push("./registerSuccess");
  };

  const handlePicPicker = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("Você precisa permitir o acesso à galeria para escolher uma foto.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
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
            paddingBottom: 50,
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
            Para finalizar, insira uma foto de perfil
          </Animated.Text>

          <Animated.View
            entering={FadeIn.delay(1000).duration(600)}
            style={{ width: "100%", gap: 16, marginTop: 60 }}
          >
            <View
              style={{
                alignSelf: "center",
                width: 250,
                height: 250,
                position: "relative",
              }}
            >
              <Image
                source={profilePicPicker}
                style={{
                  width: 250,
                  height: 250,
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />

              <TouchableOpacity
                onPress={handlePicPicker}
                style={{
                  zIndex: 1,
                  borderRadius: 125,
                  overflow: "hidden",
                  width: 250,
                  height: 250,
                }}
              >
                <Image
                  source={
                    selectedImage ? { uri: selectedImage } : defaultProfilePic
                  }
                  style={{ width: 250, height: 250, borderRadius: 125 }}
                />
              </TouchableOpacity>
              {selectedImage && (
                <TouchableOpacity
                  onPress={handleRemoveImage}
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    padding: 10,
                    backgroundColor: "#CFCFCF",
                    borderRadius: 50,
                    zIndex: 1000,
                  }}
                >
                  <Text
                    style={{
                      color: colors.white,
                      fontFamily: fontFamily.nunito_bold,
                    }}
                  >
                    ❌
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <Text
              style={{
                fontFamily: fontFamily.nunito_light,
                color: colors.gray,
                fontSize: 17,
                alignSelf: "center",
              }}
            >
              Selecionar foto de perfil
            </Text>
          </Animated.View>

          <Animated.View
            entering={FadeIn.delay(1300).duration(600)}
            style={{ marginTop: 110, alignSelf: "center" }}
          >
            <Button
              title="Pular essa etapa"
              onPress={handleSubmit(onSubmit)}
              backgroundColor={colors.gray}
              wired={true}
              style={{ height: 60 }}
            />

            <GradientButton
              title="Continuar"
              onPress={handleSubmit(onSubmit)}
              gradientColors={["#8e2de2", "#4a00e0"]}
              textColor={colors.white}
              style={{ marginTop: 30 }}
            />
          </Animated.View>
        </KeyboardAwareScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FinalStep;
