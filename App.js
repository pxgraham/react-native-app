import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Button, Alert } from 'react-native';
import { ScreenOrientation } from 'expo';
import Canvas from 'react-native-canvas';


// ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE);
export default class App extends React.Component {

  state = {
    x: 10,
    y: 10,
    w: 10,
    h: 10,
    c: 'black',
  }
  
  handleCanvas = (canvas) => {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = this.state.c;
    ctx.fillRect(this.state.x, this.state.y, this.state.w, this.state.h);
  }
  componentDidMount() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }
  
  render() {
    return (
      <View style={styles.container}>

        <StatusBar hidden={true} />
        <Text>Tap Accuracy Test</Text>
        <Button
          title="Play Now"
          color="#f194ff"
          onPress={this.start}
        />
        <Canvas  style={styles.canvas} ref={this.handleCanvas}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  canvas: {
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: 'black',
  }
});
