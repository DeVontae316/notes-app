import "react-native-get-random-values";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

import { TextField } from "../../../components/common/form/TextField";
import { AppButton } from "../../../components/common/button/AppButton";
import { AppText } from "../../../components/common/typography/AppText";
import { ErrorMessageText } from "../../../components/ErrorMessageText";
import { ErrorMessage } from "../../../components/ErrorMessage";
import { useNavigation } from "@react-navigation/native";
import { resetApiState } from "../../../store/reducers/notesReducer/postNoteState";

export const CreateNote = () => {
  const [userNote, setUserNote] = useState({});
  const [userInput, setUserInput] = useState("");
  const [isShowErrorMessage, setIsShowErrorMessage] = useState(false);
  const [isUserReadyToSaveNote, setIsUserReadyToSaveNote] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const isUserInputAnEmptyString = userInput === "";
  const configOptions = {
    secureTextEntry: false,
    value: userInput,
  };

  const handleCreateNote = () => {
    setErrorMessage();
    collectUserNote();
    setIsUserReadyToSaveNote(true);
    dispatch(resetApiState());
  };

  const setErrorMessage = () => {
    return setIsShowErrorMessage(isUserInputAnEmptyString || false);
  };

  const collectUserNote = () => {
    let id = uuidv4();
    if (isUserInputAnEmptyString) return;
    return setUserNote({ id: id, note: userInput });
  };

  const resetUserInput = () => {
    setUserInput("");
  };
  const onChangeText = (e) => {
    setIsShowErrorMessage(false);
    setUserInput(e);
  };

  const navigateToNextScreen = () => {
    if (isUserInputAnEmptyString) return;
    navigation.navigate("SaveNote", { userNote: userNote });
  };

  console.log("user input", userInput);

  useEffect(() => {
    console.log("will user save note?!!!", isUserReadyToSaveNote);
    isUserReadyToSaveNote && navigateToNextScreen();
    setIsUserReadyToSaveNote(false);
    resetUserInput();
  }, [isUserReadyToSaveNote]);

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextField
          onChangeText={onChangeText}
          placeholder="Enter note"
          textStyle={styles.textFieldStyle}
          configOptions={configOptions}
        />

        <AppButton btnStyle={styles.appButton} onPress={handleCreateNote}>
          <AppText textStyle={styles.textStyle} text="Create Note" />
        </AppButton>
      </View>
      {isShowErrorMessage && (
        <ErrorMessage>
          <ErrorMessageText
            errorMessage={"Error: Must enter a note before submitting"}
            errorTextStyle={styles.errorTextStyle}
          />
        </ErrorMessage>
      )}
    </SafeAreaView>
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
  addNoteButton: {
    backgroundColor: "purple",
    width: "100%",
    height: 55,
  },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    borderBottomColor: "#cccccc",
    borderStyle: "solid",
    borderColor: "blue",
  },
  addNoteBtnContainer: {
    marginLeft: 20,
  },
  errorTextStyle: { color: "red" },
  noteContainer: {
    borderStyle: "solid",
    borderColor: "green",
    borderWidth: 1,
  },
  iconStyle: {
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 100,
    borderBottomWidth: 4,
    borderBottomColor: "purple",
    borderStyle: "solid",
    borderColor: "pink",
    borderWidth: 1,
  },
  listItemStyle: {
    display: "flex",
    alignItems: "center",
    borderStyle: "solid",
    height: 40,
    backgroundColor: "dodgerblue",
    marginTop: 10,
    borderRadius: 6,
  },
  listTextStyle: {
    color: "white",
    marginTop: 8,
  },
  textFieldStyle: {
    textAlign: "center",
    width: "70%",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 8,
    padding: 8,
  },
  successStyle: {
    color: "green",
  },
  textStyle: {
    color: "white",
    fontSize: 20,
  },
});
