import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';
var Badge = require('./Badge')
var Profile = require('./Profile')
var api = require('../utils/api')

class Dashboard extends Component {
  render() {
    return (
        <ScrollView style={styles.scrollContainer}>
          <View>
            <Badge userInfo={this.props.userInfo}></Badge>
          </View>
          <View style={styles.profile}>
            <Profile userInfo={this.props.userInfo} navigator={this.props.navigator}></Profile>
          </View>
        </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  scrollContainer: {
    flex: 1
  },
  container: {
    
  },
  profile: {
    marginTop: 30
  }
});
module.exports = Dashboard;