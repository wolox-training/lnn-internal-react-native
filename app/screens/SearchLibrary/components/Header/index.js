/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { ImageBackground, TextInput, View, Image, TouchableOpacity } from 'react-native';
import headerImg from '@assets/bc_nav_bar.png';

import cancelIcon from './assets/cancel.png';
import searchIcon from './assets/ic_search.png';
import { styles } from './styles';

class Header extends Component {
  state = {
    searchText: ''
  };

  handleOnChangeText = text => {
    this.setState({ searchText: text });
    const onChangeText = this.props.navigation.getParam('onChangeText');
    onChangeText(text);
  };

  handleOnClear = () => {
    this.setState({ searchText: '' });
    const onClear = this.props.navigation.getParam('onClear');
    onClear();
  };

  render() {
    return (
      <ImageBackground source={headerImg} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Image source={searchIcon} style={styles.iconLeft} />
          <TextInput
            style={styles.textInput}
            onChangeText={this.handleOnChangeText}
            value={this.state.searchText}
          />
          <TouchableOpacity onPress={this.handleOnClear}>
            <Image source={cancelIcon} style={styles.iconRight} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default Header;
