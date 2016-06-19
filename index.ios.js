/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  StatusBar,
  View
} from 'react-native';

var Main = require('./app/components/Main')
class FirstReact extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar barStyle='light-content'/>
        <NavigatorIOS 
          style={styles.wrapper}
          initialRoute={{
            title: "Search",
            component: Main,
          }}
          renderScene={(route, navigator) => 
            <View>
              <StatusBar barStyle={route.barStyle} backButtonTitle={route.backButtonTitle}/>
            </View>
          }
          tintColor="#fff"
          titleTextColor="white"
          barTintColor="#0075BB"/>
        </View>
    );
  }
}

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

AppRegistry.registerComponent('FirstReact', () => FirstReact);
