const drinksByCategory = (state = {}, action) => {
  switch (action.type) {
    case "GET_DRINKS":
      return {
        ...state,
        drinks: action.drinks,
      };
    default:
      return state;
  }
};

export default drinksByCategory;
