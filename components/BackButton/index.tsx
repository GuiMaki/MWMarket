import { TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

import { arrow } from "@/assets";

const BackButton = () => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.back()}
      style={{
        position: "absolute",
        left: 0,
        zIndex: 1000,
      }}
    >
      <Image
        source={arrow}
        contentFit="contain"
        style={{
          width: 30,
          height: 30,
        }}
      />
    </TouchableOpacity>
  );
}

export default BackButton;