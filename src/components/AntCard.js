import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

const AntCard = (props) => {
  const CardStyle = styled(Card)`
    border-radius: 10px;
    border: 1px solid #b5b5b5;
    width: 200px;
    height: 130px;
    cursor: pointer;
    :hover {
      border: 1px solid #b5b5b5;
      box-shadow: 0px 0px 25px -14px #002766;
    }
  `;

  return (
    <>
      <CardStyle {...props}>{props.children}</CardStyle>
    </>
  );
};

export default AntCard;
