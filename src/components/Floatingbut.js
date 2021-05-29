import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';

import add from '../images/add.png';

export default class Floatingbut extends Component {
  clickHandler = () => {
    Alert.alert('Floating Button Clicked');
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.clickHandler}
          style={styles.TouchableOpacityStyle}>
          <Image
            source={add}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'baseline',
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
  },

  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: '43%',
    //bottom: ,
    top: '55%',
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    position: 'absolute',
    width: 50,
    height: 50,
  },
});

