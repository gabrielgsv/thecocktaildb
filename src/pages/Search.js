import React from "react";
import { FlexCenter } from "../components/Flex";
import { AntCard } from "../components/AntCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Skeleton } from "antd";
import { useDispatch } from "react-redux";
import { removeSearch } from "../store/actions/search";

export default (props) => {
  const loading = useSelector((state) => state.Search.loading);
  const drinks = props.drinks;
  const dispatch = useDispatch();
  return (
    <Skeleton active avatar paragraph={{ rows: 10 }} loading={loading}>
      {drinks &&
        drinks.map((drink) => (
          <Link
            to={`/drink?name=${drink.idDrink}`}
            style={{ margin: 20 }}
            key={drink.idDrink}
            onClick={() => dispatch(removeSearch())}
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
