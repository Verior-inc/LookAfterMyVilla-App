import React from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import styles from './style'
import { Icon } from 'react-native-elements'

import ImagePicker from 'react-native-image-crop-picker'
import { getPhone, getuserEmail, getUserId, getUserName, getUserProfile } from '../../AUth/Login/Authservices'
import { priamry } from '../../../Colors/PrimaryColor'
import axios from 'axios'
import baseUrl2 from '../../../ApisAuth/Baseurl2/BaseUrl2'
import Loader from 'react-native-loading-spinner-overlay'

const EditProfile = (props) => {
    const [images, setImages] = React.useState();
    const [userName, setUserName] = React.useState()
    const [UserEmail, setUserEmail] = React.useState()
    const [name,setName]=React.useState()
    const [getphonenbr,setGetPhonenbr]=React.useState()
    const [Phone,setPhone]=React.useState()
    const [profile,setProfile]=React.useState()
    const [userid,setuserid]=React.useState()


    const [loading,setLoading]=React.useState(false)

    const Upload=async()=>{
        const userId=await getUserId();
        var formData = new FormData(); 
        formData.append('image', images);
        console.log(">>",formData)
        // return styles.hidden

        try {
            const uploadimgapi=await axios.patch(`${baseUrl2}/user/upload-profile`,{
                "formdata": formData,
                "userId": userId,

            })
            console.log(uploadimgapi)
            // {styles.upldbtn}
        } catch (error) {
            console.log(JSON.stringify(error))
            
        }
    }

    const imagepick = async () => {

        ImagePicker.openPicker({
            width: 1000,
            height: 500,
        }).then(response => {
            setImages(response.path)
        }
        )
    }
    
    // console.log(userId)
    const UpdateProfile=async()=>{
        const userId=await getUserId();
        try {
            setLoading(true)
            const updateapi=await axios.patch(`${baseUrl2}/user/edit-profile`,{
                "phone":Phone,
                "name":name,
                "userId":userId
            })
            setLoading(false)
            if(updateapi.data.success==true){
                alert(updateapi.data.message,
        
        
        {text: 'Ok', onPress: props.navigation.navigate('Setting')},
        {text: 'Cancel'},
        
        {cancelable: false}
    )
            }
            console.log(updateapi)

            
        } catch (error) {
            setLoading(false)
            console.log(error,JSON.stringify(error))
            
        }

    }

    const getuser = async () => {

        const name = await getUserName();
        setUserName(name)
        const emailuser = await getuserEmail();
        setUserEmail(emailuser)
        const phonenbr=await getPhone();
        setGetPhonenbr(phonenbr)
        const userprofile=await getUserProfile();
        // alert(userprofile)
        setProfile(userprofile)

    }
    console.log(profile)
    React.useEffect(() => {
        getuser();
        
    }, [])
    return (
        <View>
            <Loader visible={loading} color="red"/>

            <View style={styles.profileImageContainer}>
                {
                    images ? <Image source={{ uri: images }} style={styles.profileImage} /> : <Icon name="user" type="font-awesome-5" size={40} style={styles.profileImageicon} />
                }
                <View style={styles.cameraIcon}>
                    <Icon name="camera" type="font-awesome-5" color="black" size={30} style={styles.camera} onPress={imagepick} />
                </View>
            </View>
                {
                           profile != images ?
                           <TouchableOpacity style={styles.upldbtn} onPress={Upload}>
                               <Text style={styles.upldbtntxt}>Upload image</Text>
                           </TouchableOpacity>

                           :
                           null
                       }  
            <View style={styles.contectCon}>
                <View style={styles.contectdtl}>
                    <Text style={styles.emialtitle}>Email</Text>
                    <Text style={styles.email}>{UserEmail}</Text>

                </View>
                <View style={styles.contectdtl}>
                    <Text style={styles.title}>Name</Text>
                    <TextInput placeholder={userName} placeholderTextColor={'black'} onChangeText={(name)=>setName(name)} value={name} style={name ? styles.input : styles.placeholder}/>
                </View>
                <View style={styles.contectdtl}>
                    <Text style={styles.title}>Contect NBR</Text>
                    <TextInput placeholder={getphonenbr}  placeholderTextColor={'black'} style={Phone ? styles.input : styles.placeholder} onChangeText={(Phone)=>setPhone(Phone)} value={Phone}/>
                </View>
            </View>
            <TouchableOpacity style={styles.btnprofile} onPress={()=>userName==name&&getphonenbr==Phone?alert("No changes"):UpdateProfile()}>
                <Text style={styles.btnprofiletxt}>Update Profile</Text>
            </TouchableOpacity>


        </View>
    )
}
export default EditProfile