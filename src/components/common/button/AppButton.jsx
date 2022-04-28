import { Pressable } from "react-native";

export const AppButton = (props) => {
  const { onPress, btnStyle, children } = props;
  return (
    <Pressable style={btnStyle} onPress={onPress}>
      <>{children}</>
    </Pressable>
  );
};
