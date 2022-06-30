import React, { useState } from "react";
import { Icon } from 'react-native-elements'

import { View, TextInput, StyleSheet, Text, Button, TouchableOpacity, Image, ScrollView, Alert } from "react-native";
import styles from './LoginStyle'
import axios from "axios";
import Loader from 'react-native-loading-spinner-overlay'
import { save_user_data } from "./Authservices";
import baseUrl2 from "../../../ApisAuth/Baseurl2/BaseUrl2";

const Login = (props) => {
    const [icon, setIcon] = useState("eye-slash")
    const [hidePassword, setHidePassword] = useState(true)
    const [error, setError] = useState()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    
    const Login = async () => {
        try {
            if (!email) {
                alert('Please enter the email address');
                return;
            }
            if (!password) {
                alert('Please enter the password');
                return;
            }
            setLoading(true);
            const loginApiCall = await axios.post(`${baseUrl2}/user/login`, {
                "email": email,
                "password": password
            });
            console.log(loginApiCall.data);

            if (loginApiCall?.status == 200) {
                save_user_data(loginApiCall?.data.data, loginApiCall?.data?.token).then((value) => {
                    // setLoading(false);
                    if (loginApiCall?.data?.success == true) {
                        props.navigation.navigate('HomeTab');
                    } else {
                        props.navigation.navigate('Login');
                    }
                }).catch((error) => {
                    setLoading(false);

                    console.log(error,JSON.stringify(error))
                })
            } else {
                setLoading(false);
                
                Alert.alert('something went wrong', JSON.stringify(loginApiCall.data.info.message))
            }
        } catch (e) {
            console.log(e)
            setLoading(false);
            console.log(e, JSON.stringify(e))
        }
    }
    return (
        <>
            <View style={styles.mainContainer}>
            <Loader visible={isLoading} color="red"/>


                <Image source={require('../../SecondHome/assets/offer2.jpg')} style={styles.mainContainerImage} />
                <Text style={styles.mainContainerHeader}>Wellcome Back!</Text>
                {/* <Text style={styles.mainContainerHeaderText}>Login</Text> */}

                {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
                <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>

                    <Text style={styles.InputHeader}>Email</Text>

                    <View style={styles.EmailInput}>

                        <TextInput
                            value={email}
                            onChangeText={(value) => setEmail(value)}
                            styleLabel={{ fontWeight: "600" }}
                            style={styles.Textinput}
                        />
                        {/* <View  style={styles.EmailInputIcon}>

                <Icon name="check-circle" type="font-awesome-5" color="green" style={{marginRight:5}}/>

            </View> */}
                    </View>
                    <Text style={styles.InputHeader}>Password</Text>

                    <View style={styles.EmailInput}>

                        <TextInput
                            value={password}
                            onChangeText={(value) => setPassword(value)}
                            styleLabel={{ fontWeight: "600" }}
                            style={styles.Textinput}
                        />
                        <View style={styles.EmailInputIcon}>

                            <Icon name="eye-slash" type="font-awesome-5" color="black" style={{ marginRight: 5 }} />

                        </View>
                    </View>
                    <TouchableOpacity style={styles.forgetPassword} onPress={()=>props.navigation.navigate('Forgot')}>
                        <Text style={styles.forgetPasswordText}>Forgot password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonBody} onPress={Login}>
                        <Text style={styles.buttonText}>
                            Sign in
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.footerText}>
                        <Text style={styles.socialIconContainer}>or Sign in with</Text>
                    </View>
                    <View style={styles.socialIcon}>
                        <Icon name="google" type="font-awesome-5" size={45} color="red" onPress={() => alert("hello")} />
                        <Icon name="facebook" type="font-awesome-5" size={45} color="blue" onPress={() => alert("hello")} />
                        <Icon name="envelope" type="font-awesome-5" size={45} color="black" onPress={() => alert("hello")} />


                    </View>
                    <View style={styles.otherAccountContainer}>
                        <Text style={styles.OtherAccountText}>Don´t have an account? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>

                            <Text style={styles.create} >Create one</Text>
                        </TouchableOpacity>
                    </View>



                </ScrollView>
            </View>
        </>
    );
};

export default Login;