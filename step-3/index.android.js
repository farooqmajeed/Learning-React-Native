import React, { Component } from 'react';
import Album from './src/web/components/AlbumList';
import Headers from './src/web/components/header'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class step03 extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Headers header="Albums" />
        <Album />
      </View>
    );

  }
}

AppRegistry.registerComponent('step03', () => step03);
