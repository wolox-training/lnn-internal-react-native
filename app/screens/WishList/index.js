import React, { PureComponent } from 'react';

import Wishlist from './layout';
import Book from './Book';

class WishlistContainer extends PureComponent {
  renderItem = ({ item }) => <Book data={item} />;

  render() {
    return <Wishlist books={[]} renderItem={this.renderItem} />;
  }
}

export default WishlistContainer;
