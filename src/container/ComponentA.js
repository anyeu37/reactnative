import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class ComponentA extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.TextA}>componentA</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.props.navigation.navigate('ManhinhB')}>
          <Text>goto componentB</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.props.navigation.navigate('ManhinhC')}>
          <Text>goto ImagesPicker</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.props.navigation.navigate('ManhinhD')}>
          <Text>goto ImagesResize</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.props.navigation.navigate('ManhinhE')}>
          <Text>goto Test Axios</Text>
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
  btn: {
    backgroundColor: '#ececec',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 10,
    minWidth: 200,
    borderRadius: 5,
  },
});
