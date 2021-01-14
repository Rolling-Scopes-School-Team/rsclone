import * as actionTypes from '@/store/actionTypes';

export function simulateHttpRequest(user: UserAction) {
  // ! temp
  return (dispatch: any) => {
    setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      dispatch(user);
    }, 5000);
  };
}

export function setUserName(user: IUser) {
  const action: UserAction = {
    type: actionTypes.ADD_USER,
    user,
  };

  return simulateHttpRequest(action);
}
