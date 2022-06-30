import { StyleSheet } from "react-native";
import { priamry } from "../../../../Colors/PrimaryColor";

const styles =StyleSheet.create({
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
    buttonBody:{
        borderWidth:2,
        borderColor:priamry,
         backgroundColor:priamry,
         justifyContent:"center",
         marginBottom:10,
         width:"95%",
         height:45,
         borderRadius:5,
         marginTop:20



    },
    buttonText:{
        fontSize:18,
        textAlign:"center" 
        ,color:"white",
        fontWeight:'bold'
    },
    inputCon:{
        alignSelf:'center',
        marginTop:"50%",
        borderWidth:0.5,
        width:"90%",
        borderRadius:10
    }
   
})
export default styles