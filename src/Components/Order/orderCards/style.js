import {StyleSheet} from 'react-native';
import {Medium, Regular, SemiBold} from '../../../Colors/Fonfamily';
import {priamry} from '../../../Colors/PrimaryColor';

const styles = StyleSheet.create({
  carimg: {
    resizeMode: 'cover',
    width: '100%',
    height: 130,
    marginBottom: 5,
    marginTop: 10,
    marginLeft: 10,
  },
  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 5,
  },

  iconCon: {
    width: '15%',
    height: 40,
    borderRadius: 30,
    borderWidth: 0.2,
    backgroundColor: 'green',
    justifyContent: 'center',
  },
  maincon: {
    // flex:1,
    width: '90%',
    // elevation: 2,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: priamry,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 20,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '400',
    color: priamry,
    marginRight: '20%',
    marginTop: 5,
  },
  content: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  contentname: {
    fontFamily: Medium,
    color: 'grey',
    fontSize: 16,
  },
  contentdtldec: {
    maxWidth: '60%',
    // flex:1,

    fontSize: 16,
    fontFamily: Regular,
  },
  contentdtlorder: {
    maxWidth: '30%',

    // flex:1,
    // width:170,
    fontWeight: '300',
    fontSize: 16,
  },
  contentdtl: {
    // flex:1,
    // width:170,
    fontFamily: Regular,
    fontSize: 16,
    color: '#000',
  },
  btncon: {
    flexDirection: 'row',
    marginLeft: 20,
    justifyContent: 'space-between',
    padding: 10,
    // marginTop:"22%"
    // justifyContent:'center'
  },
  btn: {
    backgroundColor: priamry,
    width: '70%',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontFamily: SemiBold,
  },
  leftbtn: {
    // marginRight:'5%',
    height: 45,
    width: '20%',
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
});
export default styles;
