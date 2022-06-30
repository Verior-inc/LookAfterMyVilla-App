import { Dimensions, StyleSheet } from "react-native";
import { priamry } from "../../../Colors/PrimaryColor";

const styles=StyleSheet.create({
    inputCon:{
        borderWidth:1,
        borderRadius:10,
        width:'90%',
        height:40,
        justifyContent:'center',
        // alignItems:'center',
        marginLeft:20,
        marginTop:"50%"
    },
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
    btn:{
        borderWidth:2,
        borderColor:priamry,
         backgroundColor:priamry,
         justifyContent:"center",
         marginBottom:10,
         width:Dimensions.get('window').width / 2,
         height:45,
         borderRadius:5,
         marginTop:20



    },
    btntxt:{
        fontSize:18,
        textAlign:"center" 
        ,color:"white",
        fontWeight:'bold'
    }
})
export default styles