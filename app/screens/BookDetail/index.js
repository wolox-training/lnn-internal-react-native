import React, { Component } from 'react';

import BookDetail from './layout';

class BookDetailContainer extends Component {
  onPressAdd = () => null;

  onPressRent = () => null;

  render() {
    const { params } = this.props.navigation.state;
    return (
      <BookDetail
        data={params}
        handleAdd={this.onPressAdd}
        handleRent={this.onPressRent}
      />
    );
  }
}

export default BookDetailContainer;
