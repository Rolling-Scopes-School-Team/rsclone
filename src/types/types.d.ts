interface IUser {
  name?: string | null;
  email: string | null;
  password?: string | null;
}

type UsersState = {
  users: IUser[];
};

type UserAction = {
  type: string;
  user: IUser;
};

export interface ResType {
  data: Data;
}

interface Data {
  user: IUser;
  room: Room;
}

interface Room {
  name: string;

  size: number;

  fullness?: number;

  users?: string;

  password: string;
}

interface CreateRoomAction {
  type: string;
  room: Room;
}
