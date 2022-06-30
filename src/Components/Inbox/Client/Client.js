import React from 'react'
import {View,Text} from 'react-native'
import styles from './style'
import Logo from '../../Logo/Logo'
const Client=({clientmessage})=>{
    return(
        <View  style={styles.Maincon}>
            <View style={ styles.Box}>
                <Text style={ styles.clientmessage}>{clientmessage}</Text>
            </View>
            <View style ={styles.logo}>
                <Logo/>
            </View>
        </View>
    )
}
export default Client