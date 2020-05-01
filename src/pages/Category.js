import React, { useEffect } from "react";
import { Card } from "../components/Card";
import { AntCard } from "../components/AntCard";
import { FlexCenter } from "../components/Flex";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/actions/category";
import { useLocation } from "react-router-dom";

export default () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getCategories());
  // }, []);

  // const categories = useSelector((state) => state.Category.categories);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  return (
    <FlexCenter>
      <Card
        width="90vw"
        height="90vh"
        alignVertical="none"
        alignHorizontal="center"
      >
        {/* {categories &&
          categories.map((category) => (
            <AntCard>
              <FlexCenter style={{ width: "100%", height: "100%" }}>
                <h2>{category.strCategory}</h2>
              </FlexCenter>
            </AntCard>
          ))} */}
          <h3>{query.get("drink")}</h3>
      </Card>
    </FlexCenter>
  );
};
