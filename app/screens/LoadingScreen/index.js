import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getAccessToken } from '@utils/asyncStorage';
import { ROUTES } from '@config/screens';

class LoadingScreen extends PureComponent {
  componentDidMount() {
    const {
      navigation: { navigate }
    } = this.props;
    getAccessToken().then(res => {
      if (res) {
        navigate(ROUTES.LIBRARY);
      } else {
        navigate(ROUTES.LOGIN);
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
