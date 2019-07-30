import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DATA } from '../../../constants/index';

import Library from './layout';
import Book from './components/Book';

class LibraryContainer extends Component {
  static navigationOptions = {
    header: null
  };

  handleBookClick = data => {
    const { navigation } = this.props;
    return navigation.navigate('bookDetail', data);
  };

  renderBook = ({ item }) => <Book data={item} onBookClick={this.handleBookClick} />;

  keyExtractor = item => item.id.toString();

  render() {
    return <Library data={DATA} renderBook={this.renderBook} keyExtractor={this.keyExtractor} />;
  }
}

LibraryContainer.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func })
};

export default LibraryContainer;
