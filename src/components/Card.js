import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Card = (props) => {
  const CardStyle = styled.div`
    padding: 20px;
    border-radius: 30px;
    box-shadow: 0px 0px 85px -14px rgba(0,0,0,0.57);
    display: flex;
    height: ${props.height || "auto"};
    width: ${props.width || "auto"};
    flex-direction: ${props.direction || "row"};
    align-items: ${props.align || "center"};
  `;

  return (
    <>
      <CardStyle>{props.children}</CardStyle>
    </>
  );
};

Card.propTypes = {
  children: PropTypes.any,
  direction: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};
