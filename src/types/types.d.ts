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
