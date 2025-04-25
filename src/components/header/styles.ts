import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  grid-area: header;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_COLOR2};
  
  padding: 28px 0px;

  width: 100%;

  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    a {
      font-size: 36px;
    }
  }
`