import {StyleSheet} from 'react-native';
import {Bold, Medium} from '../../../Colors/Fonfamily';
import {priamry} from '../../../Colors/PrimaryColor';
const styles = StyleSheet.create({
  mainContainer: {
    // display:"flex",
    // justifyContent:"space-between",
    // alignItems:'flex-start',
    flexDirection: 'row',
    // marginTop:10,
    height: 50,
    elevation: 6,
    marginBottom: 20,
    backgroundColor: priamry,
    // justifyContent:"center",
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  headerlogo: {
    flexDirection: 'row',
    // marginLeft:"26%",
    // top:4,
    justifyContent: 'space-around',
  },
  back: {
    // marginLeft:40,
    // top:10,
    // fontSize:16,
    // color:'grey'
  },
  username: {
    marginLeft: 10,
    fontFamily: Bold,
    fontSize: 20,
    color: 'white',
  },
  Lastseen: {
    fontSize: 10,
    marginLeft: 90,
    color: 'grey',
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    top: 30,
  },
  profileContainerText: {
    marginLeft: 27,
    top: 38,
    fontWeight: '400',
    width: '70%',
    height: '30%',
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    backgroundColor: 'lightgrey',
    borderRadius: 20,
  },
  profileImg: {
    width: 50,
    resizeMode: 'contain',
    height: 120,
    borderRadius: 60,
    marginLeft: 10,
    padding: 1,
  },
  customerContainer: {
    display: 'flex',
    flexDirection: 'row',
    top: 30,
  },
  customerContainerImage: {
    width: 50,
    resizeMode: 'contain',
    height: 120,
    borderRadius: 60,
    marginLeft: 30,
    padding: 10,
  },
  customerContainerText: {
    marginLeft: 10,
    top: 37,
    fontWeight: '400',
    width: '110%',
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    backgroundColor: priamry,
    borderRadius: 20,
  },
  footerCon: {
    flexDirection: 'row',
    marginLeft: 10,
    position: 'absolute',
    bottom: 0,
  },
  attechfile: {
    width: 40,
    marginTop: 1,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#dcdcdc',
    justifyContent: 'center',
  },
  inputcon: {
    flexDirection: 'row',
    borderWidth: 0.5,
    width: '80%',
    height: 44,
    marginLeft: 6,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderRadius: 20,
    // flex:1
  },
  Icontcon: {
    top: 12,
  },
  iconsContainer: {
    flexDirection: 'row',
    marginLeft: '50%',
    top: 10,
    justifyContent: 'space-around',
    alignContent: 'space-around',
  },

  input: {
    width: '90%',
    fontFamily: Medium,
    fontSize: 16,
    color: 'grey',
  },
  icons: {
    marginRight: 5,
  },
});
export default styles;
