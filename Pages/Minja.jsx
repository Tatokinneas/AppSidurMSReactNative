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

const Minja = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.titulo}>MINJA</Text>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("PDF", { ruta: "korbanot" })}
          >
            <Text style={styles.textoDeLosBotones}>Korbanot</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("PDF", { ruta: "ashreM" })}
          >
            <Text style={styles.textoDeLosBotones}>Ashre</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("PDF", { ruta: "yehiShem" })}
          >
            <Text style={styles.textoDeLosBotones}>Yehi Shem</Text>
          </Pressable>
          <Text style={styles.donadores}>
            {" "}
            Donado Leiluy Nishmat Eliahu Ben Yemile{" "}
          </Text>
          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
export default Minja;

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
    fontFamily: "Noto",
    fontSize: 15,
  },

  donadores: {
    textAlign: "center",
    fontSize: 30,
    color: "#1A0D6B",
    fontFamily: "Noto",
  },

  nota: {
    paddingVertical: 2,
    fontSize: 10,
    color: "white",
  },
});
