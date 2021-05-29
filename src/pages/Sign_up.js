import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

export default class Sign_up extends Component {
  render(){
    return (
     <ScrollView>   
        <View style={styles.container}>        
        </View>   
     </ScrollView>
    );
  }
};

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container:{     
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
  });

  //export default Sign_up;