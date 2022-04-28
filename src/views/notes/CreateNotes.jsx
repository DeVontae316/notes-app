import "react-native-get-random-values";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, SafeAreaView, Modal } from "react-native";
import { v4 as uuidv4 } from "uuid";

import { TextField } from "../../components/common/form/TextField";
import { AppButton } from "../../components/common/button/AppButton";
import AppText from "../../components/common/typography/AppText";
import { ErrorMessageText } from "../../components/ErrorMessageText";
import { ErrorMessage } from "../../components/ErrorMessage";
import { List } from "../../components/List";

export const CreateNotes = () => {
  const [userGoals, setUserGoals] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isShowErrorMessage, setIsShowErrorMessage] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true);

  const isUserInputAnEmptyString = userInput === "";

  const configOptions = {
    secureTextEntry: false,
    value: userInput,
  };

  const handlePostNote = () => {
    console.log("post note");
  };
  const handleClick = () => {
    console.log("handle click hit");
    setErrorMessage();
    collectUserGoals();
    resetUserInput();
    setIsModalVisible(false);
  };

  const handleCreateNote = () => {
    setIsModalVisible(true);
  };

  const setErrorMessage = () => {
    return setIsShowErrorMessage(isUserInputAnEmptyString || false);
  };

  const collectUserGoals = () => {
    let id = uuidv4();
    if (isUserInputAnEmptyString) return;
    return setUserGoals((initialGoals) => [
      ...initialGoals,
      { id: id, note: userInput },
    ]);
  };

  const resetUserInput = () => {
    setUserInput("");
  };
  const onChangeText = (e) => {
    setUserInput(e);
  };

  const deleteItem = (id) => {
    const updatedGoals = userGoals?.filter((goal) => goal.id !== id);
    setUserGoals([...updatedGoals]);

    console.log("updated goals arr", updatedGoals);
  };

  console.log("show err message...?", isShowErrorMessage);
  console.log("user input", userInput);
  //Only show me console.log when userGoals changes
  useEffect(() => {
    console.table(userGoals);
    console.log("length", userGoals?.length);
  }, [userGoals]);

  useEffect(() => {
    /* console.log("all goals", fetchAllGoals()); */
  }, []);
  return (
    <SafeAreaView style={styles.appContainer}>
      <Modal visible={isModalVisible}>
        <View style={styles.inputContainer}>
          <TextField
            onChangeText={onChangeText}
            placeholder="Enter notes"
            textStyle={styles.textFieldStyle}
            configOptions={configOptions}
          />

          <View>
            <AppButton btnStyle={styles.appButton} onPress={handleClick}>
              <AppText textStyle={styles.textStyle} text="Create Note" />
            </AppButton>
            <AppButton btnStyle={styles.appButton} onPress={handlePostNote}>
              <AppText textStyle={styles.textStyle} text="Save notes" />
            </AppButton>
          </View>
        </View>
        {isShowErrorMessage && (
          <ErrorMessage>
            <ErrorMessageText
              errorMessage={"Error: Must enter a note before submitting"}
              errorTextStyle={styles.errorTextStyle}
            />
          </ErrorMessage>
        )}
      </Modal>

      <View styles={styles.addNoteBtnContainer}>
        <AppButton
          btnStyle={[styles.appButton, styles.addNoteButton]}
          onPress={handleCreateNote}
        >
          <AppText textStyle={styles.textStyle} text="Add note" />
        </AppButton>
      </View>
      <View style={styles.goalsContainer}>
        <List
          listTextStyle={styles.listTextStyle}
          listItemStyle={styles.listItemStyle}
          deleteItem={deleteItem}
          data={userGoals}
        />
      </View>
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
  goalsContainer: {
    flex: 2,
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
    height: 30,
    backgroundColor: "dodgerblue",
    marginTop: 10,
    borderRadius: 6,
  },
  listTextStyle: {
    color: "white",
  },
  textFieldStyle: {
    textAlign: "center",
    width: "70%",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 8,
    padding: 8,
  },
  textStyle: {
    color: "white",
    fontSize: 20,
  },
});
