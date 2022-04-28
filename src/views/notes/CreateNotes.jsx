import "react-native-get-random-values";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
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
  const isUserInputAnEmptyString = userInput === "";

  const configOptions = {
    secureTextEntry: false,
    value: userInput,
  };

  const handleClick = () => {
    setErrorMessage();
    collectUserGoals();
    resetUserInput();
  };

  const setErrorMessage = () => {
    return setIsShowErrorMessage(isUserInputAnEmptyString || false);
  };

  const collectUserGoals = () => {
    let id = uuidv4();
    if (isUserInputAnEmptyString) return;
    return setUserGoals((initialGoals) => [
      ...initialGoals,
      { id: id, goal: userInput },
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

  console.log("show err message?", isShowErrorMessage);
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
          <AppButton btnStyle={styles.appButton} onPress={handleClick}>
            <AppText textStyle={styles.textStyle} text="Save notes" />
          </AppButton>
        </View>
      </View>

      <View style={styles.goalsContainer}>
        {isShowErrorMessage && (
          <ErrorMessage>
            <ErrorMessageIcon showStopSignIcon size="10" color="red" />
            <ErrorMessageText errorMessage={"Error"} />
          </ErrorMessage>
        )}
        <List deleteItem={deleteItem} data={userGoals} />
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
    height: 35,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
  },

  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    borderBottomColor: "#cccccc",
    borderStyle: "solid",
    borderColor: "blue",
  },
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
    flex: 0.5,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 4,
    borderBottomColor: "purple",
    borderStyle: "solid",
    borderColor: "pink",
    borderWidth: 1,
    height: 500,
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
    /* textAlign: "center", */
    /* marginTop: 8, */
    color: "white",
    fontSize: 10,
  },
});
