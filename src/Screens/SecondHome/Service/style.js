import {StyleSheet} from 'react-native';
import {SemiBold} from '../../../Colors/Fonfamily';
import {priamry} from '../../../Colors/PrimaryColor';
const styles = StyleSheet.create({
  maincon: {
    backgroundColor: priamry,
    height: '9%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logoimg: {
    width: '10%',
    resizeMode: 'contain',
    height: '100%',
  },
  HeaderName: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
  },
  serviceCon: {
    top: 20,
    marginLeft: 30,
  },
  serviceConText: {
    fontSize: 23,
    fontFamily: SemiBold,
    color: '#000000',
  },
  mainserviceCon: {
    top: 35,
    marginLeft: 20,
  },
  mainserviceBoxCon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
  mainserviceBoxcard: {},
  mainserviceBoxboddy: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: priamry,
    justifyContent: 'center',
  },
  mainserviceBoxboddycon: {
    flexDirection: 'row',
  },
  mainserviceBoxboddyText: {
    fontSize: 16,
    width: 100,
    fontWeight: 'bold',
  },
  Footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  iconcon: {
    backgroundColor: 'black',
    width: 30,
    height: 30,
    // top:5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FooterText: {
    marginLeft: 10,
    fontSize: 17,
  },
});
export default styles;
