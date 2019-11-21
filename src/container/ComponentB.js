import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class ComponentB extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.TextA}>componentA</Text>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text>go back</Text>
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
    color: 'green',
    marginBottom: 30,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
