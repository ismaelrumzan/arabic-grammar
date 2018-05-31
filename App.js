import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Video} from 'expo';
import VideoPlayer from './components/VideoPlayer';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <VideoPlayer videosrc="http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
