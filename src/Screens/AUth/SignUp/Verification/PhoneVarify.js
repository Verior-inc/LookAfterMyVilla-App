import React, {useEffect, useState, useRef} from 'react';
import {
  Alert,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Keyboard,
  Dimensions,
} from 'react-native';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import baseUrl2 from '../../../../ApisAuth/Baseurl2/BaseUrl2';
import axios from 'axios';
import Loader from 'react-native-loading-spinner-overlay';

import {save_user_data} from '../../Login/Authservices';
import styles from './style';
import {priamry, primaryShade} from '../../../../Colors/PrimaryColor';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Input from '../../../../Components/Input/input.component';
import {showToaster} from '../../../../Config/Contants';
import AuthIcon from '../../../../../assets/images/AuthIcon';
import FocusAwareStatusBar from '../../../../Components/StatusBar/FocusAwareStatusBar';
import {Bold, Medium} from '../../../../Colors/Fonfamily';
const PhoneVarify = props => {
  const {
    email,
    password,
    name,
    contact,
    verfiedCode,
    isForgotPasswordScreen,
    ForgotCode,
    forgotemail,
  } = props.route.params;
  console.log('>>>>>hfjshfj', isForgotPasswordScreen);
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      {/* <Loader visible={isLoading} color={priamry} /> */}
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor={'white'} />

      <View
        style={{
          margin: 10,
          // alignItems: 'center',

          // justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            isForgotPasswordScreen
              ? props.navigation.navigate('Forgot')
              : props.navigation.navigate('SignUp');
          }}>
          <Ionicons name="arrow-back" color="black" size={30} />
        </TouchableOpacity>
        <Text
          style={{
            position: 'absolute',
            right: 0,
            left: 0,
            textAlign: 'center',
            fontSize: 20,
            fontFamily: Bold,
            zIndex: -2000,
            color: '#000',
          }}>
          Continue with Phone
        </Text>
      </View>
      <View
        style={{
          textAlign: 'center',
          marginTop: 20,
          fontSize: 18,
          fontFamily: Medium,
          color: 'grey',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../Home/assets/varify.jpg')}
          style={{
            resizeMode: 'contain',
            width: Dimensions.get('screen').width / 2,
            height: 200,
          }}
        />
        {/* <MaterialIcons name={'check-circle'} size={70} color={'green'} /> */}
      </View>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 20,
          fontSize: 18,
          fontFamily: Medium,
          color: 'grey',
          alignItems: 'center',
        }}>
        You'll recieve 4 digit code to varify next
      </Text>
      <View
        style={{
          marginHorizontal: 40,
          marginTop: 30,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, fontFamily: Medium, color: priamry}}>
          {contact}
        </Text>
        <TouchableOpacity
          style={{
            width: Dimensions.get('screen').width / 2.8,
            height: 60,
            backgroundColor: priamry,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}
          onPress={() =>
            alert(verfiedCode) &
            props.navigation.navigate('Verification', {
              email: email,
              password: password,
              contact: contact,
              name: name,
              verfiedCode: verfiedCode,
              isForgotPasswordScreen: false,
            })
          }>
          <Text style={{fontSize: 20, fontFamily: Medium, color: 'white'}}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default PhoneVarify;
