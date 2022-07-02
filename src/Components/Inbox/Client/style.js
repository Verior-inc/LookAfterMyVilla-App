import {StyleSheet} from 'react-native';
import {Medium} from '../../../Colors/Fonfamily';
import {secondary} from '../../../Colors/secondary';
const styles = StyleSheet.create({
  Maincon: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    justifyContent: 'space-around',
    marginBottom: 16,
    minHeight: '13%',
  },
  Box: {
    width: '70%',
    height: 'auto',
    paddingHorizontal: 10,
    marginLeft: '20%',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: secondary,
    // borderBottomRightRadius:15,
    borderBottomLeftRadius: 15,
    // borderTopRightRadius:15,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  clientmessage: {
    color: 'white',
    fontSize: 16,
    fontFamily: Medium,
  },
  //  logo:{
  //      marginLeft:10
  //  }
  logo: {
    top: 50,
    marginLeft: 10,
    // marginTop:"40%"
  },
});
export default styles;
