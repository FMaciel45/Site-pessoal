import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  height: 100vh;
`

export const Content = styled.div`
  display: grid;
  grid-template-areas:
  "profile"
  "about"
  "stack"
  "projects"
  "contact";

  h2 {
    font-size: 36px;
    text-align: center;
  }
`

export const Profile = styled.div`
  .myPicture {
    width: 375px;
    height: 405px;

    border-radius: 50%;
  }

  .description-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 62px;
    }

    p {
      font-size: 20px;
      margin-top: 18px;
    }

    .reactIcon {
      color: ${({theme}) => theme.COLORS.REACT_ICON};

      font-size: 156px;

      margin-bottom: 14px;
    }
  }

  .buttons-wrapper {
    margin-top: 14px;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    button {
      padding: 14px;

      background-color: ${({theme}) => theme.COLORS.BUTTON_BACKGROUND};

      border: none;
      border-radius: 5px;

      font-size: 16px;
    }
  }

  margin-top: 96px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 96px;
`

export const About = styled.div`
  margin-top: 96px;
`

export const Techs = styled.div`
  margin-top: 96px;

  padding: 32px 58px 48px 58px;

  .techs-logos {

    margin-top: 48px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 72px;

    font-size: 120px;

    .reactIcon {
      color: ${({theme}) => theme.COLORS.REACT_ICON};
    }

    .nodeIcon {
      color: ${({theme}) => theme.COLORS.NODE_ICON};
    }

    .jsIcon {
      color: ${({theme}) => theme.COLORS.JS_ICON};
    }

    .tsIcon {
      color: ${({theme}) => theme.COLORS.TS_ICON};
    }

    .sqliteIcon {
      color: ${({theme}) => theme.COLORS.SQLITE_ICON};
    }
  }
`

export const Projects = styled.div`
  margin-top: 48px;
`

export const Contact = styled.div`
  margin-top: 48px;
  margin-bottom: 960px;
`