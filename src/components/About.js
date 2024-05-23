import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import javascript from "../assets/img/javascript.png";
import typescript from "../assets/img/typescript.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import reactjs from "../assets/img/reactjs.png";
import nodejs from "../assets/img/nodejs.png";
import mongodb from "../assets/img/mongodb.png";
import git from "../assets/img/git.png";
import figma from "../assets/img/figma.png";
import docker from "../assets/img/docker.png";
import threejs from "../assets/img/threejs.svg";

export const About = () => {
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
    return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>About Me</h2>
                <p>I am a year 4 student studying for a Bachelor of Computing at Hong Kong Polytechnic University, I am gaining practical knowledge and experience in software engineering and website development. My course gave me a solid foundation in programming languages such as..</p>
                <div className='technology-container'>
                  {technologies.map((technology) => (
                    <div className='technology-item' key={technology.name}>
                      <img className='technology-icon' src={technology.icon} alt={technology.name} />
                    </div>
                ))}
              </div>
              </div>}
            </TrackVisibility>
          
          </Col>
        </Row>
      </Container>
    </section>
  )
}
