export default (state = {
  fetching: false,
  fetched: false,
  user: {},
  error: null
}, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      state = {
        ...state,
        fetching: false,
        user: {...state.user, name: action.payload}
      };
      break;
    case "CHANGE_AGE":
      state = {
        ...state,
        fetching: false,
        user: {...state.user, age: action.payload}
      };

      break;
    case "USER_LOADING":
      state = {
        ...state,
        fetching: true
      };
      break;
    case "EEE":
      throw "EEE type";
  }
  return state;
};