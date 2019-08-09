import { ROUTES } from '@constants/routes';

const DEFAULT_ROUTE_ICON = 'circle';

const ICON_ROUTES_ARRAY = {
  [ROUTES.LIBRARY]: 'bookmark',
  [ROUTES.WISHLIST]: 'star'
};

export const ICON_ROUTES = ICON_ROUTES_ARRAY || DEFAULT_ROUTE_ICON;
