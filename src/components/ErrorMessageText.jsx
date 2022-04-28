import React from "react";
import { Text } from "react-native";

export const ErrorMessageText = (props) => {
  const { errorMessage, errorTextStyle } = props;
  return <Text style={errorTextStyle}>{errorMessage}</Text>;
};
