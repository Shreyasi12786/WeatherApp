import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, useWindowDimensions } from 'react-native';

const App = ()=> {
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  return(
    <ScrollView 
    horizontal={true}
    pagingEnabled
    showsHorizontalScrollIndicator={false}
    >
      <View style={{width: windowWidth, height: windowHeight}}>
        <ImageBackground source={require('./assets/images/nightsky.jpg')} style={{flex:1}}  />
      </View>
      <View style={{width: windowWidth, height: windowHeight}}>
        <ImageBackground source={require('./assets/images/rain.jpg')} style={{flex:1}}  />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
  },
})


export default App;

