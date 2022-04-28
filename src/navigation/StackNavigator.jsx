import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateNote } from "../screens/notes/CreateNote";
import { ViewAllNotes } from "../screens/notes/ViewAllNotes";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CreateNote" component={CreateNote} />
        <Stack.Screen name="ViewAllNotes" component={ViewAllNotes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
