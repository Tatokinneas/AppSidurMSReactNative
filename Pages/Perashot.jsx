import React from 'react'
import { Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'

const Perashot = ({navigation}) => {
  return (
    <View style={styles.container}>
    <SafeAreaView>
      <ScrollView>
  
  
    <Text style ={styles.titulo}>PERASHOT</Text>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "bereshit"})}><Text style ={styles.textoDeLosBotones}>Bereshit</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "shemot"}) }><Text style ={styles.textoDeLosBotones}>Shemot</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "vaikra"})}><Text style ={styles.textoDeLosBotones}>Vaikra</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "bamidbar"})}><Text style ={styles.textoDeLosBotones}>Bamidbar</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "debarim"})}><Text style ={styles.textoDeLosBotones}>Debarim</Text></Pressable>
    <Text style={styles.donadores}>Donado Beraja y Hatzlaja Daniela Sarah Bat Sophie</Text>
    <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  </View>
  )
  
}

export default Perashot;




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