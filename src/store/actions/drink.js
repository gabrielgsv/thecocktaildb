import axios from "axios"

export const getDrink = (name) => {
  return (dispatch) => {
    dispatch({
      type: "Loading",
      loading: true
    })
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      .then(res => {
        dispatch({
          type: "GET_DRINK",
          drink: res.data.drinks
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