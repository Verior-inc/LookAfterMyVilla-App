import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  ImageBackground,
  Pressable,
  Dimensions,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import {Modalize} from 'react-native-modalize';
import axios from 'axios';
import baseUrl2 from '../../../../../ApisAuth/Baseurl2/BaseUrl2';
import {getUserId} from '../../../../AUth/Login/Authservices';
import Loader from 'react-native-loading-spinner-overlay';
const height = Dimensions.get('window').height;
import Pdf from 'react-native-pdf';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {priamry} from '../../../../../Colors/PrimaryColor';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AddressComponent from '../../../../../Components/AddressComponent/index';
import {Bold, Medium, Regular, SemiBold} from '../../../../../Colors/Fonfamily';
const OrderDetail = props => {
  const {items} = props.route.params;
  const modalizeRef = React.useRef(null);
  const modalizeRef1 = React.useRef(null);

  const height = Dimensions.get('window').height;
  const [reason, setReason] = React.useState();
  const [isLoading, setLoading] = React.useState(false);

  const onOpenfile = () => {
    modalizeRef1.current?.open();
  };
  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const openmap = () => {
    onOpen();
  };

  var offercard = [
    {
      image: require('./assets/offer1.jpg'),
    },
    {
      image: require('./assets/offer2.jpg'),
    },
    {
      image: require('./assets/offer3.jpg'),
    },
  ];
  const cancel = async () => {
    const userID = await getUserId();
    try {
      setLoading(true);
      const cacelapi = await axios.post(`${baseUrl2}/orders/cancel-order`, {
        orderId: items._id,
        reason: reason,
        cancelled_by: userID,
      });
      setLoading(false);
      if (cacelapi.data.success == true) {
        props.navigation.navigate('Order');
      } else {
        console.log('somthing went wrong');
      }
    } catch (error) {
      console.log('error', JSON.stringify(error));
    }
  };
  const confirmAccept = () => {
    Alert.alert(
      // ? Title
      'Confirm Buddegt',
      // ? Body
      `Are you sure Confirem Budget Accept`,
      [
        {
          text: 'Ok',
          onPress: () => Accept(),
        },
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };
  const Accept = async () => {
    try {
      setLoading(true);
      const Acceptapi = await axios.post(`${baseUrl2}/orders/accept-budget`, {
        id: items._id,
        // ,"userId":userID
      });
      setLoading(false);
      if (Acceptapi.data.success == true) {
        alert(Acceptapi.data.message);
        props.navigation.navigate('Order');
      }
      console.log('budget', Acceptapi.data);
    } catch (error) {
      setLoading(false);
      console.log(JSON.stringify(error));
    }
  };
  const decline = async () => {
    const userID = await getUserId();

    try {
      const declineapi = await axios.post(`${baseUrl2}/orders/decline-budget`, {
        id: items._id,
        userId: userID,
      });
      if (declineapi.data.success == true) {
        Alert.alert(decline.data.message);
        props.navigation.navigate('Order');
      }
      console.log('budget', declineapi.data);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  const source = {uri: `${baseUrl2}/${items.budgetFile}`, cache: true};
  console.log(items.budgetFile);
  const Separator = () => {
    return (
      <View style={{width: '100%', borderWidth: 0.3, marginVertical: 20}} />
    );
  };
  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            width: '100%',
            paddingLeft: 6,
            height: 75,
            backgroundColor: priamry,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Order')}>
            <MaterialCommunityIcons
              name="keyboard-backspace"
              color="white"
              size={25}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: 'white',
              fontSize: 19,
              paddingLeft: 10,
              fontFamily: Bold,
            }}>
            Order #{items?.orderId}
          </Text>
        </View>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          {items?.isBudgetAttached &&
          items?.status_code == 'BUDGET_APPROVAL_PENDING' ? (
            <View
              style={{
                width: '95%',
                borderWidth: 1,
                borderColor: 'powderblue',
                backgroundColor: 'powderblue',
                alignSelf: 'center',
                margin: 10,
                padding: 10,
              }}>
              <Text style={{fontFamily: Regular, fontSize: 14, color: 'grey'}}>
                We have attached one budget pdf file with details open and
                review it, if you agree on the terms accept the offer to proceed
                with order.
              </Text>
              <TouchableOpacity style={{alignSelf: 'flex-end'}}>
                <Text
                  style={{fontFamily: SemiBold, color: priamry, fontSize: 18}}>
                  Open
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 10,
              marginTop: 20,
            }}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                #{items?.orderId}
              </Text>
              <Text style={{color: 'grey'}}>
                {moment(items?.ordered_on).format('DD MMMM YYYY hh:ss A')}
              </Text>
            </View>
            <Text style={{fontSize: 16, fontFamily: Medium}}>
              {items?.order_status}
            </Text>
          </View>
          <Separator />
          <View style={{width: '95%', alignSelf: 'center'}}>
            <Text style={{fontSize: 19, fontFamily: SemiBold}}>
              Customer details
            </Text>
            <Text style={{fontFamily: Medium, color: 'grey', fontSize: 16}}>
              {items?.OrderBy?.name}
            </Text>
            <Text style={{fontFamily: Medium, color: 'grey', fontSize: 16}}>
              {items?.OrderBy?.email}
            </Text>
            <Text style={{fontFamily: Medium, color: 'grey', fontSize: 16}}>
              {items?.OrderBy?.phone}
            </Text>
            <AddressComponent
              addressLine={items?.address?.addressLine}
              info={items?.address?.info}
              phone={items?.address?.phone}
              label={items?.address?.label}
            />
          </View>
          <Separator />
          <View style={{width: '95%', alignSelf: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 19, fontFamily: SemiBold}}>
                Order details
              </Text>
              {items?.isBudgetAttached ? (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('budgetFile', {
                      pdf: {uri: `${baseUrl2}/${items.budgetFile}`},
                      order: items,
                    });
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: Medium,
                      color: priamry,
                    }}>
                    Budget File?
                  </Text>
                </TouchableOpacity>
              ) : null}
            </View>
            <Text style={{fontFamily: SemiBold, color: '#000'}}>
              Description:{' '}
              <Text style={{fontFamily: Regular, fontSize: 16}}>
                {items?.description}
              </Text>
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              {items?.isOfferBooked ? (
                <View
                  style={{
                    paddingVertical: 10,
                    width: '100%',
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 17,
                      paddingBottom: 10,
                      fontFamily: SemiBold,
                    }}>
                    Selected offer:{' '}
                  </Text>
                  <View
                    style={{
                      width: '100%',
                      height: 130,
                      alignSelf: 'center',
                      marginVertical: 10,
                    }}>
                    <ImageBackground
                      source={{
                        uri: `https://www.thespruce.com/thmb/xADiz3HJzrb4D2ea1lo1Sfr9Aj4=/1563x1172/smart/filters:no_upscale()/Stocksy_txpdc39b9790by000_Medium_867684-5a958e10119fa80036fb82b6.jpg`,
                      }}
                      style={{width: '100%', height: '100%'}}>
                      <View
                        style={{
                          flex: 1,
                          backgroundColor: 'rgba(0,0,0,0.1)',
                          padding: 10,
                        }}>
                        <Text style={{fontSize: 20, color: 'white'}}>
                          {items?.orderedOffer?.description}
                        </Text>
                        <Text
                          style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: 'white',
                          }}>
                          {items?.orderedOffer?.percent_off}%
                        </Text>
                      </View>
                    </ImageBackground>
                  </View>
                </View>
              ) : (
                <View>
                  <View
                    style={{
                      padding: 10,
                      borderWidth: 1,
                      borderColor: 'grey',
                      margin: 3,
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        color: '#000',
                        fontFamily: Medium,
                        fontSize: 16,
                      }}>
                      {items?.mainCategory?.name}
                    </Text>
                  </View>
                  <View>
                    {items?.subCategories?.map(sub => (
                      <View
                        style={{
                          padding: 10,
                          borderWidth: 1,
                          borderColor: 'grey',
                          margin: 3,
                          borderRadius: 3,
                        }}>
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: Medium,
                            fontSize: 16,
                          }}>
                          {sub?.name}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}
            </View>
          </View>
          <View style={styles.offerCon}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={items?.Images}
              renderItem={({item, index}) => (
                <View style={styles.card}>
                  <ImageBackground
                    source={{uri: `${baseUrl2}/${item}`}}
                    key={index}
                    style={styles.cardBox}
                    imageStyle={{borderRadius: 5}}></ImageBackground>
                </View>
              )}
              style={styles.flatList}
            />
          </View>

          {/* </View> */}
          <Modalize ref={modalizeRef1}>
            <View style={styles.atchheader}>
              <Text style={styles.atchheadertxt}>Attech file</Text>
            </View>
            <View style={styles.btnsbudgetcon}>
              <TouchableOpacity style={styles.decline} onPress={decline}>
                <Text style={styles.budgettxt}>Decline budget</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.accept} onPress={confirmAccept}>
                <Text style={styles.budgettxt}>Accept budget</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <ScrollView>
                <Pdf
                  source={source}
                  enablePaging
                  onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                  }}
                  onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                  }}
                  onError={error => {
                    console.log(error);
                  }}
                  onPressLink={uri => {
                    console.log(`Link pressed: ${uri}`);
                  }}
                  style={styles.pdf}
                />
              </ScrollView>
            </View>
          </Modalize>
        </ScrollView>

        {items?.status_code == 'PENDING' ? (
          <TouchableOpacity
            onPress={() => {
              modalizeRef?.current?.open();
            }}
            style={{
              width: '95%',
              alignSelf: 'center',
              height: 50,
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              position: 'absolute',
              bottom: 10,
            }}>
            <Text style={{fontSize: 19, fontFamily: SemiBold, color: 'white'}}>
              Cancel Order
            </Text>
          </TouchableOpacity>
        ) : null}

        <Modalize ref={modalizeRef} adjustToContentHeight>
          <View style={{padding: 10, flex: 1}}>
            <View
              style={{width: '90%', alignSelf: 'center', marginVertical: 10}}>
              <Text style={{fontSize: 20, fontFamily: SemiBold}}>
                Cancellation Reason.
              </Text>
              <Text style={{fontSize: 15, fontFamily: Regular, color: 'grey'}}>
                We are so sad that you are cancelling this order, enter your
                reason can help us improve our service.
              </Text>
            </View>
            <View style={styles.mapinputCon}>
              <TextInput
                multiline
                placeholderTextColor={'black'}
                placeholder="Describe cancellation reason here"
                value={reason}
                onChangeText={reason => setReason(reason)}
                style={styles.mapinput}
              />
            </View>

            <TouchableOpacity style={styles.mapbtn} onPress={cancel}>
              <Text style={styles.mapbtnTxt}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </Modalize>
      </View>
    </>
  );
};
export default OrderDetail;
