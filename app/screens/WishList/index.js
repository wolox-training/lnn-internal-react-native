/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Wishlist from './layout';
import Book from './Book';

import { DATA } from '@constants';

class WishlistContainer extends Component {
  renderItem = ({ item }) => <Book data={item} />;

  render() {
    return <Wishlist books={DATA} renderItem={this.renderItem} />;
  }
}

export default WishlistContainer;
