import React, { useState } from 'react'
import { View, Text, ScrollView, FlatList, ImageBackground, Pressable, Dimensions, TextInput, Alert, TouchableOpacity } from 'react-native'
import styles from './style'
// import { Modalize } from 'react-native-modalize';
// import axios from 'axios';
// import baseUrl2 from '../../../../../ApisAuth/Baseurl2/BaseUrl2';
// import { getUserId } from '../../../../AUth/Login/Authservices';
// import Loader from 'react-native-loading-spinner-overlay'
import Pdf from 'react-native-pdf';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { priamry } from '../../../../Colors/PrimaryColor';
// import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getUserId } from '../../../AUth/Login/Authservices';
import baseUrl2 from '../../../../ApisAuth/Baseurl2/BaseUrl2';
import Loader from 'react-native-loading-spinner-overlay';
import axios from 'axios';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const OrderDetail = (props) => {
    const { order,pdf } = props.route.params;
    const [loading,setLoading] = useState(false);
   
    const confirm=(head,msg,func)=>{
        Alert.alert(
            // ? Title
            head,
            // ? Body
            msg,
            [
              {
                text: "No",
              },
              {
                text: "Yes",
                onPress:func
              }
            ],
            { cancelable: false }
          );
    }
    const Accept=async()=>{

        try {
            setLoading(true)
            const Acceptapi=await axios.post(`${baseUrl2}/orders/accept-budget`,{
                id:order._id
            })
            setLoading(false)
            if(Acceptapi.data.success==true){
                alert(Acceptapi.data.message)
                props.navigation.navigate("Order")
            }
            console.log("budget",Acceptapi.data)
            
        } catch (error) {
            console.log(error)
            setLoading(false)
            console.log(JSON.stringify(error))
        }

    }
    const decline=async()=>{
        const userID = await getUserId();

        try {
            const declineapi=await axios.post(`${baseUrl2}/orders/decline-budget`,{
                "id":items._id
                ,"userId":userID
            })
            if(declineapi.data.success==true){
                Alert.alert(decline.data.message)
                props.navigation.navigate("Order")
            }
            console.log("budget",declineapi.data)
            
        } catch (error) {
            console.log(JSON.stringify(error))
        }

    }
    

    return (
        <>
         <View style={{flex:1,backgroundColor:'white'}}>
             <Loader visible={loading}/>
         <View style={{width:'100%',paddingLeft:6,height:60,backgroundColor:priamry,flexDirection:'row',alignItems:'center'}}>
             <TouchableOpacity>
                 <MaterialCommunityIcons name='keyboard-backspace' color='white' size={25}/>
             </TouchableOpacity>
             <Text style={{color:'white',fontSize:19,paddingLeft:10,fontWeight:'bold'}}>Order #{order?.orderId}</Text>

            </View>
         <Pdf
                    source={pdf}
                    enablePaging
                    // onLoadComplete={(numberOfPages,filePath) => {
                    //     console.log(`Number of pages: ${numberOfPages}`);
                    // }}
                    // onPageChanged={(page,numberOfPages) => {
                    //     console.log(`Current page: ${page}`);
                    // }}
                    // onError={(error) => {
                    //     console.log(error);
                    // }}
                    // onPressLink={(uri) => {
                    //     console.log(`Link pressed: ${uri}`);
                    // }}
                    style={styles.pdf}/>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                        <TouchableOpacity
                        onPress={() => {
                            confirm('Cancelling order?','After disagreeing on this budget, this order will be cancelled, do you want to go on with that?',decline)
                        }}
                        style={{width:'45%',height:50,backgroundColor:'red',justifyContent:'center',alignItems:'center',borderRadius:5}}>
                            <Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => {
                            confirm('Accepting budget?','After agreeing on this budget, this order will be started, do you want to go on with that?',Accept)
                        }}
                        style={{width:'45%',height:50,backgroundColor:'#0bda51',justifyContent:'center',alignItems:'center',borderRadius:5}}>
                            <Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>Accept</Text>
                        </TouchableOpacity>
                    </View>
         </View>

        </>


    )
}
export default OrderDetail