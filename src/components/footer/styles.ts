import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  grid-area: footer;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_COLOR2};
  
  padding: 28px 128px;

  position: fixed;
  bottom: 0;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 16px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 16px 45px;
    
    p {
      font-size: 10px; 
    }
  }
`