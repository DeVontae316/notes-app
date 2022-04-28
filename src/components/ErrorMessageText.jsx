import React from "react";
import { Text } from "react-native";

export const ErrorMessageText = (props) => {
  const { errorMessage } = props;
  return <Text>{errorMessage}</Text>;
};
