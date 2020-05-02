import axios from "axios"

export const getDrinks = (category) => {
  return (dispatch) => {
    dispatch({
      type: "Loading",
      loading: true
    })
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(res => {
        dispatch({
          type: "GET_DRINKS",
          drinks: res.data.drinks
        })
        dispatch({
          type: "Loading",
          loading: false
        })
      })
      .catch(err => {
        console.log(err)
        dispatch({
          type: "Loading",
          loading: false
        })
      })
  }
}