import { StyleSheet } from "react-native";
import { priamry } from "../../../Colors/PrimaryColor";
const styles =StyleSheet.create({
    backIcon:{
        display:"flex",flexDirection:"row",
        backgroundColor:priamry,
        paddingVertical:10,
        alignSelf:'center',
        justifyContent:'center',
        width:"100%"
    },
    icon:{
        right:80,top:10
    },
    inboxName:{
        justifyContent:"center",
        alignItems:'center',
        

    },
    inboxHeader:{
        fontWeight:'500',
        fontSize:20,color:"white"
    },
    inboxsubHeader:{
        fontSize:10,color:'white'
    },
    imageContainer:{
        display:"flex",flexDirection:"row",top:10
    },
    Profileimage:{
        width: 50,
              resizeMode: 'contain',
              height: 120,borderRadius:60,
              marginLeft:30,padding:10
    },
    username:{
        marginLeft:10,top:37,fontWeight:'500',
        fontSize:16,color:'black'
    },
    usersubText:{
        fontSize:15,marginLeft:10,top:35,color:'black'

    },
    time:{
        color:'lightgrey',marginLeft:220
    },
    countContainer:{
        color:'lightgrey',marginLeft:230,borderRadius:23,width:17,
        backgroundColor:'darkblue'
    },
    countText:{
        color:'white',textAlign:'center'
    }




})
export default styles