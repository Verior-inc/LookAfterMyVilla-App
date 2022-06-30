import {StyleSheet,Dimensions} from 'react-native'
import { priamry } from '../../../../../Colors/PrimaryColor'
const styles=StyleSheet.create({
    offerCon:{
        // marginLeft:20,
        flexDirection:'row',
        justifyContent:'space-between',
        margin:5


    },
    card:{
        width:60,
        height:60,
        margin:5

    },
    cardBox:{
        width:60,
        height:60,
  
    },
    dtlcon:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:20,
        flex:1
        
    },
    dtltitle:{
        fontSize:16,
        color:'grey',
        fontWeight:"600"
    },
    dtlcontentdescr:{
         fontSize:15,
        fontWeight:'400',
        color:"black",
        maxWidth:"60%",
        textAlign:'justify'

    },
    dtlcontent:{
        fontSize:15,
        fontWeight:'400',
        color:"black"

    },
    cancelbtn:{
        backgroundColor:'red',
        width:"60%",
        height:40,
        justifyContent:"center",
        alignItems:'center',
        alignSelf:"center",
        borderRadius:10,
        marginTop:"10%"
    },
    cancelbtntxt:{
        color:'white',
        fontSize:18,
        fontWeight:"600"
    },
    mapinputCon:{
        width:"90%",
      //   height:30,
        alignSelf:'center',
        borderWidth:2,
        marginTop:10,
        borderRadius:10
    },
    mapinput:{
        width:"80%",
        height:100,
        color:'black',
        textAlignVertical:'top',padding:10
    },
    mapbtn:{
        borderWidth:2,
        borderColor:'red',
        width:'90%',
        height:55,
        backgroundColor:'red',
        alignSelf:"center",
        marginTop:"5%",
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    mapbtnTxt:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    },
    budgetcard:{
        width:"100%",
        height:80,
        elevation:6,
        backgroundColor:'white',
        flexDirection:"row",
        padding:10,
        justifyContent:"space-between",
        alignItems:"center"
    },
    budgetcardtxt:{
        fontSize:14,
        fontWeight:"600"
    } ,
    openbtn:{
        width:"20%",
        height:20,
        backgroundColor:priamry,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"

    },
    openbtntxt:{
        color:"white",
        fontSize:14,
        fontWeight:"600"
    },
    atchheader:{
        width:"100%",
        height:30,
        backgroundColor:priamry,
        alignItems:"center",
        justifyContent:'center'
    },
    atchheadertxt:{
        color:"white",
        fontSize:16

    },
    btnsbudgetcon:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10
    },
    decline:{
        width:"40%",
        height:30,
        borderRadius:10,
        backgroundColor:'red',
        justifyContent:"center",
        alignItems:"center"
    },
    accept:{
        width:"40%",
        height:30,
        borderRadius:10,
        backgroundColor:'green',
        justifyContent:"center",
        alignItems:"center"

    },
    budgettxt:{
        color:"white",
        fontSize:16
    },
    pdf:{
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
   
})
export default styles