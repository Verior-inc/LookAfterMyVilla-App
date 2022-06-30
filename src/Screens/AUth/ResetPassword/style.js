import { StyleSheet } from "react-native";
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
    btn:{
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        backgroundColor:priamry,
        width:'30%',
        height:40,
        borderRadius:10,
        marginTop:10,
        marginLeft:"33%"

    },
    btntxt:{
        color:'white',
        fontSize:16
    }
})
export default styles