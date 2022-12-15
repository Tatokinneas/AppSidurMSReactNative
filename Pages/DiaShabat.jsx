import React from 'react'
import { Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'

const DiaShabat = ({navigation}) => {
  return (
    <View style={styles.container}>
    <SafeAreaView>
      <ScrollView>
  
  
    <Text style ={styles.titulo}>DÍA DE SHABAT</Text>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "shajritShabat"})}><Text style ={styles.textoDeLosBotones}>Shajrit de Shabat</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "petijatHaejal"}) }><Text style ={styles.textoDeLosBotones}>Petijat Haejal</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "musaf"})}><Text style ={styles.textoDeLosBotones}>Musaf</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "kidush"})}><Text style ={styles.textoDeLosBotones}>Kidush</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "minjaShabat"})}><Text style ={styles.textoDeLosBotones}>Minja de Shabat</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "Habdalah"})}><Text style ={styles.textoDeLosBotones}>Habdalah</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("shabatonimDiferentes")}><Text style ={styles.textoDeLosBotones}>Shabatonim Diferentes</Text></Pressable>
    <Text style={styles.donadores}>Donado Beraja y Hatzlaja Daniela Sarah Bat Sophie</Text>
    <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  </View>
  )
  
}

export default DiaShabat;




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








 

 










