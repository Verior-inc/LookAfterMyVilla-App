import {StyleSheet} from 'react-native';
import {secondary} from '../../../Screens/Colors/Secondary';
import {priamry} from '../../../../Colors/PrimaryColor';
import {SemiBold} from '../../../../Colors/Fonfamily';
const styles = StyleSheet.create({
  logoimg: {
    width: '10%',
    resizeMode: 'contain',
    height: '100%',
  },
  maincon: {
    backgroundColor: priamry,
    height: '9%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  HeaderName: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
  },
  IconCon: {
    marginRight: '80%',
    marginTop: 10,
  },
  HeaderCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 10,
  },
  HeaderText: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: 5,
  },
  serachBox: {
    flexDirection: 'row',

    marginTop: 10,
    elevation: 2,
    borderWidth: 0.2,
    width: '85%',
    height: 50,
    marginLeft: 30,
    backgroundColor: 'white',
  },
  serachBoxIcon: {
    marginTop: 15,
    marginLeft: 20,
  },
  input: {
    marginLeft: 20,
    width: '70%',
    height: 50,
  },
  mainButton: {
    // flexDirection: 'row',
    // // top:10,
    marginTop: 16,
    // justifyContent: 'space-around',
    // // padding: 10,
    // paddingHorizontal: 10,
    // elevation:5
  },
  activebtn: {
    marginLeft: 10,
    // marginLeft:10,
    backgroundColor: priamry,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: priamry,
    borderWidth: 0.5,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    height: 60,
    // padding: 15,
  },
  activebtnText: {
    fontSize: 14,
    color: 'white',
    fontFamily: SemiBold,
  },
  restbtn: {
    top: 6,
  },
  restbtnText: {
    fontSize: 15,
    color: 'lightgrey',
    fontWeight: 'bold',
  },
  footerbtn: {
    width: '40%',
    height: 40,
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  pdf: {
    flex: 1,
  },
});
export default styles;
