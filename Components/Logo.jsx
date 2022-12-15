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
    width: 200,
    height: 190,
    resizeMode: "contain",
    marginLeft: 85,
  },
})
export default Logo;
