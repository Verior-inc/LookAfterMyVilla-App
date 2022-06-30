import React, { useState } from 'react'
import {View,Text,Image,TextInput, TouchableOpacity, Alert, ScrollView} from 'react-native'
import { Icon } from 'react-native-elements'
import { getPhone, getuserEmail, getUserName, get_user_data, logout } from '../AUth/Login/Authservices'
import styles from './ProfileStyle'
import ImagePicker from 'react-native-image-crop-picker'

const Profile =(props)=>{
    const [images, setImages] = React.useState()
    const [userName, setUserName] = React.useState()
    const [email, setEmail] = React.useState()
    const [Logoutuser, setLogout] = React.useState()
    const [userData,setUserData] = useState(null);

    const getuser=async()=>{
        
        const name= await getUserName();
        const email = await getuserEmail();
        const phone = await getPhone();
        console.log('line 20',phone)
        setUserData({
            name,
            email,
            phone
        });
        setUserName(name)
    }
    const Logoutuser1=async()=>{
        const Logout=await logout();
        setLogout(Logout)
    }
    // const getuseremail=async()=>{
        
        
    //     const nameemail= await getUserEmail();
    //     // setUserName(name)
    //     setEmail(nameemail)
    // }
    console.log(email)

    React.useEffect(() => {
        getuser();
        // getuseremail();
    }, [])
    const imagepick = async() => {
        
        alert(userName)
        ImagePicker.openPicker({
            width: 1000,
            height: 500,
        }).then(response => {
            setImages(response.path)
        }
        )
    }
    return(
        <>
        <View style={{flex:1}}>
        <View style={styles.maincon}>
                <Image source={require('../SecondHome/assets/logo.png')} style={styles.logoimg} />
                <Text style={styles.HeaderName}>Your Profile</Text>
                <Icon name="ellipsis-v" type="font-awesome-5" size={20} color={'white'} />
            </View>
        <View style={styles.profileImageContainer}>
      
            {
                images?<Image source={{uri:images}} style={styles.profileImage}/>:<Icon name="user" type="font-awesome-5" size={40} style={styles.profileImageicon}/>
            }
            {/* <View  style={styles.cameraIcon}>
                <Icon name="camera" type="font-awesome-5" color="black" size={30} style={styles.camera} onPress={imagepick}/>

            </View> */}
        </View>
        <ScrollView contentContainerStyle={{flexGrow:1,paddingBottom:'10%'}}>
        <View style={{marginTop:20}}>
           <Text style={styles.userName}>{userData?.name}</Text>  
            <Text style={{textAlign:'center',fontWeight:'300',color:'grey',fontSize:18}}>{userData?.email}</Text>  
            <Text style={{textAlign:'center',fontWeight:'300',color:'grey',fontSize:18}}>{userData?.phone}</Text>  
           </View>

            {/* <Text>{}</Text> */}
            {/* <View style={styles.profileorder}>
                <Text style={styles.orderHeader} >Your Orders in queue.</Text>  
                <Text  style={styles.profileDevideText} >|</Text>  
                <Text  style={styles.completeorderText}>Your Completed Orders.</Text>  
            </View> */}
            <View>

        <View style={styles.cardContainer} >
            <TouchableOpacity activeOpacity={0.8} style={styles.card} onPress={()=>props.navigation.navigate("Setting")}>
                <Icon name="cog" type="font-awesome-5" color="white" size={30}   />
                <Text style={styles.cardText}>Setting</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.card}  onPress={()=>props.navigation.navigate("CustomerSupport",{CustomerSupport:true,})} >
                <Icon name="info-circle" type="font-awesome-5" color="white" size={30} />
                <Text style={styles.cardText} >Customer help</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.cardContainer} >
            <TouchableOpacity activeOpacity={0.8} style={styles.card} onPress={()=>props.navigation.navigate("FeedBack")}>
                <Icon name="clone" type="font-awesome-5" color="white" size={30}  />
                <Text style={styles.cardText}>Provide feedback</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={[styles.card,{backgroundColor:'red'}]}  onPress={Logoutuser1}>
                <Icon name="sign-out-alt" type="font-awesome-5" color="white" size={30}  />
                <Text style={styles.cardText}>Signout</Text>
            </TouchableOpacity>
        </View>
        </View>
        </ScrollView>
        </View>

        </>
    )
}

export default Profile