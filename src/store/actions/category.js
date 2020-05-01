import axios from "axios"

export const getCategories = () => {
  return (dispatch) => {
    dispatch({
      type: "Loading",
      loading: true
    })
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then(res => {
        dispatch({
          type: "GET_CATEGORIES",
          categories: res.data.drinks
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