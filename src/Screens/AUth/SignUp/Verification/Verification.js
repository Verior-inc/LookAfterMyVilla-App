import React, {useEffect, useState, useRef} from 'react';
import {
  Alert,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Keyboard,
} from 'react-native';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import baseUrl2 from '../../../../ApisAuth/Baseurl2/BaseUrl2';
import axios from 'axios';
import Loader from 'react-native-loading-spinner-overlay';

import {save_user_data} from '../../Login/Authservices';
import styles from './style';
import {priamry} from '../../../../Colors/PrimaryColor';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Input from '../../../../Components/Input/input.component';
import {showToaster} from '../../../../Config/Contants';
import AuthIcon from '../../../../../assets/images/AuthIcon';
import FocusAwareStatusBar from '../../../../Components/StatusBar/FocusAwareStatusBar';
const Verification = props => {
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
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(false);
  const [checkcode, setCheckCode] = React.useState();
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  console.log('Checkcode', input1 + input2 + input3 + input4);
  const [input1Foucs, setinput1Foucs] = useState(false);
  const [input2Foucs, setInput2Foucs] = useState(false);
  const [input3Foucs, setInput3Foucs] = useState(false);
  const [input4Foucs, setInput4Foucs] = useState(false);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  useEffect(() => {
    ref1?.current?.focus();
  }, []);

  const forgotPassword = async () => {
    const code = input1 + input2 + input3 + input4;
    if (ForgotCode == code) {
      props.navigation.navigate('ChangePassword', {
        forgotemail: forgotemail,
        changepassword: false,
        resetpassword: true,
      });
    } else {
      showToaster('Invalid otp code');
    }
  };

  const Signup = async () => {
    try {
      if (checkcode != verfiedCode) {
        showToaster('Invalid otp code.');
      }
      if (!email) {
        showToaster('Please enter the email address');
        return;
      }
      if (!password) {
        showToaster('Please enter the password');
        return;
      }
      if (!name) {
        showToaster('Please enter the password');
        return;
      }
      if (!contact) {
        showToaster('Please enter the password');
        return;
      }
      if (checkcode == verfiedCode) {
        setLoading(true);
        const apiCall = await axios.post(`${baseUrl2}/user/signup`, {
          email: email,
          password: password,
          name: name,
          phone: contact,
        });
        console.log('>>>>api', apiCall.data);
        // setLoading(true)
        if (apiCall.data.success == true) {
          setLoading(true);
          const loginApiCall = await axios.post(`${baseUrl2}/user/login`, {
            email: email,
            password: password,
          });
          console.log('login', loginApiCall?.data?.token);
          setLoading(false);
          if (loginApiCall?.status == 200) {
            save_user_data(loginApiCall?.data.data, loginApiCall?.data?.token)
              .then(value => {
                // setLoading(false);
                if (loginApiCall?.data?.success == true) {
                  props.navigation.navigate('HomeTab');
                } else {
                  props.navigation.navigate('Login');
                }
              })
              .catch(error => {
                setLoading(false);

                alert(JSON.stringify(error));
              });
          } else {
            setLoading(false);
            Alert.alert(
              'something went wrong',
              JSON.stringify(loginApiCall.data.message),
            );
          }
        }
      }
    } catch (error) {
      setLoading(false);
      console.log(error, JSON.stringify(error));
    }
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Loader visible={isLoading} color={priamry} />
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor={'white'} />

      <View style={{margin: 10}}>
        <TouchableOpacity
          onPress={() => {
            isForgotPasswordScreen
              ? props.navigation.navigate('Forgot')
              : props.navigation.navigate('SignUp');
          }}>
          <Ionicons name="arrow-back" color="black" size={30} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20%',
        }}>
        <AuthIcon />
        {/* <Image
          source={require('../../../../../assets/verification.png')}
          style={{
            width: 200,
            height: 200,
            alignSelf: 'center',
            resizeMode: 'contain',
          }}
        /> */}
      </View>

      <View
        style={{
          alignSelf: 'center',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <SafeAreaView style={styles.root}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              height: '10%',
              // backgroundColor: 'red',
              justifyContent: 'space-evenly',
            }}>
            <TextInput
              keyboardType="numeric"
              onFocus={() => {
                setinput1Foucs(true);
              }}
              maxLength={1}
              // keyboardType={"number-pad"}
              onBlur={() => setinput1Foucs(false)}
              style={[
                input1Foucs === true ? styles.otpInput2 : styles.otpInput,
                {
                  borderBottomColor: input1Foucs === true ? 'black' : 'grey',
                },
              ]}
              // placeholder="*"
              value={input1}
              onChangeText={in1 => {
                setInput1(in1);
                ref2?.current?.focus();
              }}
              ref={ref1}
            />
            <TextInput
              keyboardType="numeric"
              onFocus={() => {
                setInput2Foucs(true);
              }}
              onBlur={() => setInput2Foucs(false)}
              style={[
                input2Foucs === true ? styles.otpInput2 : styles.otpInput,
                {
                  borderBottomColor: input2Foucs === true ? 'black' : 'grey',
                },
              ]}
              // placeholder="*"
              value={input2}
              onChangeText={in2 => {
                setInput2(in2);
                ref3?.current?.focus();
              }}
              ref={ref2}
              maxLength={1}
            />
            <TextInput
              keyboardType="numeric"
              onFocus={() => {
                setInput3Foucs(true);
              }}
              onBlur={() => setInput3Foucs(false)}
              style={[
                input3Foucs === true ? styles.otpInput2 : styles.otpInput,
                {
                  borderBottomColor: input3Foucs === true ? 'black' : 'grey',
                },
              ]}
              // placeholder="*"
              value={input3}
              onChangeText={in3 => {
                setInput3(in3);
                ref4?.current?.focus();
              }}
              ref={ref3}
              maxLength={1}
            />
            <TextInput
              keyboardType="numeric"
              onFocus={() => {
                setInput4Foucs(true);
              }}
              onBlur={() => setInput4Foucs(false)}
              style={[
                input4Foucs === true ? styles.otpInput2 : styles.otpInput,
                {
                  borderBottomColor: input4Foucs === true ? 'black' : 'grey',
                },
              ]}
              // placeholder="*"
              value={input4}
              onChangeText={in4 => {
                setInput4(in4);
                // ref5?.current?.focus();
                Keyboard.dismiss();
              }}
              ref={ref4}
              maxLength={1}
            />
          </View>
        </SafeAreaView>
        {/* <Input
          placeholder={'Enter Verification Code'}
          borderColor={'grey'}
          icon={
            <MaterialIcons
              name="security"
              color="black"
              size={20}
              style={{paddingLeft: 10}}
            />
          }
          onChangeText={checkcode => setCheckCode(checkcode)}
          value={checkcode}
        /> */}
        <TouchableOpacity
          style={styles.buttonBody}
          onPress={() =>
            isForgotPasswordScreen ? forgotPassword() : Signup()
          }>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Verification;
