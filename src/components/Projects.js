import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      name: "Food Data App",
      live: "https://project1-one-rosy.vercel.app/",
      git: "https://github.com/rockcat96/project1",
      image: "https://i.imgur.com/C0XMW28.png",
      technology: "Javascript, CSS3, HTML5 ",
      description: "Search food's nutrition facts and log your meals for the day to reach to your health goals."
    },
    {
      name: "Menu Maker",
      live: "https://menu-creation-tool.onrender.com/menu",
      git: "https://github.com/rockcat96/menu-maker",
      image: "https://i.imgur.com/ndwzPiR.png",
      technology: "Javascript, MongoDB, Express, Node.js ",
      description: "Backend built for restaurants and home chefs to create and store their digital menus."

    },
    {
        name: "dotBEATS",
        live: "https://reliable-marzipan-f9fc1b.netlify.app/",
        git: "https://github.com/rockcat96/dotbeat-frontend",
        image: "https://i.imgur.com/4yjpMdO.png",
        technology: " React, MongoDB, Express, Node.js",
        description: "Save, create, and edit all your favorite music in dotBEATS."

    },
    {
        name: "Travel Bucket List",
        live: "https://charming-creponne-cea4b6.netlify.app/",
        git: "https://github.com/rockcat96/Travel-app-frontend",
        image: "https://i.imgur.com/jrF2weW.png",
        technology: "React, PostgreSQL, Django, Python",
        description: "Keeps track when and where you want to keep your travel plans organized."
        
    }
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                            <>
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            
                            </>
                            )
                          })
                        }
                      </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
