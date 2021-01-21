import ActionTypes from '@/store/actionTypes';
import { Room, CreateRoomAction } from '@/types/types';

const initialState = {
  name: '',
  password: '',
  size: 0,
};

const userReducer = (state: Room = initialState, action: CreateRoomAction): Room => {
  switch (action.type) {
    case ActionTypes.CREATE_ROOM:
      return {
        name: action.room.name,
        size: action.room.size,
        fullness: action.room.fullness,
        users: action.room.users,
        password: action.room.password,
      };

    default:
      return state;
  }
};

export default userReducer;
