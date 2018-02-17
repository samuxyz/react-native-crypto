import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import * as cryptoActionCreators from '../reducers/cryptoReducer';
import CoinCard from './CoinCard';
import Spinner from 'react-native-loading-spinner-overlay';

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 55,
    paddingBottom: 110,
  },
});

const { contentContainer } = styles;

class CryptoContainer extends Component {
  componentDidMount () {
    this.props.cryptoActions.fetchCoinData();
  }

  renderCoinCard = () => {
    const { crypto } = this.props;
    return crypto.data.map((coin, index) => {
      return (
        <CoinCard
          key={index}
          coin_name={coin.name}
          symbol={coin.symbol}
          price_usd={coin.price_usd}
          percent_change_24h={coin.percent_change_24h}
        />
      );
    });
  }

  render () {
    const { crypto: { isFetching } } = this.props;
    
    if (isFetching) {
      return (
        <View>
          <Spinner
            visible={isFetching}
            textContent={'loading...'}
            textStyle={{ color: '#253145' }}
            animation="fade"
          />
        </View>
      );
    }

    return (
      <ScrollView contentContainerStyle={contentContainer}>{this.renderCoinCard()}</ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    crypto: state.crypto,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cryptoActions: bindActionCreators(cryptoActionCreators, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CryptoContainer);
