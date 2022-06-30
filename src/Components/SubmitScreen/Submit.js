import React from 'react'
import {View ,Text, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers'
import styles from './style'
const Submit=(props)=>{
    return(
        <View style={styles.mainCon}>
            <Icon name="check-circle" type="font-awesome-5" size={50} color={"green"}/>
            <Text style={styles.mainConTile}>Submission Succefull</Text>
            <Text style={styles.mainCondtl}>Thank you for your submission, a colleague will be in touch shortly</Text>
            <TouchableOpacity style={styles.btn} onPress={()=>props.navigation.navigate("BookingStack")}>
                <Text style={styles.Text}>Done</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Submit