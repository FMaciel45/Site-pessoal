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

  h1 {
    font-size: 64px;
  }

  h2 {
    font-size: 44px;
    text-align: center;
  }

  h3 {
    font-size: 28px;
    text-align: center;

    margin: 36px 0px;
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

    p {
      font-size: 22px;
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

    a {
      padding: 14px 20px;

      background-color: ${({theme}) => theme.COLORS.BUTTON_BACKGROUND};

      border: none;
      border-radius: 5px;

      font-size: 20px;
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

  padding: 0px 64px;

  p {
    font-size: 20px;
    
    margin-top: 24px;
  }

  .courses-wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;

    padding: 0 182px;

    .course-wrapper {
      border: 3px solid ${({theme}) => theme.COLORS.BORDER_COLOR};
      border-radius: 8px;

      padding: 20px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      .content-wrapper {
        h4 {
          font-size: 22px;
        }

        h5 {
          font-size: 20px;

          margin: 12px 0px;
        }

        ul li {
          font-size: 20px;

          padding: 0px 24px;

          list-style: none;

          span {
            font-weight: bold;
          }
        }
      }

      img {
        width: 190px;
        height: 190px;

        border-radius: 5px;
      }
    }
  }
`

export const Techs = styled.div`
  margin-top: 48px;

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

    .reactIcon, .nodeIcon, .jsIcon, .tsIcon, .sqliteIcon {
      transition: transform 0.3s ease;
    }

    .reactIcon:hover, .nodeIcon:hover, .jsIcon:hover, .tsIcon:hover, .sqliteIcon:hover {
      transform: scale(1.25);
    }
  }
`

export const Projects = styled.div`
  margin-top: 48px;
  padding: 0px 58px;

  img {
    width: 280px;
    height: 280px;

    border-radius: 5px;

    transition: transform 0.4s ease;
  }

  img:hover {
    transform: scale(1.15);
  }

  .projects-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 32px;

    margin-top: 48px;
  }

  .project-wrapper {
    padding: 32px;

    max-width: 380px;
    min-height: 785px;

    border: 3px solid ${({theme}) => theme.COLORS.BORDER_COLOR};
    border-radius: 5px;

    h4 {
      text-align: center;
      font-size: 28px;

      margin-bottom: 38px;
    }

    p {
      font-size: 18px;

      margin-top: 38px;
      text-align: center;
    }

    .img-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .links-wrapper {
      margin-top: 24px;

      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 14px;

      button {
        background-color: ${({theme}) => theme.COLORS.BUTTON_BACKGROUND};

        padding: 8px 12px;

        border: none;
        border-radius: 5px;

        a {
          font-size: 20px;
        }
      }
    }
  }
`

export const Contact = styled.div`
  margin-top: 72px;

  p {
    font-size: 24px;
    text-align: center;

    margin: 24px 0px;
  }

  .contacts-wrapper {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 48px;

    justify-content: center;

    margin-bottom: 120px;

    a {
      font-size: 76px;

      margin-top: 24px;
    }
  }
`