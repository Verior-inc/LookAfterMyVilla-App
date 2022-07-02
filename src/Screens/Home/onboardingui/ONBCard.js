import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Swiper from 'react-native-swiper';
import RightIcon from '../../../../assets/images/RightIcon';
import styles from './ONBCardstyle';
const OnboardingCard = ({
  backgroundImage,
  SkipPress,
  CardTitle,
  Description,
  onPress,
}) => {
  return (
    <ImageBackground style={styles.slide1} source={backgroundImage}>
      <StatusBar translucent backgroundColor="transparent" />

      <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.6)'}}>
        <View style={{alignItems: 'center', marginTop: 80}}>
          <Image
            source={require('../assets/logo.png')}
            style={{resizeMode: 'contain', width: 100, height: 100}}
          />
        </View>
        <View style={{position: 'absolute', bottom: 200, marginHorizontal: 20}}>
          <View>
            <Text style={styles.text}>{CardTitle}</Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.dex}>{Description}</Text>
          </View>
        </View>

        <View style={styles.dontaccount}>
          <TouchableOpacity onPress={SkipPress}>
            <Text style={styles.createOne}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.leftbutton} onPress={onPress}>
            {/* <LeftICon /> */}
            <RightIcon />
            {/* <Image source={require('../../components/assets/arrow-icon.png')} /> */}
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
export default OnboardingCard;
