import { Container, Content, Profile, About, Techs, Projects, Contact } from "./styles";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import profilePicture from "../../assets/profile.jpeg";

import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiSqlite } from "react-icons/si";

export function Home() {

  return (
    <Container>

      <Header/>

      <Content>

        <Profile>

          <div className="img-wrapper">

            <img className = "myPicture" src = {profilePicture} alt = "Minha foto de perfil" />

          </div>

          <div className="description-wrapper">

            <FaReact className = "reactIcon"/>

            <h1>Felipe Maciel</h1>

            <p>Desenvolvedor Web Fullstack</p>

            <div className="buttons-wrapper">

              <button>Download CV</button>

              <button>Entrar em contato</button>

            </div>

          </div>

        </Profile>

        <About>

         <div className="sectionTitle-wrapper">
            <h2>Sobre Mim</h2>
          </div> 

        </About>

        <Techs>

          <div className="sectionTitle-wrapper">
            <h2>Tecnologias</h2>
          </div>

          <div className="techs-logos">

            <FaReact className = "reactIcon"/>

            <FaNodeJs className = "nodeIcon"/>

            <SiJavascript className = "jsIcon"/>

            <SiTypescript className = "tsIcon"/>

            <SiSqlite className = "sqliteIcon"/>

          </div>

        </Techs>

        <Projects>

          <div className="sectionTitle-wrapper">
            <h2>Projetos Práticos</h2>
          </div>  

        </Projects>

        <Contact>

          <div className="sectionTitle-wrapper">
            <h2>Entre em Contato</h2>
          </div> 

        </Contact>

      </Content>

      <Footer/>

    </Container>
  )
}