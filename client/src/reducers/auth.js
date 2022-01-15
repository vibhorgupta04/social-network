import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../actions/type';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;
  // console.log("ACTION PAYLOAD", action.payload);

  switch (type) {

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };

    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      console.log("LOGIN_FAIL");
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };

    default:
      return state;
  }
}

export default authReducer;









// import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR } from '../actions/type';

// const initialState = {
//   token: localStorage.getItem('token'),
//   isAuthenticated: null,
//   loading: true,
//   user: null
// };

// function authReducer(state = initialState, action) {
//   const { type, payload } = action;
//   console.log(state);
//   console.log("hyyynunujnm", localStorage.getItem('token'));
//   switch (type) {


//     case USER_LOADED:
//       console.log(state);
//       return {
//         ...state,
//         isAuthenticated: true,
//         loading: false,
//         user: payload
//       };

//     case REGISTER_SUCCESS:
//       console.log(payload.token);
//       localStorage.setItem('token', payload.token);
//       return {
//         ...state,
//         ...payload,
//         isAuthenticated: true,
//         loading: false
//       };

//     case REGISTER_FAIL:
//     case AUTH_ERROR:
//       // localStorage.removeItem('token');
//       // console.log(payload);
//       return {
//         ...state,
//         token: null,
//         isAuthenticated: false,
//         loading: false
//       };
//     default:
//       return state;
//   }
// }

// export default authReducer;