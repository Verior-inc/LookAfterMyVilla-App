import { StyleSheet } from "react-native";
import { priamry } from "../../../Colors/PrimaryColor";

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
    inputCon:{
        marginTop:"30%"
        // alignSelf:'center'

    },
    inputtitle:{

    borderWidth:1,
    borderRadius:10,
    width:'90%',
    height:40,
    justifyContent:'center',
    // alignItems:'center',
    marginLeft:20,
    marginBottom:20
},
inputdesc:{

    borderWidth:1,
    borderRadius:10,
    width:'90%',
    // height:140,
    // justifyContent:'center',
    maxHeight:'auto',
    // alignItems:'center',
    marginLeft:20,
    marginBottom:20
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
},
myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'yellow',
  }



})
export default styles