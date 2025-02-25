import React from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const NocheShabat = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.titulo}>NOCHE DE SHABAT</Text>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("PDF", { ruta: "shirHashirim" })}
          >
            <Text style={styles.textoDeLosBotones}>Shir Hashirim</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() =>
              navigation.navigate("PDF", { ruta: "kabalatShabat" })
            }
          >
            <Text style={styles.textoDeLosBotones}>Kabalat Shabat</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("PDF", { ruta: "arbitShabat" })}
          >
            <Text style={styles.textoDeLosBotones}>Arbit de Shabat</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("PDF", { ruta: "kidush" })}
          >
            <Text style={styles.textoDeLosBotones}>Kidush</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() =>
              navigation.navigate("PDF", { ruta: "birkatHamazon" })
            }
          >
            <Text style={styles.textoDeLosBotones}>Birkat Hamazon</Text>
          </Pressable>
          <Text style={styles.donadores}>
            Leiluy Nishmat Eliahu Ben Yemile
          </Text>
          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default NocheShabat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BB0D32",
    alignItems: "center",
    justifyContent: "center",
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
  titulo: {
    textAlign: "center",
    fontSize: 32,
    color: "#1A0D6B",
    fontFamily: "Arial-BoldMT",
  },
  textoDeLosBotones: {
    color: "white",
    // fontFamily: "Noto",
    fontSize: 15,
  },

  donadores: {
    textAlign: "center",
    fontSize: 30,
    color: "#1A0D6B",
    // fontFamily: "Noto",
  },

  nota: {
    paddingVertical: 2,
    fontSize: 10,
    color: "white",
  },
});
