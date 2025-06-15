import colors from "@/global/colors";
import fontFamily from "@/global/fontFamily";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import SectionItem from "../SectionItem";

interface Props {
  title?: string;
  data?: {
    image?: string;
    model?: string;
    provider?: string;
    price?: string;
  }[];
}

const HomeCarroussel = ({ title = "", data = [] }: Props) => {
  return (
    <View style={{ paddingVertical: 24, gap: 16 }}>
      <View
        style={{
          paddingHorizontal: 24,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: fontFamily.nunito,
            fontSize: 20,
            color: colors.gray,
          }}
        >
          {title}
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              fontFamily: fontFamily.nunito_light,
              fontSize: 14,
              color: colors.gray,
            }}
          >
            Ver tudo
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 16,
          paddingHorizontal: 24,
        }}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => <SectionItem {...item} />}
      />
    </View>
  );
};

export default HomeCarroussel