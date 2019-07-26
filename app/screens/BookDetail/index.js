import React, { Component } from 'react';

import { DATA } from '../../../constants/index';

import BookDetail from './layout';

class BookDetailContainer extends Component {
  onPressAdd = () => null;

  onPressRent = () => null;

  render() {
    return <BookDetail data={DATA} handleAdd={this.onPressAdd} handleRent={this.onPressRent} />;
  }
}

export default BookDetailContainer;
