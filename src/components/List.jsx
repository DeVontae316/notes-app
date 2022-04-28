import React from "react";
import { FlatList } from "react-native";

import { ListItem } from "./ListItem";

export const List = (props) => {
  const {
    data,
    deleteItem,
    listItemStyle,
    listTextStyle,
    onRefresh,
    refreshing,
  } = props;
  return (
    <FlatList
      refreshing={refreshing}
      onRefresh={onRefresh}
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
