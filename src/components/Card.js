import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = (props) => {
  const CardStyle = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    height: ${props.height || '95vh'};
    width: ${props.width || '95vw'};
    align-content: flex-start;
    justify-content: ${props.alignHorizontal || 'center'};
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

export default Card;
