/* eslint-disable react/prop-types */
import React from 'react';
import { ROUTES, ROUTES_TITLES } from '@config/screens';
import { white } from '@scss/colors';
import ImageHeader from '@app/components/navigationComponents/ImageHeader';
import BackButtonHeader from '@app/components/navigationComponents/BackButtonHeader';
import LogoutButton from '@app/components/navigationComponents/LogoutButton';
import IconComponent from '@app/components/baseComponents/IconComponent';

import { lightBlue, gray } from '../scss/colors';

export const screenNavOptions = {
  [ROUTES.LOADING_SCREEN]: {
    header: null
  },
  [ROUTES.LOGIN]: {
    header: null
  },
  [ROUTES.LIBRARY]: ({ navigation }) => ({
    headerBackground: <ImageHeader />,
    headerTitleStyle: {
      fontWeight: 'bold',
      color: white
    },
    headerBackImage: BackButtonHeader,
    headerLeft: <LogoutButton navigation={navigation} />,
    headerTitle: ROUTES_TITLES[ROUTES.LIBRARY]
  }),
  [ROUTES.WISHLIST]: {
    headerBackground: <ImageHeader />,
    headerTitleStyle: {
      fontWeight: 'bold',
      color: white
    },
    headerBackImage: BackButtonHeader,
    headerTitle: ROUTES_TITLES[ROUTES.WISHLIST]
  },
  [ROUTES.BOOKDETAIL]: {
    headerBackground: <ImageHeader />,
    headerTitleStyle: {
      fontWeight: 'bold',
      color: white
    },
    headerBackImage: BackButtonHeader,
    headerTitle: ROUTES_TITLES[ROUTES.BOOKDETAIL]
  }
};

export const bottomTabDefaultOptions = ({ navigation }) => ({
  tabBarIcon: ({ tintColor }) => {
    const { routeName } = navigation.state;
    return <IconComponent routeName={routeName} size={25} color={tintColor} />;
  },
  tabBarOptions: {
    tabStyle: { alignContent: 'space-between' },
    activeTintColor: lightBlue,
    inactiveTintColor: gray
  }
});
