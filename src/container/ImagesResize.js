import React, {PureComponent} from 'react';
import ImagePicker from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';

import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default class ImagesResize extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      photo: null,
      resizeImage: null,
    };
  }
  handleChoosePhoto = () => {
    const options = [];
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({
          photo: response.uri,
        });
      }
    });
    ImageResizer.createResizedImage(this.state.photo, 80, 60, 'JPEG', 100)
      .then(response => {
        if (response.uri) {
          this.setState({
            resizeImage: response.uri,
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    console.log(this.state.photo);
    return (
      <View style={styles.container}>
        {this.state.photo && (
          <View>
            <Text>anh truoc khi resize</Text>
            <Image
              source={{uri: this.state.photo}}
              style={{width: 100, height: 100}}
            />
          </View>
        )}
        {this.state.resizedImageUri && (
          <Image source={{uri: this.state.resizeImage}} />
        )}

        <TouchableOpacity onPress={() => this.handleChoosePhoto()}>
          <Text>lua cho anh</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
