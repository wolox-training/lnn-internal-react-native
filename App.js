import React, { PureComponent } from 'react';
import { Provider, connect } from 'react-redux';
import { createReduxContainer } from 'react-navigation-redux-helpers';

import RootTab from './navigation/AppNavigation';
import { store } from './redux/store';

const AppWithNavigation = createReduxContainer(RootTab);

const mapStateToProps = state => ({
  state: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(AppWithNavigation);

class App extends PureComponent {
  componentDidMount() {
    // TODO: get session data from store
  }

  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
