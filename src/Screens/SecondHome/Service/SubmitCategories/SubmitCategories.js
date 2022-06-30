import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image, Pressable, Dimensions, Alert, ScrollView, FlatList, ImageBackground, } from 'react-native'
import { Icon } from 'react-native-elements'
import styles from './style'
import CheckBox from '@react-native-community/checkbox';
import ImagePicker from 'react-native-image-crop-picker'
import { Modalize } from 'react-native-modalize';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Loader from 'react-native-loading-spinner-overlay'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { priamry, primaryShade } from '../../../../Colors/PrimaryColor';
import { SliderBox } from "react-native-image-slider-box";
import CheckContect from '../../../../Components/CheckBox/CheckBox';
import axios from 'axios';
import baseUrl2 from '../../../../ApisAuth/Baseurl2/BaseUrl2';
import { getUserId } from '../../../AUth/Login/Authservices';
import Input from '../../../../Components/Input/input.component';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
import AntDesign from 'react-native-vector-icons/AntDesign'
import { showToaster } from '../../../../Config/Contants';
import AddressComponent from '../../../../Components/AddressComponent';
import Ionicons from 'react-native-vector-icons/Ionicons'
const SubmitCategories = (props) => {
    const { mainservicesName, mainservicesid, isOffer,offer } = props.route.params;
    const { allservicesData } = props.route.params;
    const [selectedType,setSelectedType] = useState('home');
    let SubcatIds = []
    allservicesData.map((item, index) => {
        SubcatIds.push(item._id)
    })
    
    const [data, setData] = React.useState();
    const [isLoading, setLoading] = React.useState(false);
    const [userName, setUserName] = React.useState()
    const [images, setImages] = React.useState([])
    const modalizeRef = React.useRef(null);
    const [isUrgent,setIsUrgent] = useState(false)
    const [selectedContect, setSelectedContect] = React.useState('')
    const [fullAddress, setFullAddress] = React.useState('');
    const [phone,setPhone] = useState('');
    const [info,setInfo] = useState('');
    const [decription, setDescription] = React.useState('');
    const [selectedAddress,setSelectedAddress] = useState(null);
    const [allAddresses,setAllAddresses] = useState(null);
    const [addMode,setAddMode] = useState(false);
    const [position, setPosition] = React.useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    });

    const getAddresses = async() => {
        try {
            setLoading(true)
            const userId = await getUserId();
          const apiCall = await axios.get(`https://lamv-backend.herokuapp.com/addresses/get-my-address/${userId}`);
          if(apiCall.status == 200) {
              setAllAddresses(apiCall.data.data);
              if(apiCall?.data?.data?.length == 0) {
                  setAddMode(true);
              } else {
                  setAddMode(false)
              }
          } else {
              showToaster('Something went wrong try again')
          }
          setLoading(false)
        }
         catch(e) {
            setLoading(false)
            showToaster('Something went wrong try again')
            console.log(e?.response?.data)
         }
    }

    useEffect(() => {
        getAddresses()
    },[]);
    const uploadOrderImages = async() => {
        try {
            if(!mainservicesid && !isOffer) {
                showToaster('Select main category to proceed');
                return
            }
            if(allservicesData?.length == 0 && !isOffer) {
                console.log(allservicesData)
                showToaster('Select sub category to proceed');
                return
            }
            if(!decription) {
                showToaster('Please write some description');
                return
            }
            if(images.length == 0) {
                showToaster('Please select some images');
                return
            }
            if(!selectedContect) {
                showToaster('Select contact type please');
                return
            }
            if(!selectedAddress) {
                showToaster('Please select residential address');
                return;
            }
            if(images.length < 3) {
                showToaster('Please select at least 3 images');
                return;
            }
            if(isOffer && !offer) {
                showToaster('Invalid offer selected');
                return;
            }
          const formData = new FormData();
          for (var a = 0; a < images.length;a++) {
            formData.append('order-images',{
                uri:images[a]?.path,
                type:'image/jpg',
                name:`photo-${Math.floor(Math.random())}.jpg`
              })
          }
          setLoading(true);
          const apiCall = await axios.post(`${baseUrl2}/orders/upload-order-images`,formData);
          setLoading(false);
          if(apiCall.status == 200) {
              Alert.alert('call',JSON.stringify(apiCall.data.data))
          
                submitservice(apiCall.data.data);
          } else {
              showToaster('Something went wrong try again later');
              return;
          }
        } catch(e) {
            setLoading(false);
            showToaster('Something went wrong try again later -2');
            console.log(e);
            console.log(e?.response?.data)
        }
    }
    const createAddress = async() => {
        try {
            setLoading(true)
            const userId = await getUserId();
          const apiCall = await axios.post(`https://lamv-backend.herokuapp.com/addresses/create-address`,{
              info:info,
              phone:phone,
              address:fullAddress,
              userId:userId,
              label:selectedType
          });
          if(apiCall.status == 200) {
              showToaster('Address created','success');
              setSelectedAddress(apiCall.data.data);
              modalizeRef?.current?.close();
              await getAddresses()
          } else {
              showToaster('Something went wrong try again')
          }
          setLoading(false)
        }
         catch(e) {
            setLoading(false)
            showToaster('Something went wrong try again')
            console.log(e?.response?.data)
         }
    }
    const submitservice = async (images) => {

        try {
           
            if(!images || images.length == 0) {
                showToaster('Something went wrong try again please');
                return;
            }
            const userID=await getUserId();
            setLoading(true);
            const body = {
                "selected_contact_type": selectedContect,
                "description": decription,
                "Images":images,
                // "country": fullAddress.street,
                // "city": fullAddress.town,
                // "state": fullAddress.province,
                "address": selectedAddress,
                // "latitude": position.latitude,
                // "longitude": position.longitude,
                "ordered_by_id": userID,
                "mainCategoryId": mainservicesid,
                "subCategoryIds": SubcatIds,
                "isUrgent":isUrgent,
                "addressId":selectedAddress?._id,
                "isOfferBooked":isOffer ? true : false,
                "offerId":offer?._id
            }
            console.log(body)
            const submitapi = await axios.post(`https://lamv-backend.herokuapp.com/orders/place-order`,body);
            console.log(submitapi.data)
            setLoading(false);
            if (submitapi?.status == 200) {
                props.navigation.navigate('Submit');
            } else {
                setLoading(false);

                Alert.alert('something went wrong', JSON.stringify(loginApiCall.data.info.message))
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error)
            console.log(error?.response?.data)
        }
    }
    const onOpen = () => {
        modalizeRef.current?.open();
    };
    const getUserName = async () => {
        const name = await AsyncStorage.getItem("name");
        var parse = JSON.parse(name);
        setUserName(parse)
    }
   
    React.useEffect(() => {
        getUserName();

    },[])

    const openmap = () => {
        Geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords;
            setPosition({
                latitude: crd.latitude,
                longitude: crd.longitude,
                latitudeDelta: 0.0421,
                longitudeDelta: 0.0421,
            });
        }).catch((err) => {
            console.log(err);
        });
        onOpen();
    }
    const handelnavigation = () => {
        if (fullAddress.town == '' && fullAddress.province == '' && fullAddress.postcode == '') {
            alert("Please enter full address")


        }
        else if (fullAddress.street == '') {
            Alert.alert("Please enter street")
        }
        else if (fullAddress.house == '') {
            Alert.alert("Please enter house")

        }
        else if (fullAddress.town == '') {
            Alert.alert("Please enter town")

        }
        else if (fullAddress.province == '') {
            Alert.alert("Please enter province")

        }
        else if (fullAddress.postcode == '') {
            Alert.alert("Please enter postcode")

        }

        else {
            Alert.alert("Done :)")
            modalizeRef.current?.close()
            console.log("fullAdress", fullAddress)
        }

    }
    const handelCheck = () => {
        if (selectedContect == "phone") {
            setSelectedContect('')
        }
        else {
            setSelectedContect("phone")

        }

    }
    const handelCheck2 = () => {
        if (selectedContect == "email") {
            setSelectedContect('')
        }
        else {
            setSelectedContect("email")

        }

    }
    const handelCheck3 = () => {
        if (selectedContect == "Appchatt") {
            setSelectedContect('')
        }
        else {
            setSelectedContect("Appchatt")

        }

    }
    const imagepick = () => {

        const ImageList = [];
        ImagePicker.openPicker({
            width: 1000,
            height: 500,
            multiple: true,
            maxFiles:3

        }).then(response => {
            if (response.length > 3) {
                Alert.alert("You can select only 3 image")
            }
            else {
                response.map(image => {
                    setImages([...images,image])
                    
                });
                
            }
        }
        )
        console.log("image", images)
    }
    const deleteImg = (path) => {
      const filterImgs = images.filter(img => img?.path != path);
      setImages(filterImgs)
    }
    const ThinLineSeparator = ({margin}) => {
        return (
            <View style={{width:'100%',borderWidth:0.5,color:'grey',marginTop:margin ? margin : 0}}/>
        )
    }
    console.log(offer)

    return (
        <>
            <View style={styles.maincon}>
                <Loader visible={isLoading} color={priamry} />

                <Image source={require('../assets/logo.png')} style={styles.logoimg} />
                <Text style={styles.HeaderName}>Placing Order</Text>
                <Icon name="ellipsis-v" type="font-awesome-5" size={20} color={'white'} />
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ paddingBottom: "20%" ,flexGrow:1,backgroundColor:'white'}}>
                    {/* <View style={styles.serviceHeader}>
                        <Text style={styles.serviceHeaderText}>Selected Service/s:</Text>
                    </View>
                    <View style={{ marginLeft: 40, marginTop: 20, flexDirection: 'row' }}>
                        <Text style={{ color: priamry, fontSize: 16, fontWeight: "600" }}>mainCategory :</Text>
                        <Text style={{ color: priamry, fontSize: 16, fontWeight: "600" }}>  {mainservicesName}</Text>
                    </View> */}
                  {
                      isOffer ? 
                      <View style={{padding:10,width:'95%',alignSelf:'center'}}>
                        <Text style={{fontSize:17,paddingBottom:10}}>Selected offer: </Text>
                        <View style={{
                            width:'100%',
                            height:130,
                            alignSelf:'center',
                            marginVertical:10
                        }}>
                            <ImageBackground
                            source={{uri:`https://www.thespruce.com/thmb/xADiz3HJzrb4D2ea1lo1Sfr9Aj4=/1563x1172/smart/filters:no_upscale()/Stocksy_txpdc39b9790by000_Medium_867684-5a958e10119fa80036fb82b6.jpg`}}
                            style={{width:'100%',height:'100%'}}
                            >
                           <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.1)',padding:10}}>
                           <Text style={{fontSize:20,color:'white'}}>{offer?.description}</Text>
                            <Text style={{fontSize:30,fontWeight:'bold',color:'white'}}>{offer?.percent_off}%</Text>
                           </View>
                            </ImageBackground>
                            
                        </View>
                      </View>
                      :
                      <View style={{margin:10}}>
                      <Text style={{fontWeight:'300',margin:5,top:5}}>Selected Services</Text>
                  <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
               <View style={{padding:10,borderWidth:1,borderColor:'grey',margin:3,borderRadius:5}}>
                    <Text>{mainservicesName}</Text>
                </View>
                {
                    allservicesData?.map(sub => (
                        <View style={{padding:10,borderWidth:1,borderColor:'grey',margin:3,borderRadius:3}}>
                        <Text>{sub?.name}</Text>
                    </View>
                    ))
                }
               </View>
                  </View>
                  }
                  <ThinLineSeparator margin={10}/>
                  <View>
                      <Input
                      bgColor='white'
                      width={'100%'}
                      icon={
                          <Icon name='description' type='MaterialIcons' style={{paddingLeft:10}}/>
                      }
                      placeholder={'Please describe the service you require in detail '}
                      descBox={true}
                      value={decription} 
                      onChangeText={(decription) => setDescription(decription)}
                      />
                  </View>
                  <ThinLineSeparator/>
                    {/* <View>
                        <FlatList
                            horizontal={true}
                            data={allservicesData}
                            renderItem={({ item, index }) => {
                                return <View style={{ height: 60, width: 200, backgroundColor: 'white', marginTop: 30, marginHorizontal: 10, flex: 1 }}>
                                    <Text style={styles.SelectValueText}>{item.name}</Text>
                                </View>
                            }}
                        />
                    </View> */}
                    <View>
                    <Text style={{fontWeight:'300',margin:10,top:5,fontSize:18}}>Add Images</Text>
                     <View style={{flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                     <View style={{flexDirection:'row',alignItems:'center'}}>
                       {
                           images?.map(img => (
                            <ImageBackground
                            source={{uri:img.path}}
                            style={{width:80,height:80,borderRadius:5,resizeMode:'cover',margin:3}}
                            >
                                <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.1)',justifyContent:'center',alignItems:'center'}}>
                                <Pressable
                                onPress={() => {
                                    deleteImg(img?.path)
                                }}
                                >
                                    <AntDesign name='close' size={25} color='white'/>
                                </Pressable>
                                </View>
                                </ImageBackground>
                           ))
                       }
                   </View>
                  {
                      images?.length >= 3 ? 
                      null
                      :
                      <Pressable 
                      onPress={imagepick}
                      style={{width:80,height:80,marginLeft:10,borderWidth:1,borderRadius:1,borderStyle:'dashed',justifyContent:'center',alignItems:'center'}}>
                       <AntDesign name='plus' size={30} color='grey'/>
                      </Pressable>
                  }
                     </View>
                    </View>
                    <ThinLineSeparator margin={20}/>
                    <View>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <Text style={{fontWeight:'500',margin:10,top:5,fontSize:18}}>Residential Address</Text>
                        {
                            selectedAddress ? 
                            <Pressable
                            onPress={() => {
                                setAddMode(false);
                                modalizeRef?.current?.open()
                            }}
                            style={{marginRight:10}}>
                        <Ionicons name='pencil'  color={priamry} size={15}/>
                        </Pressable>
                        :
                        null
                        }
                        </View>
                    {
                        selectedAddress ? 
                        <AddressComponent
                        label={selectedAddress?.label}
                        addressLine={selectedAddress?.addressLine}
                        phone={selectedAddress?.phone}
                        info={selectedAddress?.info}
                        />
                        :
                        <TouchableOpacity
                        style={{
                            width:'95%',
                            height:50,
                            borderWidth:1,
                            borderColor:primaryShade,
                            backgroundColor:primaryShade,
                            justifyContent:'center',
                            alignItems:'center',
                            borderRadius:5,
                            alignSelf:'center'
                        }}
                        onPress={async() => {
                            await getAddresses();
                            modalizeRef?.current?.open();
                        }}>
                            <Text style={{color:priamry,fontWeight:'600',fontSize:16}}>{allAddresses && !isLoading ? 'Select Address' : 'Add Address'}</Text>
                        </TouchableOpacity>
                    }
                    </View>
                    <ThinLineSeparator margin={20}/>
                    <View>
                    <Text style={{fontWeight:'300',margin:10,top:5,fontSize:18}}>Select prefered contact type</Text>

                     <View style={{paddingLeft:5,flexDirection:'row',alignItems:'center'}}>
                     <Pressable onPress={() => setSelectedContect('phone')} style={{margin:10,flexDirection:'row',alignItems:'center',padding:10,borderWidth:0.7,borderRadius:5,backgroundColor:selectedContect == 'phone' ? priamry : 'white',borderColor:priamry}}>
                         <Icon type='FontAwesome' name='phone' color={selectedContect == 'phone' ? 'white' : priamry} size={20}/>
                         <Text style={{marginLeft:6,color:selectedContect == 'phone' ? 'white' : priamry}}>Phone</Text>
                     </Pressable>
                     <Pressable onPress={() => setSelectedContect('email')} style={{margin:10,flexDirection:'row',alignItems:'center',padding:10,borderWidth:0.7,borderRadius:5,borderColor:priamry,backgroundColor:selectedContect == 'email' ? priamry : 'white'}}>
                         <Icon type='MaterialCommunityIcons' name='email' color={selectedContect == 'email' ? 'white' : priamry} size={20}/>
                         <Text style={{marginLeft:6,color:selectedContect == 'email' ? 'white' : priamry}}>Email</Text>
                     </Pressable>
                    
                     </View>
                    </View>
                    <ThinLineSeparator margin={15}/>
                  <View>
                      <Text style={{fontWeight:'bold',color:'grey',padding:10,fontSize:16}}>Do you want this to be urgent?</Text>
                  <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:10}}>
                      
                      <Pressable
                      onPress={() => setIsUrgent(prev => !prev)}
                      style={{
                          width:25,height:25,borderWidth:1,justifyContent:'center',alignItems:'center',borderColor:isUrgent ? priamry : 'grey',borderRadius:25/2,backgroundColor:isUrgent ? priamry :'transparent'
                      }}>
                          {
                              isUrgent ? 
                              <Icon name='check' type='Entypo' color={isUrgent ? 'white' : 'grey'} size={13}/>
                              :
                              null
                          }
                          </Pressable>
                      <Text style={{fontWeight:'500',color:'grey',paddingLeft:5}}>Choose urgent option, if you would like to hire us for urgent, this option may charge you more than usual</Text>
                  </View>
                  </View>
                  <ThinLineSeparator margin={15}/>
                     
                   
                   
                </ScrollView>
                <TouchableOpacity onPress={uploadOrderImages} style={{width:'95%',height:60,borderWidth:1,borderColor:priamry,backgroundColor:priamry,justifyContent:'center',alignItems:'center',borderRadius:5,position:'absolute',bottom:10,alignSelf:'center'}}>
                        <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Submit</Text>
                    </TouchableOpacity>
            </View>
            <Modalize ref={modalizeRef}
                adjustToContentHeight
            >

                {/* <View style={{ height: 200 }}>

                    <MapView
                        style={styles.map}
                        initialRegion={position}
                        showsUserLocation={true}
                    />
                </View> */}
               {
                   allAddresses && !isLoading && !addMode ? 
                <View>
                   <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginHorizontal:15,marginVertical:10}}>
                   <Text style={{fontSize:16,fontWeight:'600'}}>Select Address</Text>
                   <Icon onPress={() => setAddMode(true)} name='add' type='AntDesign' color='black' size={25}/>
                   </View>
                    <FlatList
                  data={allAddresses}
                  keyExtractor={item => item?._id}
                  renderItem={itemData => (
                      <AddressComponent
                      label={itemData.item?.label}
                      addressLine={itemData.item.addressLine}
                      phone={itemData?.item?.phone}
                      info={itemData?.item?.info}
                      onPress={() => {
                          setSelectedAddress(itemData.item);
                          modalizeRef?.current?.close()
                      }}
                      />
                  )}
                  />
                </View>
               :
               <View>
               <View style={{width:'95%',alignSelf:'center'}}>
           <Text style={{fontSize:19,fontWeight:'500',margin:10}}>Add Residential Address</Text>
       </View>
       <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center'}}>
           <Pressable
           onPress={() => setSelectedType('home')}
           style={{
               width:'45%',
               height:100,
               borderWidth:3,
               borderColor: selectedType == 'home' ? priamry : '#DBE9F1',
               backgroundColor:'#DBE9F1',
               borderRadius:4,
               justifyContent:'center',
               alignItems:'center',
               margin:5
           }}>
               <Icon name='home' type='FontAwesome' color={priamry} size={30}/>
               <Text style={{color:priamry,fontSize:20}}>Home</Text>
           </Pressable>
           <Pressable
           onPress={() => setSelectedType('work')}
           style={{
               width:'45%',
               height:100,
               borderWidth:3,
               borderColor: selectedType == 'work' ? priamry : '#DBE9F1',
               backgroundColor:'#DBE9F1',
               borderRadius:4,
               justifyContent:'center',
               alignItems:'center',
               margin:5
           }}>
               <Icon name='work' type='MaterialIcons' color={priamry} size={30}/>
               <Text style={{color:priamry,fontSize:20}}>Office</Text>
           </Pressable>
       </View>
       <View style={styles.mapinputCon}>
           <TextInput placeholderTextColor={'#222'} placeholder="Full Residential Address" style={styles.mapinput} value={fullAddress} onChangeText={(street) => setFullAddress(street)} />
       </View>
       <View style={styles.mapinputCon}>
           <TextInput keyboardType='numeric' placeholderTextColor={'#222'} placeholder="Phone Number" style={styles.mapinput} value={phone} onChangeText={(phone) => setPhone(phone)} />
       </View>
       <View style={styles.mapinputCon}>
           <TextInput placeholderTextColor={'#222'} placeholder="Optional Note for rider" style={styles.mapinput} value={info} onChangeText={(info) => setInfo(info)} />
       </View>
       <Pressable style={styles.mapbtn} onPress={createAddress}>
           <Text style={styles.mapbtnTxt}>Next</Text>
       </Pressable>
           </View>

               }
            </Modalize>
        </>
    )
}
export default SubmitCategories