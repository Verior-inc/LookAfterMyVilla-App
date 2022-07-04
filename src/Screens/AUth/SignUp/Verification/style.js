import {Dimensions, StyleSheet} from 'react-native';
import {SemiBold} from '../../../../Colors/Fonfamily';
import {priamry} from '../../../../Colors/PrimaryColor';

const styles = StyleSheet.create({
  mainHeader: {
    backgroundColor: priamry,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headertxt: {
    fontSize: 16,
    color: 'white',
  },
  buttonBody: {
    borderWidth: 2,
    borderColor: priamry,
    backgroundColor: priamry,
    justifyContent: 'center',
    marginBottom: 10,
    width: '95%',
    height: 70,
    borderRadius: 5,
    marginTop: '10%',
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    fontFamily: SemiBold,
  },
  inputCon: {
    alignSelf: 'center',
    marginTop: '50%',
    borderWidth: 0.5,
    width: '90%',
    borderRadius: 10,
  },
  root: {padding: 20},
  otpInput: {
    // borderColor: '#b7b7b7',
    backgroundColor: '#f1f0f5',
    // borderWidth: 2,
    width: Dimensions.get('screen').width / 6,
    height: 60,

    justifyContent: 'center',
    alignItems: 'center',
    color: priamry,
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'HKGrotesk-SemiBold',
  },
  otpInput2: {
    backgroundColor: '#f1f0f5',
    // borderWidth: 2,
    width: Dimensions.get('screen').width / 6,

    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F4F6F9',
    color: priamry,
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'HKGrotesk-SemiBold',
    // marginHorizontal: 2,
  },
});
export default styles;
