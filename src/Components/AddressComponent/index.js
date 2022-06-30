import React from 'react';
import {Text, View,StyleSheet,Image,TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { priamry } from '../../Colors/PrimaryColor';
const AddressComponent = ({label,addressLine,onPress,phone,info,width,selected}) => {
  return (
    <TouchableOpacity 
    onPress={onPress}
    activeOpacity={1}
    style={[styles.cardContainer,{width:width?width:'95%',borderColor:selected ? 'pink' : 'white'}]}>
    <View style={styles.labelCircle}>
      {
          label == 'home' ? 
          <Ionicons size={20} name='home-sharp' color={priamry}/>
          :
          label == 'work' ?
          <MaterialIcons size={20} name='work' color={priamry}/> 
          :
          null
      }
    </View>
    <View style={{width:'90%',paddingLeft:10}}>
        <Text style={{fontSize:13,paddingLeft:10}}>{addressLine}</Text>
       {
           phone ?
           <View style={{
             flexDirection:'row',
             alignItems:'center'
           }}>
           <MaterialCommunityIcons name='phone' size={18} color={'grey'}/>
           <Text style={{paddingLeft:5,color:'grey'}}>{phone}</Text>
       </View>
       :
       null
       }
      {
          info ? 
          <View style={styles.flexWrapper}>
          <MaterialCommunityIcons name='information' size={18} color={'grey'}/>
          <Text style={{paddingLeft:5,color:'grey'}}>{info}</Text>
      </View>
      :
      null
      }
    </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  cardContainer:{
    width:'95%',
    minHeight:100,
    borderWidth:2,
    borderColor:'white',
    backgroundColor:'white',
    elevation:2,
    margin:5,
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
    paddingHorizontal:10,
    paddingVertical:10
},
 labelCircle:{
     width:40,
     height:40,
     borderWidth:1,
     borderColor:'#DBE9F1',
     backgroundColor:'#DBE9F1',
     borderRadius:40/2,
     justifyContent:'center',
     alignItems:'center'
 },
 flexWrapper:{
   flexDirection:'row',
   alignItems:'center'
 }
})

export default AddressComponent;
