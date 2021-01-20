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

type Color = 'red' | 'yellow' | 'green' | 'blue';

type CardName =
  | 'red-zero'
  | 'red-one'
  | 'red-two'
  | 'red-three'
  | 'red-four'
  | 'red-five'
  | 'red-six'
  | 'red-seven'
  | 'red-eight'
  | 'red-nine'
  | 'red-skip'
  | 'red-reverse'
  | 'red-draw2'
  | 'yellow-zero'
  | 'yellow-one'
  | 'yellow-two'
  | 'yellow-three'
  | 'yellow-four'
  | 'yellow-five'
  | 'yellow-six'
  | 'yellow-seven'
  | 'yellow-eight'
  | 'yellow-nine'
  | 'yellow-skip'
  | 'yellow-reverse'
  | 'yellow-draw2'
  | 'green-zero'
  | 'green-one'
  | 'green-two'
  | 'green-three'
  | 'green-four'
  | 'green-five'
  | 'green-six'
  | 'green-seven'
  | 'green-eight'
  | 'green-nine'
  | 'green-skip'
  | 'green-reverse'
  | 'green-draw2'
  | 'blue-zero'
  | 'blue-one'
  | 'blue-two'
  | 'blue-three'
  | 'blue-four'
  | 'blue-five'
  | 'blue-six'
  | 'blue-seven'
  | 'blue-eight'
  | 'blue-nine'
  | 'blue-skip'
  | 'blue-reverse'
  | 'blue-draw2'
  | 'wild'
  | 'wildDraw4';

type CardId =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50
  | 51
  | 52
  | 53;

type CardData = Record<CardName, ICard>;

type CardProps = {
  name?: CardName;
  id?: CardId;
};

interface ICard {
  id: CardId;
  color: Color | null;
  countOfCards: number;
  description: string;
  effect: null | string;
  points: number;
}
