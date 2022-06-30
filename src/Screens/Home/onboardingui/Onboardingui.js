import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import styles from './OBUIStyle'
 
import Swiper from 'react-native-swiper'
import AsyncStorage from '@react-native-async-storage/async-storage';

 
const Onboardingui=(props)=>{
  const [isLoading, setLoading] = React.useState(false);

  const checker=async()=>{
    const value = await AsyncStorage.getItem('fristTime');
    if(value){
      props.navigation.navigate("Splash")
    }
    else{
      props.navigation.navigate("Onboardingui")
    }
  }
    React.useEffect(()=>{
      checker();
    },[])
      // return acc_type;
  const onPresser=async(value)=>{
    
    AsyncStorage.setItem("fristTime",JSON.stringify(value))
    props.navigation.navigate("Login")
  }
  return(

     <Swiper style={styles.wrapper} activeDotColor={'darkblue'} showsButtons={false} paginationStyle={styles.pagistio}   >
        
        <View style={styles.slide1}>
          <Image source={require('../assets/logo.png')} style={styles.logoimg}/>
          <Text style={styles.logoName}>Look after my villa</Text>
          <Image source={require('../assets/villa(1).png')} style={styles.img}/>
          <Text style={styles.text}>Local expertise and services at your fingertips</Text>
          <TouchableOpacity style={styles.buttonBody} onPress={()=>onPresser(1)}>
            <Text style={styles.buttonText}>Sign-up</Text>
          </TouchableOpacity>
          <View style={styles.dontaccount}>
                  <TouchableOpacity onPress={()=>props.navigation.navigate("SignUp")} >
                    <Text style={styles.createOne}>Skip</Text>
                  </TouchableOpacity>
              </View>
        </View>

        <View style={styles.slide2}>
          <Image source={require('../assets/logo.png')} style={styles.logoimg}/>
          <Text style={styles.logoName}>Look after my villa</Text>
          <Image source={require('../assets/villa(2).png')} style={styles.img}/>
          <Text style={styles.text}>Select the service/s you want and request a personalised quote</Text>
          <TouchableOpacity style={styles.buttonBody} onPress={()=>onPresser(1)}>
            <Text style={styles.buttonText}>Sign-up </Text>
          </TouchableOpacity>
          <View style={styles.dontaccount}>
                  <TouchableOpacity onPress={()=>props.navigation.navigate("SignUp")} >
                    <Text style={styles.createOne}>Skip</Text>
                  </TouchableOpacity>
              </View>
        </View>
        <View style={styles.slide3}>
        <Image source={require('../assets/logo.png')} style={styles.logoimg}/>
          <Text style={styles.logoName}>Look after my villa</Text>
          <Image source={require('../assets/villa(3).png')} style={styles.img}/>
          <Text style={styles.text}>Accept the quote to begin to manage and receive notifications when our team of experts carry out a service</Text>
          <TouchableOpacity style={styles.buttonBody1} onPress={()=>onPresser(1)}>
            <Text style={styles.buttonText}>Sign-up</Text>
          </TouchableOpacity>
          <View style={styles.dontaccount}>
                  <TouchableOpacity onPress={()=>props.navigation.navigate("SignUp")} >
                    <Text style={styles.createOne}>Skip</Text>
                  </TouchableOpacity>
              </View>
        </View>
      </Swiper>

    )
}
  export default Onboardingui
 