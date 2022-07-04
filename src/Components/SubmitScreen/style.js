import {StyleSheet} from 'react-native';
import {Medium, SemiBold} from '../../Colors/Fonfamily';
import {priamry} from '../../Colors/PrimaryColor';
const styles = StyleSheet.create({
  mainCon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '60%',
  },
  mainConTile: {
    fontSize: 20,
    fontFamily: SemiBold,
    color: '#000',
    marginTop: 15,
  },
  mainCondtl: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Medium,
  },
  btn: {
    width: '30%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: priamry,
    marginTop: 40,
    borderRadius: 10,
    // marginLeft:"50%"
  },
  Text: {
    color: 'white',
    fontSize: 16,
    fontFamily: SemiBold,
  },
});
export default styles;
