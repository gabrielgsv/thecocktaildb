import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Skeleton } from "antd";
import { useLocation } from "react-router-dom";
import { getDrink } from "../store/actions/drink";
import { FlexCenter } from "../components/Flex";

const Drink = () => {
  const drink = useSelector((state) => {
    if (state.Drink.drink) {
      return state.Drink.drink[0];
    }
  });

  const [load, setLoad] = useState(true);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDrink(query.get("name"), () => setLoad(false)));
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
    <Skeleton active avatar paragraph={{ rows: 10 }} loading={load}>
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
                alt="drinkImage"
                style={{ width: 300, height: "auto", borderRadius: 15 }}
              />
            </FlexMiddle>

            <FlexMiddle style={{ justifyContent: "flex-start", width: 300 }}>
              <div>
                <h2 style={{ fontSize: 25 }}>Ingredient: </h2>
                {IngredientCount().map((number) => (
                  <p style={{ fontSize: 20 }} key={number}>
                    {drink["strMeasure" + number]}
                    {drink["strIngredient" + number]}
                  </p>
                ))}
              </div>

              <div>
                <h2 style={{ fontSize: 25 }}>Instructions: </h2>
                <p style={{ fontSize: 20 }}>{drink.strInstructions}</p>
              </div>
            </FlexMiddle>
          </FlexMiddle>
        </>
      )}
    </Skeleton>
  );
};

export default Drink;
