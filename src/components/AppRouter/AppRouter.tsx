import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import { publicRoutes, privateRoutes } from '@/routes';
import { RootState } from '@/store';
import { autoAuth } from '@/store/actionCreators';
import { INTRO_ROUTE, NEW_GAME_ROUTE, CREATE_ROOM, WAIT_FOR_PLAYERS } from '@/utils/consts';

const AppRouter: FC = (): JSX.Element => {
  // const { auth } = useContext(Context);
  // const [user] = useAuthState(auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoAuth());
  }, []);

  const user = useSelector<RootState, RootState['user']>(state => state.user);

  return user.name ? (
    <Switch>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={INTRO_ROUTE} />
      <Redirect to={NEW_GAME_ROUTE} />
      <Redirect to={CREATE_ROOM} />
      <Redirect to={WAIT_FOR_PLAYERS} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={INTRO_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
