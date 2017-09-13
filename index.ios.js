/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
  var HomeView = require('./viewController/homeView');

export default class ListViewTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeView blockMethod={this._testMethod} />
      </View>
    );
  }
  _testMethod(aaaa){
    console.log(aaaa);
    Alert.alert(
  '提示',
  aaaa,
  [
    {text: '按钮一', onPress: () => console.log('Ask me later pressed')},
    {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    // {text: '确认', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#666666',
  },
});

AppRegistry.registerComponent('ListViewTest', () => ListViewTest);
