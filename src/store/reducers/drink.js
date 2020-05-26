const drink = (state = {}, action) => {
  switch (action.type) {
    case 'GET_DRINK':
      return {
        ...state,
        drink: action.drink,
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

export default drink;
