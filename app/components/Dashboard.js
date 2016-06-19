import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  ScrollView
} from 'react-native';

var Badge = require('./Badge')
var Profile = require('./Profile')

class Dashboard extends Component {
  render() {
    return (
        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.container}>
          <View>
            <Badge userInfo={this.props.userInfo}></Badge>
          </View>
          <View style={styles.profile}>
            <Profile userInfo={this.props.userInfo}></Profile>
          </View>
        </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  scrollContainer: {
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: "stretch"
  },
  profile: {
    marginTop: 30
  }
});
module.exports = Dashboard;