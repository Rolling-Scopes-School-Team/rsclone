import ActionTypes from '@/store/actionTypes';
import { Rooms, GetRoomsAction } from '@/types/types';

const initialState: never[] | Rooms = [];

const userReducer = (state: Rooms = initialState, action: GetRoomsAction): Rooms => {
  switch (action.type) {
    case ActionTypes.FETCH_ROOMS:
      // eslint-disable-next-line no-console
      console.log(action);

      return [...action.rooms];

    default:
      return state;
  }
};

export default userReducer;
