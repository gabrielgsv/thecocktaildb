import React, { useEffect } from "react";
import { FlexCenter } from "../components/Flex";
import { AntCard } from "../components/AntCard";
import { useDispatch, useSelector } from "react-redux";
import { getDrinks } from "../store/actions/drinksByCategory";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Skeleton } from "antd";

export default () => {
  const drinks = useSelector((state) => state.DrinksByCategory.drinks);
  const loading = useSelector((state) => state.DrinksByCategory.loading);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDrinks(query.get("drink")));
  }, []);

  return (
    <Skeleton active avatar paragraph={{ rows: 10 }} loading={loading}>
      {drinks &&
        drinks.map((drink) => (
          <Link
            to={`/drink?name=${drink.idDrink}`}
            style={{ margin: 20 }}
            key={drink.idDrink}
          >
            <AntCard
              title={drink.strDrink}
              key={drink.idDrink}
              style={{ height: 300 }}
            >
              <FlexCenter style={{ width: "100%", height: "100%" }}>
                <img
                  src={drink.strDrinkThumb}
                  style={{ width: "100%", borderRadius: 15 }}
                />
              </FlexCenter>
            </AntCard>
          </Link>
        ))}
    </Skeleton>
  );
};
