import React from "react";
import { View } from "react-native";

export const ErrorMessage = (props) => {
  const { children, style } = props;
  return (
    <View style={style}>
      <>{children}</>
    </View>
  );
};
