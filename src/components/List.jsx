import React from "react";
import { FlatList } from "react-native";

import { ListItem } from "./ListItem";

export const List = (props) => {
  const { data, deleteItem, listItemStyle, listTextStyle } = props;
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item?.id?.toString()}
      renderItem={({ item }) => (
        <ListItem
          deleteItem={deleteItem}
          currentId={item.id}
          note={item.note}
          listItemStyle={listItemStyle}
          listTextStyle={listTextStyle}
        />
      )}
    ></FlatList>
  );
};
