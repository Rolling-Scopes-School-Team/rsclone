interface IUser {
  name: string | null;
  email: string | null;
}

type UsersState = {
  users: IUser[];
};

type UserAction = {
  type: string;
  user: IUser;
};
