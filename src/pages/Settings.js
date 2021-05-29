import React, {Component} from 'react';
import {
  View,
  Image,
  Alert,
} from 'react-native';

import SettingsList from 'react-native-settings-list';

export default class Settings extends Component {
constructor(){
  super();
  this.onValueChange = this.onValueChange.bind(this);
  this.state = {switchValue: false};
}
render() {
  return (
    <View style={{backgroundColor:'gray',flex:1}}>
      <View style={{flex:1, marginTop:50}}>
        <SettingsList>
        <SettingsList.Header headerText='Settings' headerStyle={{color:'white', alignItems: 'center', justifyContent: 'space-around', fontSize: 25}}/>
          <SettingsList.Item
            icon={
              <View style={{height:30,marginLeft:10,alignSelf:'center'}}>
                <Image style={{alignSelf:'center',height:40, width:40}} source={require('../images/about.png')}/>
              </View>
            }
            itemWidth={50}
            title='User Name'
            onPress={() => Alert.alert('Icon Example Pressed')}
          />
          <SettingsList.Item
            hasNavArrow={false}
            switchState={this.state.switchValue}
            switchOnValueChange={this.onValueChange}
            hasSwitch={true}
            title='Dark Mode'/>
          <SettingsList.Item title='Language Settings'  onPress={() => Alert.alert('Language Settings Pressed')}/>
          <SettingsList.Item title='Currency Converter' onPress={() => Alert.alert('Currency converter Pressed')}/>
          <SettingsList.Item hasNavArrow={false} title='Update Password' onPress={() => Alert.alert('Update Password Pressed')}/>
          <SettingsList.Item hasNavArrow={false} title='Log Out' onPress={() => this.props.navigation.navigate('Login')}/>
        </SettingsList>
      </View>
    </View>
  );
}

onValueChange(value){
  this.setState({switchValue: value});
}
};