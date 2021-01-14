import * as actionTypes from '@/store/actionTypes';

const initialState: IUser = {
  name: null,
  email: null,
};

const userReducer = (state: IUser = initialState, action: UserAction): IUser => {
  switch (action.type) {
    case actionTypes.SET_NAME:
      return action.user;

    default:
      return state;
  }
};

export default userReducer;
