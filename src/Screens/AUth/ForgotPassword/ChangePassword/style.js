import { Dimensions, StyleSheet } from "react-native";
import { priamry } from "../../../../Colors/PrimaryColor";

const styles=StyleSheet.create({
    inputCon:{
        borderWidth:1,
        borderRadius:10,
        width:'90%',
        height:40,
        justifyContent:'center',
        // alignItems:'center',
        marginLeft:20,
        marginBottom:20
        // marginTop:"50%"
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
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        backgroundColor:priamry,
        width:Dimensions.get('screen').width / 2,
        height:45,
        borderRadius:5,
        marginTop:10,

    },
    btntxt:{
        color:'white',
        fontSize:16,
        fontWeight:'bold'
    }
})
export default styles