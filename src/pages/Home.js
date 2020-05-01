import React, { useEffect } from "react";
import { Card } from "../components/Card";
import { AntCard } from "../components/AntCard";
import { FlexCenter } from "../components/Flex";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/actions/category";
import { Link } from "react-router-dom";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const categories = useSelector((state) => state.Category.categories);
  return (
    <>
      {categories &&
        categories.map((category) => (
          <Link
            to={`/list-by-category?drink=${category.strCategory}`}
            style={{ margin: 20 }}
          >
            <AntCard>
              <FlexCenter style={{ width: "100%", height: "100%" }}>
                <h2>{category.strCategory}</h2>
              </FlexCenter>
            </AntCard>
          </Link>
        ))}
      ;
    </>
  );
};
