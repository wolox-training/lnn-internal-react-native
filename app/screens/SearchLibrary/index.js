import React, { Component } from 'react';

import Book from '../Library/components/Book';

import Header from './components/Header';
import SearchLibrary from './layout';

class SearchLibraryContainer extends Component {
  static navigationOptions = {
    header: Header
  };

  renderItem = ({ item }) => <Book data={item} />;

  keyExtractor = item => item.id.toString();

  render() {
    return <SearchLibrary data={[]} renderItem={this.renderItem} keyExtractor={this.keyExtractor} />;
  }
}

export default SearchLibraryContainer;
