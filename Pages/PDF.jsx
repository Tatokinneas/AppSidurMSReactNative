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
// Shajrit imports
import birkatHashajarObject from "../Api/apiBirkatHashajar";
import kadeshLiObject from "../Api/apiKadeshLi";
import ashreObject from "../Api/apiAshre";
import ishtabajObject from "../Api/apiIshtabaj";
import shemaObject from "../Api/apiShema";
import amidaObject from "../Api/apiAmida";
import kaveObject from "../Api/apiKave";
//Minja imports
import korbanotObject from "../Api/apiKorbanot";
import ashreMObject from "../Api/apiAshreM";
import yehiShemObject from "../Api/apiYehiShem";
//Arbit imports
import arbitObject from "../Api/apiArbit";
import keriatObject from "../Api/apiKeriatShema";
//Noche Shanbat imports
import shirHashirimObject from "../Api/apiShirHashirim";
import kabalaShabatObject from "../Api/apiKabalaShabat";
import arbitShabatObject from "../Api/apiArbitShabat";
import kidushObject from "../Api/apiKidush";
import birkatHamazonObject from "../Api/apiBirkatHamazon";
//Dia Shabat imports
import shajritShabatObject from "../Api/apiShajritShabat";
import petijatHaejalObject from "../Api/apiPetijaHaejal";
import musafObject from "../Api/apiMusaf";
import kidushDObject from "../Api/apiKidushDia";
import minjaShabatObject from "../Api/apiMinjaShabat";
import habdalahObject from "../Api/apiHabdalah";
import shabatonimObject from "../Api/apiShabatonim";
import shabatShekalimObject from "../Api/apiShabatShekalim";
import shabatZajorObject from "../Api/apiShabatZajor";
//Rosh Jodesh imports
import halelObject from "../Api/apiHalel";
import seferObject from "../Api/apiSeferRoshJodesh";
import musafRoshJodeshJolObject from "../Api/apiMusafRoshJodeshJol";
import musafRoshJodeshShabatObjetct from "../Api/apiMusafRoshJodeshShabat";
//Shalos Regalim imports
import mizmorimObject from "../Api/apiMizmorim";
import amidaYomTobObject from "../Api/apiAmidaYomtob";
import amidaMusafObject from "../Api/apiAmidaMusaf";
//Perashot import
import bereshitObject from "../Api/apiBereshit";
import shemotObject from "../Api/apiShemot";
import vaikraObject from "../Api/apiVaikra";
import bamidbarObject from "../Api/apiBamidar";
import debarimObject from "../Api/apiDebarim";

import birkatHailanotObject from "../Api/apiBirkatHailanot";
const PDF = ({ navigation, route }) => {
  const { ruta } = route.params;
  console.log(ruta);
  let dataPDF = null;
  if (ruta === "birkatHashajar") {
    dataPDF = birkatHashajarObject;
  } else if (ruta === "kadeshLi") {
    dataPDF = kadeshLiObject;
  } else if (ruta == "ashre") {
    dataPDF = ashreObject;
  } else if (ruta == "ishtabaj") {
    dataPDF = ishtabajObject;
  } else if (ruta == "shema") {
    dataPDF = shemaObject;
  } else if (ruta == "amida") {
    dataPDF = amidaObject;
  } else if (ruta === "kave") {
    dataPDF = kaveObject;
  } else if (ruta === "korbanot") {
    dataPDF = korbanotObject;
  } else if (ruta === "ashreM") {
    dataPDF = ashreMObject;
  } else if (ruta === "yehiShem") {
    dataPDF = yehiShemObject;
  } else if (ruta === "arbit") {
    dataPDF = arbitObject;
  } else if (ruta === "keriatShema") {
    dataPDF = keriatObject;
  } else if (ruta === "shirHashirim") {
    dataPDF = shirHashirimObject;
  } else if (ruta === "kabalatShabat") {
    dataPDF = kabalaShabatObject;
  } else if (ruta === "arbitShabat") {
    dataPDF = arbitShabatObject;
  } else if (ruta === "kidush") {
    dataPDF = kidushObject;
  } else if (ruta === "birkatHamazon") {
    dataPDF = birkatHamazonObject;
  } else if (ruta === "shajritShabat") {
    dataPDF = shajritShabatObject;
  } else if (ruta === "petijatHaejal") {
    dataPDF = petijatHaejalObject;
  } else if (ruta === "musaf") {
    dataPDF = musafObject;
  } else if (ruta === "kidushDia") {
    dataPDF = kidushDObject;
  } else if (ruta === "minjaShabat") {
    dataPDF = minjaShabatObject;
  } else if (ruta === "habdalah") {
    dataPDF = habdalahObject;
  } else if (ruta === "shabatShekalim") {
    dataPDF = shabatShekalimObject;
  } else if (ruta === "shabatZajor") {
    dataPDF = shabatZajorObject;
  } else if (ruta === "shabatonimDiferentes") {
    dataPDF = shabatonimObject;
  } else if (ruta === "halel") {
    dataPDF = halelObject;
  } else if (ruta === "seferRoshJodesh") {
    dataPDF = seferObject;
  } else if (ruta === "musafRoshJodeshJol") {
    dataPDF = musafRoshJodeshJolObject;
  } else if (ruta === "musafRoshJodeshShabat") {
    dataPDF = musafRoshJodeshShabatObjetct;
  } else if (ruta === "mizmorim") {
    dataPDF = mizmorimObject;
  } else if (ruta === "amidaYomtob") {
    dataPDF = amidaYomTobObject;
  } else if (ruta === "amidaMusaf") {
    dataPDF = amidaMusafObject;
  } else if (ruta === "bereshit") {
    dataPDF = bereshitObject;
  } else if (ruta === "shemot") {
    dataPDF = shemotObject;
  }else if (ruta === "vaikra"){
    dataPDF = vaikraObject
  }else if (ruta==="bamidbar"){
    dataPDF = bamidbarObject
  }else if (ruta==="debarim"){
    dataPDF=debarimObject
  }
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
  function Carousel({ object }) {
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
        <Carousel object={dataPDF} />
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
