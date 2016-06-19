import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableHighlight
} from 'react-native';

var width = Dimensions.get('window').width;
var Separator = require('../helpers/Separators')
var Webview = require('../helpers/Web_view')

class Repos extends Component {
  openPage(url) {
    this.props.navigator.push({
      component: Webview,
      title: 'Web View',
      passProps: {url}
    })
  }
  render() {
    var repos = this.props.repos;
    var list = repos.map((item, index) => {
      var desc = repos[index].description ? <Text style={styles.repoDesc}>{repos[index].description}</Text> : <View />;
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <TouchableHighlight onPress={this.openPage.bind(this, this.props.repos[index].html_url)}
              underlayColor="white">
              <Text style={styles.repoTitle}>{repos[index].name}</Text>
            </TouchableHighlight>
            <Text style={styles.stars}>Stars: {repos[index].stargazers_count}</Text>
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