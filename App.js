import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Home from "./Pages/Home";
export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </View>
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
