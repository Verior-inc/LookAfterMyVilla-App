import {StyleSheet} from 'react-native';
import {Medium} from '../../../Colors/Fonfamily';
import {priamry} from '../../../Colors/PrimaryColor';
import {secondary} from '../../../Colors/secondary';
const styles = StyleSheet.create({
  Maincon: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    minHeight: '13%',
  },
  Box: {
    width: '70%',
    maxHeight: 'auto',
    paddingHorizontal: 10,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAE9E6',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    marginBottom: 10,
    marginTop: 20,
  },
  usermessage: {
    color: priamry,
    fontSize: 16,
    fontFamily: Medium,
  },
});
export default styles;
