import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getDrink } from "../store/actions/drink";
import styled from "styled-components";
import { FlexCenter } from "../components/Flex";
import { Skeleton } from "antd";

export default () => {
  const drink = useSelector((state) => {
    if (state.Drink.drink) {
      return state.Drink.drink[0];
    }
  });

  const loading = useSelector((state) => state.Drink.loading);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDrink(query.get("name")));
  }, []);

  const FlexMiddle = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  `;

  const IngredientCount = () => {
    let ingredients = [];
    for (let index = 1; index <= 15; index++) {
      ingredients.push(index);
    }

    return ingredients;
  };

  return (
    <Skeleton active avatar paragraph={{ rows: 10 }} loading={loading}>
      {drink && (
        <>
          <FlexCenter style={{ height: 50, marginBottom: 70 }}>
            <h1>
              {drink.strDrink} - {drink.strAlcoholic}
            </h1>
          </FlexCenter>
          <FlexMiddle
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <FlexMiddle style={{ width: 300 }}>
              <img
                src={drink.strDrinkThumb}
                style={{ width: 300, height: "auto", borderRadius: 15 }}
              />
            </FlexMiddle>

            <FlexMiddle style={{ justifyContent: "flex-start", width: 300 }}>
              <h2 style={{ fontSize: 25 }}>Instructions: </h2>
              <p style={{ fontSize: 20 }}>{drink.strInstructions}</p>

              <div style={{ marginTop: 30 }}>
                <h2 style={{ fontSize: 25 }}>Ingredient: </h2>
                {IngredientCount().map((number) => (
                  <p style={{ fontSize: 20 }} key={number}>
                    {drink["strMeasure" + number]}{" "}
                    {drink["strIngredient" + number]}
                  </p>
                ))}
              </div>
            </FlexMiddle>
          </FlexMiddle>
        </>
      )}
    </Skeleton>
  );
};
