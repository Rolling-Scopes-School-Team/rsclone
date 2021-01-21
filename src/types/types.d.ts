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
  rooms: Array<Room>;
}

interface Room {
  name: string;

  size: number;

  fullness?: number;

  users?: string;

  password?: string;
}

type Rooms = Array<Room>;

interface CreateRoomAction {
  type: string;
  room: Room;
}

interface GetRoomsAction {
  type: string;
  rooms: Array<Room>;
}

export type ICardData = {
  zero: ICard;
  one: ICard;
  two: ICard;
  three: ICard;
  four: ICard;
  five: ICard;
  six: ICard;
  seven: ICard;
  eight: ICard;
  nine: ICard;
  skip: ICard;
  reverse: ICard;
  draw2: ICard;
  wild: ICard;
  wildDraw4: ICard;
};

export interface CardProps {
  background: 'yellow' | 'red' | 'dark' | 'blue' | 'green';
  card:
  | 'zero'
  | 'one'
  | 'two'
  | 'three'
  | 'four'
  | 'five'
  | 'six'
  | 'seven'
  | 'eight'
  | 'nine'
  | 'skip'
  | 'reverse'
  | 'draw2'
  | 'wild'
  | 'wildDraw4';
  front: boolean;
}

export interface ICard {
  countOfCards: number;
  description: string;
  effect: null | string;
  fourColors: boolean;
  points: number;
}
