import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Card } from "antd";

export const AntCard = (props) => {
  const CardStyle = styled(Card)`
    border-radius: 15px;
    border: 1px solid #b5b5b5;
    margin: 20px;
    width: 200px;
    height: 130px;
    display: flex;
    cursor: pointer;
    :hover {
      border: 1px solid #b5b5b5;
      box-shadow: 0px 0px 65px -14px #002766;
    }
  `;

  return (
    <>
      <CardStyle {...props}>{props.children}</CardStyle>
    </>
  );
};

AntCard.propTypes = {
  children: PropTypes.any,
};
