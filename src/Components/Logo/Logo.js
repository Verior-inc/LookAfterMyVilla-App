import React from 'react'
import { View,Image } from 'react-native'
import styles from './style'
const Logo=()=>{
    return(
        <View style={styles.logocon}>
            <Image source={require('../../Screens/SecondHome/assets/profile.jpg')} style={styles.logoimage} />

        </View>
    )
}
export default Logo