import Authorize from '@/components/Authorize';

import Intro from '@/components/Intro';

import { AUTHORIZE_ROUTE, INTRO_ROUTE } from './utils/consts';

export const publicRoutes = [
  {
    path: INTRO_ROUTE,
    Component: Intro,
  },
  {
    path: AUTHORIZE_ROUTE,
    Component: Authorize,
  },
];

export const privateRoutes = [
  {
    path: INTRO_ROUTE,
    Component: Intro,
  },
  {
    path: AUTHORIZE_ROUTE,
    Component: Authorize,
  },
  // {
  //   path: NEW_GAME_ROUTE,
  //   Component: null,
  // },
  // {
  //   path: GAME_ROUTE,
  //   Component: null,
  // },
  // {
  //   path: GAME_ROUTE,
  //   Component: null,
  // },
  // {
  //   path: RULES_ROUTE,
  //   Component: null,
  // },
  // {
  //   path: OPTIONS_ROUTE,
  //   Component: null,
  // },
  // {
  //   path: AUTHORIZE_ROUTE,
  //   Component: null,
  // },
];
