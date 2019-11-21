import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class ImagesPicker extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      photo: null,
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
  };
  render() {
    return (
      <View style={styles.container}>
        {this.state.photo && (
          <Image
            source={{uri: this.state.photo}}
            style={{width: 100, height: 100}}
          />
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
