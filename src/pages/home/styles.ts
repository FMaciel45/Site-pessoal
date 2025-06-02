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
    padding: 0;

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
      margin: 24px 0;

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
        padding: 0 36px;
      }
    }

    .courses-wrapper {
      gap: 14px;

      .course-wrapper {
        flex-direction: column;
        align-items: center;
        text-align: center;
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
            margin-left: 0;
          }
        }

        img {
          width: 120px;
          height: 120px;
          margin-top: 12px;
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

    .reactIcon,
    .nodeIcon,
    .jsIcon,
    .tsIcon,
    .sqliteIcon,
    .csharpIcon,
    .dotnetIcon,
    .mysqlIcon {
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.25);
      }
    }

    .logosOne-wrapper,
    .logosTwo-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 64px;
      flex-wrap: wrap;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-top: 24px;

    .techs-logos {
      font-size: 64px;
      gap: 32px;

      .logosOne-wrapper,
      .logosTwo-wrapper {
        gap: 32px;
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
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;

    .project-wrapper {
      padding: 24px;
      max-width: 380px;

      border: 2px solid ${({ theme }) => theme.COLORS.BORDER_COLOR};
      border-radius: 8px;

      display: flex;
      flex-direction: column;

      h4 {
        font-size: 24px;
        margin-bottom: 12px;
        text-align: center;
      }

      .img-wrapper {
        width: 100%;
        img {
          width: 100%;
          height: auto;
          border-radius: 4px;
          margin-bottom: 12px;
        }
      }

      p {
        font-size: 16px;
        margin-bottom: 12px;
        text-align: center;
      }

      .links-wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;

        margin-top: 10px;

        button {
          padding: 6px 12px;
          background-color: ${({ theme }) => theme.COLORS.BUTTON_BACKGROUND};
          border: none;
          border-radius: 5px;

          a {
            font-size: 15px;
            text-decoration: none;
            color: inherit;
          }
        }
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0 16px;

    margin-top: 8px;

    .projects-wrapper {
      gap: 16px;

      margin-top: 24px;

      .project-wrapper {
        padding: 16px;

        h4 {
          font-size: 18px;
        }

        p {
          font-size: 14px;
        }
      }
    }
  }
`;

export const Contact = styled.div`
  grid-area: contact;

  margin: 16px 0px 72px 0px;
  padding: 32px;

  text-align: center;

  .contacts-wrapper {
    margin-top: 24px;

    display: flex;
    justify-content: center;
    gap: 24px;

    a {
      font-size: 48px;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 16px;

    .contacts-wrapper {
      gap: 16px;

      a {
        font-size: 36px;
      }
    }
  }
`;
