import React from 'react'
import {View,Text, Image,TouchableOpacity,ScrollView} from 'react-native'
import styles from './style'
import { Icon } from 'react-native-elements'
import { priamry } from '../../Colors/PrimaryColor'
const CardSubmit=()=>{
    return(
        <>
        <ScrollView contentContainerStyle={{paddingBottom:200}}>
        <View style={styles.backbtn}>
            <Icon name="chevron-left" type="font-awesome-5" size={25} color={priamry}/>
        </View>
        <View style={styles.ordercon}>
            <Text style={styles.orderconText}>Order</Text>
            <Text style={styles.orderconordrcnt}>#455667</Text>

        </View>
        <View style={styles.headerImagecon}>
            <Image source={require('./assets/logo.jpg')} style={styles.imglogo}/>
            <Text style={styles.NameText}>Johnson</Text>
        </View>
        <View style={styles.Detail}>
            <Text style={styles.detailText}>Details </Text>
        </View>

        <View style={styles.cardBoxDetl}>
                    <View style={styles.decrCon}>
                        <Text style={styles.decrConName}>Email : </Text>
                        <Text style={styles.othrtext}>  johnson34@gmail.com</Text>

                    </View>
                    <View style={styles.decrCon}>
                        <Text style={styles.decrConName}>Contact no:</Text>
                        <Text style={styles.othrtext}>+98009900</Text>

                    </View>
                    <View style={styles.decrCon}>
                        <Text style={styles.decrConName}>Service :</Text>
                        <Text style={styles.othrtext}>Laundry</Text>

                    </View>
                    <View style={styles.decrCon}>
                        <Text style={styles.decrConName}>Price :  </Text>
                        <Text style={styles.othrtext}>$15 - $20</Text>

                    </View>
                    <View style={styles.decrCon}>
                        <Text style={styles.decrConName}>Date :</Text>
                        <Text style={styles.othrtext}>13/4/21 - 14/4/12</Text>

                    </View>
                    <View style={styles.decrCon}>
                        <Text style={styles.decrConName}>Description : </Text>
                        <Text style={styles.decrConText}> "I just want you get it done before 9pm."</Text>

                    </View>
                    <View style={styles.picCon}>
                        <Text style={styles.decrConName}>Pictures : </Text>
                        <Image source={require('./assets/iron.jpg')} style={styles.footrimage}/>
                        <Image source={require('./assets/bucket.jpg')} style={styles.footrimage}/>

                       

                    </View>
                    


        </View>
        <TouchableOpacity style={styles.btnsbmt}>
            <Text style={styles.btnsbmtText}>Get</Text>
        </TouchableOpacity>

        </ScrollView>

        
        </>
    )
}
export default CardSubmit