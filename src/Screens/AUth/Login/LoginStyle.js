
import { StyleSheet } from "react-native";
import { priamry } from "../../../Colors/PrimaryColor";
const styles=StyleSheet.create({
    mainContainer:{
        backgroundColor:'white',
        flex:1

    },
    mainContainerImage:{
        width: "100%",
         resizeMode: 'cover',
         height: 190,

    },
    mainContainerHeader:{
        fontWeight:"300",
        fontSize:15,
        marginLeft:30,
        color:"grey",
        marginTop:5

    },
    mainContainerHeaderText:{
        fontWeight:"400",
        fontSize:28,
        top:1,
        marginLeft:30,
        color:"darkblue"

    },
    InputHeader:{
        fontWeight:"700",
        fontSize:13,
        top:20,
        marginLeft:30,
        color:"grey"

    },
    passwordHeader:{
        fontWeight:"700",
        fontSize:13,
        marginLeft:27,
        color:"lightgrey"

    },
    PasswordContainer:{
        flexDirection:'row',
        top:15

    },
    EmailInput:{
        top:30, 
        justifyContent: "center",
        paddingHorizontal: 20,
        borderRadius:30,
        backgroundColor:'#dcdcdc',
        width:'90%',
        marginLeft:20,
        borderWidth:0.5,
        borderColor:"#dcdcdc",
        bottom:10,
        marginBottom:20

    },
    EmailInputIcon:{
        flexDirection:'row',
        // ,marginLeft:250,
        left:'98%',
        top:10,
        position:'absolute'

    },
    Textinput:{
        width:"80%"
        
    },
    TextinputPassword:{
        borderWidth:1,

        borderRadius:30,
        borderColor:"grey",
        bottom:10,
        marginBottom:20,
        backgroundColor:'lightgrey',
        width:"90%",
        marginLeft:17


    },
    forgetPassword:{
        marginLeft:194,
        top:15

    },
    forgetPasswordText:{
        fontStyle:'italic'
        ,fontSize:17,
        fontWeight:'400',
        color:'darkblue',
        marginBottom:10

    },
    buttonBody:{
        // borderRadius:60,
        borderWidth:2,
        borderColor:priamry,
         backgroundColor:priamry,
         justifyContent:"center",
         marginBottom:10,
         width:"90%",
         height:"13%",
         marginLeft:20,
         borderTopRightRadius:30,
         borderBottomLeftRadius:30,
         top:20



    },
    buttonText:{
        fontSize:25,
        textAlign:"center" 
        ,color:"white"
    },
    forgotText:{
        fontWeight:"500",
        fontSize:15,
        marginBottom:16

    },
    RigisterText:{
        fontWeight:"500",
        fontStyle:"italic", 
        color:"blue",
        fontSize:15,
        marginBottom:30
    },
    footerText:{
        justifyContent:"center",
        alignItems:'center'
        ,top:20
    },
    socialIconContainer:{
        color:'grey',
        fontSize:19

    },
    socialIcon:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',top:30

    },
    otherAccountContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        top:50

    },
    OtherAccountText:{
        color:'grey',
        fontSize:20,
        fontWeight:'400'

    },
    create:{
        color:'darkblue',
        fontSize:20,
        fontWeight:'400'

    }

})
export default styles