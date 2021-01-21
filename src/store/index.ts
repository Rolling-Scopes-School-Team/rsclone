import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import gameReducer from '@/store/reducers/gameReducer';
import roomReducer from '@/store/reducers/roomReducer';
import roomsReducer from '@/store/reducers/roomsReducer';
import userReducer from '@/store/reducers/userReducer';

const persistedState = {};

const reducers = combineReducers({
  user: userReducer,
  game: gameReducer,
  room: roomReducer,
  rooms: roomsReducer,
});

const store = createStore(reducers, persistedState, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof reducers>;

export default store;
