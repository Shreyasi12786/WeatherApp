import React,{useRef} from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, useWindowDimensions,Animated } from 'react-native';
import Locations from './model/locations';

const App = ()=> {
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;

  return(
    <>
    <ScrollView 
    horizontal={true}
    pagingEnabled
    showsHorizontalScrollIndicator={false}
    onScroll={Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {useNativeDriver: false},
    )}
    scrollEventThrottle={1}
    >
      {Locations.map((location, index) => {
        if(location.weatherType == 'Night' ){
          bgImg = require('./assets/images/nightsky.jpg');
        }
        else if(location.weatherType == 'Cloudy' ){
          bgImg = require('./assets/images/cloudy.jpg');
        }
        else if(location.weatherType == 'Sunny' ){
          bgImg = require('./assets/images/sunny.jpg');
        }
        else if(location.weatherType == 'Rainy' ){
          bgImg = require('./assets/images/rain.jpg');
        }

        return(
          <View style={{width: windowWidth, height: windowHeight}} key={index} >
          <ImageBackground 
          source={bgImg}
            style={{ flex:1}}  >
            
            <View style={{backgroundColor: 'rgba(0,0,0,0.3)', padding:20, flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'#ffffff'}}>{location.city}</Text>
            </View>
            </ImageBackground>
        </View>
       
        );
      })}
     
    </ScrollView>
    <View
    style={styles.indicator}
    >
     {Locations.map((location, index) =>{
        const width = scrollX.interpolate({
          inputRange: [
            windowWidth * (index - 1),
            windowWidth * index,
            windowWidth * (index + 1),
          ],
          outputRange: [5, 12, 5],
          extrapolate: 'clamp',
        });
       return(
      <Animated.View
      key ={index}
      style={[styles.normalDot, {width}]}/>
       );
     })}
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
  },
  normalDot:{
    height:5,
    width:5,
    marginHorizontal:14,
    backgroundColor:'#ffffff',
    borderRadius:40,
  },
  indicator:{
    position:'absolute',
    top:168,
    left:130,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  }
})


export default App;

