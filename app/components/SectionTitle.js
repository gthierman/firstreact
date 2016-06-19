import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

class SectionTitle extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#999",
    marginBottom: 18
  }

});
// SectionTitle.propType = {
//   title: React.PropTypes.string.isRequired
// }
module.exports = SectionTitle;