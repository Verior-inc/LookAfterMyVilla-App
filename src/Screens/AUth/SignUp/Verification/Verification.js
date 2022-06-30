import React from 'react'
import { Alert, TouchableOpacity,Image } from 'react-native';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import baseUrl2 from '../../../../ApisAuth/Baseurl2/BaseUrl2';
import axios from 'axios';
import Loader from 'react-native-loading-spinner-overlay'

import { save_user_data } from '../../Login/Authservices';
import styles from './style'
import { priamry } from '../../../../Colors/PrimaryColor';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Input from '../../../../Components/Input/input.component';
import { showToaster } from '../../../../Config/Contants';
const Verification = (props) => {
    const { email, password, name, contact ,verfiedCode,isForgotPasswordScreen,ForgotCode,forgotemail} = props.route.params
    console.log(">>>>>hfjshfj",isForgotPasswordScreen)
    const[data,setData]=React.useState()
    const [isLoading, setLoading] = React.useState(false);
    const [checkcode,setCheckCode]=React.useState()
    
    const forgotPassword=async()=>{
        if(ForgotCode==checkcode){
            props.navigation.navigate("ChangePassword",{forgotemail:forgotemail,changepassword:false,resetpassword:true})
        }
        else{
            showToaster('Invalid otp code')
        }
    }

    const Signup = async () => {
        try {
            if(checkcode != verfiedCode) {
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
            if(checkcode==verfiedCode){
                setLoading(true)
                const apiCall = await axios.post(`${baseUrl2}/user/signup`, {
                    "email": email,
                    'password': password,
                    'name': name,
                    'phone': contact
                })
                console.log(">>>>api",apiCall.data)
                // setLoading(true)
                if (apiCall.data.success == true) {
                    setLoading(true);
                    const loginApiCall = await axios.post(`${baseUrl2}/user/login`, {
                        "email": email,
                        "password": password
                    });
                    console.log("login",loginApiCall?.data?.token);
                    setLoading(false)
                    if (loginApiCall?.status == 200) {
                        save_user_data(loginApiCall?.data.data, loginApiCall?.data?.token).then((value) => {
                            // setLoading(false);
                            if (loginApiCall?.data?.success == true) {
                                props.navigation.navigate('HomeTab');
                            } else {
                                props.navigation.navigate('Login');
                            }
                        }).catch((error) => {
                            setLoading(false);
    
                            alert(JSON.stringify(error))
                        })
                    } else {
                        setLoading(false);
                        Alert.alert('something went wrong', JSON.stringify(loginApiCall.data.message))
                    }

                }
    
    
    
    
            }
        }
        catch (error) {
            setLoading(false)
            console.log(error, JSON.stringify(error))



        }
    }
    return (
        <View>
            <Loader visible={isLoading} color={priamry}/>

           <View style={{margin:10}}>
               <TouchableOpacity>
                   <Ionicons
                   name='arrow-back'
                   color='black'
                   size={30}
                   />
               </TouchableOpacity>
           </View>
           <View>
               <Image
               source={require('../../../../../assets/verification.png')}
               style={{width:200,height:200,alignSelf:'center',resizeMode:'contain'}}
               />
           </View>
           <View style={{alignSelf:'center',width:'100%',justifyContent:'center',alignItems:'center',marginTop:'15%'}}>
               <Input
               placeholder={'Enter Verification Code'}
               borderColor={'grey'}
               icon={
                   <MaterialIcons
                   name='security'
                   color='black'
                   size={20}
                   style={{paddingLeft:10}}
                   />
               }
               onChangeText={(checkcode)=>setCheckCode(checkcode)}
                value={checkcode}
               />
               <TouchableOpacity style={styles.buttonBody} onPress={()=>isForgotPasswordScreen?forgotPassword():Signup()}>
                <Text style={styles.buttonText}>
                    Submit
                </Text>
            </TouchableOpacity>
           </View>
            
            
        </View>
    )
}
export default Verification