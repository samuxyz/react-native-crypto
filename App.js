import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';


import { View } from 'react-native';
import { Header, CryptoContainer } from './src/components/index';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}
