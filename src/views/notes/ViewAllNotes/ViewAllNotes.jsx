import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../../../store/reducers/notesReducer/notesState";
import { ScrollView, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { List } from "../../../components/List";
import { AppButton } from "../../../components/common/button/AppButton";
import { AppText } from "../../../components/common/typography/AppText";

export const ViewAllNotes = () => {
  const notes = useSelector((state) => state.notes.notes);
  const [isShowNotes, setIsShowNotes] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleNavigation = () => {
    console.log("navigation hit");
    navigation.navigate({ name: "CreateNote" });
  };
  console.log("notes", notes);

  //dispatch on first render
  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  //dispatch on refresh
  useEffect(() => {
    isShowNotes && dispatch(getNotes());
    setIsShowNotes(false);
  }, [isShowNotes]);
  return (
    <>
      <View style={styles.btnContainer}>
        <AppButton onPress={handleNavigation} btnStyle={styles.btnStyle}>
          <AppText textStyle={styles.textStyle} text="Add note" />
        </AppButton>
      </View>
      <View style={styles.instructionsContainer}>
        <AppText text="Refresh to see updates" />
      </View>
      <View style={styles.listContainer}>
        <List
          refreshing={isShowNotes}
          onRefresh={() => setIsShowNotes(true)}
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
  instructionsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
