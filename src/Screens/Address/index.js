import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { priamry } from '../../Colors/PrimaryColor';
import AddressComponent from '../../Components/AddressComponent';

export default Address = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <View style={{
                width: '100%',
                height: 60,
                backgroundColor: priamry,
                paddingLeft: 10,
                justifyContent:'center'
            }}>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Icon name='keyboard-backspace' type='MaterialCommunityIcons' size={25} color='white' />
                    <Text style={{color:'white',fontSize:17,fontWeight:'bold',paddingLeft:10}}>Addresses</Text>
                </TouchableOpacity>

            </View>



            <FlatList
            data={[1,2]}
            renderItem={itemData => (
                <AddressComponent
                label='work'
                addressLine={'difhdjkfhdfjhdfjh'}
                />
            )}
            />

        </View>
    )
}