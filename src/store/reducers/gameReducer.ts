import * as actionTypes from '@/store/actionTypes';

const initialState: UsersState = {
  users: [],
};

const gameReducer = (state: UsersState = initialState, action: UserAction): UsersState => {
  switch (action.type) {
    case actionTypes.ADD_USER:
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
