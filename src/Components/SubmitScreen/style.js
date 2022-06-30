import { StyleSheet } from "react-native";
import { priamry } from "../../Colors/PrimaryColor";
const styles=StyleSheet.create({
    mainCon:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:"60%"
    },
    mainConTile:{
        fontSize:20,
        fontWeight:'bold'

    },
    mainCondtl:{
        justifyContent:'center',
        alignItems:'center',
        width:"90%",
        textAlign:'center',
        fontSize:16,
        fontWeight:'400'

    },
    btn:{
        width:"30%",
        height:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:priamry,
        marginTop:50,
        // marginLeft:"50%"
    },
    Text:{
        color:'white'
    }

})
export default styles