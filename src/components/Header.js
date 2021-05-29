import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  Dimensions,
  Image,
} from 'react-native';

import usern from '../images/username.png';

export default class Header extends Component {
  render(){
    return (          
        <View style={styles.head}>
            <Text style={styles.username}> 
              <Image
                source={usern}
                style={styles.h}
              />
              Welcome!!   (Username)
            </Text>
          </View>   
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({    
  head:{
    flex:0.25,
    backgroundColor: '#0000cd',
    height:30,
    width: DEVICE_WIDTH,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    marginRight:-30,
    top:0,
  },
  username:{
    fontWeight:'bold',
    fontSize: 20,
    color:'white',
    marginRight:30,
  },
  h:{
    width: 35,
    height: 35,
    marginRight:30,
  },
  });

