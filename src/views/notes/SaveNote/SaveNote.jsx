import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";

import { AppText } from "../../../components/common/typography/AppText";
import { AppButton } from "../../../components/common/button/AppButton";
import { postNote } from "../../../store/reducers/notesReducer/postNoteState";
import { useEffect, useState } from "react";

export const SaveNote = () => {
  const [isUserReadyToViewAllNotes, setIsUserReadyToViewAllNotes] =
    useState(false);
  const route = useRoute();
  const dispatch = useDispatch();
  const apiStatus = useSelector((state) => state.post.isSuccess);
  const navigation = useNavigation();

  const handlePostNote = () => {
    dispatch(postNote(route.params.userNote));
    setIsUserReadyToViewAllNotes(true);
  };

  /*  useEffect(() => {
    isUserReadyToViewAllNotes &&
      setInterval(() => {
        navigation.navigate("CreateNote");
      }, 2000);
    
  }, [isUserReadyToViewAllNotes]); */
  return (
    console.log("isUserReadyval...", isUserReadyToViewAllNotes) || (
      <View styles={styles.addNoteBtnContainer}>
        <AppButton btnStyle={styles.appButton} onPress={handlePostNote}>
          <AppText textStyle={styles.textStyle} text="Save note" />
        </AppButton>

        <View style={{ marginTop: 20 }}>
          <AppText
            textStyle={styles.routeParamsStyle}
            text={route.params.userNote.note}
          />
        </View>

        {apiStatus && (
          <AppText
            textStyle={styles.successText}
            text="Note Successfully saved"
          />
        )}
      </View>
    )
  );
};

const styles = StyleSheet.create({
  appButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "dodgerblue",
    width: 200,
    height: 55,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
    marginBottom: 4,
  },
  addNoteBtnContainer: {
    marginLeft: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  routeParamsStyle: {
    color: "purple",
    fontSize: 20,
  },
  successText: {
    color: "green",
  },
  textStyle: {
    color: "white",
    fontSize: 20,
  },
});
