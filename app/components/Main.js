import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native';
var api = require('../utils/api')
var Dashboard = require('./Dashboard')
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
  }
  handleChange(event) {
    this.setState({
      username: event.nativeEvent.text,
      error: ''
    })
  }
  handleSubmit() {
    this.setState({
      isLoading: true
    })
    api.getBio(this.state.username)
      .then((res) => {
        if (res.message === 'Not Found') {
          this.setState({
            error: 'User not found',
            isLoading: false
          })
        }else{
          console.log(this)
          this.props.navigator.push({
            title: res.name || "select an option",
            component: Dashboard,
            passProps: {userInfo: res},
            backButtonTitle: "Back"
          })
          this.setState({
            isLoading: false,
            error: false,
            username: ''
          })
        }
      }
    )
  }
  render() {
    var showErr = (
      this.state.error ? <Text style={styles.error}>{this.state.error}</Text> : <View></View>
    )
    var indicatorVisibility = (
      this.state.isLoading ? styles.visible : styles.hidden
    )
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Search for a Github user {this.state.isLoading} {this.state.username}</Text>
          <TextInput
            style={styles.searchInput}
            value={this.state.username}
            onChange={this.handleChange.bind(this)} />
          <TouchableHighlight 
            style={[styles.button, !this.state.isLoading && styles.visible, this.state.isLoading && styles.hidden]}
            onPress={this.handleSubmit.bind(this)}
            underlayColor="white">
            <Text>Submit</Text>
          </TouchableHighlight>
          <ActivityIndicatorIOS
            animating={this.state.isLoading}
            color="#111" 
            size="small"
            style={indicatorVisibility} />
          {showErr}
        </View>

    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center'
  },
  searchInput: {
    height: 50,
    borderColor: "#DDDFE0",
    width: 200,
    borderWidth: 1,
    padding: 4,
    alignSelf: 'stretch',
    width: 343,
    margin: 16,
    borderRadius: 4
  },
  error: {
    color: "red"
  },
  button: {
    backgroundColor: "white",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "black",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12
  },
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }

});
module.exports = Main;