import {StyleSheet} from 'react-native'
import { priamry } from '../../Colors/PrimaryColor'
const styles=StyleSheet.create({
    backbtn:{
        // marginLeft:25,
        marginRight:'80%',
        top:20
    },
    backbtnText:{
        fontSize:16,
        fontWeight:'bold',
        color:'grey'
    },
    ordercon:{
        top:40,marginLeft:45
    },
    orderconText:{
        fontWeight:'400',
        fontSize:20,
        color:'black'

    },
    orderconordrcnt:{
        fontWeight:'300',
        fontSize:16,
        color:'darkblue'

    },
    headerImagecon:{
        flexDirection:'row',
        top:50,
        marginLeft:45

    },
    imglogo:{
        width:40,
        // width:50,
        height:40,
        borderRadius:40/2,
        borderWidth:1,
        borderColor:'transparent',
        marginBottom:10
        // top:2


    },
    NameText:{
        top:10,
        marginLeft:10,
        fontSize:20,
        fontWeight:"bold"

    },
    Detail:{
        top:50,
        marginLeft:50

    },
    detailText:{
        color:'darkblue',
        fontSize:20,
        fontWeight:"400"

    },
    emailcon:{
        // top:70,
        marginLeft:50,
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:15
    },
    emailconHeader:{
        color:'black',
        fontWeight:'bold',
        fontSize:16

    },
    emailcondtl:{
        color:'lightgrey',
        fontWeight:'bold',
        fontSize:16

    },
    cardBoxDetl:{
        top:70,
        marginLeft:30

    },
    cardBoxDetlName:{
        fontWeight:'bold',
        fontSize:20
    },
    email:{
        fontSize:16,
        fontWeight:'bold',
        color:'black',
        marginBottom:10,
        justifyContent:'space-around'
    },
    emailText:{
        color:'lightgrey',
        width:120,
    },
    decrCon:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
        
        marginBottom:15
    },
    picCon:{
        justifyContent:'space-between',
        marginHorizontal:20,
        
        marginBottom:15

    },
    decrConName:{
        fontWeight:'bold',
        fontSize:16
    },
    decrConText:{
        width:150,
        fontSize:16,
        fontWeight:'300',
        color:'grey',

    },
    othrtext:{
        // width:150,
        fontSize:16,
        fontWeight:'300',
        color:'black',
        // marginLeft:30

    },
    btn:{
        width:"95%",
        marginRight:50,
        top:15,
        justifyContent:'center',
        alignItems:'center',
        height:"15%",
        backgroundColor:'lightgrey'
    },
    btnText:{
        fontSize:16,
        fontWeight:'bold'
    },
    footrimage:{
        width:"95%",
        height:90,
        resizeMode:'cover',
        marginBottom:20,
        // marginLeft:10
    },
    btnsbmt:{
        top:70,
        width:'75%',
        height:50,
        backgroundColor:priamry,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:50

    },
    btnsbmtText:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'

    }


})
export default styles