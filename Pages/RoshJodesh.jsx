import React from 'react'
import { Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'

const RoshJodesh = ({navigation}) => {
  return (
    <View style={styles.container}>
    <SafeAreaView>
      <ScrollView>
  
  
    <Text style ={styles.titulo}>ROSH JODESH</Text>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "Halel"})}><Text style ={styles.textoDeLosBotones}>Halel</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "seferRoshJodesh"}) }><Text style ={styles.textoDeLosBotones}>Lectura del Sefer</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "musafRoshJodeshJol"})}><Text style ={styles.textoDeLosBotones}>Musaf Jol</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "musafRoshJodeshShabat"})}><Text style ={styles.textoDeLosBotones}>Musaf Shabat-Rosh Jodesh</Text></Pressable>
    <Text style={styles.donadores}>Donado Beraja y Hatzlaja Daniela Sarah Bat Sophie</Text>
    <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  </View>
  )
  
}


export default RoshJodesh;


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
    textAlign: 'center',
    fontSize: 32,
    color: "#1A0D6B",
    fontFamily: 'Noto',

  },
  textoDeLosBotones: {

    color: 'white',
    fontFamily: "Noto",
    fontSize: 15,
    
  },

  donadores: {
    textAlign: 'center',
    fontSize: 30,
    color: "#1A0D6B",
    fontFamily: 'Noto',
    

  },

  nota: {
paddingVertical: 2,
fontSize: 10,
color: "white",



  },
});
  


