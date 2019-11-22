import React, {PureComponent} from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import axios from 'axios';

axios.defaults.baseURL = 'https://d63cd21e.ngrok.io';

export default class TestAxios extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    axios.get('/products').then(res => {
      this.setState({
        products: res.data,
      });
    });
  }
  renderItem = item => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            color: 'green',
            fontSize: 16,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            marginBottom: 10,
          }}>
          Name: {item.name}
        </Text>
        <Image source={{uri: item.images}} style={{width: 100, height: 100}} />
        <Text
          style={{
            color: 'red',
            fontSize: 16,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            marginVertical: 10,
          }}>
          Price:{item.price}
        </Text>
      </View>
    );
  };
  render() {
    return (
      <View>
        <FlatList
          data={this.state.products}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={item => item.id}
        />
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
