import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  max-width: 100vw;
  height: 100vh;
`

export const Content = styled.div`
  display: grid;
  grid-template-areas:
  "header"
  "profile"
  "about"
  "stack"
  "projects"
  "contact"
  "footer";

  h1 {
    font-size: 54px;
  }

  h2 {
    font-size: 34px;
    text-align: center;
  }

  h3 {
    font-size: 24px;
    text-align: center;

    margin: 36px 0px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    h1 {
      font-size: 120px;
    }

    h2 {
      font-size: 80px;
    }

    h3 {
      font-size: 52px;

      margin-top: 64px;
    }
  }
`

export const Profile = styled.div`
  grid-area: profile;

  padding: 96px 0px 0px 0px;

  margin-top: 96px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 96px;

  .myPicture {
    width: 345px;
    height: 365px;

    border-radius: 50%;
  }

  .description-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 18px;
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

      font-size: 18px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .myPicture {
      width: 650px;
      height: 680px;

      margin-top: 96px;
    }

    .description-wrapper {
      .reactIcon {
        font-size: 216px;
      }

      p {
        font-size: 44px;
      }

      a {
        font-size: 42px;

        margin-top: 24px;

        padding: 20px 32px;
      }
    }
  }
`

export const About = styled.div`
  grid-area: about;

  margin-top: 96px;

  .about-wrapper {    
    p {
      padding: 0px 192px;

      font-size: 18px;
    
      margin-top: 24px;
    }
  }

  .courses-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 36px;

    .course-wrapper {
      border: 3px solid ${({theme}) => theme.COLORS.BORDER_COLOR};
      border-radius: 8px;

      padding: 20px;

      width: 850px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      .content-wrapper {
        h4 {
          font-size: 24px;
        }

        h5 {
          font-size: 20px;

          margin: 4px 0px 24px 0px;
        }

        ul li {
          font-size: 18px;

          margin-left: 24px;

          list-style: none;

          span {
            font-weight: bold;
          }
        }
      }

      img {
        width: 180px;
        height: 180px;

        border-radius: 5px;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-top: 128px;
    
    .about-wrapper {
      p {
        font-size: 38px;
        text-align: center;

        padding: 0px 64px;
      }
    }

    .courses-wrapper {

      .course-wrapper {
        img {
          width: 260px;
          height: 260px;
        }

        padding: 36px 24px;

        border: 5px solid ${({theme}) => theme.COLORS.BORDER_COLOR};

        .content-wrapper {
          h4 {
            font-size: 50px;
          }

          h5 {
            font-size: 40px;

            margin: 12px 0px;
          }

          ul li {
            font-size: 38px;

            margin-left: 24px;

            list-style: none;
          }
        }
      }
    }
  }
`

export const Techs = styled.div`
  grid-area: stack;

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

    .logosOne-wrapper, .logosTwo-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      gap: 72px;
    }

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

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-top: 120px;

    .techs-logos {
      font-size: 220px;
      
      display: flex;
      flex-direction: column;
      gap: 120px;

      .logosOne-wrapper {
        display: flex;
        align-items: center;
        gap: 120px;
      }

      .logosTwo-wrapper {
        display: flex;
        align-items: center;
        gap: 120px;
      }
    }
  }
`

export const Projects = styled.div`
  grid-area: projects;

  margin-top: 48px;
  padding: 0px 58px;

  img {
    width: 270px;
    height: 270px;

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

    .project-wrapper {
      padding: 32px;

      max-width: 380px;
      min-height: 705px;

      border: 3px solid ${({theme}) => theme.COLORS.BORDER_COLOR};
      border-radius: 5px;

      h4 {
        text-align: center;
        font-size: 24px;

        margin-bottom: 24px;
      }

      p {
        font-size: 16px;

        margin-top: 26px;
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

          padding: 8px 16px;

          border: none;
          border-radius: 5px;

          a {
            font-size: 18px;
          }
        }
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-top: 120px;

    img {
      width: 750px;
      height: 750px;
    }

    .projects-wrapper {
      flex-direction: column;
      gap: 64px;

      .project-wrapper {
        max-width: 865px;

        padding: 48px 24px 86px 24px;

        border: 6px solid ${({theme}) => theme.COLORS.BORDER_COLOR};

        h4 {
          font-size: 52px;
        }

        p {
          font-size: 38px;

          margin-top: 48px;
        }
        
        .links-wrapper {
          margin-top: 72px;

          gap: 32px;

          button {
            padding: 16px 32px;

            a {
              font-size: 42px;
            }
          }
        }
      }
    }
  }
`

export const Contact = styled.div`
  grid-area: contact;

  margin-top: 72px;

  p {
    font-size: 22px;
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

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-top: 120px;

    p {
      font-size: 48px;
    }

    .contacts-wrapper {
      gap: 76px;

      a {
        font-size: 126px;
      }
    }
  }
`