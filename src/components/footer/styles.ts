import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_COLOR2};
  
  padding: 28px 92px;

  position: fixed;
  bottom: 0;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 14px;
  }
`