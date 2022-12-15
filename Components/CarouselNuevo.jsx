import React from 'react'
import { Dimensions } from 'react-native';
const Slide = (data)=>{return (<View>
    <Image> </Image>
</View>)}
const CarouselNuevo = ({data}) => {
    const{width: windowWidth, height: windowHeight} = Dimensions.get("window")
  return (
    <> 
    <FlatList data = {data} renderItem = {(item)=> {return <Slide data ={item}/> }} ></FlatList>
    
    </>
    
  )
}


export default CarouselNuevo;