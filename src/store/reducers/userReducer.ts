import ActionTypes from '@/store/actionTypes';
import { IUser, UserAction } from '@/types/types';

const initialState: IUser = {
  name: null,
  email: null,
};

const userReducer = (state: IUser = initialState, action: UserAction): IUser => {
  switch (action.type) {
    case ActionTypes.REGISTRATION:
      return action.user;

    case ActionTypes.AUTHORIZATION:
      // eslint-disable-next-line no-console
      console.log(action);

      return action.user;

    default:
      return state;
  }
};

export default userReducer;
