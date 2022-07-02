import React, {useState} from 'react';
import {Icon} from 'react-native-elements';

import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  ToastAndroid,
} from 'react-native';
import styles from './LoginStyle';
import {SigbUpData} from '../../../ApisAuth/Baseapi/signUpapi';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import Loader from 'react-native-loading-spinner-overlay';
import {save_user_data} from '../Login/Authservices';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';
import Input from '../../../Components/Input/input.component';
import {priamry} from '../../../Colors/PrimaryColor';
import baseUrl2 from '../../../ApisAuth/Baseurl2/BaseUrl2';
import {Bold, Medium, Regular, SemiBold} from '../../../Colors/Fonfamily';
import FocusAwareStatusBar from '../../../Components/StatusBar/FocusAwareStatusBar';

const SignUp = props => {
  const [icon, setIcon] = useState('eye-slash');
  const [hidePassword, setHidePassword] = useState(true);
  const [error, setError] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [contact, setContact] = useState();
  const [isLoading, setLoading] = useState(false);
  // const[arr ,setState]=useState()
  const [data, setData] = useState([]);

  const [selectedLanguage, setSelectedLanguage] = useState();
  // const Signup=async()=>{
  //     try{
  //         if (!email) {
  //             alert('Please enter the email address');
  //             return;
  //         }
  //         if (!password) {
  //             alert('Please enter the password');
  //             return;
  //         }
  //         if (!name) {
  //             alert('Please enter the password');
  //             return;
  //         }
  //         if (!contact) {
  //             alert('Please enter the password');
  //             return;
  //         }
  //         setLoading(true)
  //         const apiCall=await axios.post("https://villas-api.herokuapp.com/api/v1/register",{
  //             "email":email,
  //             'password':password,
  //             'name':name,
  //             'contact':contact
  //         })
  //         setLoading(false)
  //         if(apiCall.data.success==true){

  //                     setLoading(true);
  //                     const loginApiCall = await axios.post(`${baseUrl}login`, {
  //                         "email": email,
  //                         "password": password
  //                     });
  //                     console.log(loginApiCall.data);

  //                     if (loginApiCall?.status == 200) {
  //                         save_user_data(loginApiCall?.data, loginApiCall?.data?.token).then((value) => {
  //                             // alert("works")
  //                             setLoading(false);
  //                             if (loginApiCall?.data?.user?.role == 'user') {
  //                                 props.navigation.navigate('HomeTab');
  //                             } else {
  //                                 props.navigation.navigate('Login');
  //                             }
  //                         }).catch((error) => {
  //                             setLoading(false);

  //                             alert(JSON.stringify(error))
  //                         })
  //                     } else {
  //                         setLoading(false);
  //                         Alert.alert('something went wrong', JSON.stringify(loginApiCall.data.info.message))
  //                     }

  //         }

  //         console.log("data",apiCall.data)

  //     }
  //     catch(error){
  //         setLoading(false)
  //         if(data.success==true){
  //             ALert.alert("Please Enter a valid Email / Password")
  //         }

  //         console.log("DataErorr",data.success)

  //             alert(error,JSON.stringify(error))

  //     }
  // }
  const showToaster = msg => {
    Toast.show({
      type: 'error',
      text1: msg,
    });
    return;
  };
  const Login = async () => {
    try {
      if (!email) {
        showToaster('Please enter the email address');
      }
      if (!password) {
        showToaster('Please enter the password');
      }
      setLoading(true);
      const loginApiCall = await axios.post(`${baseUrl2}/user/login`, {
        email: email,
        password: password,
      });
      console.log(loginApiCall.data);

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

            console.log(error, JSON.stringify(error));
          });
      } else {
        setLoading(false);
        showToaster(loginApiCall.data.info.message);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      showToaster(
        e.response.data.message
          ? e.response.data.message
          : 'Something went wrong, try again later :/',
      );
      console.log(e, JSON.stringify(e));
    }
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View sty={styles.mainContainer}>
          <FocusAwareStatusBar
            barStyle="dark-content"
            backgroundColor={'white'}
          />

          <Loader visible={isLoading} color="red" />
          <View style={{padding: 20, marginVertical: '5%'}}>
            <Image
              source={require('../../SecondHome/assets/logo.png')}
              style={{width: 50, height: 50}}
            />
            <Text style={{fontFamily: Bold, fontSize: 25, color: priamry}}>
              Look After My Villa
            </Text>
            {/* <Text style={{fontWeight:'bold',fontSize:20}}>Welcome back to <Text style={{color:priamry}}>LAMV</Text></Text> */}
            <Text
              style={{fontWeight: 'bold', fontSize: 20, fontFamily: Regular}}>
              Welcome Back,
            </Text>
            <Text style={{fontFamily: Regular, color: 'grey', fontSize: 13}}>
              Login and hire us for multiple services on finger tips{' '}
            </Text>
            <View style={{marginVertical: '10%'}}>
              <Input
                value={email}
                onChangeText={em => setEmail(em)}
                style={styles.input}
                icon={
                  <MaterialCommunityIcons
                    name="email"
                    color="grey"
                    size={20}
                    style={{marginLeft: 10}}
                  />
                }
                placeholder={'Email Address'}
              />

              <Input
                value={password}
                onChangeText={ps => setPassword(ps)}
                icon={
                  <Fontisto
                    name="locked"
                    color="grey"
                    size={20}
                    style={{marginLeft: 10}}
                  />
                }
                placeholder={'Password'}
              />
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Forgot')}
                style={{
                  alignSelf: 'flex-start',
                  marginRight: 18,
                  marginTop: 10,
                }}>
                <Text
                  style={{color: priamry, fontSize: 17, fontFamily: Medium}}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={Login}
              style={{
                width: '95%',
                height: 50,
                backgroundColor: priamry,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
              }}>
              <Text
                style={{color: 'white', fontSize: 17, fontFamily: SemiBold}}>
                Proceed
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <Text style={{fontFamily: Medium, color: 'grey'}}>
                Already have an account?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('SignUp')}>
                <Text style={{fontFamily: SemiBold, color: priamry}}>
                  SignUp
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default SignUp;
