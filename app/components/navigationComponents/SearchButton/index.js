import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';
import { ROUTES } from '@config/screens';

import searchIcon from './assets/ic_search.png';
import { styles } from './styles';

class SearchButton extends PureComponent {
  handleOnPress = () => {
    const { navigation } = this.props;
    navigation.navigate(ROUTES.SEARCH_LIBRARY);
  };

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.handleOnPress}>
        <Image source={searchIcon} style={styles.image} />
      </TouchableOpacity>
    );
  }
}

SearchButton.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
};

export default SearchButton;
