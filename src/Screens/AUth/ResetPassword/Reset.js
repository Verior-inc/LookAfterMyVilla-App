import React, { useState } from 'react'
import { View ,Text, TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './style'

const Reset=()=>{
    const [forgotEmail,setForgotEmail]=useState();
    return(
        <View style={styles.main}>
            <View style={styles.inputCon}>
                <TextInput onChangeText={(value)=>setForgotEmail(value)}  value={forgotEmail} placeholder="Enter your Verified OTP" style={styles.input}/>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntxt}>Reset </Text>
            </TouchableOpacity>
        </View>
    )
}
export default Reset