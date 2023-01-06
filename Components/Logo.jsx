import React from "react";
import { Image, StyleSheet } from "react-native";
let logo = require("../assets/LogoMS.png");
const Logo = () => {
  return (
    <>
      <Image source={logo} style={styles.image} />
    </>
  );
};


const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 100,
    resizeMode: "contain",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    //marginLeft: 130,
  },
})
export default Logo;
