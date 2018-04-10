import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

class Increment extends Component {
  state = {
     counter: 0
  }
  
  handleClick = () => {
    this.setState({
       counter: ++this.state.counter
    })
  }
  
  render() {
    // let a = 1;
    return (
      <View>
        <View>
          <Text>{this.state.counter}</Text>
          <TouchableOpacity onPress={this.handleClick}>
            <Text> Count </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <Increment />
        <Increment />
        <Increment />
        <Increment />
      </View>
      
    )
  }
}
