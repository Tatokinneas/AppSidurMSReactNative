import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
let logo = require("../assets/LogoMS.png");
const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <Image source={logo} style={styles.image}></Image>
        <ScrollView>
          <Text style={styles.title}>Sidur Monte Sinai</Text>
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
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    alignContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    color: "#1A0D6B",
    fontFamily: "Arial-BoldMT",
  },
  image: {
    width: 200,
    height: 190,
    resizeMode: "contain",
    marginLeft: 85,
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
    fontSize: 20,
    color: "#1A0D6B",
    fontFamily: "Noto",
  },
  nota:{
    paddingVertical: 2,
    fontSize: 10,
    color: "white",
  }
});

export default Home;
