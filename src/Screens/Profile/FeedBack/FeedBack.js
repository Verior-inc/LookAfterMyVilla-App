import axios from "axios";
import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import baseUrl2 from "../../../ApisAuth/Baseurl2/BaseUrl2";
import { getUserEmail, getUserId } from "../../AUth/Login/Authservices";
import styles from './style'
import Stars from 'react-native-stars';
import { Icon } from "react-native-elements";
import Loader from 'react-native-loading-spinner-overlay'

const FeedBack = (props) => {

    const [title, setTitle] = React.useState();
    const [description, setDescription] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const [stars,setStars]=React.useState()
    const Feedbackcall = async () => {
        const userID = await getUserId();
        alert(userID)
        try {
            setLoading(true)
            const feedbackapi = await axios.post(`${baseUrl2}/give-feedback/create-feedback`, {
                "stars": stars.stars,
                "review": title,
                "userId": userID
            })
            setLoading(false)
            if (feedbackapi.data.success == true) {
                props.navigation.navigate("Profile")
            }

        } catch (error) {
            Alert.alert(JSON.stringify(error.message))

        }
    }
    console.log(stars)

    return (
        <View>
            <Loader visible={loading} color="red"/>

            <View style={styles.mainHeader}>
                <Text style={styles.headertxt}>Feed Back</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <Stars
                    default={2.5}
                    update={(val)=>setStars({stars: val})}
                    count={5}
                    half={true}
                    starSize={50}
                    fullStar={<Icon name={'star'} type="font-awesome-5" size={25} color={'yellow'} style={[styles.myStarStyle]} />}
                    emptyStar={<Icon name={'star'} type="font-awesome-5" style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                    halfStar={<Icon name={'star-half-alt'} type="font-awesome-5" style={[styles.myStarStyle]} />}
                />
            </View>
            <View style={styles.inputCon}>
                <TextInput placeholder="Enter title" style={styles.inputtitle} onChangeText={(title) => setTitle(title)} value={title} />
                <TextInput placeholder="Enter Description" multiline={true} style={styles.inputdesc} onChangeText={(description) => setDescription(description)} value={description} />

            </View>
            <TouchableOpacity style={styles.btn} onPress={Feedbackcall}>
                <Text style={styles.btntxt}>Submit</Text>
            </TouchableOpacity>

        </View>
    )
}
export default FeedBack