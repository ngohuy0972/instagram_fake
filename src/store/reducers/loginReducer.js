export const initialLoginState = {
  isLoading: true,
  userName: null,
  userToken: null,
};

// state storage data you want passing to component
export const usersReducer = (state, action) => {

  switch( action.type ) {
    case 'RETRIEVE_TOKEN': 
      return {
        ...state,
        userName: action.id,
        userToken: action.token,
        isLoading: false,
      };
    case 'LOGIN': 
      return {
        ...state,
        userName: action.id,
        userToken: action.token,
        isLoading: false,
      };
    case 'LOGOUT': 
      return {
        ...state,
        userName: null,
        userToken: null,
        isLoading: false,
      };
    case 'REGISTER': 
      return {
        ...state,
        userName: action.id,
        userToken: action.token,
        isLoading: false,
      };

    default:
      return state;
  }
};