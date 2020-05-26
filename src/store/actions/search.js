import api from "../../utils/api";
import alert from "../../utils/alerts";

export const search = (name, callbackLoad) => {
  return (dispatch) => {
    dispatch({
      type: "Loading",
      loading: true,
    });
    api
      .get(`search.php?s=${name}`)
      .then((res) => {
        dispatch({
          type: "SEARCH_DRINK",
          drink: res.data.drinks,
        });
        callbackLoad();
      })
      .catch((err) => {
        console.log(err);
        alert();
        callbackLoad();
        dispatch({
          type: "Loading",
          loading: false,
        });
      });
  };
};

export const removeSearch = () => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_SEARCH",
    });
  };
};
