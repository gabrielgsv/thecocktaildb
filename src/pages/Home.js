import React, { useEffect } from "react";
import { AntCard } from "../components/AntCard";
import { FlexCenter } from "../components/Flex";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/actions/category";
import { Link } from "react-router-dom";
import { Skeleton } from "antd";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const categories = useSelector((state) => state.Category.categories);
  const loading = useSelector((state) => state.Category.loading);
  return (
    <Skeleton active avatar paragraph={{ rows: 10 }} loading={loading}>
      {categories &&
        categories.map((category) => (
          <Link
            to={`/list-by-category?drink=${category.strCategory}`}
            style={{ margin: 20 }}
            key={category.strCategory}
          >
            <AntCard>
              <FlexCenter style={{ width: "100%", height: "100%" }}>
                <h2>{category.strCategory}</h2>
              </FlexCenter>
            </AntCard>
          </Link>
        ))}
    </Skeleton>
  );
};
