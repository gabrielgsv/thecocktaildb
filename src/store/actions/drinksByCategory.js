import api from '../../utils/api'
import alert from '../../utils/alerts'

export const getDrinks = (category, callbackLoad) => {
  console.log(callbackLoad)
  return (dispatch) => {
    dispatch({
      type: 'Loading',
      loading: true,
    });
    api
      .get(
        `filter.php?c=${category}`,
      )
      .then((res) => {
        dispatch({
          type: 'GET_DRINKS',
          drinks: res.data.drinks,
        });
        callbackLoad()
      })
      .catch((err) => {
        console.log(err);
        alert()
        console.log(callbackLoad())
        callbackLoad()
        dispatch({
          type: 'Loading',
          loading: false,
        });
      });
  };
};
