import React, { useState } from 'react'
import { View ,Text, TextInput, Alert} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './style'
import axios from 'axios'
import Loader from 'react-native-loading-spinner-overlay'

import baseUrl2 from '../../../../ApisAuth/Baseurl2/BaseUrl2'
import { getuserEmail, getUserName } from '../../Login/Authservices'
import Input from '../../../../Components/Input/input.component';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { priamry, primaryShade } from '../../../../Colors/PrimaryColor';
import Entypo from 'react-native-vector-icons/Entypo';
import { showToaster } from '../../../../Config/Contants'
const ChangePassword=(props)=>{
    const {forgotemail,changepassword,placeholdernew,placeholderprivious,resetpassword}= props.route.params
    const [password,setpassword]=useState()
    const [confirmpassword,setConfirmPassword]=useState()
    const[loading,setLoading]=useState(false);
    const[data,setData]=useState();

    const chngpassword=async()=>{
            try {
               
                 if(confirmpassword?.length < 6){
                     showToaster('Password should be atleast 6 characters long');
                     return;
                 }
                const useremail=await getuserEmail()
                console.log(useremail)
                
                    setLoading(true)
                    const apiCall = await axios.post(`${baseUrl2}/user/changepassword`,{
                        "email":useremail,
                        "newpassword":confirmpassword,
                        "oldpassword":password
                    })
                    setLoading(false)
                    if(apiCall.data.success==true){
                        showToaster('Password changed succesfully','success');
                        props.navigation.navigate("Profile")

                    } else {
                        showToaster(apiCall.data.message)
                    }
                     
        }
        catch (err) {
            setLoading(false)
            showToaster(err?.response?.data?.message ? err?.response?.data?.message : 'Something went wrong')
    }
        

    }
    const Newpassword = async () => {
       
            try {
                
                if(password!=confirmpassword){
                   showToaster('password did not match');
                   return;
                }
                if(confirmpassword?.length < 6){
                    showToaster('Password should be atleast 6 characters long');
                    return;
                }
                else{
            setLoading(true)


                    const apiCall = await axios.post(`${baseUrl2}/forgot-password/resetpassword`, {
                        "email": forgotemail,
                        newpassword:password
                    })
                    setLoading(false)
                   props.navigation.navigate("Login")
                    console.log(apiCall.data)
                }
        }
        catch (err) {
            setLoading(false)
            // if (data.success ===true) {
            //     alert("Please Enter a Valid Email and password ")
            // }
            showToaster(err?.response?.data?.message ? err?.response?.data?.message : 'Something went wrong')
        }
    }

    return(
        // <View style={styles.main}>
        //     <Loader visible={loading} color="red"/>

        //     <View style={styles.mainHeader}>
        //         <Text style={styles.headertxt}>{resetpassword?"Reset Password":"Change Password"}</Text>
        //     </View>
        //     <View style={{marginTop:"50%"}}>

        
        //     <View style={styles.inputCon}>
        //         <TextInput placeholder={changepassword?placeholderprivious:"Enter Password"} style={styles.input} onChangeText={(password)=>setpassword(password)} value={password}/>
        //     </View>
        //     <View style={styles.inputCon}>
        //         <TextInput placeholder={changepassword?placeholdernew:"Enter Confirm Password"} style={styles.input} onChangeText={(confirmpassword)=>setConfirmPassword(confirmpassword)} value={confirmpassword}/>
        //     </View>
        //     <TouchableOpacity style={styles.btn} onPress={()=>changepassword?chngpassword():Newpassword()}>
        //         <Text style={styles.btntxt}>Submit </Text>
        //     </TouchableOpacity>
        //     </View>
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
          <Entypo
          name='lock'
          color={priamry}
          size={100}
          />
       </View>
       <View style={{padding:10,marginTop:10}}>
       <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center'}}>{resetpassword ? 'Reset Password' : 'Change Password'}</Text>
       <Text style={{fontSize:13,color:'grey',fontWeight:'300',textAlign:'center'}}>Enter the new strong password that no one detect :).</Text>
       </View>

       </View>
       <View style={{alignSelf:'center',width:'100%',justifyContent:'center',alignItems:'center',marginTop:'2%'}}>
           <Input
           placeholder={changepassword ? 'Old Password' : 'New Password'}
           borderColor={'grey'}
           width='90%'
           borderRadius={5}
           icon={
               <Entypo
               name='lock'
               color='grey'
               size={20}
               style={{paddingLeft:10}}
               />
           }
           onChangeText={(ps)=>setpassword(ps)}
            value={password}
           />
            <Input
           placeholder={changepassword ? 'New Password' : 'Confirm Password'}
           borderColor={'grey'}
           width='90%'
           borderRadius={5}
           icon={
               <Entypo
               name='lock'
               color='grey'
               size={20}
               style={{paddingLeft:10}}
               />
           }
           onChangeText={(cps)=>setConfirmPassword(cps)}
            value={confirmpassword}
           />
           <TouchableOpacity 
           onPress={()=>changepassword?chngpassword():Newpassword()}
           style={styles.btn}>
            <Text style={styles.btntxt}>
                Submit
            </Text>
        </TouchableOpacity>
       </View>
        
        
    </View>
    )
}
export default ChangePassword