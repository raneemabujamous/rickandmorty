import { combineReducers } from "redux";

const favouritesReducer = (state = [], action) => {
  if (action.type === "ADD_FAV_NAME") {
    return state.concat(action.payload);
  }
  if (action.type === "REMOVE_FAV") {
    return state.filter((a) => {
      console.log(a, "aaaaaaaaaaaaaaa", action.payload, "action.payload}");
      return a !== action.payload;
    });
  }

  return state;
};

export default combineReducers({
  favourites: favouritesReducer,
});
