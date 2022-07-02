import {StyleSheet} from 'react-native';
import {Bold, Medium} from '../../../Colors/Fonfamily';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#B8BDBD',
  },
  slide2: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#B8BDBD',
  },
  slide3: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontFamily: Bold,
    // marginTop: 40,
  },
  dex: {
    color: '#fff',
    fontSize: 16,
    fontFamily: Medium,
    // marginTop: 120,
  },
  dontaccount: {
    position: 'absolute',
    bottom: 10,
    // marginTop:"10%",
    // marginHorizontal:30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 30,
  },
  dontaccountText: {
    color: 'lightgrey',
    fontSize: 17,
  },
  createOne: {
    color: '#E8E8E8',
    fontSize: 16,
    fontFamily: 'HKGrotesk-SemiBold',
  },
  titleonb: {
    fontSize: 23,
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'HKGrotesk-SemiBold',

    marginBottom: 10,
  },
  leftbutton: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagistio: {
    color: '#F8F9D3',
    bottom: 90,
    // marginBottom: '10%',
    // marginBottom:10
  },
});
export default styles;
