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

export interface Card {
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
}

export interface ICard {
  countOfCards: number;
  description: string;
  effect: null | string;
  fourColors: boolean;
  points: number;
}
