import { StyleSheet } from "react-native";
import { priamry } from "../../../Colors/PrimaryColor";
const styles=StyleSheet.create({
    mainContainer:{
        backgroundColor:'white'
        ,padding:10,
        height:"100%"

    },
    mainContainerImage:{
        width: "100%",
         resizeMode: 'cover',
         height: 190,
         
        //  marginLeft:10

    },
    HeaderText:{
        fontWeight:"300",
        fontSize:20,
        marginLeft:30,
        color:"grey"

    },
    HeaderName:{
        fontWeight:"400",
        fontSize:28,
        top:1,
        marginLeft:30,
        color:"darkblue"
    },
    inputHeader:{
        fontWeight:"700",
        fontSize:13,
        top:20,
        marginLeft:30,
        color:"grey"

    },
    inputContainer:{
        top:30, 
        justifyContent: "center",
        paddingHorizontal: 20,
        borderRadius:30,
        backgroundColor:'#dcdcdc',
        width:"90%",
        marginLeft:20,
        flexDirection:'row',
        

        borderWidth:0.5,
        borderColor:"#dcdcdc",
        bottom:10,
        marginBottom:15


    },
    inputIcon:{
        flexDirection:'row',
        // marginLeft:250,
        left:"96%",
        top:16
        ,position:'absolute'

    },
    Textinput:{
        width:'70%'

       
    },
    Textinputcon:{
        width:'60%'


    },
    PasswordinputContainer:{
        flexDirection:'row',top:15

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
    buttonBody:{
        borderWidth:2,
        borderColor:priamry,
         backgroundColor:priamry,
         justifyContent:"center",
         marginBottom:10,
         width:"90%",
         height:"7%",
         marginLeft:25,
         borderTopRightRadius:30,
         borderBottomLeftRadius:30,
         top:30,
         marginBottom:20



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
    otherAccountContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        top:20

    },
    OtherAccountText:{
        color:'grey',
        fontSize:17,
        fontWeight:'400'

    },
    create:{
        color:'darkblue',
        fontSize:20,
        fontWeight:'400'

    },
    
})
export default styles