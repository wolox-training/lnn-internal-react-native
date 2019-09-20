import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LocalStorageService from '@services/LocalStorageService';
import { ROUTES } from '@config/screens';

class LoadingScreen extends PureComponent {
  componentDidMount() {
    LocalStorageService.getStoreData('access-token').then(res => {
      if (res) {
        this.props.navigation.navigate(ROUTES.LOGIN);
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
