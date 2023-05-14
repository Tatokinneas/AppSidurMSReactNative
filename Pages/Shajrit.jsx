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
            onPress={()=>
              navigation.navigate("PDF", { ruta: "birkatHashajar" })
            }
          >
            <Text style={styles.textoDeLosBotones}>Birkat Hashajar</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={()=>navigation.navigate("PDF", { ruta: "kadeshLi" })}
          >
            <Text style={styles.textoDeLosBotones}>Kadesh Li</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={()=>navigation.navigate("PDF", { ruta: "ashre" })}
          >
            <Text style={styles.textoDeLosBotones}>Ashre</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={()=>navigation.navigate("PDF", { ruta: "ishtabaj" })}
          >
            <Text style={styles.textoDeLosBotones}>Ishtabaj</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("PDF", { ruta: "shema" })}
          >
            <Text style={styles.textoDeLosBotones}>Shema</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("PDF", { ruta: "amida" })}
          >
            <Text style={styles.textoDeLosBotones}>Amida</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("PDF", { ruta: "kave" })}
          >
            <Text style={styles.textoDeLosBotones}>Kave</Text>
          
          </Pressable>

          <Text style={styles.donadores}>
           Leiluy Nishmat Daniela Sarah Bat Sophie
          </Text>
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

  donadores: {
      textAlign: "center",
      fontSize: 30,
      color: "#1A0D6B",
      //fontFamily: "Noto",

  },
  textoDeLosBotones:{
    color: "white",
    // fontFamily: "Noto",
    fontSize: 15,
  }
});

export default Shajrit;

