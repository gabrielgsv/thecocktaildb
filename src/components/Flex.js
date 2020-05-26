import styled from 'styled-components';

export const FlexCenter = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexLeft = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: left;
  align-content: center;
`;

export const FlexSafe = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: safe;
`;
