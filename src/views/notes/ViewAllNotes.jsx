import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../../store/reducers/notesReducer/notesState";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { List } from "../../components/List";
import { AppButton } from "../../components/common/button/AppButton";
import AppText from "../../components/common/typography/AppText";

export const ViewAllNotes = () => {
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate("CreateNotes");
  };
  console.log("notes", notes);
  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);
  return (
    <>
      <View style={styles.btnContainer}>
        <AppButton onPress={handleNavigation} btnStyle={styles.btnStyle}>
          <AppText textStyle={styles.textStyle} text="Add notes" />
        </AppButton>
      </View>
      <View style={styles.listContainer}>
        <List
          data={notes}
          listTextStyle={styles.listTextStyle}
          listItemStyle={styles.listItemStyle}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },
  btnStyle: {
    borderStyle: "solid",
    borderRadius: 6,
    backgroundColor: "purple",
    marginTop: 10,
    width: "50%",
    height: 30,
  },
  itemStyle: { width: "50%" },
  listContainer: {
    flex: 1,
    paddingHorizontal: 12,
    marginTop: 30,
  },
  listItemStyle: {
    display: "flex",
    alignItems: "center",
    borderStyle: "solid",
    height: 30,
    backgroundColor: "dodgerblue",
    marginTop: 10,
    borderRadius: 6,
  },
  listTextStyle: {
    color: "white",
  },
  textStyle: {
    color: "white",
    textAlign: "center",
  },
});
