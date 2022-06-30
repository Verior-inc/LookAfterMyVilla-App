import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import styles from './styles'
const MainServices = ({ MainServicesName, iconName }) => {
    return (
        <View style={styles.mainservice}>
            <View style={styles.serviceCon}>
                <View style={styles.btnBody}>

                    <View style={styles.servicebtn} >
                        <Icon name={iconName} type="font-awesome-5" color={'white'} size={20} />
                    </View>
                    <Text style={styles.serviceTile} >{MainServicesName}</Text>
                </View>
            </View>
        </View>
    )
}
export default MainServices










































