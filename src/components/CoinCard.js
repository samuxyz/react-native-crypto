import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { images } from '../constants';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  image: {
    height: 40,
    width: 40,
  },
  bold: {
    fontWeight: 'bold',
  },
});

const { container, image, bold } = styles;

const CoinCard = ({ symbol, coin_name, price_usd, percent_change_24h }) => {
  return (
    <View style={container}>
      <Image
        style={image}
        source={{ uri: images[symbol] }}
      />
      <Text>{symbol}</Text>
      <Text>{coin_name}</Text>
      <Text>{price_usd} <Text style={bold}>$</Text></Text>
      <Text>{percent_change_24h}</Text>
    </View>
  );
};

export default CoinCard;
