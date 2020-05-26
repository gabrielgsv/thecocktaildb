import api from '../../utils/api'
import alert from '../../utils/alerts'

export const getDrink = (id, callbackLoad) => {
  return (dispatch) => {
    dispatch({
      type: 'Loading',
      loading: true,
    });
    api
      .get(`lookup.php?i=${id}`)
      .then((res) => {
        dispatch({
          type: 'GET_DRINK',
          drink: res.data.drinks,
        });
        callbackLoad()
      })
      .catch((err) => {
        console.log(err);
        alert()
        callbackLoad()
        dispatch({
          type: 'Loading',
          loading: false,
        });
      });
  };
};
