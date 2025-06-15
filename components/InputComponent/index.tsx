import { useState } from "react";
import {
  FieldError,
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import {
  TextInputMask,
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from "react-native-masked-text";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";
import RNPickerSelect from "react-native-picker-select";

import colors from "@/global/colors";
import { IconComponent, IconT } from "../IconComponent";
import fontFamily from "@/global/fontFamily";

type Props<TFieldValues extends FieldValues> = {
  label?: string;
  password?: boolean;
  placeholder?: string;
  error?: FieldError;
  type?: TextInputMaskTypeProp;
  options?: TextInputMaskOptionProp;
  leftIcon?: { name: IconT; size?: number; style?: any };  // ✅ Corrigido aqui!

  isDropdown?: boolean;
  dropdownItems?: { label: string; value: string }[];
} & TextInputProps &
  UseControllerProps<TFieldValues>;

const InputComponent = <TFieldValues extends FieldValues>({
  label,
  password,
  placeholder,
  type,
  options,
  control,
  name,
  autoCapitalize = "none",
  multiline = false,
  leftIcon,
  isDropdown = false,
  dropdownItems,
  ...props
}: Props<TFieldValues>) => {
  const [passwordHidden, setPasswordHidden] = useState(!!password);
  const [isFocused, setIsFocused] = useState(false);

  if (!control) {
    throw new Error("Control was not passed as a prop");
  }

  if (!name) {
    throw new Error("Name was not passed as a prop");
  }

  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  });

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    props.onFocus?.(e);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    field.onBlur();
    props.onBlur?.(e);
  };

  const handleBorderColor = () => {
    if (isFocused) return colors.primary[100];
    if (error) return colors.red;
    return colors.primary[25];
  };

  return (
    <Animated.View layout={LinearTransition}>
      {label && (
        <Text
          style={{
            fontFamily: fontFamily.nunito_bold[0],
            fontWeight: "900",
            fontSize: 16,
            color: colors.gray,
            marginBottom: 4,
          }}
        >
          {label}
        </Text>
      )}

      <View style={{ gap: 4 }}>
        {isDropdown && dropdownItems ? (
          <View>
            <RNPickerSelect
              placeholder={{
                label: placeholder || "Selecione...",
                value: null,
                color: colors.highlight,
              }}
              items={dropdownItems}
              onValueChange={field.onChange}
              value={field.value}
              style={{
                inputIOS: {
                  paddingLeft: 8,
                  paddingVertical: 12,
                  borderWidth: 1,
                  borderColor: handleBorderColor(),
                  borderRadius: 8,
                  color: colors.text,
                  fontFamily: fontFamily.nunito_bold[0],
                },
                inputAndroid: {
                  paddingLeft: 8,
                  paddingVertical: 8,
                  borderWidth: 1,
                  borderColor: handleBorderColor(),
                  borderRadius: 8,
                  color: colors.text,
                  fontFamily: fontFamily.nunito_bold[0],
                },
              }}
            />
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              position: "relative",
              paddingBottom: 0,
            }}
          >
            {leftIcon && (
              <View
                style={{
                  position: "absolute",
                  left: 8,
                  top: "50%",
                  transform: [{ translateY: -12 }],
                }}
              >
                <IconComponent
                  name={leftIcon.name}
                  size={leftIcon.size || 24}
                  style={leftIcon.style}
                />
              </View>
            )}

            {type ? (
              <TextInputMask
                style={{
                  flex: 1,
                  fontFamily: fontFamily.nunito_bold[0],
                  fontSize: 16,
                  color: colors.text,
                  lineHeight: 24,
                  paddingRight: password ? 32 : 8,
                  paddingLeft: leftIcon ? 40 : 8,
                }}
                onChangeText={field.onChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                value={field.value}
                refInput={field.ref}
                type={type}
                secureTextEntry={passwordHidden}
                placeholder={placeholder}
                placeholderTextColor={colors.highlight}
                options={options}
                multiline={multiline}
                {...props}
              />
            ) : (
              <TextInput
                style={{
                  paddingRight: password ? 32 : 8,
                  paddingLeft: leftIcon ? 40 : 8,
                  flex: 1,
                  fontFamily: fontFamily.nunito_bold[0],
                  color: colors.text,
                }}
                onChangeText={field.onChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                secureTextEntry={passwordHidden}
                placeholder={placeholder}
                autoCapitalize={autoCapitalize}
                placeholderTextColor={colors.highlight}
                value={field.value}
                multiline={multiline}
                {...props}
              />
            )}

            {password && (
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  right: 15,
                  top: "50%",
                  transform: [{ translateY: -12 }],
                  height: 24,
                  width: 24,
                }}
                onPress={() => setPasswordHidden(!passwordHidden)}
              >
                <IconComponent
                  name={
                    passwordHidden
                      ? "PasswordEyeInactiveIcon"
                      : "PasswordEyeActiveIcon"
                  }
                  size={24}
                />
              </TouchableOpacity>
            )}
            <View
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 3,
                backgroundColor: handleBorderColor(),
                borderRadius: 8,
              }}
            />
          </View>
        )}

        {error && (
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <Text
              style={{
                fontFamily: fontFamily.nunito_bold[0],
                color: colors.red,
                marginTop: 4,
              }}
            >
              {error.message}
            </Text>
          </Animated.View>
        )}
      </View>
    </Animated.View>
  );
};

export default InputComponent;
