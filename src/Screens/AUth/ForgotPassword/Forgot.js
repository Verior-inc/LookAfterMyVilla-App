import React, { useState } from 'react'
import { View ,Text, Image, Alert} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './style'
import axios from 'axios'
import baseUrl2 from '../../../ApisAuth/Baseurl2/BaseUrl2'
import Loader from 'react-native-loading-spinner-overlay'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { showToaster } from '../../../Config/Contants'
import { BrightBlue, priamry, primaryShade } from '../../../Colors/PrimaryColor'
import Input from '../../../Components/Input/input.component'
const Forgot=(props)=>{
    const[loading,setLoading]=useState(false);
    const[data,setData]=useState();
    const [email,setEmail]=useState();
    const Forgot = async () => {
            try {
                if(!email) {
                    showToaster('Please enter email address');
                }
            setLoading(true);
            const apiCall = await axios.post(`${baseUrl2}/forgot-password/generatecode`, {
                "email":email,
            })
            setLoading(false)

            if(apiCall.data.success==true){
                props.navigation.navigate("Verification",{ForgotCode:apiCall.data.OTP,isForgotPasswordScreen:true,forgotemail:email})

            }

            console.log(apiCall.data)

        }
        catch (err) {
            setLoading(false);
            showToaster(err?.response?.data?.message ? err?.response?.data?.message : 'Something went wrong, please try again' )
            console.log(JSON.stringify(err))
        }
    }
    return(
        // <View style={styles.main}>
        //     <Loader visible={loading} color="red"/>

        //      <View style={styles.mainHeader}>
        //         <Text style={styles.headertxt}>Forgot Password</Text>
        //     </View>
        //     <View style={styles.inputCon}>
        //         <TextInput placeholder="Enter your Register Email" style={styles.input} onChangeText={(email)=>setEmail(email)}/>
        //     </View>
        //     <TouchableOpacity style={styles.btn} onPress={Forgot}>
        //         <Text style={styles.btntxt}>Submit </Text>
        //     </TouchableOpacity>
        // </View>
        <View>
        <Loader visible={loading} color={priamry}/>

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
       <View style={{
           width:150,height:150,justifyContent:'center',alignItems:'center',borderRadius:3560,backgroundColor:primaryShade,borderWidth:1,borderColor:primaryShade,
           alignSelf:'center',marginTop:'10%'
       }}>
          <MaterialIcons
          name='email'
          color={priamry}
          size={100}
          />
       </View>
       <View style={{padding:10,marginTop:10}}>
       <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center'}}>Email Verification</Text>
       <Text style={{fontSize:13,color:'grey',fontWeight:'300',textAlign:'center'}}>Enter your registered email address that we can send an otp code to that email.</Text>
       </View>

       </View>
       <View style={{alignSelf:'center',width:'100%',justifyContent:'center',alignItems:'center',marginTop:'2%'}}>
           <Input
           placeholder={'Enter your email address'}
           borderColor={'grey'}
           width='90%'
           borderRadius={5}
           icon={
               <MaterialIcons
               name='email'
               color='grey'
               size={20}
               style={{paddingLeft:10}}
               />
           }
           onChangeText={(em)=>setEmail(em)}
            value={email}
           />
           <TouchableOpacity 
           onPress={Forgot}
           style={styles.btn}>
            <Text style={styles.btntxt}>
                Submit
            </Text>
        </TouchableOpacity>
       </View>
        
        
    </View>
    )
}
export default Forgot