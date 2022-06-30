import React,{useState} from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import styles from './style'
import { Icon } from 'react-native-elements'

import ImagePicker from 'react-native-image-crop-picker'
import { getPhone, getuserEmail, getUserName } from '../AUth/Login/Authservices'

const Setting = (props) => {
    const [images, setImages] = React.useState();
    const [userName, setUserName] = useState()
    const [UserEmail, setUserEmail] = React.useState();
    const [userData,setUserData] = useState(null);


    const imagepick = async () => {

        alert(userName)
        ImagePicker.openPicker({
            width: 1000,
            height: 500,
        }).then(response => {
            setImages(response.path)
        }
        )
    }
    const getuser = async () => {

        const name = await getUserName();
        const emailuser = await getuserEmail();
        const phone = await getPhone();
        setUserData({
            name,
            email:emailuser,
            phone
        })

    }
    React.useEffect(() => {
        getuser();
    }, [])
    return (
        <ScrollView contentContainerStyle={{flexGrow:1,backgroundColor:'white'}}>
            <TouchableOpacity onPress={() => props.navigation.goBack()} style={{alignSelf:'flex-start',top:10,left:10}}>
                <Icon type='MaterialIcons' name='arrow-back' size={30} style={{margin:10}}/>
            </TouchableOpacity>
            <View style={styles.profileImageContainer}>
                {
                    images ? <Image source={{ uri: images }} style={styles.profileImage} /> : <Icon name="user" type="font-awesome-5" size={40} style={styles.profileImageicon} />
                }
                {/* <View style={styles.cameraIcon}>
                    <Icon name="camera" type="font-awesome-5" color="black" size={30} style={styles.camera} onPress={imagepick} />

                </View> */}
            </View>
            <View style={styles.userprofile}>
                <View>
                <Text style={{fontWeight:'normal',fontSize:19,textAlign:'center'}}>{userData?.name}</Text>
                <Text style={{fontWeight:'300',fontSize:17,color:'grey',textAlign:'center'}}>{userData?.email}</Text>
                <Text style={{fontWeight:'300',fontSize:17,color:'grey',textAlign:'center'}}>{userData?.phone}</Text>

                </View>

                <TouchableOpacity style={styles.editprofile} onPress={()=>props.navigation.navigate("EditProfile")}>
                    <Text style={styles.editprfiletxt}>Edit Profile</Text>
                    <Icon type="font-awesome-5" name="chevron-right" size={15} color={'white'} />
                </TouchableOpacity>
            </View>
            <View >
                <View style={styles.prefrences}>
                    <Text style={styles.prefrencestxt}>PREFERENCES</Text>

                </View>
                <View style={styles.btncon}>
                <TouchableOpacity style={styles.changePasswordbtn} >
                <View style={{flexDirection:"row",alignItems:'center',justifyContent:"space-around"}}>
                    <Icon type="font-awesome-5" name="globe" size={20} color={'grey'} />
                        <Text style={styles.changePasswordbtntxt} style={styles.changePasswordbtntxt}>Language</Text>

                        </View>
                        <Icon type="font-awesome-5" name="chevron-right" size={20} color={'grey'} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.changePasswordbtn} onPress={() => props.navigation.navigate("ChangePassword", { changepassword: true, placeholdernew: "Enter New password", placeholderprivious: "Enter your Previous passowd", resetpassword: false })}>
                    <View style={{flexDirection:"row",alignItems:'center',justifyContent:"space-around"}}>
                    <Icon type="font-awesome-5" name="lock-open" size={20} color={'grey'} />
                        <Text style={styles.changePasswordbtntxt} style={styles.changePasswordbtntxt}>Change Password</Text>

                        </View>
                        <Icon type="font-awesome-5" name="chevron-right" size={20} color={'grey'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.changePasswordbtn} onPress={() => props.navigation.navigate("CustomerSupport", { CustomerSupport: false, })}>
                        <View style={{flexDirection:"row",alignItems:'center',justifyContent:"space-around"}}>
                    <Icon type="font-awesome-5" name="bug" size={20} color={'grey'} />
                        <Text style={styles.changePasswordbtntxt} style={styles.changePasswordbtntxt}>Report  Bugg</Text>

                        </View>
                        <Icon type="font-awesome-5" name="chevron-right" size={20} color={'grey'} />
                    
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.changePasswordbtn} onPress={() => props.navigation.navigate("Addresses")}>
                        <View style={{flexDirection:"row",alignItems:'center',justifyContent:"space-around"}}>
                    <Icon type="Entypo" name="location-pin" size={25} color={'grey'} />
                        <Text style={styles.changePasswordbtntxt} style={styles.changePasswordbtntxt}>Addresses</Text>

                        </View>
                        <Icon type="font-awesome-5" name="chevron-right" size={20} color={'grey'} />
                    
                    </TouchableOpacity>
                </View>
            </View>
            {/* <View style={styles.prefrences}>
                    <Text style={styles.prefrencestxt}>ESSENTIALS</Text>

                </View>
                <View>
                <View style={{flexDirection:"row",alignItems:'center',justifyContent:"space-around"}}>
                    <Icon type="font-awesome-5" name="bug" size={20} color={'grey'} />
                        <Text style={styles.changePasswordbtntxt} style={styles.changePasswordbtntxt}>Report  Bugg</Text>

                        </View>
                </View> */}
            {/* <View style={styles.mainHeader}>
                <Text style={styles.headertxt}>Settings</Text>
            </View> */}

        </ScrollView>
    )
}
export default Setting