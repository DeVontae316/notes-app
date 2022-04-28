import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateNotes } from "../views/notes/CreateNotes";
import { ViewAllNotes } from "../views/notes/ViewAllNotes";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ViewAllNotes">
        <Stack.Screen name="ViewAllNotes" component={ViewAllNotes} />
        <Stack.Screen name="CreateNotes" component={CreateNotes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
