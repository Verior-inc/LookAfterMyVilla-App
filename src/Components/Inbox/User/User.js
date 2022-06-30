import React from 'react'
import {View,Text} from 'react-native'
import Logo from '../../Logo/Logo'
import styles from './style'
const User=({Usermessage})=>{
    return(
        <View  style={styles.Maincon}>
            <Logo/>
            <View style={ styles.Box}>
                <Text style={ styles.usermessage}>{Usermessage}</Text>
            </View>
        </View>
    )
}
export default User