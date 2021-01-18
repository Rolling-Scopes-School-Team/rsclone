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
  data: IUser;
}

type Position = 'top' | 'bottom' | 'right' | 'left';
