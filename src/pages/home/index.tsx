import { Container, Content, Profile, About, Techs, Projects, Contact } from "./styles";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import profilePicture from "../../assets/profile.jpeg";
import IesbLogo from "../../assets/iesb_logo.jpeg";
import ThomasLogo from "../../assets/ctj.jpg";
import RocketLogo from "../../assets/rocket.jpg";
import FoodEx from "../../assets/FoodEx.png";
import RocketN from "../../assets/RocketN.png";
import SitePessoal from "../../assets/site.png";

import { FaReact, FaNodeJs, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiSqlite, SiGmail } from "react-icons/si";

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

              <a href = "/CVFelipe.pdf" download>Download CV</a>

              <a href = "mailto:fesoaresma@gmail.com" >Entrar em contato</a>

            </div>

          </div>

        </Profile>

        <About id = "sobre">

          <div className="about-wrapper">
            <h2>Sobre Mim</h2>

            <p>Desenvolvedor Web Fullstack e estudante de Ciência da Computação com previsão de formatura para 06/2026. Tenho cerca de 1 ano de experiência com o desenvolvimento Web por meio de projetos pessoais e acadêmicos. Além disso, busco aprender e me aperfeiçoar em novas tecnologias para me profissionalizar como desenvolvedor.</p>
          </div>

          <h3>Formações em andamento e concluídas</h3>

          <div className="courses-wrapper">

            <div className="course-wrapper">
              <div className="content-wrapper">
                <h4>Bacharelado - Ciência da Computação</h4>

                <h5>Instituto de Educação Superior de Brasília</h5>

                <ul>
                  <li><span>Início:</span> Agosto/2021</li>
                  <li><span>Previsão de conclusão:</span> Junho/2026</li>
                </ul>
              </div>
              
              <div className="image-wrapper">
                <img src = {IesbLogo} alt="Logo da instituição de ensino IESB" />
              </div>
            </div>

            <div className="course-wrapper">
              <div className="content-wrapper">
                <h4>Curso de Inglês</h4>

                <h5>Casa Thomas Jefferson - Brasília/DF</h5>

                <ul>
                  <li>
                  Inglês Avançado - Classic Expert 5B</li>
                </ul>
              </div>

              <div className="image-wrapper">
                <img src = {ThomasLogo} alt="Logo da instituição de ensino Casa Thomas Jefferson" />
              </div>
            </div>

            <div className="course-wrapper">
              <div className="content-wrapper">
                <h4>Formação Explorer Fullstack</h4>

                <h5>Rocketseat</h5>

                <ul>
                  <li><span>Início:</span> Fevereiro/2024</li>
                  <li><span>Conclusão:</span> Fevereiro/2025</li>
                </ul>
              </div>

              <div className="image-wrapper">
                <img src = {RocketLogo} alt="Logo da instituição de ensino Rocketseat" />
              </div>
            </div>
          </div>

        </About>

        <Techs id = "projetos">

          <div className="sectionTitle-wrapper">
            <h2>Tecnologias</h2>
          </div>

          <div className="techs-logos">

            <div className="logosOne-wrapper">
              <FaReact className = "reactIcon"/>

              <FaNodeJs className = "nodeIcon"/>

              <SiJavascript className = "jsIcon"/>
            </div>

            <div className="logosTwo-wrapper">
              <SiTypescript className = "tsIcon"/>

              <SiSqlite className = "sqliteIcon"/>
            </div>
           
          </div>

        </Techs>

        <Projects>

          <h2>Projetos Práticos</h2>

          <div className="projects-wrapper">
            <div className="project-wrapper">
              <h4>Food Explorer</h4>

              <div className="img-wrapper">
                <img src = {FoodEx} alt = "Imagem da tela home do site Food Explorer" />  
              </div>

              <p>Projeto de site para pedidos em um restaurante fictício. Desenvolvido com NodeJS e ReactJS com Javascript. Foi utilizado o SGBD SQLite para armazenamento local de dados. Projeto em desenvolvimento para implementação de novas features e melhorias.</p>

              <div className="links-wrapper">
                <button><a href = "https://github.com/FelipeS45/Frontend-FoodExplorer" target = "_blank" >Repositório do Frontend</a></button>

                <button><a href = "https://github.com/FelipeS45/API-Backend-FoodExplorer" target = "_blank" >Repositório do Backend</a></button>
              </div>
            </div>

            <div className="project-wrapper">
              <h4>Rocket Notes</h4>

              <div className="img-wrapper">
                <img src = {RocketN} alt="Tela home do site RocketNotes"/>
              </div>

              <p>Projeto pessoal de site para armazenamento de notas/lembretes pessoais. Desenvolvido com NodeJS e ReactJS com Javascript. Além disso, foi utilizado o SGBD SQLite para armazenamento local de dados na aplicação.</p>

              <div className="links-wrapper">
                <button><a href = "https://github.com/FelipeS45/RocketNotes-frontend" target = "_blank" >Repositório do Frontend</a></button>

                <button><a href = "https://github.com/FelipeS45/RocketNotes-API-backend" target = "_blank" >Repositório do Backend</a></button>
              </div>
            </div>

            <div className="project-wrapper">
              <h4>Site Pessoal</h4>

              <div className="img-wrapper">
                <img src = {SitePessoal} alt="Imagem da home do meu site pessoal"/>
              </div>

              <p>Projeto de site com portifólio pessoal e informações de contato. Desenvolvido apenas com React e Typescript. Foi utilizado o conceito de CSS-in-JS com a biblioteca React Styled Components e a biblioteca React Icons. Possui tela responsiva a dispositivos mobile e desktop.</p>

              <div className="links-wrapper">
                <button><a href = "https://github.com/FelipeS45/Site-pessoal" target = "_blank" >Repositório do Frontend</a></button>
              </div>
            </div>

          </div>
          
        </Projects>

        <Contact id = "contato">

          <h2>Entre em contato comigo!</h2>

          <p>Estou animado para ser o próximo desenvolvedor do time da sua empresa!</p>

          <div className="contacts-wrapper">
            <a href = "https://www.linkedin.com/in/f-maciel/" target = "_blank"><FaLinkedin/></a>

            <a href = "mailto:fesoaresma@gmail.com" target = "_blank"><SiGmail/></a>

            <a href = "https://github.com/FelipeS45" target = "_blank"><FaGithub/></a>
          </div>

        </Contact>

      </Content>

      <Footer/>

    </Container>
  )
}