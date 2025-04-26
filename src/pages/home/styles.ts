import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
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
    font-size: 54px;
  }

  h2 {
    font-size: 34px;
    text-align: center;
  }

  h3 {
    font-size: 24px;
    text-align: center;
    margin: 36px 0;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    h1 {
      font-size: 32px;
    }
    h2 {
      font-size: 24px;
    }
    h3 {
      font-size: 20px;
      margin: 24px 0;
    }
  }
`;

export const Profile = styled.div`
  grid-area: profile;
  padding: 96px 0 0 0;
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
  }

  .buttons-wrapper {
    margin-top: 14px;
    display: flex;
    gap: 20px;

    a {
      padding: 12px 20px;
      background-color: ${({ theme }) => theme.COLORS.BUTTON_BACKGROUND};
      border: none;
      border-radius: 5px;
      font-size: 18px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;

    .myPicture {
      width: 200px;
      height: 210px;
      margin-top: 32px;
    }

    .description-wrapper {
      .reactIcon {
        font-size: 80px;
      }

      p {
        font-size: 16px;
      }
    }

    .buttons-wrapper a {
      font-size: 16px;
      padding: 10px 16px;
    }
  }
`;

export const About = styled.div`
  grid-area: about;
  margin-top: 96px;

  .about-wrapper {
    p {
      padding: 0 32px;
      font-size: 18px;
      margin-top: 24px;
      text-align: center;
    }
  }

  .courses-wrapper {
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    gap: 36px;
    align-items: center;

    .course-wrapper {
      width: 90%;
      max-width: 850px;
      border: 3px solid ${({ theme }) => theme.COLORS.BORDER_COLOR};
      border-radius: 8px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .content-wrapper {
        h4 {
          font-size: 24px;
        }
        h5 {
          font-size: 20px;
          margin: 8px 0;
        }
        ul li {
          font-size: 18px;
          list-style: none;
          margin-left: 0;
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
    .about-wrapper p {
      font-size: 16px;
    }

    .courses-wrapper .course-wrapper {
      padding: 16px;

      .content-wrapper {
        h4 {
          font-size: 20px;
        }
        h5 {
          font-size: 18px;
        }
        ul li {
          font-size: 16px;
        }
      }

      img {
        width: 120px;
        height: 120px;
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
    gap: 48px;
    font-size: 80px;

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
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-top: 64px;

    .techs-logos {
      font-size: 60px;
      gap: 32px;
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
    gap: 32px;
    justify-content: center;

    .project-wrapper {
      padding: 24px;
      max-width: 380px;
      min-height: 550px;
      border: 3px solid ${({ theme }) => theme.COLORS.BORDER_COLOR};
      border-radius: 5px;
      text-align: center;

      h4 {
        font-size: 24px;
        margin-bottom: 16px;
      }

      p {
        font-size: 16px;
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
            font-size: 16px;
          }
        }
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-top: 64px;

    .project-wrapper {
      max-width: 100%;
    }

    .img-wrapper img {
      max-width: 100%;
    }
  }
`;

export const Contact = styled.div`
  grid-area: contact;
  margin-top: 72px;
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
    gap: 32px;

    a {
      font-size: 48px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    p {
      font-size: 18px;
    }

    .contacts-wrapper {
      gap: 24px;

      a {
        font-size: 36px;
      }
    }
  }
`;
