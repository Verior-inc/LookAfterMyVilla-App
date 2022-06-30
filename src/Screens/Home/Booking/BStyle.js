import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
    Header:{
        borderRadius:2,
        width:"100%",
        height:50,
        backgroundColor:'white',
        elevation:4
        // top:10

    },
    MainHeader:{
        flexDirection:'row',
        justifyContent:'center',
        top:10,
        // marginLeft:10
        
      
    },
    Box:{
        alignItems:'center',
        // top:70

    },
    settingicon:{
        marginRight:15

    },
    HeaderName:{
        color:'black',
        fontWeight:'bold',
        fontSize:20,
        
    },
    BoxCon:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        height:'100%'

    },
    boximage:{
        width: 120,
        resizeMode: 'contain',
        height: 200,
    },
    mainContainer:{
        // top:70,
        // justifyContent:'center',
        // alignItems:'center',
        // width:'85%',
        // alignSelf:'center',

    },
    mainContainerText:{
        fontSize:15,
        padding:5,
        // marginLeft:50,
        width:"80%",
        alignSelf:'center',
        color:'grey',
        fontStyle:'normal',
        fontWeight:'bold',
        // justifyContent:'center',
        // alignItems:'center'
    }


})
export default styles