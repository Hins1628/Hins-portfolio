import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import portfolioImg1 from "../assets/img/portfolio-img1.png";
import collaborativeprojectImg1 from "../assets/img/collaborative-project-tracker-img1.png";
import collaborativeprojectImg2 from "../assets/img/collaborative-project-tracker-img2.png";
import collaborativeprojectImg3 from "../assets/img/collaborative-project-tracker-img3.png";
import virtualclassroomImg1 from "../assets/img/virtual-classroom-img1.png";
import virtualclassroomImg2 from "../assets/img/virtual-classroom-img2.png";
import virtualclassroomImg3 from "../assets/img/virtual-classroom-img3.png";
import appointmentorganizerImg1 from "../assets/img/appointment-organizer-img1.png";
import appointmentorganizerImg2 from "../assets/img/appointment-organizer-img2.png";
import appointmentorganizerImg3 from "../assets/img/appointment-organizer-img3.png";
import parkourgameImg1 from "../assets/img/3D-parkour-game-img1.png";
import parkourgameImg2 from "../assets/img/3D-parkour-game-img2.png";
import parkourgameImg3 from "../assets/img/3D-parkour-game-img3.png";
import parkourgameImg4 from "../assets/img/3D-parkour-game-img4.png";
import junglegameImg1 from "../assets/img/command-line-based-jungle-game-img1.png";
import junglegameImg2 from "../assets/img/command-line-based-jungle-game-img2.png";
import webargameImg1 from "../assets/img/web-ar-game-img1.png";
import webargameImg2 from "../assets/img/web-ar-game-img2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Portfolio Website",
      description: [ "The portfolio website showcases my experience and abilities, enabling companies to gain a comprehensive understanding of my experience and ability." ],
      sourcecodeUrl: "https://github.com/Hins1628/Hins-portfolio",
      relatedskill: ["#React", "#CSS", "#JavaScript"],
      imgUrl: [portfolioImg1],
    },
    {
      title: "GitHub Collaborative Project Tracker web application",
      description: [ "The tracker can help the instructor to track the progress of different groups in the course and the collaboration among the group members.",
      "This tracker used GenAI technology (Open Router API) to analyze and summarize the collected project data. And generate summary and useful information about each group from list of commits and issues",
      ],
      sourcecodeUrl: "",
      relatedskill: ["#AngularJS", "#RESTFul API", "#OpenRouterAPI", "#MongoDB", "#Docker"],
      imgUrl: [collaborativeprojectImg1, collaborativeprojectImg2, collaborativeprojectImg3],
    },
    {
      title: "Virtual Classroom",
      description: [ "The application provides a communication platform for students and teachers to engage in interactive teaching sessions.",
      "The application implements various security features (SQL injection prevention, Password Hashing, Access control) to protect user privacy and sensitive data.",
      ],
      sourcecodeUrl: "",
      relatedskill: ["#HTML", "#CSS", "#JavaScript", "#SQL", "#PHP"],
      imgUrl: [virtualclassroomImg1, virtualclassroomImg2, virtualclassroomImg3],
    },

  ];

  const projects2 = [
    {
      title: "Appointment Organizer",
      description: [ "The application aims to develop an assistant application for scheduling appointments and managing timetables.",
      "It consists of several modules, including the Input Module, the Appointment Checking Module, the Scheduling Kernel, and the Output Module",
      ],
      sourcecodeUrl: "",
      relatedskill: ["#C", "#Object-Oriented Programming", "#Data Structure"],  
      imgUrl: [appointmentorganizerImg1, appointmentorganizerImg2, appointmentorganizerImg3],
    },
  ];

  const projects3 = [
    {
      title: "3D parkour-adventure-combined game",
      description: [ "The game named “Dungeon of the Terror Bringer”, It is a 3D game that combines adventure, fantasy, parkour, and action elements. \n ",
      "The game features a variety of challenging levels, enemies, and obstacles that test the player's reflexes and problem-solving skills. "
      ],
      sourcecodeUrl: "",
      relatedskill: ["#Unreal Engine 4", "#C++", "#Game Design"], 
      imgUrl: [parkourgameImg1, parkourgameImg2, parkourgameImg3, parkourgameImg4],
    },
    {
      title: "Command-line-based Jungle game",
      description: ["This Jungle Game is written in java language with Maven and Junit testing. ",
      "Two Player can be battle in this game according to the Jungle game rule. ",
      "After player move the chess, the game will print the updated chessboard using the command line."],
      sourcecodeUrl: "",
      relatedskill: ["#Java", "#Maven", "#Junit"],
      imgUrl: [junglegameImg1, junglegameImg2], 
    },
    {
      title: "AR Treasure Fragment Collection GAME",
      description: ["This is the freelance project that when I am doing a research of WebAR library and testing those library function. ",
      "It is a treasure hunt game for children with WebAR"
    ],
      sourcecodeUrl: "",
      relatedskill: ["#three.js", "#JavaScript", "#CSS", "#HTML"],
      imgUrl: [webargameImg1, webargameImg2],
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects Experience</h2>
                <p>During my past development career, I have completed several related projects that enhanced my programming skills and cultivated my ability to meet user needs effectively.</p>
                <p>If you are interested in the project, you can hover your mouse over the top of the project card to view more demonstration pictures. The GitHub button link to the source code of the project on my GitHub account.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Website</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Software</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Game</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first" >
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>  
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>  
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
