import colors from "@/global/colors";
import fontFamily from "@/global/fontFamily";
import { Image } from "expo-image";
import { Text, View } from "react-native";

interface Props {
  image?: string;
  model?: string;
  provider?: string;
  price?: string;
}

const SectionItem = ({ image, model, provider, price }: Props) => {
  return (
    <View style={{ width: 200, gap: 4, alignItems: "center" }}>
      <Image
        source={image}
        style={{ width: "100%", height: 100 }}
        contentFit="contain"
      />
      <Text
        numberOfLines={1}
        style={{ fontSize: 19, fontFamily: fontFamily.nunito }}
      >
        {model}
      </Text>
      <Text
        numberOfLines={1}
        style={{
          fontSize: 13,
          color: colors.gray,
          fontFamily: fontFamily.nunito_light,
        }}
      >
        {provider}
      </Text>
      <Text
        style={{
          fontSize: 19,
          color: colors.primary[100],
          fontFamily: fontFamily.nunito_bold,
          fontWeight: 900,
        }}
      >
        {price}
      </Text>
    </View>
  );
};

export default SectionItem;
