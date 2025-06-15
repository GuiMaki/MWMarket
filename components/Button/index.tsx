import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import colors from "../../global/colors";
import fontFamily from "@/global/fontFamily";

type Props = {
  title: string;
  backgroundColor?: string;
  borderRadius?: number;
  textColor?: string;
  wired?: boolean;
} & TouchableOpacityProps;

const Button = ({
  title,
  backgroundColor = colors.primary[100],
  textColor = colors.white,
  wired = false,
  borderRadius = 100,
  ...props
}: Props) => {
  const handleBackgroundColor = wired ? "transparent" : backgroundColor;
  const handleTextColor = wired ? backgroundColor : textColor;

  return (
    <TouchableOpacity
      {...props}
      style={{
        width: 350,
        height: 70,
        borderRadius: borderRadius,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: handleBackgroundColor,
        borderColor: wired ? backgroundColor : "transparent",
        borderWidth: wired ? 1 : 0,
      }}
    >
      <Text
        style={{
            fontSize: 20,
          fontFamily: fontFamily.nunito[0],
          color: handleTextColor,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
