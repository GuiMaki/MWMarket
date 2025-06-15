import React from 'react';
import { Image, StyleProp, ImageStyle } from 'react-native';
import * as Icon from '@/assets/index';

export type IconT = keyof typeof Icon;

export interface IconComponentProps {
  name: IconT;
  size?: number;
  style?: StyleProp<ImageStyle>;
}

export const IconComponent = ({ name, size = 24, style }: IconComponentProps) => {
  const iconSource = Icon[name];

  if (!iconSource) return null;

  return (
    <Image
      source={iconSource}
      style={[{ width: size, height: size, resizeMode: 'contain' }, style]}
    />
  );
};

export default IconComponent;