import axios from "axios"

export const search = (name) => {
  return (dispatch) => {
    dispatch({
      type: "Loading",
      loading: true
    })
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      .then(res => {
        dispatch({
          type: "SEARCH_DRINK",
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

export const removeSearch = () => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_SEARCH"
    })
  }
}