import React from 'react';
import { ROUTES, ROUTES_TITLES } from '@config/screens';
import { white } from '@scss/colors';
import ImageHeader from '@app/components/navigationComponents/ImageHeader';
import BackButtonHeader from '@app/components/navigationComponents/BackButtonHeader';

export const screenNavOptions = {
  [ROUTES.LOADING_SCREEN]: {
    header: null
  },
  [ROUTES.LOGIN]: {
    header: null
  },
  [ROUTES.LIBRARY]: {
    headerBackground: <ImageHeader />,
    headerTitleStyle: {
      fontWeight: 'bold',
      color: white
    },
    headerBackImage: BackButtonHeader,
    headerTitle: ROUTES_TITLES[ROUTES.LIBRARY]
  },
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
