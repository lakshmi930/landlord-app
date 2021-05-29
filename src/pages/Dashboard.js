import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  Text,
} from 'react-native';


import Footer from './Footer';
import Header from '../components/Header';
import Float from '../components/Floatingbut'

export default class Dashboard extends Component {
  render(){
    return (
        <View style={styles.container}>
          <Header/>
          <ScrollView>
            <View style={styles.up}>
            
            </View>
          </ScrollView>
          <Float />
          <Footer /> 
        </View>   
    );
  }
}
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{     
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    up:{
      flex:0.65,
      backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center',
      top: 30,
      bottom:35,
      width: DEVICE_WIDTH,
    },
  });

 // export default Dashboard;