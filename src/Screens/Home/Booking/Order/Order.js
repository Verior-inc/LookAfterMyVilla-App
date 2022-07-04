import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Card from '../../../../Components/Order/orderCards/Card';
import styles from './style';
import Logo from '../../../../Components/Logo/Logo';
import axios from 'axios';
import Loader from 'react-native-loading-spinner-overlay';
import {priamry} from '../../../../Colors/PrimaryColor';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUserId, get_user_data} from '../../../AUth/Login/Authservices';
import moment from 'moment';
import {useIsFocused} from '@react-navigation/native';
const Order = props => {
  const [data, setData] = React.useState();
  // console.log('>>>>>>>>', data.cancelled);
  const [isLoading, setLoading] = React.useState(true);
  const [selectedtype, setSelectedtype] = React.useState('Pending');
  const [activebtn, setactivebtn] = React.useState(null);
  const [userid, setuserid] = React.useState();
  const isFocused = useIsFocused();

  const getorder = async () => {
    const userID = await getUserId();
    try {
      setLoading(true);
      const getorderapi = await axios.get(
        `https://lamv-backend.herokuapp.com/orders/get-my-orders/${userID}`,
      );
      console.log('line 25', getorderapi.data);
      setLoading(false);
      setData(getorderapi.data.data);
    } catch (error) {
      setLoading(false);
      console.log(error.response.data);
    }
  };

  // alert(userid)
  React.useEffect(() => {
    getorder();
  }, [isFocused]);
  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.maincon}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logoimg}
          />
          <Text style={styles.HeaderName}>Your Orders</Text>
          <Icon
            name="ellipsis-v"
            type="font-awesome-5"
            size={20}
            color={'white'}
          />
        </View>

        <Loader visible={isLoading} color={'red'} />

        {/* <View style={styles.IconCon}>
                <Icon name="chevron-left" type="font-awesome-5" size={25} color={'black'} />
            </View>
            <View style={styles.HeaderCon}>
                <Text style={styles.HeaderText}>My orders</Text>
                <Logo/>
            </View> */}
        {/* <View style={styles.serachBox}>
                <View style={styles.serachBoxIcon}>
                    <Icon name="search" type="font-awesome-5" size={24} color={'grey'} />

                </View>
                <TextInput placeholder="Flight,Hotel,Train More.." style={styles.input}/>


            </View> */}

        <View style={styles.mainButton}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                styles.activebtn,
                {
                  backgroundColor:
                    selectedtype == 'Pending' ? priamry : 'white',
                },
              ]}
              onPress={back => setSelectedtype('Pending', styles.backgn)}>
              <Text
                style={[
                  styles.activebtnText,
                  {color: selectedtype == 'Pending' ? 'white' : 'grey'},
                ]}>
                Pending ({data?.pending?.length})
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                styles.activebtn,
                {
                  backgroundColor:
                    selectedtype == 'ApprovalPending' ? priamry : 'white',
                },
              ]}
              onPress={back =>
                setSelectedtype('ApprovalPending', styles.backgn)
              }>
              <Text
                style={[
                  styles.activebtnText,
                  {
                    color: selectedtype == 'ApprovalPending' ? 'white' : 'grey',
                  },
                ]}>
                Approval Pending ({data?.budgetApprovalPending?.length})
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                styles.activebtn,
                {
                  backgroundColor:
                    selectedtype == 'Live/Ongoing' ? priamry : 'white',
                },
              ]}
              onPress={() => setSelectedtype('Live/Ongoing', styles.backgn)}>
              <Text
                style={[
                  styles.activebtnText,
                  {color: selectedtype == 'Live/Ongoing' ? 'white' : 'grey'},
                ]}>
                Live / Ongoing ({data?.ongoing?.length})
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                styles.activebtn,
                {
                  backgroundColor:
                    selectedtype == 'Completed' ? priamry : 'white',
                },
              ]}
              onPress={() => setSelectedtype('Completed')}>
              <Text
                style={[
                  styles.activebtnText,
                  {color: selectedtype == 'Completed' ? 'white' : 'grey'},
                ]}>
                Completed ({data?.completed?.length})
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                styles.activebtn,
                {
                  backgroundColor:
                    selectedtype == 'Cancelled' ? priamry : 'white',
                },
              ]}
              onPress={() => setSelectedtype('Cancelled', styles.backgn)}>
              <Text
                style={[
                  styles.activebtnText,
                  {color: selectedtype == 'Cancelled' ? 'white' : 'grey'},
                ]}>
                Cancelled ({data?.cancelled?.length})
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={{height: '100%', flex: 1}}>
          {data ? (
            <FlatList
              showsVerticalScrollIndicator={null}
              contentContainerStyle={{paddingBottom: 15}}
              data={
                selectedtype == 'Pending'
                  ? data.pending
                  : selectedtype == 'Completed'
                  ? data.completed
                  : selectedtype == 'Live/Ongoing'
                  ? data.ongoing
                  : selectedtype == 'ApprovalPending'
                  ? data.budgetApprovalPending
                  : selectedtype == 'Cancelled'
                  ? data?.cancelled
                  : data.pending
              }
              renderItem={({item, index}) => {
                console.log('category', item.description);
                return (
                  <View style={{flex: 1}}>
                    <Card
                      Description="Description"
                      DescriptionText={item.description}
                      order_status="Order Status"
                      order_statusdtl={item.order_status}
                      Travel="Ordered on"
                      nav={() =>
                        props.navigation.navigate('OrderDetail', {items: item})
                      }
                      TravelText={moment(item.ordered_on).format(
                        'DD-MM-YYYY hh:mm A',
                      )}
                      btnText="Check detail"
                      leftIcon="arrow-right"
                    />
                  </View>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
              style={styles.flatList}
            />
          ) : null}
        </View>
      </View>
    </>
  );
};
export default Order;
