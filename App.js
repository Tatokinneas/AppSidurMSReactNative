import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Home from "./Pages/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <stack.Navigator>
      <View style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </View>
      </stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#BB0D32",
    alignItems: "center",
    
  },
});
