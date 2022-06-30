import React, { useState } from 'react'
import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'
import styles from './IPstyle'
import User from '../../../Components/Inbox/User/User'
import Client from '../../../Components/Inbox/Client/Client'
import Logo from '../../../Components/Logo/Logo'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { priamry } from '../../../Colors/PrimaryColor'

const InboxProfile = (props) => {
    const [messages, setMessages] = useState()
    const send = () => {
        console.log('user', messages)
    }
    return (
        <>
            <View style={styles.mainContainer}>
                <TouchableOpacity  style={styles.back} onPress={()=>props.navigation.navigate("Inbox")} >

                <Icon name="long-arrow-alt-left" type="font-awesome-5" size={20} color={"white"}  />
                </TouchableOpacity>
                {/* <View style={styles.headerlogo}> */}
                    <Text style={styles.username}>Nike</Text>
                    <Logo />
                {/* </View> */}

            </View>
            {/* <View>
                


            </View> */}

            <View style={{height:'83%'}}>
                <ScrollView contentContainerStyle={{paddingBottom: 300}} >

                    <User
                        Usermessage="Yes sure but this is not somthing i like through"
                    />
                    <Client
                        clientmessage="Ok no problem we can provide you other Option "
                    />
                    <User
                        Usermessage="Thats Great Thanks!"
                    />
                    <Client
                        clientmessage="Ok no problem we can provide you other Option "
                    />
                    <User
                        Usermessage="Thats Great Thanks!"
                    />
                    <Client
                        clientmessage="Ok no problem we can provide you other Option "
                    />
                     <User
                        Usermessage="Thats Great Thanks!"
                    />
                    <Client
                        clientmessage="Ok no problem we can provide you other Option "
                    />
                    
                    
                    
                    




                </ScrollView>
            </View>
            <View style={{ flex: 1 }}>
                <View style={styles.footerCon}>
                    <TouchableOpacity style={styles.attechfile}>
                        <Icon name="paperclip" size={25} type="font-awesome-5" color="black" onPress={send} />

                    </TouchableOpacity>
                    <View style={styles.inputcon}>
                        <TextInput placeholder="Tape Here" placeholderTextColor="black"
                            onChangeText={(messages) => setMessages(messages)}
                            style={styles.input}
                        />
                        <View style={styles.Icontcon}>
                            <Icon name="paper-plane" size={20} type="font-awesome-5" color={priamry} onPress={send} />

                        </View>
                    </View>
                </View>


            </View>

        </>
    )
}
export default InboxProfile