import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class ComponentA extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.TextA}>componentA</Text>
        <TouchableOpacity
          style={{marginHorizontal: 20}}
          onPress={() => this.props.navigation.navigate('ManhinhB')}>
          <Text>goto componentB</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ManhinhC')}>
          <Text>goto ImagesPicker</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ManhinhD')}>
          <Text>goto ImagesResize</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  TextA: {
    color: 'red',
    marginBottom: 30,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
