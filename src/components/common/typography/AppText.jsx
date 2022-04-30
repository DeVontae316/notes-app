import React from "react";
import { Text } from "react-native";

export const AppText = (props) => {
  const { text, textStyle } = props;
  return <Text style={textStyle}>{text}</Text>;
};
