import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import birkatHashajarObject from "../Api/apiBirkatHashajar";
import kadeshLiObject from "../Api/apiKadeshLi";
import ashreObject from "../Api/apiAshre";
import ishtabajObject from "../Api/apiIshtabaj";
import debarimObject from "../Api/apiDebarim";

const PDF = ({ navigation, route }) => {
  const { ruta } = route.params;
  console.log(ruta);



  

  

  function Slide({ data }) {
    return (
      <View style={styles.sliderinnerconainter}>
        <Image
          source={data.image}
          style={styles.imagecarousel}
          resizeMode="center"
        ></Image>
      </View>
    );
  }
  function Carousel({object}) {
    return (
      <FlatList
        data={object}
        style={styles.carousel}
        renderItem={({ item }) => {
          return <Slide data={item} />;
        }}
        
        horizontal={true}
        inverted={true}
        
      />
    );
  }
  return (
    <>
      <View style={styles.maincontain}>
        <View style={styles.buttoncontain}>
          <Pressable>
            <Text>{"<-"}</Text>
          </Pressable>
          <Pressable>
            <Text>{"->"}</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.slidercontain}>
        <Carousel object={birkatHashajarObject}/>
      </View>
    </>
  );
};
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  maincontain: {
    flex: 1,
  },
  slidercontain: {
    flex: 20,
    marginTop: -75,
    // marginStart: 30,
    // marginEnd: 30,
  },
  buttoncontain: {
    flex: 2,
    flexDirection: "row",
    height: 1,
  },
  slide: { flex: 1 },
  carousel: {
    flex: 1,
  },
  sliderinnerconainter: {},
  imagecarousel: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.9,
  },
});

export default PDF;
