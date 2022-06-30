import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image, FlatList, Pressable } from 'react-native'
import { Icon } from 'react-native-elements'
import styles from './style'
import CheckBox from '@react-native-community/checkbox';
import SubServices from '../../../Components/SubServices/SubService';
import axios from 'axios';
import Loader from 'react-native-loading-spinner-overlay'
import { priamry } from '../../../Colors/PrimaryColor';
import baseUrl2 from '../../../ApisAuth/Baseurl2/BaseUrl2';


const SubCategory = ({ route, navigation }) => {
    const { mainservicesid,getuserID } = route.params;
    const {mainservicesName}=route.params;
    // const{}=route.params;
    console.log("mainservices",getuserID)
    const [data, setData] = React.useState([]);
    const [SubcatName, setSubCatName] = React.useState();
    const [isLoading, setLoading] = React.useState(true);


 const handelNAvigation=()=>{
     let maker=[];
     data.map((item,index)=>{
         if(item.check){
            maker.push(item)             
         }
         console.log("makr",maker)
     })
    navigation.navigate("SubmitCategories",{allservicesData:maker,mainservicesName:mainservicesName,mainservicesid:mainservicesid,getuserID:getuserID})

 }
    React.useEffect(() => {
        subCategoryget();
    }, [])

    const subCategoryget = async () => {
        try {
            // setLoading(true);
            const mainserviceapi = await axios.get(`${baseUrl2}/categories/get-filtered-subcategories/${mainservicesid}`);
            console.log("Subcategory",mainserviceapi.data.data)
            setLoading(false);
            let obj=[];
            mainserviceapi.data?.data.map((item,index)=>{
                obj.push({...item,check:false})
            })

            setData(obj)



        } catch (error) {
            setLoading(false);
            console.log(JSON.stringify(error))

        }
    }
    const [isSelected, setSelection] = useState(false);
   

    return (
        <>
            <View style={styles.maincon}>
                <Image source={require('../assets/logo.png')} style={styles.logoimg} />
                {/* <Text style={styles.HeaderName}>Hi Charlie</Text> */}
                <Icon name="ellipsis-v" type="font-awesome-5" size={20} color={'white'} />


            </View>
            <View style={styles.serviceCon}>
                <Text style={styles.serviceConText}>What property maintenance service/s are you looking for?</Text>
            </View>
            <View>
                <Loader visible={isLoading} color={priamry} />


                <FlatList
                    // horizontal={true}
                    contentContainerStyle={{flexGrow:1}}
                    numColumns={2}
                    data={data}
                    renderItem={({ item,index }) => {
                        console.log("Subcategory",item)
                        console.log(item.check)
                        return <View  style={{ flex: 1,}} >
                            <SubServices SubServiceName={item.name} Iconname="home"
                             checker={item.check}
                              onchange={()=>{
                                  
                                  if(item.check){
                                      let get=data;
                                      get[index].check=false
                                  console.log("Chek>>>",get)

                                      setData([...get])
                                  }else{
                                    let get=data;
                                    get[index].check=true
                                  console.log("Chek>>>",get)

                                    setData([...get])

                                  }
                              }}/>
                        </View>
                    }}
                    keyExtractor={(item, index) => index.toString()}


                    style={styles.flatList}
                />
            </View>
            <View style={styles.Footer}>
                <TouchableOpacity onPress={() => navigation.navigate("SecondHome")}>
                    <Icon name="chevron-left" type="font-awesome-5" size={20} color={'white'} style={styles.iconcon} />

                </TouchableOpacity>
                <Text style={styles.FooterText}>2 Of 3</Text>
                <TouchableOpacity style={{ marginLeft: 10 }} onPress={handelNAvigation}>
                    <Icon name="chevron-right" type="font-awesome-5" size={20} color={'white'} style={styles.iconcon} />

                </TouchableOpacity>

            </View>
        </>

    )
}
export default SubCategory