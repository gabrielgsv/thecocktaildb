const category = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.categories,
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

export default category;
