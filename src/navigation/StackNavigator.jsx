import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateNote } from "../views/notes/CreateNote/CreateNote";
import { ViewAllNotes } from "../views/notes/ViewAllNotes/ViewAllNotes";
import { SaveNote } from "../views/notes/SaveNote/SaveNote";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ViewAllNotes">
        <Stack.Screen
          options={{ title: "All saved notes" }}
          name="ViewAllNotes"
          component={ViewAllNotes}
        />
        <Stack.Screen
          options={{ title: "Create a note" }}
          name="CreateNote"
          component={CreateNote}
        />

        <Stack.Screen
          options={{ title: "Save your note" }}
          name="SaveNote"
          component={SaveNote}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
