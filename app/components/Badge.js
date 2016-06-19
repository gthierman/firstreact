import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

class Badge extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} resizeMode="contain"/>
          <Text style={styles.name}>{this.props.userInfo.name}</Text>
          <Text style={styles.handle}>{this.props.userInfo.login}</Text>
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
    flex: 1,
    width: 90,
    height: 90,
    marginBottom: 18,
    borderRadius: 45,
    marginTop: 30
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 3
  },
  handle: {
    color: "#999"
  }
});
Badge.propType = {
  userInfo: React.PropTypes.object.isRequired
}
module.exports = Badge;