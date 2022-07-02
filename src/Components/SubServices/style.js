import {StyleSheet} from 'react-native';
import {Medium} from '../../Colors/Fonfamily';
import {priamry} from '../../Colors/PrimaryColor';
const styles = StyleSheet.create({
  main: {
    // flexDirection:'row',
    justifyContent: 'space-between',
    marginLeft: 60,
    top: 30,
    marginHorizontal: 20,
    marginBottom: 90,
  },
  cardBox: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: priamry,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBoxdtl: {
    flexDirection: 'row',
    // justifyContent:'space-evenly',
    alignItems: 'center',
    // marginHorizontal:10,
  },
  dtltxt: {
    fontSize: 16,
    fontFamily: Medium,
    color: '#000',
    // width:'50%',
    // fontWeight:'bold'
  },
});
export default styles;
