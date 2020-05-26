import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "antd";
import AntCard from "../components/AntCard";
import { FlexCenter } from "../components/Flex";
import { getCategories } from "../store/actions/category";

const Home = () => {
  const dispatch = useDispatch();

  const [load, setLoad] = useState(true);

  useEffect(() => {
    dispatch(getCategories(() => setLoad(false)));
  }, []);

  const categories = useSelector((state) => state.Category.categories);
  return (
    <Skeleton active avatar paragraph={{ rows: 10 }} loading={load}>
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

export default Home;
