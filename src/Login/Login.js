import React, { useEffect } from 'react'
import {View,Text,TouchableOpacity,Button} from 'react-native'
import styles from './style'
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
const onGoogleButtonPress= async()=>{
    

    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  
}
GoogleSignin.configure({
   // androidClientId: "971945341217-nq2lje7sl8134j3u6h6r9brtgroch77h.apps.googleusercontent.com",
   webClientId:"971945341217-tobs69o8qgbpmnd7ud62pf6o8nipr2ub.apps.googleusercontent.com",
   
 });
const Login =()=>{
    const fbLogin= async()=>{
        const result = await LoginManager.logInWithPermissions(["email", "public_profile", "user_friends"]);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  // Sign-in the user with the credential
    auth().signInWithCredential(facebookCredential)
    .then((user)=>{
        console.log("user",user)
    })
    .catch((err)=>{
        console.log("error",err)
    })
    }
    
    return(
        <View>
            <TouchableOpacity style={styles.fbbtn} onPress={fbLogin}>
                <Text style={styles.fbbtnText}>Login With Facebokk</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.fbbtn} onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}>
                <Text style={styles.fbbtnText}>Login With Google</Text>

            </TouchableOpacity>
        
            
        </View>

    )
}
export default Login