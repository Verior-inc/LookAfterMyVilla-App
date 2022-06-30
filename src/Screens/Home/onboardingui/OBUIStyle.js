import {StyleSheet} from 'react-native'
import { priamry } from '../../../Colors/PrimaryColor'
const styles=StyleSheet.create({
    wrapper: {

    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    logoName:{
      fontSize:26,
      fontWeight:'bold'

    },
    logoimg:{
      width:"25%",
      resizeMode:'contain',
      height:'20%'
      // marginHorizontal:10

    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    text: {
      color: 'darkblue',
      fontSize: 20,
      width:340,
      fontWeight: 'bold',
      textAlign:'center'
    },
    pagistio:{
      marginVertical:80,
      // marginBottom:10
    },
    buttonBody:{
      borderWidth:2,
      borderColor:priamry,
       backgroundColor:priamry,
       justifyContent:"center",
       marginBottom:10,
       width:"90%",
       height:"8%",
       marginLeft:2,
       borderRadius:30,
       top:48,
       position:"relative"
  
  
  
  },
  buttonBody1:{
    borderWidth:2,
    borderColor:priamry,
     backgroundColor:priamry,
     justifyContent:"center",
     marginBottom:10,
     width:"90%",
     height:"8%",
     marginLeft:2,
     borderRadius:30,
     top:38,
     position:"relative"



},
  buttonText:{
      fontSize:25,
      textAlign:"center" 
      ,color:"white"
  },
  img:{
    width: "90%",
   resizeMode: 'contain',
   height: "40%"

  },
    dontaccount:{
        flexDirection:'row',justifyContent:'center',alignItems:'center'
        ,top:40,
        marginLeft:"70%"
    },
    dontaccountText:{
        color:'lightgrey',fontSize:17
    },
    createOne:{
        color:'darkblue',fontSize:17
    }
})
export default styles