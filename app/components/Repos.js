import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';

var width = Dimensions.get('window').width;
var SectionTitle = require('./SectionTitle')
var Separator = require('../helpers/Separators')

class Repos extends Component {
  render() {
    console.log(this.props.repos)
    var repos = this.props.repos;
    var list = repos.map((item, index) => {
      var desc = repos[index].description ? <Text>{repos[index].description}</Text> : <View />;
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <Text>{repos[index].name}</Text>
            <Text>{repos[index].stargazers_count}</Text>
            {desc}
            <Separator/>
          </View>
        </View>
      )
    });
    return (
      <View style={styles.container}>
        {list}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
module.exports = Repos;