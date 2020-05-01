import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Card = (props) => {
  const CardStyle = styled.div`
    padding: 20px;
    border-radius: 30px;
    box-shadow: 0px 0px 85px -14px rgba(0, 0, 0, 0.57);
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    height: ${props.height || "95vh"};
    width: ${props.width || "95vw"};
    align-content: flex-start;
    justify-content: ${props.alignHorizontal || "center"};
  `;

  return (
    <>
      <CardStyle>{props.children}</CardStyle>
    </>
  );
};

Card.propTypes = {
  alignHorizontal: PropTypes.string,
  alignVertical: PropTypes.string,
  children: PropTypes.any,
  direction: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};
