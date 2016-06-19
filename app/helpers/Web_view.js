import React, { Component } from 'react';
import {
  View,
  WebView,
  StyleSheet
} from 'react-native';

class Webview extends Component {
  render() {
    return (
        <View style={styles.container}>
          <WebView source={{uri: this.props.url}}></WebView>
        </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
Webview.propTypes = {
  url: React.PropTypes.string.isRequired
}
module.exports = Webview;