
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

export default class step03 extends Component {
  render() {
    return (
      <View>
        <Text>
          Welcome to React iOS Native!
        </Text>
      </View>
    );
  }
}



AppRegistry.registerComponent('step03', () => step03);
