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
  makeBackground(btn) {
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }
    if(btn === 0) {
      obj.backgroundColor = "#333"
    }else if(btn === 1) {
      obj.backgroundColor = "#e77aae"
    }else if(btn === 2){
      obj.backgroundColor = "#758bf4"
    }
    return obj;
  }
  goToProfile(event) {
    
  }
  goToRepos(event) {
    console.log('go to repos')
  }
  goToNotes(event) {
    console.log('go to notes')
  }
  render() {
    return (
        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.container}>
          <View>
            <Badge userInfo={this.props.userInfo}></Badge>
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
  }
});
module.exports = Dashboard;