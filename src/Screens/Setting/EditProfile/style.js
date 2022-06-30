import { StyleSheet } from "react-native"
import { priamry } from "../../../Colors/PrimaryColor"

const styles=StyleSheet.create({
    mainHeader:{
        backgroundColor:priamry,
        height:40,
        alignItems:"center",
        justifyContent:"center"
    },
    headertxt:{
        fontSize:16,
        color:"white"
    },
    editprofile:{
        width:149,
        flexDirection:"row",
        height:40,
        marginTop:10,
        borderRadius:30,
        justifyContent:"space-between",
        padding:10,
        backgroundColor:priamry,
        alignSelf:"center"
     
    },
    editprfiletxt:{
        color:"white",
        fontSize:16
    },
    changePasswordbtn:{
        justifyContent:'center',
        marginTop:20,
        backgroundColor:priamry,
        width:"40%",
        height:30,
        borderWidth:0.5,
        borderRadius:30,
        alignItems:'center'
    },
    btncon:{
        flexDirection:"row",
        justifyContent:'space-between',
        marginHorizontal:20
    },changePasswordbtn:{
        justifyContent:'center',
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',


        // backgroundColor:priamry,
        // width:"40%",
        height:30,
        // borderWidth:0.5,
        borderRadius:30,
        alignItems:'center'
    },
    btncon:{
        // flexDirection:"row",
        justifyContent:'space-between',
        marginHorizontal:20
    },
    changePasswordbtntxt:{
        color:'grey',
        fontWeight:"800",
        marginLeft:20
    },
    profileImageContainer:{
        alignSelf:'center',
        // marginTop:30,
        padding:10,
        flexDirection:'row'

    },
    profileImage:{
        width: 100,
        height: 100,
        borderRadius:100/2,
        resizeMode: 'cover',
        
       
    },
    upldbtn:{
        alignSelf:'center',
        backgroundColor:priamry,
        width:"40%",
        height:30,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',

    },
    hidden:{
        display:'none'

    },
    upldbtntxt:{
        color:'white',
        fontSize:16,
        fontWeight:'600'
    },

    profileImageicon:{
        width: 100,
        borderRadius:100/2,
        justifyContent:'center',
        alignItems:'center',
        height: 100,
        resizeMode: 'cover',
        // borderRadius:20,
        backgroundColor:'lightgrey'
    },
    profileName:{
        alignSelf:'center'
    },
    cameraIcon:{
        flexDirection:'row',
        top:10,
        right:20
    },
    userprofile:{
        alignSelf:'center'
    },
    userName:{
        color:priamry,
        alignSelf:'center',
        fontSize:20
    },
    prefrences:{
        backgroundColor:'lightgrey',
        marginTop:10,
        height:30
    },
    prefrencestxt:{
        fontSize:20,
        color:"grey",
        alignItems:"center",
        marginLeft:30,
        fontWeight:'600'
    },
    contectCon:{
        marginLeft:30,
        marginTop:20
    },
    contectdtl:{
        marginBottom:10

    },
    emialtitle:{
        fontSize:14,
        color:"grey",
    },
    email:{
        fontSize:16,
        fontWeight:"600",
        color:"black",
        marginBottom:10

    },
    title:{
        fontSize:16,
        color:priamry
    },
    placeholder:{
        fontSize:16,
        fontWeight:"600"
    },
    btnprofile:{
        width:"60%",
        height:40,
        marginTop:"20%",
        backgroundColor:priamry,
        alignSelf:"center",
        alignItems:'center',
        justifyContent:"center"
    },
    btnprofiletxt:{
        color:"white",
        fontSize:16,
        fontWeight:"600"
    },
    container: {
        // flex: 1,
      },
      scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
})
export default styles