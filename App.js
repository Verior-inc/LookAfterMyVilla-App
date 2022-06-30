import React from 'react'
import Navigation from './src/Config/Navigation';
import Toast from 'react-native-toast-message';
import { SafeAreaView } from 'react-native';

const App=()=>{
  return(
  <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
    <Navigation/>
    <Toast/>
  </SafeAreaView>
  )
}
export default App