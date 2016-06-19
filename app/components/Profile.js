import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
// var Badge = require('./Badge')

class Profile extends Component {
  getRowTitle(user, item) {
    // item = (item === 'public_repos' ? item.replace('_', '') : item
    // return item[0] ? item[0].toUpperCase() + item.slice(1) : item
  }
  render() {
    var userInfo = this.props.userInfo;
    var topicArr = ['company', 'location', 'following', 'email', 'bio', 'public_repos'];
    var list = topicArr.map((item, index) => {
      if(!userInfo[item]) {
        return <View key={index} />
      }else{
        <View key={index}>
          <View style={styles.rowContainer}>
            <Text>{this.getRowTitle(userInfo, item)}</Text>
            <Text>{userInfo[item]}</Text>
          </View>
        </View>
      }
    });
    return (
      <ScrollView style={styles.container}>
      </ScrollView>
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
// Badge.propTypes = {
//   userInfo: React.PropTypes.object.isRequired
// };
module.exports = Profile;