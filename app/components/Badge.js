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
          <Text>{this.props.userInfo.name}</Text>
          <Text>{this.props.userInfo.login}</Text>
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
Badge.propType = {
  userInfo: React.PropTypes.object.isRequired
}
module.exports = Badge;