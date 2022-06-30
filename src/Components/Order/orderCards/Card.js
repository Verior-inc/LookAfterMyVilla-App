
import React,{useState} from 'react'
import {View,Text,TextInput,Button,StyleSheet,Image,TouchableOpacity,labelValue} from 'react-native'
import {Icon} from 'react-native-elements'
import styles from './style'
const Card=({Iconlogo,Icondot,logocolor,dotcolor,name,
    btnText,leftIcon,price,Description,DescriptionText,order_status,order_statusdtl,Travel,TravelText,nav, ...rest})=>{
    // const[name,setName]=useState()
    // const nav=()=>{
    //     onPress=()=>props.navigation.navigate
    // }
    return(
        <View style={styles.maincon}>
            <View style={styles.mainHeader}>
                {/* <View style={styles.iconCon}>

                    <Icon name={Iconlogo} type="font-awesome-5" size={20} color={logocolor}/>
                </View>
                <Text style={styles.name}>{name}</Text>
                <Icon name={Icondot} type="font-awesome-5" size={20} color={dotcolor}/> */}
            </View>
                <View style={styles.content}>
                    <Text style={styles.contentname}>{Description}</Text>
                    <Text style={styles.contentdtldec} numberOfLines={1}  ellipsizeMode='tail'>{DescriptionText}</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.contentname}>{order_status}</Text>
                    <Text style={styles.contentdtl}>{order_statusdtl}</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.contentname}>{Travel}</Text>
                    <Text style={styles.contentdtl}>{TravelText}</Text>
                </View>
                <View style={styles.btncon}>
                    <TouchableOpacity style={styles.btn} onPress={nav}>
                        <Text style={styles.btnText}>{btnText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.leftbtn}>
                    <Icon name={leftIcon} type="font-awesome-5" size={20} color={dotcolor}/>
                    </TouchableOpacity>

                </View>
            

        </View>
       
    )
}
export default Card
