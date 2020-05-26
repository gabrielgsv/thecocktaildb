const drink = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCH_DRINK':
      return {
        ...state,
        drink: action.drink,
      };
    case 'REMOVE_SEARCH':
      return {};
    case 'Loading':
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default drink;
