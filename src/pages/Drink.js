import React, { useEffect } from "react";
import { Card } from "../components/Card";
import { AntCard } from "../components/AntCard";
import { FlexCenter } from "../components/Flex";
import { useDispatch, useSelector } from "react-redux";
import { getDrinks } from "../store/actions/drinksByCategory";
import { useLocation } from "react-router-dom";

export default () => {
  // const drinks = useSelector((state) => state.DrinksByCategory.drinks);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getDrinks(query.get("drink")));
  // }, []);

  return (
    <>
      <h1>{query.get("name")}</h1>
    </>
  );
};
