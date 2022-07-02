import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Swiper from 'react-native-swiper';
import styles from './OBUIStyle';
import OnboardingCard from './ONBCard';
import {StatusBar} from 'react-native';
const ONB2 = props => {
  const [index, setIndex] = React.useState(0);
  console.log(index);
  const swiper = useRef(null);
  return (
    <Swiper
      style={styles.wrapper}
      ref={swiper}
      index={index}
      activeDotColor={'#77E6B6'}
      showsButtons={false}
      onIndexChanged={index => setIndex(index)}
      dotColor="#F8F9D3"
      paginationStyle={styles.pagistio}
      activeDot={
        <View
          style={{
            width: 30,
            backgroundColor: '#FFFFFF',
            height: 5,
            marginLeft: 8,
            borderRadius: 30,
          }}
        />
      }
      dot={
        <View
          style={{
            width: 30,
            backgroundColor: '#B8BDBD',
            height: 5,
            marginLeft: 8,
            borderRadius: 30,
          }}
        />
      }>
      <OnboardingCard
        SkipPress={() => props.navigation.replace('SignUp')}
        backgroundImage={require('../assets/W1.jpg')}
        CardTitle={
          'Select the service/s you want and request a personalised quote'
        }
        onPress={() =>
          index == 2
            ? props.navigation.replace('SignUp')
            : swiper.current.scrollBy(1)
        }
        Description={'Post your requirements and get highly relevent matches'}
      />
      <OnboardingCard
        SkipPress={() => props.navigation.replace('SignUp')}
        backgroundImage={require('../assets/W2.jpg')}
        CardTitle={
          'Accept the quote to begin to manage and receive notifications when our team of experts carry out a service'
        }
        onPress={() =>
          index == 2
            ? props.navigation.replace('SignUp')
            : swiper.current.scrollBy(1)
        }
        Description={'Post your requirements and get highly relevent matches'}
      />
      <OnboardingCard
        SkipPress={() => props.navigation.replace('SignUp')}
        backgroundImage={require('../assets/W3.jpg')}
        onPress={() =>
          index == 2
            ? props.navigation.replace('SignUp')
            : swiper.current.scrollBy(1)
        }
        CardTitle={'Local expertise and services at your fingertips'}
        Description={'Post your requirements and get highly relevent matches'}
      />
    </Swiper>
  );

  // };
};
export default ONB2;
