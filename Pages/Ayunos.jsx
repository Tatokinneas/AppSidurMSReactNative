import React from 'react'
import { Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'

const Ayunos = ({navigation}) => {
  return (
    <View style={styles.container}>
    <SafeAreaView>
      <ScrollView>
  
  
    <Text style ={styles.titulo}>AYUNOS</Text>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "guedalia"})}><Text style ={styles.textoDeLosBotones}>Ayuno Guedalia</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "asaraBetebet"}) }><Text style ={styles.textoDeLosBotones}>Ayuno 10 de Tebet</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "ayunoEsther"})}><Text style ={styles.textoDeLosBotones}> Ayuno de Esther </Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "tamuz"}) }><Text style ={styles.textoDeLosBotones}> Ayuno 17 Tamuz </Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "minjaAyuno"}) }><Text style ={styles.textoDeLosBotones}> Minja de Ayunos</Text></Pressable>
    <Text style={styles.donadores}>Leiluy Nishmat Daniela Sarah Bat Sophie</Text>
    <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  </View>
  )
  
}

export default Ayunos;





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BB0D32',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
  backgroundColor: "#860008",
  color: 'white',
  paddingVertical: 10,
  paddingHorizontal: 110,
  marginVertical: 8,
  alignItems: 'center',
  borderRadius: 5,   
  },
  titulo: {
    textAlign: "center",
      fontSize: 32,
      color: "#1A0D6B",
      fontFamily: "Arial-BoldMT",

  },
  textoDeLosBotones: {

    color: 'white',
    //fontFamily: "Noto",
    fontSize: 15,
    
  },

  donadores: {
    textAlign: 'center',
    fontSize: 30,
    color: "#1A0D6B",
   //fontFamily: 'Noto',
    

  },

  nota: {
paddingVertical: 2,
fontSize: 10,
color: "white",



  },
});
  






