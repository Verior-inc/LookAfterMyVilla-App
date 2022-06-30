import {StyleSheet} from 'react-native'
import { priamry } from '../../../../Colors/PrimaryColor'
const styles=StyleSheet.create({
    maincon:{
        backgroundColor:priamry,
        height:80,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        alignItems:'center'

    },
    logoimg:{
        width:"10%",
      resizeMode:'contain',
      height:'100%'

    },
    HeaderName:{
        fontSize:19,
        fontWeight:'400',
        color:'white',
        fontWeight:'bold',
        right:6

    },
    serviceHeader:{
        top:15,
        marginLeft:40
    },
    serviceHeaderText:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    },
    SelectValue:{
        top:20,
        marginLeft:40,
        borderRadius:10,
        width:"50%",
        height:70,
        backgroundColor:'white',
        borderWidth:0.4
    },
    SelectValueText:{
        justifyContent:'center',
        top:10,
        marginLeft:10,
        fontWeight:'bold',
        fontSize:15
    },
    mainserviceCon:{
        top:35,
        marginLeft:10

    },
    mainserviceBoxCon:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:40

    },
    mainserviceBoxcard:{

    },
    mainserviceBoxboddy:{
        width:120,
        height:100,
        borderRadius:10,
        // backgroundColor:'#C6C0C0',
        borderWidth:0.4,
        justifyContent:'center'

    },
    mainserviceBoxboddycon:{
        flexDirection:'row'

    },
    mainserviceBoxboddyText:{
        fontSize:15,
        width:100,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,

        fontWeight:'bold',
        textAlign:'center'
    },
    inputCon:{
        borderWidth:0.4,
        width:"82%",
        height:180,
        marginLeft:40,
        borderRadius:10
    },
    decinput:{
        width:"89%"

    },
    contectCon:{
        top:3,
        marginLeft:40
    },
    contectConText:{
        fontSize:18,
        fontWeight:'bold'
    },
    methocontect:{
        flexDirection:'row',
        justifyContent:'center',
        // marginHorizontal:90

    },
    methocontectText:{
        top:6
    },
    Footer:{
        flexDirection:'row',
        justifyContent:'center',
        position:'absolute',
        bottom:10,
        alignSelf:'center'
    },
    iconcon:{
        backgroundColor:'#5B5B5B',
        width:30,
        height:30,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    FooterText:{
        marginLeft:10,
        fontSize:17
    },
    submitbtn:{
        backgroundColor:'#5B5B5B',
        borderRadius:10,
        justifyContent:'center',
        marginLeft:10,
        height:30

    },
    submitbtnText:{
        marginLeft:10,
        fontWeight:'bold',
        fontSize:16,
        color:'white'
    },
     map: {
        ...StyleSheet.absoluteFillObject,
      },
      mapinputCon:{
          width:"90%",
        //   height:30,
          alignSelf:'center',
          borderWidth:2,
          marginTop:10,
          borderRadius:5,
          borderColor:'#f5f2f2',
          backgroundColor:'#f5f2f2'
      },
      mapinput:{
          width:"80%",
          color:'black'
      },
      mapbtn:{
          borderWidth:2,
          borderColor:priamry,
          width:'90%',
          height:50,
          backgroundColor:priamry,
          alignSelf:"center",
          marginTop:"4%",
          borderRadius:5,
          alignItems:'center',
          justifyContent:'center',
          marginBottom:10
      },
      mapbtnTxt:{
          color:'white',
          fontSize:16
      },
      itemImage: {
        height: 200,
        width: 200
    }
  

})
export default styles