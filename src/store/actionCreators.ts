import axios from 'axios';

import ActionTypes from '@/store/actionTypes';
import { CreateRoomAction, IUser, ResType, Room, UserAction } from '@/types/types';

const registrationAC = (data: IUser): UserAction =>
  ({
    type: ActionTypes.REGISTRATION,
    user: data,
  } as UserAction);

const authAC = (data: IUser): UserAction =>
  ({
    type: ActionTypes.AUTHORIZATION,
    user: data,
  } as UserAction);

const createRoomAC = (data: Room): CreateRoomAction =>
  ({
    type: ActionTypes.CREATE_ROOM,
    room: data,
  } as CreateRoomAction);

export const Registration = (userData: IUser) => async (dispatch: (arg0: UserAction) => void) => {
  try {
    const response: ResType = await axios.post('http://localhost:3002/auth/create', userData);

    const { data } = response;

    const { user } = data;

    dispatch(registrationAC(user));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export const Auth = (userData: IUser) => async (dispatch: (arg0: UserAction) => void) => {
  try {
    const response: ResType = await axios.post('http://localhost:3002/auth/authUser', userData, {
      withCredentials: true,
    });

    const { data } = response;

    const { user } = data;

    dispatch(authAC(user));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export const autoAuth = () => async (dispatch: (arg0: UserAction) => void) => {
  try {
    const response: ResType = await axios.get('http://localhost:3002/auth/autologin', {
      withCredentials: true,
    });

    const { data } = response;

    const { user } = data;

    dispatch(authAC(user));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export const createRoomAPI = (RoomData: Room) => async (
  dispatch: (arg0: CreateRoomAction) => void,
) => {
  try {
    const response: ResType = await axios.post('http://localhost:3002/game/createRoom', RoomData, {
      withCredentials: true,
    });

    const { data } = response;

    const { room } = data;

    dispatch(createRoomAC(room));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export default { Registration, Auth, autoAuth };
