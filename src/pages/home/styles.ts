import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

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
    font-size: 64px;
  }

  h2 {
    font-size: 54px;
    text-align: center;
  }

  h3 {
    font-size: 32px;
    text-align: center;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    h1 {
      font-size: 32px;
    }

    h2 {
      font-size: 28px;
    }

    h3 {
      font-size: 18px;
      margin: 24px 0;
    }
  }
`;

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
      text-align: center;
    }

    .reactIcon {
      color: ${({ theme }) => theme.COLORS.REACT_ICON};
      font-size: 120px;
      margin-bottom: 14px;
    }

    .buttons-wrapper {
      margin-top: 14px;
      display: flex;
      gap: 12px;

      a {
        padding: 12px 20px;
        background-color: ${({ theme }) => theme.COLORS.BUTTON_BACKGROUND};
        border: none;
        border-radius: 5px;
        font-size: 18px;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;

    padding: 0px;

    .myPicture {
      width: 270px;
      height: 280px;
      margin-top: 32px;
    }

    .description-wrapper {
      .reactIcon {
        font-size: 96px;

        margin-top: -76px;
      }

      p {
        font-size: 16px;
      }
    }

    .buttons-wrapper {
      flex-direction: column;
      
      a {
        font-size: 16px;
        text-align: center;
      }
    }
  }
`;

export const About = styled.div`
  grid-area: about;

  margin-top: 96px;

  .about-wrapper {
    p {
      padding: 0 280px;
      margin: 24px 0px; 

      font-size: 18px;
      text-align: center;
    }
  }

  .courses-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;

    margin-top: 24px;

    .course-wrapper {
      width: 90%;
      max-width: 800px;

      border: 3px solid ${({ theme }) => theme.COLORS.BORDER_COLOR};
      border-radius: 8px;

      padding: 20px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .content-wrapper {
        h4 {
          font-size: 26px;
        }

        h5 {
          font-size: 22px;
          margin: 8px 0;
        }
        
        ul li {
          font-size: 18px;
          list-style: none;
          margin-left: 24px;

          span {
            font-weight: bold;
          }
        }
      }

      img {
        width: 150px;
        height: 150px;
        border-radius: 5px;
        margin-top: 16px;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .about-wrapper {
      h2 {
        margin-top: -64px;
      }

      p {
        font-size: 14px;

        padding: 0px 36px;
      }
    }

    .courses-wrapper {
      gap: 14px;

      .course-wrapper {
        padding: 14px 8px;

        .content-wrapper {
          h4 {
            font-size: 18px;
          }

          h5 {
            font-size: 16px;
          }

          ul li {
            font-size: 14px;
            margin-left: 10px;
          }
        }

        img {
          width: 120px;
          height: 120px;
        }
      }
    }
  }
`;

export const Techs = styled.div`
  grid-area: stack;

  margin-top: 48px;
  padding: 32px;

  .techs-logos {
    margin-top: 32px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 64px;

    font-size: 110px;

    .reactIcon {
      color: ${({ theme }) => theme.COLORS.REACT_ICON};
    }
    .nodeIcon {
      color: ${({ theme }) => theme.COLORS.NODE_ICON};
    }
    .jsIcon {
      color: ${({ theme }) => theme.COLORS.JS_ICON};
    }
    .tsIcon {
      color: ${({ theme }) => theme.COLORS.TS_ICON};
    }
    .sqliteIcon {
      color: ${({ theme }) => theme.COLORS.SQLITE_ICON};
    }

    .csharpIcon {
      color: ${({ theme }) => theme.COLORS.CSHARP_ICON};
    }

    .dotnetIcon {
      color: ${({ theme }) => theme.COLORS.DOTNET_ICON};
    }

    .mysqlIcon {
      color: ${({ theme }) => theme.COLORS.MYSQL_ICON};
    }

    .reactIcon, .nodeIcon, .jsIcon, .tsIcon, .sqliteIcon, .csharpIcon, .dotnetIcon, .mysqlIcon {
      transition: transform 0.3s ease;
    }
 
    .reactIcon:hover, .nodeIcon:hover, .jsIcon:hover, .tsIcon:hover, .sqliteIcon:hover, .csharpIcon:hover, .dotnetIcon:hover, .mysqlIcon:hover {
      transform: scale(1.25);
    }

    .logosOne-wrapper, .logosTwo-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 64px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-top: 24px;

    .techs-logos {
      font-size: 64px;
      gap: 32px;

      .logosOne-wrapper, .logosTwo-wrapper {
        gap: 48px;
      }
    }
  }
`;

export const Projects = styled.div`
  grid-area: projects;

  margin-top: 48px;

  padding: 0 32px;

  .projects-wrapper {
    margin-top: 48px;

    display: flex;
    justify-content: center;
    gap: 32px;

    .project-wrapper {
      padding: 24px;

      max-width: 380px;
      min-height: 550px;

      border: 3px solid ${({ theme }) => theme.COLORS.BORDER_COLOR};
      border-radius: 5px;

      text-align: center;

      h4 {
        font-size: 26px;

        margin-bottom: 16px;
      }

      p {
        font-size: 17px;

        margin-top: 16px;
      }

      .img-wrapper img {
        width: 100%;
        max-width: 270px;
        height: auto;

        border-radius: 5px;

        transition: transform 0.4s ease;
      }

      .img-wrapper img:hover {
        transform: scale(1.1);
      }

      .links-wrapper {
        margin-top: 24px;

        display: flex;
        flex-direction: column;
        gap: 12px;

        button {
          background-color: ${({ theme }) => theme.COLORS.BUTTON_BACKGROUND};

          padding: 8px 16px;

          border: none;
          border-radius: 5px;

          a {
            font-size: 17px;
          }
        }
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-top: 24px;

    .projects-wrapper {
      flex-direction: column;

      margin-top: 32px;

      .project-wrapper {
        max-width: 100%;

        .img-wrapper img {
          max-width: 100%;

          transition: transform 0.4s ease;
        }

        .img-wrapper img:hover {
          transform: scale(1.05);
        }

        h4 {
          font-size: 20px;

          margin-bottom: 16px;
        }

        p {
          font-size: 14px;

          margin-top: 16px;
        }

        .links-wrapper {
          button {
            a {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
`;

export const Contact = styled.div`
  grid-area: contact;

  margin: 72px 0px 128px 0px;
  padding: 0 32px;

  p {
    font-size: 22px;
    text-align: center;
    margin: 24px 0;
  }

  .contacts-wrapper {
    margin-top: 32px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 48px;

    a {
      font-size: 64px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin: 48px 0px 96px 0px;
    
    p {
      font-size: 18px;
    }

    .contacts-wrapper {
      gap: 24px;

      a {
        font-size: 42px;
      }
    }
  }
`;
