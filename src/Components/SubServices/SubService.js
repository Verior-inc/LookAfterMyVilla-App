import React from 'react'
import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import { Icon,Chec } from 'react-native-elements'
import styles from './style'
import CheckBox from '@react-native-community/checkbox';

const SubServices = ({SubServiceName,Iconname,onchange,checker}) => {
    const [isSelected, setSelection] = React.useState(false);

    return (
        <Pressable onPress={onchange} style={styles.main}>
            <View >
                <View style={styles.cardBox}>
                    <Icon name={Iconname} type="font-awesome-5" size={25} color={'white'} />

                </View>
                <View style={styles.cardBoxdtl}>
                    <Text style={styles.dtltxt}>{SubServiceName}</Text>
                    <CheckBox
                        value={checker}
                        onChange={onchange}
                        style={styles.checkbox}
                    />

                </View>
            </View>
           
        </Pressable>
        
    )
}
export default SubServices