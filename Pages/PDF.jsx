import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
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
//Perashot imports
import bereshitObject from "../Api/apiBereshit";
import shemotObject from "../Api/apiShemot";
import vaikraObject from "../Api/apiVaikra";
import bamidbarObject from "../Api/apiBamidar";
import debarimObject from "../Api/apiDebarim";
//Otros imports
import birkatHalebanaObject from "../Api/apiBirkatHalebana";
import sefiratHaomerObject from "../Api/apiSefiratHaomer";
import velasObject from "../Api/apiVelas";
import seferJanucaObject from "../Api/apiSeferJanuca";
import purimObject from "../Api/apiPurim";
import birkatHailanotObject from "../Api/apiBirkatHailanot";
import limudNisanObject from "../Api/apiLimudNisan";
import shoaObject from "../Api/apiShoa";
import yomHazikaronObject from "../Api/apiYomHazikaron";
import tefilaShalomAlIsraelObject from "../Api/apiTefilaShalomAlIsrael";
import bodaObject from "../Api/apiBoda";
import britMilaObject from "../Api/apiBritMila";
import pidionHabenObject from "../Api/apiPidionHaben";
import berajotObject from "../Api/apiBerajot";
import abelutObject from "../Api/apiAbelut";
import guedaliaObject from "../Api/apiGuedalia";
import asaraBetebetObject from "../Api/apiAsaraBetebet";
import ayunoEstherObject from "../Api/apiAyunoEsther";
import tamuzObject from "../Api/apiTamuz";
import minjaAyunoObject from "../Api/apiMinjaAyuno";
import agraObject from "../Api/apiAgra.js";
import LeftArrow from "../assets/leftArrow.png";
const PDF = ({ navigation, route }) => {
  const { ruta } = route.params;
  const [showNext, setShowNext] = useState(true);
 
  const handlePrevious = () => {
    if (ruta === "birkatHashajar") {
      navigation.navigate("PDF", { ruta: "kadeshLi" });
    } else if (ruta === "kadeshLi") {
      navigation.navigate("PDF", { ruta: "ashre" });
    } else if (ruta == "ashre") {
      navigation.navigate("PDF", { ruta: "ishtabaj" });
    } else if (ruta == "ishtabaj") {
      navigation.navigate("PDF", { ruta: "shema" });
    } else if (ruta == "shema") {
      navigation.navigate("PDF", { ruta: "amida" });
    } else if (ruta == "amida") {
      navigation.navigate("PDF", { ruta: "kave" });
    } else if (ruta === "kave") {
      navigation.navigate("PDF", { ruta: "korbanot" });
    } else if (ruta === "korbanot") {
      navigation.navigate("PDF", { ruta: "ashreM" });
    } else if (ruta === "ashreM") {
      navigation.navigate("PDF", { ruta: "yehiShem" });
    } else if (ruta === "yehiShem") {
      navigation.navigate("PDF", { ruta: "arbit" });
    } else if (ruta === "arbit") {
      navigation.navigate("PDF", { ruta: "keriatShema" });
    } else if (ruta === "keriatShema") {
      navigation.navigate("PDF", { ruta: "shirHashirim" });
    } else if (ruta === "shirHashirim") {
      navigation.navigate("PDF", { ruta: "kabalatShabat" });
    } else if (ruta === "kabalatShabat") {
      navigation.navigate("PDF", { ruta: "arbitShabat" });
    } else if (ruta === "arbitShabat") {
      navigation.navigate("PDF", { ruta: "kidush" });
    } else if (ruta === "kidush") {
      navigation.navigate("PDF", { ruta: "birkatHamazon" });
    } else if (ruta === "birkatHamazon") {
      navigation.navigate("PDF", { ruta: "shajritShabat" });
    } else if (ruta === "shajritShabat") {
      navigation.navigate("PDF", { ruta: "petijatHaejal" });
    } else if (ruta === "petijatHaejal") {
      navigation.navigate("PDF", { ruta: "musaf" });
    } else if (ruta === "musaf") {
      navigation.navigate("PDF", { ruta: "kidushDia" });
    } else if (ruta === "kidushDia") {
      navigation.navigate("PDF", { ruta: "minjaShabat" });
    } else if (ruta === "minjaShabat") {
      navigation.navigate("PDF", { ruta: "habdalah" });
    } else if (ruta === "habdalah") {
      navigation.navigate("PDF", { ruta: "shabatShekalim" });
    } else if (ruta === "shabatShekalim") {
      navigation.navigate("PDF", { ruta: "shabatZajor" });
    } else if (ruta === "shabatZajor") {
      navigation.navigate("PDF", { ruta: "shabatonimDiferentes" });
    } else if (ruta === "shabatonimDiferentes") {
      navigation.navigate("PDF", { ruta: "halel" });
    } else if (ruta === "halel") {
      navigation.navigate("PDF", { ruta: "seferRoshJodesh" });
    } else if (ruta === "seferRoshJodesh") {
      navigation.navigate("PDF", { ruta: "musafRoshJodeshJol" });
    } else if (ruta === "musafRoshJodeshJol") {
      navigation.navigate("PDF", { ruta: "musafRoshJodeshShabat" });
    } else if (ruta === "musafRoshJodeshShabat") {
      navigation.navigate("PDF", { ruta: "mizmorim" });
    } else if (ruta === "mizmorim") {
      navigation.navigate("PDF", { ruta: "amidaYomtob" });
    } else if (ruta === "amidaYomtob") {
      navigation.navigate("PDF", { ruta: "amidaMusaf" });
    } else if (ruta === "amidaMusaf") {
      navigation.navigate("PDF", { ruta: "bereshit" });
    } else if (ruta === "bereshit") {
      navigation.navigate("PDF", { ruta: "shemot" });
    } else if (ruta === "shemot") {
      navigation.navigate("PDF", { ruta: "vaikra" });
    } else if (ruta === "vaikra") {
      navigation.navigate("PDF", { ruta: "bamidbar" });
    } else if (ruta === "bamidbar") {
      navigation.navigate("PDF", { ruta: "debarim" });
    } else if (ruta === "debarim") {
      navigation.navigate("PDF", { ruta: "birkatHalebana" });
    } else if (ruta === "birkatHalebana") {
      navigation.navigate("PDF", { ruta: "sefiratHaomer" });
    } else if (ruta === "sefiratHaomer") {
      navigation.navigate("PDF", { ruta: "velas" });
    } else if (ruta === "velas") {
      navigation.navigate("PDF", { ruta: "seferJanuca" });
    } else if (ruta === "seferJanuca") {
      navigation.navigate("PDF", { ruta: "purim" });
    } else if (ruta === "purim") {
      navigation.navigate("PDF", { ruta: "birkatHailanot" });
    } else if (ruta === "birkatHailanot") {
      navigation.navigate("PDF", { ruta: "limudNisan" });
    } else if (ruta === "limudNisan") {
      navigation.navigate("PDF", { ruta: "shoa" });
    } else if (ruta === "shoa") {
      navigation.navigate("PDF", { ruta: "yomHazikaron" });
    } else if (ruta === "yomHazikaron") {
      navigation.navigate("PDF", { ruta: "tefilaShalomAlIsrael" });
    } else if (ruta === "tefilaShalomAlIsrael") {
      navigation.navigate("PDF", { ruta: "Boda" });
    } else if (ruta === "Boda") {
      navigation.navigate("PDF", { ruta: "britMila" });
    } else if (ruta === "britMila") {
      navigation.navigate("PDF", { ruta: "pidionHaben" });
    } else if (ruta === "pidionHaben") {
      navigation.navigate("PDF", { ruta: "berajot" });
    } else if (ruta === "berajot") {
      navigation.navigate("PDF", { ruta: "abelut" });
    } else if (ruta === "abelut") {
      navigation.navigate("PDF", { ruta: "guedalia" });
    } else if (ruta === "guedalia") {
      navigation.navigate("PDF", { ruta: "asaraBetebet" });
    } else if (ruta === "asaraBetebet") {
      navigation.navigate("PDF", { ruta: "ayunoEsther" });
    } else if (ruta === "ayunoEsther") {
      navigation.navigate("PDF", { ruta: "tamuz" });
    } else if (ruta === "tamuz") {
      navigation.navigate("PDF", { ruta: "minjaAyuno" });
    } else if (ruta === "minjaAyuno") {
      // navigation.navigate("PDF", { ruta: "kadeshLi" });
    }
  };

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
  } else if (ruta === "vaikra") {
    dataPDF = vaikraObject;
  } else if (ruta === "bamidbar") {
    dataPDF = bamidbarObject;
  } else if (ruta === "debarim") {
    dataPDF = debarimObject;
  } else if (ruta === "birkatHalebana") {
    dataPDF = birkatHalebanaObject;
  } else if (ruta === "sefiratHaomer") {
    dataPDF = sefiratHaomerObject;
  } else if (ruta === "velas") {
    dataPDF = velasObject;
  } else if (ruta === "seferJanuca") {
    dataPDF = seferJanucaObject;
  } else if (ruta === "purim") {
    dataPDF = purimObject;
  } else if (ruta === "birkatHailanot") {
    dataPDF = birkatHailanotObject;
  } else if (ruta === "limudNisan") {
    dataPDF = limudNisanObject;
  } else if (ruta === "shoa") {
    dataPDF = shoaObject;
  } else if (ruta === "yomHazikaron") {
    dataPDF = yomHazikaronObject;
  } else if (ruta === "tefilaShalomAlIsrael") {
    dataPDF = tefilaShalomAlIsraelObject;
  } else if (ruta === "Boda") {
    dataPDF = bodaObject;
  } else if (ruta === "britMila") {
    dataPDF = britMilaObject;
  } else if (ruta === "pidionHaben") {
    dataPDF = pidionHabenObject;
  } else if (ruta === "berajot") {
    dataPDF = berajotObject;
  } else if (ruta === "abelut") {
    dataPDF = abelutObject;
  } else if (ruta === "guedalia") {
    dataPDF = guedaliaObject;
  } else if (ruta === "asaraBetebet") {
    dataPDF = asaraBetebetObject;
  } else if (ruta === "ayunoEsther") {
    dataPDF = ayunoEstherObject;
  } else if (ruta === "tamuz") {
    dataPDF = tamuzObject;
  } else if (ruta === "minjaAyuno") {
    dataPDF = minjaAyunoObject;
  } else if (ruta == "agra") {
    dataPDF = agraObject;
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
          {showNext ? (
            <>
              <Pressable onPress={() => handlePrevious()} style={styles.circle}>
                <ImageBackground
                  source={LeftArrow}
                  style={styles.flechaAnterior}
                ></ImageBackground>
              </Pressable>
              <Pressable
                onPress={() => handlePrevious()}
              >
                <Text>Siguiente rezo</Text>
              </Pressable>
            </>
          ) : (
            <View></View>
          )}
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
    zIndex: -2,
    flex: 20,
    marginTop: -75,
  },
  buttoncontain: {
    flex: 2,
    flexDirection: "row",
    height: 1,
    marginTop: 20,
    marginLeft: 20,
    alignItems: "center",
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
<<<<<<< HEAD
  circle: {
    borderRadius: 200,
    marginRight: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
  },
  flechaAnterior: {
    width: 30,
    height: 30,
    fontStyle: "blue",
    color: "white",
    alignContent: "center",
    alignItems: "center",
=======

  circle: {
   
  
borderRadius: 8,
backgroundColor: "#860008",
margin: 5,
alignItems: "center",



   
  },
  textFlechaSiguiente: {
    width: 170,
    height: 90,
    margin: 5,
    position: "relative",
    fontSize: 20,
    color: "white",
    
   
  },
  flechaSiguiente: {
    width: 30,
    height: 30,

    marginLeft: 2,
    fontSize: 25,
    color: "white",
    alignItems: "center",
    
   
>>>>>>> 24ca70cc9875a45ede9f6859ced65d8741b7e7eb
  },
});

export default PDF;
