import React from "react";
import { TextInput } from "react-native";

export const TextField = (props) => {
  const { textStyle, placeholder, configOptions, onChangeText } = props;
  return (
    <TextInput
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={textStyle}
      {...configOptions}
    />
  );
};
