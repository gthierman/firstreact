import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight
} from 'react-native';

var width = Dimensions.get('window').width;
var Separator = require('../helpers/Separators')
var api = require('../utils/api')
var Repos = require('./Repos')

class Profile extends Component {
  getRowTitle(user, item) {
    item = (item === 'public_repos') ? item.replace('_', ' ') : item;
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }
  viewRepos() {
    api.getRepos(this.props.userInfo.login)
      .then((res) => {
        this.props.navigator.push({
          component: Repos,
          title: this.props.userInfo.name + "'s Repos",
          passProps: {repos: res, userInfo: this.props.userInfo},
          backButtonTitle: "Back"
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
    var listArr = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos'];
    var list = listArr.map((item, index) => {
      if(!this.props.userInfo[item]) {
        return <View key={index} />
      }else if(index === 6){
        return (
          <View key={index}>
            <TouchableHighlight 
              onPress={this.viewRepos.bind(this)}
              underlayColor="white">
              <View style={styles.rowContainer}>
                <Text style={styles.label}>{this.getRowTitle(this.props.userInfo, item)}</Text>
                <Text style={styles.data}>{this.props.userInfo[item]}</Text>
              </View>
            </TouchableHighlight>
            <Separator />
          </View>
        )
      }else{
        return (
          <View key={index}>
            <View style={styles.rowContainer}>
              <Text style={styles.label}>{this.getRowTitle(this.props.userInfo, item)}</Text>
              <Text style={styles.data}>{this.props.userInfo[item]}</Text>
            </View>
            <Separator />
          </View>
        )
      }
    });
    return (
      <View>
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