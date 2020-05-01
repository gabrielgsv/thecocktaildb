const category = (state = {}, action) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.categories,
      };
    default:
      return state;
  }
};

export default category;
