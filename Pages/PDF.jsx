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



  const [Kave, setKave] = useState([
    { id: 1, image: Kave1 },
    { id: 2, image: Kave2 },
    { id: 3, image: Kave3 },
    { id: 4, image: Kave4 },
    { id: 5, image: Kave5 },
    { id: 6, image: Kave6 },
    { id: 7, image: Kave7 },
    { id: 8, image: Kave8 },
    { id: 9, image: Kave9 },
    { id: 10, image: Kave10 },
    { id: 11, image: Kave11 },
    { id: 12, image: Kave12 },
  ]);

  const [Korbanot, setKorbanot] = useState([
    { id: 1, image: Korbanot1 },
    { id: 2, image: Korbanot2 },
    { id: 3, image: Korbanot3 },
    { id: 4, image: Korbanot4 },
    { id: 5, image: Korbanot5 },
  ]);

  const [AshreM, setAshreM] = useState([
    { id: 1, image: AshreM1 },
    { id: 2, image: AshreM2 },
    { id: 3, image: AshreM3 },
    { id: 4, image: AshreM4 },
    { id: 5, image: AshreM5 },
    { id: 6, image: AshreM6 },
    { id: 7, image: AshreM7 },
    { id: 8, image: AshreM8 },
    { id: 9, image: AshreM9 },
    { id: 10, image: AshreM10 },
    { id: 11, image: AshreM11 },
    { id: 12, image: AshreM12 },
    { id: 13, image: AshreM13 },
    { id: 14, image: AshreM14 },
    { id: 15, image: AshreM15 },
    { id: 16, image: AshreM16 },
    { id: 17, image: AshreM17 },
    { id: 18, image: AshreM18 },
    { id: 19, image: AshreM19 },
    { id: 20, image: AshreM20 },
    { id: 21, image: AshreM21 },
  ]);

  const [yehiShem, setyehiShem] = useState([
    { id: 1, image: yehiShem1 },
    { id: 2, image: yehiShem2 },
    { id: 3, image: yehiShem3 },
    { id: 4, image: yehiShem4 },
    { id: 5, image: yehiShem5 },
    { id: 6, image: yehiShem6 },
    { id: 7, image: yehiShem7 },
    { id: 8, image: yehiShem8 },
    { id: 9, image: yehiShem9 },
  ]);

  const [arbit, setarbit] = useState([
    { id: 1, image: arbit1 },
    { id: 2, image: arbit2 },
    { id: 3, image: arbit3 },
    { id: 4, image: arbit4 },
    { id: 5, image: arbit5 },
    { id: 6, image: arbit6 },
    { id: 7, image: arbit7 },
    { id: 8, image: arbit8 },
    { id: 9, image: arbit9 },
    { id: 10, image: arbit10 },
    { id: 11, image: arbit11 },
    { id: 12, image: arbit12 },
    { id: 13, image: arbit13 },
    { id: 14, image: arbit14 },
    { id: 15, image: arbit15 },
    { id: 16, image: arbit16 },
    { id: 17, image: arbit17 },
    { id: 18, image: arbit18 },
    { id: 19, image: arbit19 },
    { id: 20, image: arbit20 },
    { id: 21, image: arbit21 },
    { id: 22, image: arbit22 },
    { id: 23, image: arbit23 },
    { id: 24, image: arbit24 },
    { id: 25, image: arbit25 },
    { id: 26, image: arbit26 },
    { id: 27, image: arbit27 },
    { id: 28, image: arbit28 },
    { id: 29, image: arbit29 },
    { id: 30, image: arbit30 },
  ]);

  const [keriatShema, setkeriatShema] = useState([
    { id: 1, image: keriatShema1 },
    { id: 2, image: keriatShema2 },
    { id: 3, image: keriatShema3 },
    { id: 4, image: keriatShema4 },
    { id: 5, image: keriatShema5 },
    { id: 6, image: keriatShema6 },
  ]);

  const [birkatHalebana, setbirkatHalebana] = useState([
    { id: 1, image: birkatHalebana1 },
    { id: 2, image: birkatHalebana2 },
    { id: 3, image: birkatHalebana3 },
    { id: 4, image: birkatHalebana4 },
    { id: 5, image: birkatHalebana5 },
    { id: 6, image: birkatHalebana6 },
  ]);

  const [sefiratHaomer, setsefiratHaomer] = useState([
    { id: 1, image: sefiratHaomer1 },
    { id: 2, image: sefiratHaomer2 },
    { id: 3, image: sefiratHaomer3 },
    { id: 4, image: sefiratHaomer4 },
    { id: 5, image: sefiratHaomer5 },
  ]);

  const [shirHashirim, setshirHashirim] = useState([
    { id: 1, image: shirHashirim1 },
    { id: 2, image: shirHashirim2 },
    { id: 3, image: shirHashirim3 },
    { id: 4, image: shirHashirim4 },
    { id: 5, image: shirHashirim5 },
    { id: 6, image: shirHashirim6 },
    { id: 7, image: shirHashirim7 },
    { id: 8, image: shirHashirim8 },
    { id: 9, image: shirHashirim9 },
    { id: 10, image: shirHashirim10 },
  ]);

  const [kabalatShabat, setkabalatShabat] = useState([
    { id: 1, image: kabalatShabat1 },
    { id: 2, image: kabalatShabat2 },
    { id: 3, image: kabalatShabat3 },
    { id: 4, image: kabalatShabat4 },
    { id: 5, image: kabalatShabat5 },
    { id: 6, image: kabalatShabat6 },
    { id: 7, image: kabalatShabat7 },
    { id: 8, image: kabalatShabat8 },
    { id: 9, image: kabalatShabat9 },
  ]);

  const [arbitShabat, setarbitShabat] = useState([
    { id: 1, image: arbitShabat1 },
    { id: 2, image: arbitShabat2 },
    { id: 3, image: arbitShabat3 },
    { id: 4, image: arbitShabat4 },
    { id: 5, image: arbitShabat5 },
    { id: 6, image: arbitShabat6 },
    { id: 7, image: arbitShabat7 },
    { id: 8, image: arbitShabat8 },
    { id: 9, image: arbitShabat9 },
    { id: 10, image: arbitShabat10 },
    { id: 11, image: arbitShabat11 },
    { id: 12, image: arbitShabat12 },
    { id: 13, image: arbitShabat13 },
    { id: 14, image: arbitShabat14 },
    { id: 15, image: arbitShabat15 },
    { id: 16, image: arbitShabat16 },
    { id: 17, image: arbitShabat17 },
    { id: 18, image: arbitShabat18 },
    { id: 19, image: arbitShabat19 },
    { id: 20, image: arbitShabat20 },
  ]);

  const [Kidush, setKidush] = useState([
    { id: 1, image: Kidush1 },
    { id: 2, image: Kidush2 },
    { id: 3, image: Kidush3 },
    { id: 4, image: Kidush4 },
  ]);

  const [birkatHamazon, setbirkatHamazon] = useState([
    { id: 1, image: birkatHamazon1 },
    { id: 2, image: birkatHamazon2 },
    { id: 3, image: birkatHamazon3 },
    { id: 4, image: birkatHamazon4 },
    { id: 5, image: birkatHamazon5 },
    { id: 6, image: birkatHamazon6 },
    { id: 7, image: birkatHamazon7 },
    { id: 8, image: birkatHamazon8 },
    { id: 9, image: birkatHamazon9 },
    { id: 10, image: birkatHamazon10 },
    { id: 11, image: birkatHamazon11 },
    { id: 12, image: birkatHamazon12 },
    { id: 13, image: birkatHamazon13 },
  ]);

  const [shajritShabat, setshajritShabat] = useState([
    { id: 1, image: shajritShabat1 },
    { id: 2, image: shajritShabat2 },
    { id: 3, image: shajritShabat3 },
    { id: 4, image: shajritShabat4 },
    { id: 5, image: shajritShabat5 },
    { id: 6, image: shajritShabat6 },
    { id: 7, image: shajritShabat7 },
    { id: 8, image: shajritShabat8 },
    { id: 9, image: shajritShabat9 },
    { id: 10, image: shajritShabat10 },
    { id: 11, image: shajritShabat11 },
    { id: 12, image: shajritShabat12 },
    { id: 13, image: shajritShabat13 },
    { id: 14, image: shajritShabat14 },
    { id: 15, image: shajritShabat15 },
    { id: 16, image: shajritShabat16 },
    { id: 17, image: shajritShabat17 },
    { id: 18, image: shajritShabat18 },
    { id: 19, image: shajritShabat19 },
    { id: 20, image: shajritShabat20 },
    { id: 21, image: shajritShabat21 },
    { id: 22, image: shajritShabat22 },
    { id: 23, image: shajritShabat23 },
    { id: 24, image: shajritShabat24 },
    { id: 25, image: shajritShabat25 },
    { id: 26, image: shajritShabat26 },
    { id: 27, image: shajritShabat27 },
    { id: 28, image: shajritShabat28 },
    { id: 29, image: shajritShabat29 },
    { id: 30, image: shajritShabat30 },
    { id: 31, image: shajritShabat31 },
    { id: 32, image: shajritShabat32 },
    { id: 33, image: shajritShabat33 },
    { id: 34, image: shajritShabat34 },
    { id: 35, image: shajritShabat35 },
    { id: 36, image: shajritShabat36 },
    { id: 37, image: shajritShabat37 },
    { id: 38, image: shajritShabat38 },
    { id: 39, image: shajritShabat39 },
    { id: 40, image: shajritShabat40 },
    { id: 41, image: shajritShabat41 },
    { id: 42, image: shajritShabat42 },
    { id: 43, image: shajritShabat43 },
    { id: 44, image: shajritShabat44 },
    { id: 45, image: shajritShabat45 },
    { id: 46, image: shajritShabat46 },
    { id: 47, image: shajritShabat47 },
    { id: 48, image: shajritShabat48 },
    { id: 49, image: shajritShabat49 },
    { id: 50, image: shajritShabat50 },
    { id: 51, image: shajritShabat51 },
    { id: 52, image: shajritShabat52 },
    { id: 53, image: shajritShabat53 },
    { id: 54, image: shajritShabat54 },
    { id: 55, image: shajritShabat55 },
  ]);

  const [petijatHaejal, setpetijatHaejal] = useState([
    { id: 1, image: petijatHaejal1 },
    { id: 2, image: petijatHaejal2 },
    { id: 3, image: petijatHaejal3 },
    { id: 4, image: petijatHaejal4 },
    { id: 5, image: petijatHaejal5 },
    { id: 6, image: petijatHaejal6 },
    { id: 7, image: petijatHaejal7 },
    { id: 8, image: petijatHaejal8 },
    { id: 9, image: petijatHaejal9 },
    { id: 10, image: petijatHaejal10 },
    { id: 11, image: petijatHaejal11 },
    { id: 12, image: petijatHaejal12 },
  ]);

  const [musaf, setmusaf] = useState([
    { id: 1, image: musaf1 },
    { id: 2, image: musaf2 },
    { id: 3, image: musaf3 },
    { id: 4, image: musaf4 },
    { id: 5, image: musaf5 },
    { id: 6, image: musaf6 },
    { id: 7, image: musaf7 },
    { id: 8, image: musaf8 },
    { id: 9, image: musaf9 },
    { id: 10, image: musaf10 },
    { id: 11, image: musaf11 },
    { id: 12, image: musaf12 },
    { id: 13, image: musaf13 },
    { id: 14, image: musaf14 },
    { id: 15, image: musaf15 },
    { id: 16, image: musaf16 },
    { id: 17, image: musaf17 },
    { id: 18, image: musaf18 },
    { id: 19, image: musaf19 },
    { id: 20, image: musaf20 },
    { id: 21, image: musaf21 },
    { id: 22, image: musaf22 },
    { id: 23, image: musaf23 },
    { id: 24, image: musaf24 },
  ]);

  const [kidushDia, setkidushDia] = useState([{ id: 1, kidushDia }]);

  const [minjaShabat, setminjaShabat] = useState([
    { id: 1, image: minjaShabat1 },
    { id: 2, image: minjaShabat2 },
    { id: 3, image: minjaShabat3 },
    { id: 4, image: minjaShabat4 },
    { id: 5, image: minjaShabat5 },
    { id: 6, image: minjaShabat6 },
    { id: 7, image: minjaShabat7 },
    { id: 8, image: minjaShabat8 },
    { id: 9, image: minjaShabat9 },
    { id: 10, image: minjaShabat10 },
    { id: 11, image: minjaShabat11 },
    { id: 12, image: minjaShabat12 },
    { id: 13, image: minjaShabat13 },
    { id: 14, image: minjaShabat14 },
    { id: 15, image: minjaShabat15 },
    { id: 16, image: minjaShabat16 },
    { id: 17, image: minjaShabat17 },
    { id: 18, image: minjaShabat18 },
    { id: 19, image: minjaShabat19 },
    { id: 20, image: minjaShabat20 },
    { id: 21, image: minjaShabat21 },
    { id: 22, image: minjaShabat22 },
    { id: 23, image: minjaShabat23 },
    { id: 24, image: minjaShabat24 },
    { id: 25, image: minjaShabat25 },
    { id: 26, image: minjaShabat26 },
    { id: 27, image: minjaShabat27 },
    { id: 28, image: minjaShabat28 },
    { id: 29, image: minjaShabat29 },
    { id: 30, image: minjaShabat30 },
  ]);

  const [Habdalah, setHabdalah] = useState([
    { id: 1, image: Habdalah1 },
    { id: 2, image: Habdalah2 },
    { id: 3, image: Habdalah3 },
    { id: 4, image: Habdalah4 },
    { id: 5, image: Habdalah5 },
    { id: 6, image: Habdalah6 },
  ]);

  const [Halel, setHalel] = useState([
    { id: 1, image: Halel1 },
    { id: 2, image: Halel2 },
    { id: 3, image: Halel3 },
    { id: 4, image: Halel4 },
    { id: 5, image: Halel5 },
    { id: 6, image: Halel6 },
    { id: 7, image: Halel7 },
    { id: 8, image: Halel8 },
  ]);

  const [seferRoshJodesh, setseferRoshJodesh] = useState([
    { id: 1, image: seferRoshJodesh1 },
    { id: 2, image: seferRoshJodesh2 },
    { id: 3, image: seferRoshJodesh3 },
    { id: 4, image: seferRoshJodesh4 },
    { id: 5, image: seferRoshJodesh5 },
    { id: 6, image: seferRoshJodesh6 },
    { id: 7, image: seferRoshJodesh7 },
    { id: 8, image: seferRoshJodesh8 },
    { id: 9, image: seferRoshJodesh9 },
    { id: 10, image: seferRoshJodesh10 },
  ]);

  const [musafRoshJodeshJol, setmusafRoshJodeshJol] = useState([
    { id: 1, image: musafRoshJodeshJol1 },
    { id: 2, image: musafRoshJodeshJol2 },
    { id: 3, image: musafRoshJodeshJol3 },
    { id: 4, image: musafRoshJodeshJol4 },
    { id: 5, image: musafRoshJodeshJol5 },
    { id: 6, image: musafRoshJodeshJol6 },
    { id: 7, image: musafRoshJodeshJol7 },
    { id: 8, image: musafRoshJodeshJol8 },
    { id: 9, image: musafRoshJodeshJol9 },
    { id: 10, image: musafRoshJodeshJol10 },
    { id: 11, image: musafRoshJodeshJol11 },
    { id: 12, image: musafRoshJodeshJol12 },
    { id: 13, image: musafRoshJodeshJol13 },
    { id: 14, image: musafRoshJodeshJol14 },
  ]);

  const [musafRoshJodeshShabat, setmusafRoshJodeshShabat] = useState([
    { id: 1, image: musafRoshJodeshShabat1 },
    { id: 2, image: musafRoshJodeshShabat2 },
    { id: 3, image: musafRoshJodeshShabat3 },
    { id: 4, image: musafRoshJodeshShabat4 },
    { id: 5, image: musafRoshJodeshShabat5 },
    { id: 6, image: musafRoshJodeshShabat6 },
    { id: 7, image: musafRoshJodeshShabat7 },
    { id: 8, image: musafRoshJodeshShabat8 },
    { id: 9, image: musafRoshJodeshShabat9 },
    { id: 10, image: musafRoshJodeshShabat10 },
    { id: 11, image: musafRoshJodeshShabat11 },
    { id: 12, image: musafRoshJodeshShabat12 },
  ]);

  const [mizmorim, setmizmorim] = useState([
    { id: 1, image: mizmorim1 },
    { id: 2, image: mizmorim2 },
    { id: 3, image: mizmorim3 },
    { id: 4, image: mizmorim4 },
    { id: 5, image: mizmorim5 },
    { id: 6, image: mizmorim6 },
    { id: 7, image: mizmorim7 },
  ]);

  const [amidaYomtob, setamidaYomtob] = useState([
    { id: 1, image: amidaYomtob1 },
    { id: 2, image: amidaYomtob2 },
    { id: 3, image: amidaYomtob3 },
    { id: 4, image: amidaYomtob4 },
    { id: 5, image: amidaYomtob5 },
    { id: 6, image: amidaYomtob6 },
    { id: 7, image: amidaYomtob7 },
    { id: 8, image: amidaYomtob8 },
    { id: 9, image: amidaYomtob9 },
    { id: 10, image: amidaYomtob10 },
    { id: 11, image: amidaYomtob11 },
    { id: 12, image: amidaYomtob12 },
    { id: 13, image: amidaYomtob13 },
    { id: 14, image: amidaYomtob14 },
    { id: 15, image: amidaYomtob15 },
    { id: 16, image: amidaYomtob16 },
  ]);

  const [amidaMusaf, setamidaMusaf] = useState([
    { id: 1, image: amidaMusaf1 },
    { id: 2, image: amidaMusaf2 },
    { id: 3, image: amidaMusaf3 },
    { id: 4, image: amidaMusaf4 },
    { id: 5, image: amidaMusaf5 },
    { id: 6, image: amidaMusaf6 },
    { id: 7, image: amidaMusaf7 },
    { id: 8, image: amidaMusaf8 },
    { id: 9, image: amidaMusaf9 },
    { id: 10, image: amidaMusaf10 },
    { id: 11, image: amidaMusaf11 },
  ]);

  const [velas, setvelas] = useState([
    { id: 1, image: velas1 },
    { id: 2, image: velas2 },
    { id: 3, image: velas3 },
  ]);

  const [seferJanuca, setseferJanuca] = useState([
    { id: 1, image: seferJanuca1 },
    { id: 2, image: seferJanuca2 },
    { id: 3, image: seferJanuca3 },
    { id: 4, image: seferJanuca4 },
    { id: 5, image: seferJanuca5 },
    { id: 6, image: seferJanuca6 },
    { id: 7, image: seferJanuca7 },
    { id: 8, image: seferJanuca8 },
    { id: 9, image: seferJanuca9 },
  ]);

  const [shabatShekalim, setshabatShekalim] = useState([
    { id: 1, image: shabatShekalim1 },
  ]);

  const [shabatZajor, setshabatZajor] = useState([
    { id: 1, image: shabatZajor1 },
    { id: 2, image: shabatZajor2 },
  ]);

  const [purim, setpurim] = useState([
    { id: 1, image: purim1 },
    { id: 2, image: purim2 },
    { id: 3, image: purim3 },
    { id: 4, image: purim4 },
  ]);

  const [shabatonimDiferentes, setshabatonimDiferentes] = useState([
    { id: 1, image: shabatonimDiferentes1 },
  ]);

  const [birkatHailanot, setbirkatHailanot] = useState([
    { id: 1, image: birkatHailanot1 },
    { id: 2, image: birkatHailanot2 },
    { id: 3, image: birkatHailanot3 },
    { id: 4, image: birkatHailanot4 },
    { id: 5, image: birkatHailanot5 },
    { id: 6, image: birkatHailanot6 },
    { id: 7, image: birkatHailanot7 },
    { id: 8, image: birkatHailanot8 },
  ]);

  const [limudNisan, setlimudNisan] = useState([
    { id: 1, image: limudNisan1 },
    { id: 2, image: limudNisan2 },
    { id: 3, image: limudNisan3 },
    { id: 4, image: limudNisan4 },
    { id: 5, image: limudNisan5 },
    { id: 6, image: limudNisan6 },
    { id: 7, image: limudNisan7 },
    { id: 8, image: limudNisan8 },
    { id: 9, image: limudNisan9 },
    { id: 10, image: limudNisan10 },
    { id: 11, image: limudNisan11 },
    { id: 12, image: limudNisan12 },
    { id: 13, image: limudNisan13 },
  ]);

  const [shoa, setshoa] = useState([{ id: 1, image: shoa }]);

  const [yomHazikaron, setyomHazikaron] = useState([
    { id: 1, image: yomHazikaron1 },
    { id: 2, image: yomHazikaron2 },
  ]);

  const [tefilaShalomAlIsrael, settefilaShalomAlIsrael] = useState([
    { id: 1, image: tefilaShalomAlIsrael1 },
    { id: 2, image: tefilaShalomAlIsrael2 },
  ]);

  const [Boda, setBoda] = useState([
    { id: 1, image: Boda1 },
    { id: 2, image: Boda2 },
    { id: 3, image: Boda3 },
  ]);

  const [britMila, setbritMila] = useState([
    { id: 1, image: britMila1 },
    { id: 2, image: britMila2 },
    { id: 3, image: britMila3 },
    { id: 4, image: britMila4 },
    { id: 5, image: britMila5 },
    { id: 6, image: britMila6 },
    { id: 7, image: britMila7 },
    { id: 8, image: britMila8 },
    { id: 9, image: britMila9 },
  ]);

  const [pidionHaben, setpidionHaben] = useState([
    { id: 1, image: pidionHaben1 },
    { id: 2, image: pidionHaben2 },
    { id: 3, image: pidionHaben3 },
    { id: 4, image: pidionHaben4 },
  ]);

  const [berajot, setberajot] = useState([
    { id: 1, image: berajot1 },
    { id: 2, image: berajot2 },
    { id: 3, image: berajot3 },
    { id: 4, image: berajot4 },
    { id: 5, image: berajot5 },
  ]);

  const [abelut, setabelut] = useState([
    { id: 1, image: abelut1 },
    { id: 2, image: abelut2 },
    { id: 3, image: abelut3 },
    { id: 4, image: abelut4 },
  ]);

  const [guedalia, setguedalia] = useState([
    { id: 1, image: guedalia1 },
    { id: 2, image: guedalia2 },
    { id: 3, image: guedalia3 },
    { id: 4, image: guedalia4 },
    { id: 5, image: guedalia5 },
    { id: 6, image: guedalia6 },
    { id: 7, image: guedalia7 },
    { id: 8, image: guedalia8 },
    { id: 9, image: guedalia9 },
    { id: 10, image: guedalia10 },
  ]);

  const [asaraBetebet, setasaraBetebet] = useState([
    { id: 1, image: asaraBetebet1 },
    { id: 2, image: asaraBetebet2 },
    { id: 3, image: asaraBetebet3 },
    { id: 4, image: asaraBetebet4 },
    { id: 5, image: asaraBetebet5 },
  ]);

  const [ayunoEsther, setayunoEsther] = useState([
    { id: 1, image: ayunoEsther1 },
    { id: 2, image: ayunoEsther2 },
    { id: 3, image: ayunoEsther3 },
    { id: 4, image: ayunoEsther4 },
    { id: 5, image: ayunoEsther5 },
    { id: 6, image: ayunoEsther6 },
    { id: 7, image: ayunoEsther7 },
  ]);

  const [tamuz, settamuz] = useState([
    { id: 1, image: tamuz1 },
    { id: 2, image: tamuz2 },
    { id: 3, image: tamuz3 },
    { id: 4, image: tamuz4 },
    { id: 5, image: tamuz5 },
    { id: 6, image: tamuz6 },
  ]);

  const [minjaAyuno, setminjaAyuno] = useState([
    { id: 1, image: minjaAyuno1 },
    { id: 2, image: minjaAyuno2 },
    { id: 3, image: minjaAyuno3 },
    { id: 4, image: minjaAyuno4 },
    { id: 5, image: minjaAyuno5 },
  ]);

  const [bereshit, setbereshit] = useState([
    { id: 1, image: bereshit1 },
    { id: 2, image: bereshit2 },
    { id: 3, image: bereshit3 },
    { id: 4, image: bereshit4 },
    { id: 5, image: bereshit5 },
    { id: 6, image: bereshit6 },
    { id: 7, image: bereshit7 },
    { id: 8, image: bereshit8 },
    { id: 9, image: bereshit9 },
    { id: 10, image: bereshit10 },
  ]);

  const [shemot, setshemot] = useState([
    { id: 1, image: shemot1 },
    { id: 2, image: shemot2 },
    { id: 3, image: shemot3 },
    { id: 4, image: shemot4 },
    { id: 5, image: shemot5 },
    { id: 6, image: shemot6 },
    { id: 7, image: shemot7 },
    { id: 8, image: shemot8 },
    { id: 9, image: shemot9 },
    { id: 10, image: shemot10 },
  ]);

  const [vaikra, setvaikra] = useState([
    { id: 1, image: vaikra1 },
    { id: 2, image: vaikra2 },
    { id: 3, image: vaikra3 },
    { id: 4, image: vaikra4 },
    { id: 5, image: vaikra5 },
    { id: 6, image: vaikra6 },
    { id: 7, image: vaikra7 },
    { id: 8, image: vaikra8 },
  ]);

  const [bamidbar, setbamidbar] = useState([
    { id: 1, image: bamidbar1 },
    { id: 2, image: bamidbar2 },
    { id: 3, image: bamidbar3 },
    { id: 4, image: bamidbar4 },
    { id: 5, image: bamidbar5 },
    { id: 6, image: bamidbar6 },
    { id: 7, image: bamidbar7 },
    { id: 8, image: bamidbar8 },
  ]);

  

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
