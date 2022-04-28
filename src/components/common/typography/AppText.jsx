import React from "react";
import { Text } from "react-native";

const AppText = (props) => {
  const { text, textStyle } = props;
  return <Text style={textStyle}>{text}</Text>;
};

export default AppText;
