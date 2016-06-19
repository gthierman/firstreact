import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';

var width = Dimensions.get('window').width;
var SectionTitle = require('./SectionTitle')
var Separator = require('../helpers/Separators')

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
      }else if(userInfo[item] === 'public_repos'){
        return (
          <View key={index}>
            <View>
              <Text>word</Text>
            </View>
          </View>
        )
      }else{
        return (
          <View key={index}>
            <View style={styles.rowContainer}>
              <Text style={styles.label}>{this.getRowTitle(userInfo, item)}</Text>
              <Text style={styles.data}>{userInfo[item]}</Text>
            </View>
            <Separator />
          </View>
        )
      }
    });
    return (
      <View>
        <SectionTitle title="PROFILE"></SectionTitle>
        <Separator />
        {list}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "stretch",
    width: width,
    paddingLeft: 16,
    paddingTop: 12,
    paddingBottom: 12
  },
  label: {
    color: "#0075bb",
    fontSize: 14
  },
  data: {
    fontSize: 18
  }
});
Profile.propType = {
  userInfo: React.PropTypes.object.isRequired
}
module.exports = Profile;