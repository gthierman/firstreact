import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView
} from 'react-native';

var width = Dimensions.get('window').width;
var Separator = require('../helpers/Separators')

class Repos extends Component {
  render() {
    var repos = this.props.repos;
    var list = repos.map((item, index) => {
      var desc = repos[index].description ? <Text>{repos[index].description}</Text> : <View />;
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <Text>{repos[index].name}</Text>
            <Text>{repos[index].stargazers_count}</Text>
            {desc}
          </View>
          <Separator/>
        </View>
      )
    });
    return (
      <ScrollView style={styles.scrollContainer}>
        {list}
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  scrollContainer: {
    flex: 1
  },
  rowContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "stretch",
    width: width,
    paddingLeft: 16,
    paddingTop: 12,
    paddingBottom: 12
  }
});
Repos.propType = {
  repos: React.PropTypes.array.isRequired,
  userInfo: React.PropTypes.object.isRequired
}
module.exports = Repos;