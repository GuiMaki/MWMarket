import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import colors from "@/global/colors";
import fontFamily from "@/global/fontFamily";

type Props = {
  title: string;
  gradientColors?: [string, string, ...string[]];
  borderRadius?: number;
  textColor?: string;
  wired?: boolean;
} & TouchableOpacityProps;

const GradientButton = ({
  title,
  gradientColors = [colors.primary[100], colors.primary[100]],
  textColor = colors.white,
  wired = false,
  borderRadius = 100,
  ...props
}: Props) => {
  const handleTextColor = wired ? gradientColors[0] : textColor;

  const containerStyle: ViewStyle = {
    width: 350,
    height: 60,
    borderRadius: borderRadius,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderColor: wired ? gradientColors[0] : "transparent",
    borderWidth: wired ? 1 : 0,
  };

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={[containerStyle, props.style]} // Merge de estilos
    >
      {!wired ? (
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            ...containerStyle,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      ) : null}

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

export default GradientButton;
