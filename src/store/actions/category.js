import api from '../../utils/api'
import alert from '../../utils/alerts'

export const getCategories = (callbackLoad) => {
  return (dispatch) => {
    dispatch({
      type: 'Loading',
      loading: true,
    });
    api
      .get('list.php?c=list')
      .then((res) => {
        dispatch({
          type: 'GET_CATEGORIES',
          categories: res.data.drinks,
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
