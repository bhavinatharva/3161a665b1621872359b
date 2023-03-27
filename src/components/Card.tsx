import { Platform, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

import React from "react";

interface Props {
  backgroundColor?: string;
  elevation?: number;
  cornerRadius?: number;
  opacity?: number;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Card = (props: Props) => {
  const {
    children,
    elevation = 1,
    opacity = 0.5,
    cornerRadius = 5,
    backgroundColor = "#ffffff",
    style,
  } = props;

  const cardStyle = Platform.select({
    ios: () =>
      StyleSheet.create({
        container: {
          shadowRadius: elevation,
          shadowOpacity: opacity,
          shadowOffset: { width: 0, height: elevation },
          borderRadius: cornerRadius,
          backgroundColor: backgroundColor,
        },
      }),
    android: () =>
      StyleSheet.create({
        container: {
          elevation: elevation,
          borderRadius: cornerRadius,
          backgroundColor: backgroundColor,
        },
      }),
  })();

  return (
    <View style={[cardStyle.container, style]}>
      {children}
    </View>
  );
};

export default Card;
