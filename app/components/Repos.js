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
      var desc = repos[index].description ? <Text style={styles.repoDesc}>{repos[index].description}</Text> : <View />;
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <Text style={styles.repoTitle}>{repos[index].name}</Text>
            <Text style={styles.stars}>{repos[index].stargazers_count}</Text>
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
  },
  repoTitle: {
    fontWeight: "bold",
    color: "#0075bb",
    fontSize: 16
  },
  repoDesc: {
    fontSize: 12,
    color: "#999"
  }
});
Repos.propType = {
  repos: React.PropTypes.array.isRequired,
  userInfo: React.PropTypes.object.isRequired
}
module.exports = Repos;