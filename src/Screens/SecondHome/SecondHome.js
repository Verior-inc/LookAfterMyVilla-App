import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
  Pressable,
  Alert,
} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './style';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainServices from '../../Components/MainServices/MainServices';
import axios from 'axios';
import Loader from 'react-native-loading-spinner-overlay';
import {priamry} from '../../Colors/PrimaryColor';
import baseUrl2 from '../../ApisAuth/Baseurl2/BaseUrl2';
import {getUserName} from '../AUth/Login/Authservices';
import {showToaster} from '../../Config/Contants';
import {SemiBold} from '../../Colors/Fonfamily';

var offercard = [
  {
    offer: 'Get a 20% off on construction of a building',
    valid_upto: '12/12/2021',
    image: require('./assets/offer1.jpg'),
  },
  {
    offer: 'Get a 20% off on cleaning of a pool',
    valid_upto: '12/12/2021',
    image: require('./assets/offer2.jpg'),
  },
  {
    offer: 'Get a 30% off on handiment ',
    valid_upto: '12/12/2021',
    image: require('./assets/offer3.jpg'),
  },
  {
    offer: 'Get a 30% off on Garden ',
    valid_upto: '12/12/2021',
    image: require('./assets/offer4.jpg'),
  },
];
const SecondHome = ({navigation}) => {
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const [offers, setOffers] = React.useState();
  const [userName, setUserName] = React.useState();
  const [userid, setuserid] = React.useState();
  const [urgentMode, setUrgentMode] = useState(false);
  const getUserId = async () => {
    const user_id = await AsyncStorage.getItem('_id');
    setuserid(user_id);
  };

  React.useEffect(() => {
    mainservicesapicall();
  }, []);
  useEffect(() => {
    offerapicall();
  }, []);
  useEffect(() => {
    getUserId();
  }, []);
  console.log(userid);
  const offerapicall = async () => {
    try {
      const offerapi = await axios.get(`${baseUrl2}/offers/get-offers`);
      console.log('Offer>>>', offerapi.data);
      setOffers(offerapi.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.response);
      showToaster(
        error?.response?.data?.message
          ? error?.response?.data?.message
          : 'Something went wrong, please try again-1',
      );
    }
  };
  const mainservicesapicall = async () => {
    const name = await getUserName();
    setUserName(name);
    try {
      const mainserviceapi = await axios.get(
        `${baseUrl2}/categories/get-maincategories`,
      );
      setData(mainserviceapi.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      showToaster(
        error?.response?.data?.message
          ? error?.response?.data?.message
          : 'Something went wrong, please try again-2',
      );

      // console.log(JSON.stringify(error.message))
    }
  };
  return (
    <>
      <View style={styles.maincon}>
        <Image
          source={require('../SecondHome/assets/logo.png')}
          style={styles.logoimg}
        />
        <Text style={styles.HeaderName}>Hi {userName}</Text>
        <Icon
          name="ellipsis-v"
          type="font-awesome-5"
          size={20}
          color={'white'}
        />
      </View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.currentCardCon}>
          <Text style={styles.currentCardConText}>Available offers: </Text>
        </View>
        <View style={styles.offerCon}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={offers}
            contentContainerStyle={{marginLeft: 10}}
            renderItem={({item, index}) => (
              <View style={styles.card}>
                <ImageBackground
                  source={{uri: `${baseUrl2}/${item?.image}`}}
                  key={index}
                  style={styles.cardBox}
                  imageStyle={{borderRadius: 10, opacity: 0.7}}>
                  <View
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      flex: 1,
                      borderRadius: 10,
                      padding: 15,
                    }}>
                    <Text style={styles.cardBoxText}>{item?.description}</Text>
                    {/* <Text style={styles.cardBoxdet}>{item.valid_upto}</Text> */}
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('SubmitCategories', {
                          isOffer: true,
                          allservicesData: [],
                          mainservicesName: '',
                          mainservicesid: '',
                          offer: item,
                        });
                      }}
                      style={{
                        backgroundColor: priamry,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'flex-end',
                        borderRadius: 5,
                        padding: 10,
                        width: 80,
                        bottom: 10,
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 15,
                          fontFamily: SemiBold,
                        }}>
                        Order
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              </View>
            )}
            style={styles.flatList}
          />
        </View>

        <View style={styles.helpHeader}>
          <Text style={styles.helpHeaderText}>How can we help you?</Text>
          {/* {
                        urgentMode ? 
                        <Text style={styles.helpHeaderText}>Urgent mode is on, select any service and go on.</Text>
                        :
                        null
                    } */}
        </View>
        <Loader visible={isLoading} color={priamry} />
        <View style={{flex: 1}}>
          <FlatList
            numColumns={2}
            data={data}
            contentContainerStyle={{flexGrow: 1, marginTop: '20%'}}
            renderItem={({item, index}) => {
              return (
                <Pressable
                  key={item.id}
                  style={{flex: 1, margin: 10, width: '45%'}}
                  onPress={() =>
                    navigation.navigate('SubCategory', {
                      mainservicesid: item._id,
                      mainservicesName: item.name,
                      getuserID: userid,
                    })
                  }>
                  <MainServices MainServicesName={item.name} iconName="home" />
                </Pressable>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
      {/* <TouchableOpacity onPress={() => setUrgentMode(prev => !prev)} style={styles.btnbody}>
                    <Text style={styles.btnbodyText}>Report an urgent issue</Text>
                </TouchableOpacity> */}
    </>
  );
};
export default SecondHome;
