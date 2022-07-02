import {StyleSheet} from 'react-native';
import {Medium, SemiBold} from '../../Colors/Fonfamily';
import {priamry} from '../../Colors/PrimaryColor';

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
  editprofile: {
    width: 150,
    flexDirection: 'row',
    marginTop: 10,
    borderRadius: 30,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: priamry,
    alignSelf: 'center',
    paddingVertical: 10,
    marginBottom: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  editprfiletxt: {
    color: 'white',
    fontSize: 16,
    fontFamily: SemiBold,
  },
  changePasswordbtn: {
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: priamry,
    width: '40%',
    height: 30,
    borderWidth: 0.5,
    borderRadius: 30,
    alignItems: 'center',
  },
  btncon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  changePasswordbtn: {
    justifyContent: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',

    // backgroundColor:priamry,
    // width:"40%",
    height: 30,
    // borderWidth:0.5,
    borderRadius: 30,
    alignItems: 'center',
  },
  btncon: {
    // flexDirection:"row",
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  changePasswordbtntxt: {
    color: 'black',
    fontFamily: Medium,
    marginLeft: 20,
    fontSize: 16,
  },
  profileImageContainer: {
    alignSelf: 'center',
    // marginTop:30,
    padding: 10,
    flexDirection: 'row',
    marginTop: 10,
  },
  profileImage: {
    width: 100,
    borderRadius: 10 / 2,
    height: 100,
    resizeMode: 'cover',
  },

  profileImageicon: {
    width: 100,
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    resizeMode: 'cover',
    // borderRadius:20,
    backgroundColor: 'lightgrey',
  },
  profileName: {
    alignSelf: 'center',
  },
  cameraIcon: {
    flexDirection: 'row',
    top: 10,
    right: 20,
  },
  userprofile: {
    alignSelf: 'center',
  },
  userName: {
    color: priamry,
    alignSelf: 'center',
    fontSize: 20,
  },
  prefrences: {
    backgroundColor: '#dcdcdc',
    marginTop: 10,
    height: 50,
    justifyContent: 'center',
  },
  prefrencestxt: {
    fontSize: 17,
    color: 'grey',
    alignItems: 'center',
    marginLeft: 30,
    fontFamily: SemiBold,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
