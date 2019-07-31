import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DATA } from '../../../constants/index';

import Library from './layout';
import Book from './components/Book';

class LibraryContainer extends Component {
  static navigationOptions = {
    header: null
  };

  onBookClick = data => {
    const { navigation } = this.props;
    navigation.navigate('bookDetail', data);
  };

  renderBook = ({ item }) => <Book data={item} handleBookClick={this.onBookClick} />;

  keyExtractor = item => item.id.toString();

  render() {
    return <Library data={DATA} renderBook={this.renderBook} keyExtractor={this.keyExtractor} />;
  }
}

LibraryContainer.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired })
};

export default LibraryContainer;
