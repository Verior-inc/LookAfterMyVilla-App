import axios from "axios";
import React from "react";
import {View,Text, TextInput, TouchableOpacity, Alert} from 'react-native'
import baseUrl2 from "../../../ApisAuth/Baseurl2/BaseUrl2";
import { getUserEmail, getUserId } from "../../AUth/Login/Authservices";
import styles from './style'
import Loader from 'react-native-loading-spinner-overlay'
import { Icon } from "react-native-elements/dist/icons/Icon";
import { priamry } from "../../../Colors/PrimaryColor";
import Input from "../../../Components/Input/input.component";
import { showToaster } from "../../../Config/Contants";

const CustomerSupport =(props)=>{
    const {CustomerSupport}=props.route.params
    const SCREEN_TITLES = {
        'Support':'Customers safety is our first priority, we will be happy to help you out, enter the query title and description and open the ticket.',
        'ReportBug':'Report a bug when ever you catch it, because that can help us improve our platform.'
    }
    const [title,setTitle]=React.useState('');
    const [description,setDescription]=React.useState(''); 
    const [loading,setLoading]=React.useState(false);
    const ReportBugg=async()=>{
        
        try {
            if(title.length < 5) {
                showToaster('Title should be 5 characters long atleast');
                return;
            }
            if(description.length < 20) {
                showToaster('Description should be atleast 20 characters long');
                return;
            }
            setLoading(true)
            const userID = await getUserId();
            const submitsupportapi=await axios.post(`${baseUrl2}/bugs/report-bug`,{
               "userId":userID,
               "title":title,
               "description":description
           }) 
           setLoading(false)
           if(submitsupportapi.data.success==true){
               props.navigation.navigate("Profile")
           }
   
        } catch (error) {
            Alert.alert(JSON.stringify(error.message))
            
        }
    }
 const submitCustomerSupport=async()=>{
    
     try {
         if(title.length < 5) {
             showToaster('Ticket title show be atleast 5 characters long');
             return;
         }
         if(description.length < 20) {
             showToaster('Ticket Description should be atleast 20 characters long');
             return;
         }
        const userID = await getUserId();
        console.log(userID)
         setLoading(true)
        const submitsupportapi=await axios.post(`${baseUrl2}/customer-support/create-customer-support`,{
            "userId":userID,
            "title":title,
            "description":description
        }) 
        setLoading(false)
        if(submitsupportapi.data.success==true){
            showToaster('Your ticket has been created successfully, we will contact you soon :)','success')
            props.navigation.navigate("Profile");
        }

     } catch (error) {
         setLoading(false)
         Alert.alert(JSON.stringify(error.message))
         
     }
 }
    return(
        // <View>
        //     <Loader visible={loading} color="red"/>

        //     <View style={styles.mainHeader}>
        //         <Text style={styles.headertxt}> {CustomerSupport?"Customer Support":"Report bugg"}</Text>
        //     </View>
        //     <View style={styles.inputCon}>
        //         <TextInput placeholder="Enter title" style={styles.inputtitle} onChangeText={(title)=>setTitle(title)} value={title}/>
        //         <TextInput placeholder="Enter Description" multiline={true} style={styles.inputdesc} onChangeText={(description)=>setDescription(description)} value={description}/>

        //     </View>
        //     <TouchableOpacity style={styles.btn} onPress={()=>CustomerSupport?submitCustomerSupport():ReportBugg()}>
        //         <Text style={styles.btntxt}>Submit</Text>
        //     </TouchableOpacity>

        // </View>
        <View style={{flex:1,backgroundColor:'white'}}>
        <Loader visible={loading} color={priamry}/>

        <TouchableOpacity style={{alignSelf:'flex-start',padding:10}}>
            <Icon type="MaterialIcons" name='arrow-back' color='black' size={30}/>
            </TouchableOpacity>
            <View style={{padding:10}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Icon type="MaterialIcons" name={CustomerSupport ? 'support-agent' : 'bug-report'} color={priamry} size={30}/>
                <Text style={{fontSize:25,fontWeight:'bold',paddingLeft:5}}>{CustomerSupport ? 'Customer Support' : 'Report a bug'}</Text>

            </View>
            <Text style={{fontSize:12,fontWeight:'300',color:'grey'}}>{SCREEN_TITLES[CustomerSupport ? 'Support' : 'ReportBug']}</Text>

            </View>
            <View style={{width:'95%',alignSelf:'center'}}>
                <Input
                borderColor={'grey'}
                borderRadius={3}
                icon={
                    <Icon type="MaterialIcons" name='title' color={'grey'} style={{paddingLeft:5}} size={25}/>
                }
                placeholder={CustomerSupport ? 'Ticket Title' : 'Title'}
                onChangeText={(title)=>setTitle(title)}
                 value={title}
                />
                 <Input
                  borderColor={'grey'}
                  borderRadius={3}
                descBox={true}
                onChangeText={(description)=>setDescription(description)} value={description}
                icon={
                    <Icon type="MaterialIcons" name='description' style={{paddingLeft:5}} color={'grey'} size={25}/>
                }
                placeholder={CustomerSupport ? 'Describe the query in detail here.' : 'Describe the bug which you catched here, write all the scenarios'}
                />
            </View>
        <TouchableOpacity style={styles.btn} onPress={()=>CustomerSupport?submitCustomerSupport():ReportBugg()}>
            <Text style={styles.btntxt}>{CustomerSupport ? 'Open Ticket' : 'Report'}</Text>
        </TouchableOpacity>

    </View>
    )
}
export default CustomerSupport