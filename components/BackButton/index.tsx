import { TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useRouter, type Route } from "expo-router";
import { arrow } from "@/assets";

type BackButtonProps = {
  to?: Route; 
};

const BackButton = ({ to }: BackButtonProps) => {
  const router = useRouter();

  const handlePress = () => {
    if (to) {
      router.push(to);
    } else {
      router.back();
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
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
};

export default BackButton;
