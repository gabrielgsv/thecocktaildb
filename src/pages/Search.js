import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Skeleton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { removeSearch } from "../store/actions/search";
import { FlexCenter } from "../components/Flex";
import AntCard from "../components/AntCard";
import { search } from "../store/actions/search";

const SearchPage = (props) => {
  const [load, setLoad] = useState(true);
  
  const dispatch = useDispatch();
  const searchValue = props.location.state.searchValue;
  useEffect(() => {
    dispatch(search(searchValue, () => setLoad(false)));
  }, []);
  const drinks = useSelector((state) => state.Search.drink);

  return (
    <Skeleton active avatar paragraph={{ rows: 10 }} loading={load}>
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
                  alt="drinkImage"
                  style={{ width: "100%", borderRadius: 15 }}
                />
              </FlexCenter>
            </AntCard>
          </Link>
        ))}
    </Skeleton>
  );
};

export default SearchPage;
