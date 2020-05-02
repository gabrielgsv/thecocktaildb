import React, { useState } from "react";
import { Input, Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { search, removeSearch } from "../store/actions/search";
import { Link } from "react-router-dom";

export default () => {
  const { Search } = Input;
  const dispatch = useDispatch();
  const [textSearch, setTextSearch] = useState("");

  const searchDrink = useSelector((state) => state.Search.drink);
  const home = () => {
    if (searchDrink) dispatch(removeSearch());
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <Link to="/">
          <Button
            size="large"
            type="primary"
            shape="circle"
            icon={<HomeOutlined />}
            onClick={() => home()}
            style={{ margin: "0px 10px" }}
          />
        </Link>
        <Search
          placeholder="Search"
          style={{ width: 400, border: "1px solid #b5b5b5" }}
          value={textSearch}
          onChange={(e) => setTextSearch(e.target.value)}
          onSearch={(value) => dispatch(search(value))}
          enterButton
          size="large"
        />
        <div></div>
      </div>
    </>
  );
};
