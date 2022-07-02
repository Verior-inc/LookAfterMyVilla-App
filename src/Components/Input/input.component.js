import React, {useState} from 'react';
import {Icon} from 'react-native-elements';

import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  ToastAndroid,
} from 'react-native';
import {Medium} from '../../Colors/Fonfamily';

const Input = ({
  icon,
  placeholder,
  value,
  onChangeText,
  borderColor,
  width,
  borderRadius,
  descBox,
  bgColor,
}) => {
  return (
    <View
      style={{
        width: width ? width : '95%',
        minHeight: descBox ? 200 : 45,
        borderWidth: 1,
        borderColor: borderColor ? borderColor : '#f8f8f8',
        backgroundColor: bgColor ? bgColor : '#f8f8f8',
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: borderRadius ? borderRadius : 0,
      }}>
      <View style={{alignSelf: 'flex-start', marginTop: 13}}>{icon}</View>
      <TextInput
        value={value}
        multiline
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={'grey'}
        style={{
          paddingLeft: 10,
          color: 'black',
          flex: 1,
          alignSelf: 'flex-start',
          fontSize: 16,
          fontFamily: Medium,
        }}
      />
    </View>
  );
};

export default Input;
