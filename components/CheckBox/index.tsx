import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import colors from "@/global/colors";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log("Checkbox state changed:", checked);
  }, [checked]);

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => setChecked(!checked)}
        style={{
          width: 20,
          height: 20,
          borderRadius: 100,
          borderWidth: 1,
          borderColor: checked ? colors.primary[100] : colors.gray,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {checked && (
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 100,
              backgroundColor: colors.primary[100],
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Checkbox;
