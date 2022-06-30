import { StyleSheet } from "react-native";
import { priamry } from "../../Colors/PrimaryColor";
const styles=StyleSheet.create({
    maincon:{
        backgroundColor:priamry,
        height:70,
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
        fontSize:20,
        fontWeight:'400',
        color:'white',
        fontWeight:'bold',
        paddingRight:10

    },
    backContainer:{
        display:"flex",
        flexDirection:"row",
        top:30
    },
    backContainerText:{
        marginLeft:40,
        top:10,
        fontSize:16,
        color:'grey'

    },
    cameraIcon:{
        flexDirection:'row',
        top:10,
        right:20
    },
    userName:{
        color:priamry,
        alignSelf:'center',
        fontSize:26,
        fontWeight:'bold'
    },
    orderContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginLeft:10
        
    },
    orderHeader:{
        color:"lightgrey",
        fontSize:16,
        fontWeight:'600',
        marginLeft:1,width:110
    },
    profileDevideText:{
        color:"grey",
        fontSize:60,
        fontWeight:'800',
        marginLeft:10
    },
    completeorderText:{
        color:"lightgrey",
        fontWeight:'600'
        ,fontSize:16,
        width:'40%',
        marginLeft:10
    },
    cardText:{
        color:'white',
        fontWeight:'600',fontSize:16,
        marginBottom:1,
        top:5

    },
    profileImageContainer:{
        alignSelf:'center',
        marginTop:30,
        borderRadius:20,
        flexDirection:'row'

    },
    profileImage:{
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius:20,
        
       
    },
    profileImageicon:{
        width: 100,
        justifyContent:'center',
        alignItems:'center',
        height: 100,
        resizeMode: 'cover',
        borderRadius:20,
        backgroundColor:'lightgrey'
    },
    profileName:{
        alignSelf:'center'
    },
    profileorder:{
        alignSelf:'center',
        padding:30,
        flexDirection:'row',
    },
    
    
    card:{
        backgroundColor:priamry,
        borderRadius:20,
        width:"45%",
        height:120,
        justifyContent:'center',
        alignItems:'center',
        // marginLeft:20
     
    },
    cardContainer:{
        marginBottom:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:1,
        // alignSelf:'center',
        marginHorizontal:30,
        top:'10%'
    }

})
export default styles