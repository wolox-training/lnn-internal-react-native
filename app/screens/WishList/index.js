import React, { PureComponent } from 'react';

import Wishlist from './layout';
import Book from './Book';

import { DATA } from '@constants';

class WishlistContainer extends PureComponent {
  renderItem = ({ item }) => <Book data={item} />;

  render() {
    return <Wishlist books={DATA} renderItem={this.renderItem} />;
  }
}

export default WishlistContainer;
