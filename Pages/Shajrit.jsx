import React from "react";
import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import Logo from "../Components/Logo";
const Shajrit = ({ navigation }) => {
  return (
    <>
      <View style={styles.maincontainer}>
        <Logo />
        <Text style={styles.title}>Shajrit</Text>
        <ScrollView>
          <Pressable
            style={styles.button}
            onPress={() =>
              navigation.navigate("PDF", { ruta: "birkatHashajar" })
            }
          >
            <Text style={styles.textoDeLosBotones}>Birkat Hashajar</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("PDF", { ruta: "kadeshLi" })}
          >
            <Text style={styles.textoDeLosBotones}>Kadesh Li</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("PDF", { ruta: "Ashre" })}
          >
            <Text style={styles.textoDeLosBotones}>Ashre</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("PDF", { ruta: "Ishtabaj" })}
          >
            <Text style={styles.textoDeLosBotones}>Ishtabaj</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("PDF", { ruta: "Shema" })}
          >
            <Text style={styles.textoDeLosBotones}>Shema</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("PDF", { ruta: "Amida" })}
          >
            <Text style={styles.textoDeLosBotones}>Amida</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("PDF", { ruta: "Kave" })}
          >
            <Text style={styles.textoDeLosBotones}>Kave</Text>
          </Pressable>
        </ScrollView>
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
  title: {
    textAlign: "center",
    fontSize: 20,
    color: "#1A0D6B",
    fontFamily: "Noto",
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
});

export default Shajrit;
