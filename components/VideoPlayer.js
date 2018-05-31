import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Video} from 'expo';

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');
const VIDEO_CONTAINER_HEIGHT = DEVICE_HEIGHT * 2.0 / 5.0;

export default class VideoPlayer extends React.Component {

  _mountVideo = component => {
    this._video = component;    
  };

  componentDidMount() {
    const videosrc = this.props.videosrc;
    this._video.loadAsync({uri: videosrc});
    console.log("mounted component with "+videosrc);
  }

  render() {
    return (
      <View>
        <Video
            ref={this._mountVideo}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            useNativeControls={true}
            resizeMode="Expo.Video.RESIZE_MODE_COVER"
            shouldPlay
            isLooping
            style={{ width: DEVICE_WIDTH, height: VIDEO_CONTAINER_HEIGHT }}
            />
      </View>
    );
  }
}

