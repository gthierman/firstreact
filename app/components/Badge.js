import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

class Badge extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}}/>
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
  }
});
Badge.propTypes = {
  userInfo: React.PropTypes.object.isRequired
};
module.exports = Badge;