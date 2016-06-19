import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

class Profile extends Component {
  getRowTitle(user, item) {
    item = (item === 'public_repos') ? item.replace('_', ' ') : item;
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }
  render() {
    var userInfo = this.props.userInfo;
    var listArr = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos'];
    var list = listArr.map((item, index) => {
      if(!userInfo[item]) {
        return <View key={index} />
      }else{
        return (
          <View key={index}>
            <View style={styles.rowContainer}>
              <Text>{this.getRowTitle(userInfo, item)}</Text>
              <Text>{userInfo[item]}</Text>
            </View>
          </View>
        )
      }
    });
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        {list}
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
Profile.propType = {
  userInfo: React.PropTypes.object.isRequired
}
module.exports = Profile;