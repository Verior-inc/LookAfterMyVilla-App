import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'
import { priamry } from '../../../Colors/PrimaryColor'
import styles from './Inboxstyle'
const Inbox =(props)=>{
    return(
        <>
        <View style={styles.backIcon}>
            <TouchableOpacity style={styles.icon}>

            <Icon name="arrow-left" type="font-awesome-5" size={20} color={'white'}  />
            </TouchableOpacity>
            <View style={styles.inboxName}>

            <Text style={styles.inboxHeader}>INBOX</Text>
            <Text  style={styles.inboxsubHeader}>You Have 2 Unread messages</Text>
            </View>

        </View>
        <TouchableOpacity onPress={()=>props.navigation.navigate('InboxProfile')}>

        <View  style={styles.imageContainer}>
        <Image source={require('../assets/profileinbox.png')}  style={styles.Profileimage}/>
            <View>

            <Text style={styles.username}>Lookaftermyvilla</Text>
            <Text style={styles.usersubText} >yes we been sorting it out.</Text>
            <Text style={styles.time}>11:51</Text>
            <View  style={styles.countContainer}>

                <Text  style={styles.countText}>2</Text>
            </View>

            </View>

        </View>
              </TouchableOpacity>
        </>
    )
}
export default Inbox