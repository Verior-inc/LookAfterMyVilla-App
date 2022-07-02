import {StyleSheet, Dimensions} from 'react-native';
import {Medium} from '../../Colors/Fonfamily';
import {priamry} from '../../Colors/PrimaryColor';
const styles = StyleSheet.create({
  mainservice: {
    alignSelf: 'center',
    width: Dimensions.get('screen').width / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceCon: {
    flexDirection: 'row',
    // marginBottom:10
  },
  servicebtn: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: priamry,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  serviceTile: {
    fontSize: 16,
    fontFamily: Medium,
    alignSelf: 'center',
  },
  btnBody: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
