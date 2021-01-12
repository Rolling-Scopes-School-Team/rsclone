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
  card: {
    countOfCards: number;
    description: string;
    effect: null | string;
    fourColors: boolean;
    points: number;
  };
}

export interface ICard {
  countOfCards: number;
  description: string;
  effect: null | string;
  fourColors: boolean;
  points: number;
}
