import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LocalStorageService from '@services/LocalStorageService';
import { ROUTES } from '@config/screens';

import { SESSION_DATA } from '@constants';

class LoadingScreen extends PureComponent {
  componentDidMount() {
    LocalStorageService.getStoreData(SESSION_DATA.ACCESS_TOKEN).then(res => {
      if (res) {
        this.props.navigation.navigate(ROUTES.LIBRARY);
      } else {
        this.props.navigation.navigate(ROUTES.LOGIN);
      }
    });
  }

  render() {
    return null;
  }
}

LoadingScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func })
};

export default LoadingScreen;
