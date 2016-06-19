import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

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
        <View style={styles.container}>
          <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} resizeMode="contain"/>
          <TouchableHighlight
            style={this.makeBackground(0)}
            onPress={this.goToProfile.bind(this)}
            underlayColor="#fff">
            <Text>View repos</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={this.makeBackground(0)}
            onPress={this.goToRepos.bind(this)}
            underlayColor="#fff">
            <Text>View repos</Text>
          </TouchableHighlight>
          <TouchableHighlight 
            style={this.makeBackground(1)}
            onPress={this.goToNotes.bind(this)}
            underlayColor="#fff">
            <Text>View notes</Text>
          </TouchableHighlight>
        </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: 475,
    height: 400,
    marginBottom: 30
  }
});
module.exports = Dashboard;