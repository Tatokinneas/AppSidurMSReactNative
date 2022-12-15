import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import Logo from "../Components/Logo";
const Home = ({navigation}) => {
  return (
    <>
      <View style={styles.maincontainer}>
        <View style={styles.container}>
          <Logo />
          <Text style={styles.title}>Sidur Monte Sinai</Text>
          <ScrollView>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Shajrit")}
            >
              <Text style={styles.textoDeLosBotones}>Shajrit</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Minja")}
            >
              <Text style={styles.textoDeLosBotones}>Minja</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Arbit")}
            >
              <Text style={styles.textoDeLosBotones}>Arbit</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Noche Shabat")}
            >
              <Text style={styles.textoDeLosBotones}>Noche Shabat</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("DiaShabat")}
            >
              <Text style={styles.textoDeLosBotones}>Día Shabat</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Rosh Jodesh")}
            >
              <Text style={styles.textoDeLosBotones}>Rosh Jodesh</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Shalosh Regalim")}
            >
              <Text style={styles.textoDeLosBotones}>Shalosh Regalim</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Perashot")}
            >
              <Text style={styles.textoDeLosBotones}>Perashot*</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Otros")}
            >
              <Text style={styles.textoDeLosBotones}>Otros...</Text>
            </Pressable>
            <Text style={styles.nota}> *Solo Cohen, Levy e Israel </Text>
            <Text style={styles.donadores}>
              Donado Leiluy Nishmat Eliahu Ben Yemile{" "}
            </Text>
          </ScrollView>
          <StatusBar style="auto" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#BB0D32",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    color: "#1A0D6B",
    fontFamily: "Arial-BoldMT",
  },
  
  button: {
    backgroundColor: "#860008",
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 110,
    marginVertical: 8,
    alignItems: "center",
    borderRadius: 5,
  },
  textoDeLosBotones: {
    color: "white",
    fontFamily: "Noto",
    fontSize: 15,
  },
  donadores: {
    textAlign: "center",
    fontSize: 28,
    color: "#1A0D6B",
    fontFamily: "Noto",
  },
  nota: {
    paddingVertical: 2,
    fontSize: 20,
    color: "white",
  },
});

export default Home;
