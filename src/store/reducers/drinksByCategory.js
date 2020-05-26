const drinksByCategory = (state = {}, action) => {
  switch (action.type) {
    case 'GET_DRINKS':
      return {
        ...state,
        drinks: action.drinks,
      };
    case 'Loading':
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default drinksByCategory;
