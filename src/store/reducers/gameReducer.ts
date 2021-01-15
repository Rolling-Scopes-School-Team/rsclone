import ActionTypes from '@/store/actionTypes';
import { UsersState, UserAction } from '@/types/types';

const initialState: UsersState = {
  users: [],
};

const gameReducer = (state: UsersState = initialState, action: UserAction): UsersState => {
  switch (action.type) {
    case ActionTypes.GAME:
      return {
        ...state,
        users: state.users.concat({
          name: 'name',
          email: 'email',
        }),
      };

    default:
      return state;
  }
};

export default gameReducer;
