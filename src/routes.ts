import Authorize from '@/components/Authorize';
import CreateRoom from '@/components/CreateRoom';
import Intro from '@/components/Intro';
import NewGame from '@/components/NewGame';
import Wait from '@/components/Wait/Wait';

import {
  AUTHORIZE_ROUTE,
  INTRO_ROUTE,
  NEW_GAME_ROUTE,
  CREATE_ROOM,
  WAIT_FOR_PLAYERS,
} from './utils/consts';

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
  {
    path: NEW_GAME_ROUTE,
    Component: NewGame,
  },
  {
    path: CREATE_ROOM,
    Component: CreateRoom,
  },
  {
    path: WAIT_FOR_PLAYERS,
    Component: Wait,
  },
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
