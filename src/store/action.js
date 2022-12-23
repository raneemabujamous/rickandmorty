const addToFavourites = (payload) => {
  return { type: "ADD_FAV_NAME", payload };
};
const removeFromFav = (payload) => {
  return { type: "REMOVE_FAV", payload };
};
export { addToFavourites, removeFromFav };
