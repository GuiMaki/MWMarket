import { Image } from "expo-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Slot, useSegments } from "expo-router";

import { bgImg } from "@/assets";
import { width, height } from "@/global/constants";

export default function RootLayout() {
  const { top, bottom, left, right } = useSafeAreaInsets();
  const screenHeight = height + top + bottom;
  const screenWidth = width + left + right;

  const segments = useSegments() as string[];

  const showBackground =
    segments.length === 0 || 
    (segments.length === 2 && segments[0] === "(auth)" && segments[1] === "lp");

  return (
    <>
      {showBackground && (
        <Image
          source={bgImg}
          style={{
            width: screenWidth,
            height: screenHeight,
            position: "absolute",
            top: -top,
          }}
        />
      )}

      <Slot />
    </>
  );
}
