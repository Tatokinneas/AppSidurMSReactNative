import React from 'react'
import { Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'

const Otros = ({navigation}) => {
  return (
    <View style={styles.container}>
    <SafeAreaView>
      <ScrollView>
  
  
    <Text style ={styles.titulo}>OTROS...</Text>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "birkatHalebana"})}><Text style ={styles.textoDeLosBotones}>Birkat Halebana</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF" ,{ruta: "sefiratHaomer"})}><Text style ={styles.textoDeLosBotones}>Sefirat Haomer</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("Januca")}><Text style ={styles.textoDeLosBotones}>Januca</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "purim"})}><Text style ={styles.textoDeLosBotones}>Purim</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "birkatHailanot"})}><Text style ={styles.textoDeLosBotones}>Birkat Hailanot</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "limudNisan"})}><Text style ={styles.textoDeLosBotones}>Limud Jodesh Nisan</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("Izkor")}><Text style ={styles.textoDeLosBotones}>Izkor</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "tefilaShalomAlIsrael"})}><Text style ={styles.textoDeLosBotones}>Tefila Shalom al Israel</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("Boda") }><Text style ={styles.textoDeLosBotones}>Boda</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("Brit Mila")}><Text style ={styles.textoDeLosBotones}>Nacimiento de un varón</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "berajot"})}><Text style ={styles.textoDeLosBotones}>Berajot</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("PDF",{ruta: "abelut"})}><Text style ={styles.textoDeLosBotones}>Abelut</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("Ayunos")}><Text style ={styles.textoDeLosBotones}>Ayunos</Text></Pressable>
    <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  </View>
  )
  
}

export default Otros;




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
  paddingVertical: 2,
  paddingHorizontal: 80,
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
 

