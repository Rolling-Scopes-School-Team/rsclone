import axios from 'axios';

import ActionTypes from '@/store/actionTypes';
import { IUser, ResType, UserAction } from '@/types/types';

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

export const Registration = (user: IUser) => async (dispatch: (arg0: UserAction) => void) => {
  try {
    const response: ResType = await axios.post('http://localhost:3002/auth/create', user);

    const { data } = response;

    dispatch(registrationAC(data));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export const Auth = (user: IUser) => async (dispatch: (arg0: UserAction) => void) => {
  try {
    const response: ResType = await axios.post('http://localhost:3002/auth/authUser', user, {
      withCredentials: true,
    });

    const { data } = response;

    dispatch(authAC(data));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export default { Registration, Auth };
