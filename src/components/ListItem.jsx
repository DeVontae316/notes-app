import React from "react";
import { View, Text, Pressable } from "react-native";

export const ListItem = (props) => {
  const { note, listItemStyle, listTextStyle, deleteItem, currentId } = props;
  return (
    <Pressable onPress={() => deleteItem(currentId)}>
      <View style={listItemStyle}>
        <Text style={listTextStyle}>{note}</Text>
      </View>
    </Pressable>
  );
};
