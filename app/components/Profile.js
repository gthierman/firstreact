import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native';

var width = Dimensions.get('window').width;
var Separator = require('../helpers/Separators')
var api = require('../utils/api')
var Repos = require('./Repos')

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
  }
  getRowTitle(user, item) {
    item = (item === 'public_repos') ? item.replace('_', ' ') : item;
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }
  viewRepos() {
    this.setState({
      isLoading: true,
    })
    api.getRepos(this.props.userInfo.login)
      .then((res) => {
        this.props.navigator.push({
          component: Repos,
          title: this.props.userInfo.name ? this.props.userInfo.name + "'s Repos" : "Repos",
          passProps: {repos: res, userInfo: this.props.userInfo},
          backButtonTitle: "Back"
        })
        this.setState({
            isLoading: false,
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
    var indicatorVisibility = (
      this.state.isLoading ? styles.visible : styles.hidden
    )
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
        <View style={[!this.state.isLoading && styles.visible, this.state.isLoading && styles.hidden]}>
          <Separator />
          {list}
        </View>
        <View>
          <ActivityIndicatorIOS
            animating={this.state.isLoading}
            color="#111" 
            size="small"
            style={[indicatorVisibility, styles.indicator]} />
        </View>
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
  },
  hidden: {
    // opacity: 0
    height: 0,
    overflow: "hidden"
  }
});
Profile.propType = {
  userInfo: React.PropTypes.object.isRequired
}
module.exports = Profile;