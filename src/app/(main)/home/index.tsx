import { Text, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeIn } from "react-native-reanimated";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

import fontFamily from "@/global/fontFamily";
import {
  bagIcon,
  macBook1,
  macBook2,
  pc1,
  pc2,
  amd,
  intel,
  headset,
  mouse,
} from "@/assets";
import colors from "@/global/colors";
import BannerCarroussel from "@/components/BannerCarroussel";
import HomeCarroussel from "@/components/HomeCarroussel";
import NavBar from "@/components/NavBar";

const Home = () => {
  return (
    <View style={{ backgroundColor: colors.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={{ backgroundColor: colors.white }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 15,
              marginLeft: 30,
              marginRight: 30,
              marginBottom: 15,
            }}
          >
            <Text
              style={{
                fontFamily: fontFamily.nunito_bold,
                fontWeight: "900",
                fontSize: 30,
              }}
            >
              Home
            </Text>
            <View style={{ position: "relative" }}>
              <Image
                source={bagIcon}
                style={{ width: 30, height: 30 }}
                contentFit="contain"
              />
              <LinearGradient
                colors={["#8e2de2", "#4a00e0"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  width: 20,
                  height: 20,
                  borderRadius: 100,
                  right: -5,
                  top: -5,
                }}
              >
                <Text
                  style={{
                    fontFamily: fontFamily.nunito,
                    color: colors.white,
                    fontSize: 12,
                  }}
                >
                  2
                </Text>
              </LinearGradient>
            </View>
          </View>
        </SafeAreaView>

        <Animated.View entering={FadeIn.delay(500).duration(500)}>
          <BannerCarroussel />

          <HomeCarroussel
            title="Notebooks"
            data={[
              {
                image: macBook1,
                model: 'MacBook Air de 13"',
                provider: "Loja Sistech Eletrônicos",
                price: "R$ 7.999,99",
              },
              {
                image: macBook2,
                model: 'MacBook Pro de 16"',
                provider: "Loja Eletrosystem",
                price: "R$ 11.999,99",
              },
              {
                image: macBook1,
                model: 'MacBook Air de 13"',
                provider: "Loja Sistech Eletrônicos",
                price: "R$ 7.999,99",
              },
              {
                image: macBook2,
                model: 'MacBook Pro de 16"',
                provider: "Loja Eletrosystem",
                price: "R$ 11.999,99",
              },
              {
                image: macBook1,
                model: 'MacBook Air de 13"',
                provider: "Loja Sistech Eletrônicos",
                price: "R$ 7.999,99",
              },
              {
                image: macBook2,
                model: 'MacBook Pro de 16"',
                provider: "Loja Eletrosystem",
                price: "R$ 11.999,99",
              },
              {
                image: macBook1,
                model: 'MacBook Air de 13"',
                provider: "Loja Sistech Eletrônicos",
                price: "R$ 7.999,99",
              },
              {
                image: macBook2,
                model: 'MacBook Pro de 16"',
                provider: "Loja Eletrosystem",
                price: "R$ 11.999,99",
              },
            ]}
          />

          <HomeCarroussel
            title="Computadores"
            data={[
              {
                image: pc1,
                model: "PC Gamer EasyPC",
                provider: "Loja Sistech Eletrônicos",
                price: "R$ 3.599,99",
              },
              {
                image: pc2,
                model: "PC Gamer Rocket",
                provider: "Loja Eletrosystem",
                price: "R$ 3.599,99",
              },
              {
                image: pc1,
                model: "PC Gamer EasyPC",
                provider: "Loja Sistech Eletrônicos",
                price: "R$ 3.599,99",
              },
              {
                image: pc2,
                model: "PC Gamer Rocket",
                provider: "Loja Eletrosystem",
                price: "R$ 3.599,99",
              },
              {
                image: pc1,
                model: "PC Gamer EasyPC",
                provider: "Loja Sistech Eletrônicos",
                price: "R$ 3.599,99",
              },
              {
                image: pc2,
                model: "PC Gamer Rocket",
                provider: "Loja Eletrosystem",
                price: "R$ 3.599,99",
              },
            ]}
          />

          <HomeCarroussel
            title="Hardware"
            data={[
              {
                image: amd,
                model: "AMD Ryzen 7 5800XC",
                provider: "Loja Sistech Eletrônicos",
                price: "R$ 2.880,00",
              },
              {
                image: intel,
                model: "Intel Core I7 9700KF",
                provider: "Loja Eletrosystem",
                price: "R$ 1.799,00",
              },
              {
                image: amd,
                model: "AMD Ryzen 7 5800XC",
                provider: "Loja Sistech Eletrônicos",
                price: "R$ 2.880,00",
              },
              {
                image: intel,
                model: "Intel Core I7 9700KF",
                provider: "Loja Eletrosystem",
                price: "R$ 1.799,00",
              },
              {
                image: amd,
                model: "AMD Ryzen 7 5800XC",
                provider: "Loja Sistech Eletrônicos",
                price: "R$ 2.880,00",
              },
              {
                image: intel,
                model: "Intel Core I7 9700KF",
                provider: "Loja Eletrosystem",
                price: "R$ 1.799,00",
              },
              {
                image: amd,
                model: "AMD Ryzen 7 5800XC",
                provider: "Loja Sistech Eletrônicos",
                price: "R$ 2.880,00",
              },
              {
                image: intel,
                model: "Intel Core I7 9700KF",
                provider: "Loja Eletrosystem",
                price: "R$ 1.799,00",
              },
            ]}
          />

          <HomeCarroussel
            title="Periféricos"
            data={[
              {
                image: headset,
                model: "Headset Hyperx",
                provider: "Loja Sistech Eletrônicos",
                price: "R$ R$ 299,99",
              },
              {
                image: mouse,
                model: "Mouse Redragon",
                provider: "Loja Eletrosystem",
                price: "R$ R$ 99,99",
              },
              {
                image: headset,
                model: "Headset Hyperx",
                provider: "Loja Sistech Eletrônicos",
                price: "R$ R$ 299,99",
              },
              {
                image: mouse,
                model: "Mouse Redragon",
                provider: "Loja Eletrosystem",
                price: "R$ R$ 99,99",
              },
              {
                image: headset,
                model: "Headset Hyperx",
                provider: "Loja Sistech Eletrônicos",
                price: "R$ R$ 299,99",
              },
              {
                image: mouse,
                model: "Mouse Redragon",
                provider: "Loja Eletrosystem",
                price: "R$ R$ 99,99",
              },
              {
                image: headset,
                model: "Headset Hyperx",
                provider: "Loja Sistech Eletrônicos",
                price: "R$ R$ 299,99",
              },
              {
                image: mouse,
                model: "Mouse Redragon",
                provider: "Loja Eletrosystem",
                price: "R$ R$ 99,99",
              },
            ]}
          />
          <View style={{ height: 130 }} />
        </Animated.View>
      </ScrollView>
      <Animated.View entering={FadeIn.delay(500).duration(500)}>
        <NavBar />
      </Animated.View>
    </View>
  );
};

export default Home;
