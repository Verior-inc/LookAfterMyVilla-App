import {StyleSheet,Dimensions} from 'react-native'
import { priamry } from '../../Colors/PrimaryColor'
const styles=StyleSheet.create({
    maincon:{
        backgroundColor:priamry,
        height:'9%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        alignItems:'center'

    },
    logoimg:{
        width:"10%",
      resizeMode:'contain',
      height:'100%'

    },
    HeaderName:{
        fontSize:20,
        fontWeight:'400',
        color:'white'

    },
    currentCardCon:{
        top:20,
        marginLeft:20,

    },
    currentCardConText:{
        fontSize:20,
        fontWeight:'bold',
    },
    offerCon:{
        top:40,
        // marginLeft:20,
        flexDirection:'row',
        justifyContent:'space-between'


    },
    card:{
        width:Dimensions.get('screen').width / 1.4,
        height:130,
        marginHorizontal:10

    },
    cardBox:{
        width:"100%",
        height:130,
       
        resizeMode:"cover",
        

        

        // paddingVertical:5,
        
        // resizeMode:'contain'


    },
    cardBoxText:{
        fontWeight:'bold',
        fontSize:20,
        color:'white',
        marginLeft:10,
        marginBottom:10,
        marginTop:15,
        width:'95%'


    },
    cardBoxdet:{
        fontSize:16,
        fontWeight:'400',
        color:'white',
        marginLeft:10
    

    },
    helpHeader:{
        top:60,
        marginLeft:40
    },
    helpHeaderText:{
        fontSize:20,
        fontWeight:'bold'
    },
    mainserviceCon:{
        top:80,
        // justifyContent:'space-between',
        // alignContent:"center",
        // marginLeft:80

    },
    mainservice:{
        marginTop:70,
        right:30

       
        // marginLeft:30
        
    },
    serviceCon:{
        flexDirection:'row',
        // marginLeft:20


    }, 
    servicebtn:{
        width:80,
        height:80,
        borderRadius:80,
        backgroundColor:priamry,
        justifyContent:'space-around',
        alignItems:'center',
        marginLeft:80
        // borderWidth:2

    },
    serviceTile:{
        width:100,
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold',
        justifyContent:'center',
        marginLeft:70
    },

    
    btnbody:{
        position:'absolute',
        bottom:10,
        width:"80%",
        height:50,
        borderRadius:10,
        backgroundColor:'#F7132A',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:35
    },
    btnbodyText:{
        color:"white",
        fontWeight:'bold',
        fontSize:20
    }
   
   
})
export default styles