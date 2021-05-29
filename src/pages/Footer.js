import * as React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import chat from '../images/chat.jpg';
import dash from '../images/dashboard.png';
import user from '../images/user.png';


export default class Footer extends React.Component {
  render(){
    return (  
      <View style={styles.main}>  
        <View>
            <TouchableOpacity
                activeOpacity={0.4}>
                <Image 
                    style={styles.image}
                    source={chat}
                />
            </TouchableOpacity>
        </View> 
        <View>
            <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => this.props.navigation.navigate('Dashboard')}>       
                <Image 
                    style={styles.image}
                    source={dash}
                />
            </TouchableOpacity> 
        </View>       
        <View>
            <TouchableOpacity
                 activeOpacity={0.4}
                 onPress={() => this.props.navigation.navigate('Profile')}>
                <Image 
                    style={styles.image}
                    source={user}
                />
            </TouchableOpacity>    
        </View> 
      </View>    
    );
  }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    main:{
        position: 'absolute',
        flex:1,
        flexDirection: 'row',
        backgroundColor:'white',
        height:45,
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: DEVICE_WIDTH,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomColor:'white',
        borderColor:'skyblue',
        borderWidth:2,
        top: DEVICE_HEIGHT-70,
    },
    image:{
        height: 25,
        width: 25,
        marginTop:10,
        marginBottom:10,

    },
  });