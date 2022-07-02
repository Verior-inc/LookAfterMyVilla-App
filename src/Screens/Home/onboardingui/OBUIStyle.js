import {StyleSheet} from 'react-native';
import {Medium, SemiBold} from '../../../Colors/Fonfamily';
import {priamry} from '../../../Colors/PrimaryColor';
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logoName: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  logoimg: {
    width: '25%',
    resizeMode: 'contain',
    height: '20%',
    // marginHorizontal:10
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'darkblue',
    fontSize: 20,
    width: 340,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pagistio: {
    marginVertical: '25%',
    // marginBottom:10
  },
  buttonBody: {
    borderWidth: 2,
    borderColor: priamry,
    backgroundColor: priamry,
    justifyContent: 'center',
    marginBottom: 10,
    width: '90%',
    height: '8%',
    marginLeft: 2,
    borderRadius: 30,
    top: 48,
    position: 'relative',
  },
  buttonBody1: {
    borderWidth: 2,
    borderColor: priamry,
    backgroundColor: priamry,
    justifyContent: 'center',
    marginBottom: 10,
    width: '90%',
    height: '8%',
    marginLeft: 2,
    borderRadius: 30,
    top: 38,
    position: 'relative',
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
  img: {
    width: '90%',
    resizeMode: 'contain',
    height: '40%',
  },
  dontaccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 40,
    marginLeft: '70%',
  },
  dontaccountText: {
    color: 'lightgrey',
    fontSize: 17,
  },
  createOne: {
    color: 'darkblue',
    fontSize: 17,
  },
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
    fontFamily: SemiBold,
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
