import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function App() {
  let logo =require("./assets/LogoMS.png");

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image}></Image>
      <Pressable><Text>Hola</Text></Pressable>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 300,
    height: 300,
    resizeMode:'contain',
  }
  
});
