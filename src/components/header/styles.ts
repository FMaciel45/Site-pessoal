import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_COLOR2};
  
  padding: 28px 0px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;
`