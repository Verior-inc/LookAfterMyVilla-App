import React from 'react'
import {View ,Text, Image} from 'react-native'
import { Icon } from 'react-native-elements'
// import { Icon } from 'react-native-elements/dist/icons/Icon'
import styles from './BStyle'


const Booking=()=>{
    return(
        <>
         <View style={styles.Header}>
                <View style={styles.MainHeader}>
                    {/* <Icon name="box" type="font-awesome-5" size={20}  color={'white'} style={styles.usericon} /> */}
                    <Text style={styles.HeaderName}>Booking</Text>
                    {/* <Icon name="cog" type="font-awesome-5" size={20}  color={'white'} style={styles.settingicon}/> */}

                </View>
            </View>
            <View style={styles.BoxCon}>

                <View style={styles.Box}>
                <Icon name="box" type="font-awesome-5" size={60}  color={'grey'}  />
                    
                </View>
                <View  style={styles.mainContainer}>

                <Text  style={styles.mainContainerText}>You don´t have any orders
                in pending yet..</Text>
                </View>
        </View>
        </>
    )
}
export default Booking