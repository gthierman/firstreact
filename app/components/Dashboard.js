import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ScrollView
} from 'react-native';
var api = require('../utils/api')
var Badge = require('./Badge')
var Profile = require('./Profile')
var Repos = require('./Repos')

class Dashboard extends Component {
  viewRepos() {
    api.getRepos(this.props.userInfo.login)
      .then((res) => {
        console.log(res)
        this.props.navigator.push({
          component: Repos,
          title: this.props.userInfo.name + "'s Repos",
          passProps: {repos: res},
          backButtonTitle: "Back"
        })
      })
      .catch((res) => {
      })
  }
  render() {
    return (
        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.container}>
          <View>
            <Badge userInfo={this.props.userInfo}></Badge>
          </View>
          <View style={styles.profile}>
            <Profile userInfo={this.props.userInfo}></Profile>
          </View>
          <TouchableHighlight 
            onPress={this.viewRepos.bind(this)}
            underlayColor="white">
            <Text>Get Repos</Text>
          </TouchableHighlight>
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