const initilState = {
    isLoading: false,
    data: null,
    readUser: null,
    userLogin: null,
    profile: null
  }
  
  export default function reducerUser(state={...initilState}, action) {
    switch (action.type) {
      case 'ADMIN_GET_ALL_USER':
        return {
          ...state,
          data: action.payload
        }
      case 'READ_USER_BY_ID':
        return {
          ...state,
          readUser: action.payload
        }
      case 'USER_LOGIN':
        return {
          ...state,
          userLogin: action.payload
        }
      case 'SET_PROFILE':
        return {
          ...state,
          profile: action.payload
        }
      default: 
        return state;
    }
  }