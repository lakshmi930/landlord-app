import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';


import logoimg from '../images/logoeye.jpg';
import Form from '../components/Form';
import bgSrc from '../images/back.png';

export default class Login extends Component {
    signIn = async () => {
        try {
          GoogleSignin.configure();
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          this.setState({userInfo}, () => {
            console.log(this.state.userInfo);
          });
          //log in is success!
        } catch (error) {
          console.log(error);
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            Alert.alert('Sign-in Flow cancelled');
          } else if (error.code === statusCodes.IN_PROGRESS) {
            Alert.alert('Please Wait....');
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            Alert.alert('Play Service Not available');
          } else {
            Alert.alert('Sorry for the interuption... Please Try again Later!!! ');
          }
        }
      };
    
      isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        if (isSignedIn) {
         navigate.navigation('Dashboard');
        } else {
          //the user is not logged in yet
        }
      };
    
  render(){
    return (
     <ScrollView>   
        <View style={styles.container}>
            <ImageBackground style={styles.picture} source={bgSrc}>
                <Image
                    style={styles.image}
                    source={logoimg}/>
                <Text style={styles.imgtext}>Land Lord</Text> 
                <Form />
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Dashboard')}>
                    <Text style={styles.submit}> LOGIN </Text>
                </TouchableOpacity>
                <GoogleSigninButton
                    style={styles.googleButton}
                    size={GoogleSigninButton.Size.large}
                    color={GoogleSigninButton.Color.Light}
                    onPress={this.signIn}
                />
                <Text style={{color:'#ffffff', marginTop:20}}>Don't have an account yet?</Text> 
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Sign_up')}>
                    <Text style={styles.create}> Create an account </Text>
                </TouchableOpacity> 
            </ImageBackground>         
        </View>   
     </ScrollView>
    );
  }
};


const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{     
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    picture: {
        flex: 1,
        width: '100%',
        height: '200%',
        justifyContent: "center",
        alignItems: "center",
      },
    image: {
        flexGrow:1,
        width: 80,
        height: 80,
        marginTop: 85,
    },   
    imgtext: {
        marginVertical: 15, 
        fontSize: 19,
        color: '#ffffff',
        fontWeight: 'bold',
    },  
    button:{
        backgroundColor: '#494949' ,
        opacity:1,
        width: DEVICE_WIDTH - 210,
        height: 40,
        marginHorizontal: 20,
        borderRadius: 20,
        marginTop: 15,
    },
    submit:{
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        color: '#ff8a80',
        marginTop: 7,
        paddingLeft: 20,
    },
    googleButton:{
        marginTop:10,
        borderRadius:20,
        backgroundColor: '#494949',
    },
    create:{
        flexShrink: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: 5,
        justifyContent:'flex-end',
        marginBottom:90,
        alignItems:"center",
    },
  });

  //export default Login;