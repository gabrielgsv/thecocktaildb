import axios from "axios"

export const getCategories = () => {
  return (dispatch) => {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then(res => {
        dispatch({
          type: "GET_CATEGORIES",
          categories: res.data.drinks
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}