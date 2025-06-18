import React from "react";
import { Text, TouchableOpacity, Keyboard } from "react-native";

interface Props {
  stateAndCity: string;
  description?: string;
  onSelect: (value: string) => void;
}

const StateDropdown = ({
  stateAndCity,
  description = "Localização aproximada",
  onSelect,
}: Props) => {
  const handlePress = () => {
    Keyboard.dismiss();
    onSelect(stateAndCity);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
      }}
    >
      <Text
        style={{
          color: "#6B46C1",
          fontSize: 16,
          fontFamily: "Nunito_600SemiBold",
        }}
      >
        {stateAndCity}
      </Text>
      <Text
        numberOfLines={1}
        style={{
          color: "#A0AEC0",
          fontSize: 12,
          fontFamily: "Nunito_400Regular",
        }}
      >
        {description}
      </Text>
    </TouchableOpacity>
  );
};

export default StateDropdown;
