import React, { useState } from "react";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//koratuwa
import k1 from "../assets/projects/koratuwa/k1.jpeg";
import k2 from "../assets/projects/koratuwa/k2.jpeg";
import k3 from "../assets/projects/koratuwa/k3.jpeg";
import k4 from "../assets/projects/koratuwa/k4.jpeg";
import k5 from "../assets/projects/koratuwa/k5.jpeg";
import k6 from "../assets/projects/koratuwa/k6.jpeg";
import k7 from "../assets/projects/koratuwa/k7.jpeg";

//edugo
import e1 from "../assets/projects/edugo/e1.png";
import e2 from "../assets/projects/edugo/e2.png";
import e3 from "../assets/projects/edugo/e3.png";
import e4 from "../assets/projects/edugo/e4.png";
import e5 from "../assets/projects/edugo/e5.png";

//springboot app
import s1 from "../assets/projects/springboot/s1.png";
import s2 from "../assets/projects/springboot/s2.png";

//medicare app
import m1 from "../assets/projects/medicare/m1.png";
import m2 from "../assets/projects/medicare/m2.png";
import m3 from "../assets/projects/medicare/m3.png";
import m4 from "../assets/projects/medicare/m4.png";
import m5 from "../assets/projects/medicare/m5.png";
import m6 from "../assets/projects/medicare/m6.png";

//todo app
import t1 from "../assets/projects/todo/t1.png";
import t2 from "../assets/projects/todo/t2.png";

//calculator
import c1 from "../assets/projects/calculator/c1.png";
import c2 from "../assets/projects/calculator/c2.png";
import c3 from "../assets/projects/calculator/c3.png";

Modal.setAppElement("#root");

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: k1,
      githubLink: "https://github.com/GroupCS31-UCSC/Koratuwa",
      demoImages: [k1, k2, k3, k4, k5, k6, k7],
      description:
        "Koratuwa is Full Stack Web Application developed to manage internal and external operations of a dairy farm located at Horana, named 'Koratuwa'. It is developed as our second year Group Project in university.\n I developed Developed Admin portal and Milk Collection Officer role (both frontend and backend), notification handling, user authentication, session management, and phpMailer-email sending.",
      technologies: "HTML, CSS, Javascript, PHP, jQuery",
    },
    {
      id: 2,
      src: e1,
      githubLink: "https://github.com/Group45-UCSC/EduGo",
      demoImages: [e1, e2, e3, e4, e5],
      description:
        "Edugo is Full Stack Web Application developed to handle school rides of the school children. It is developed as our third year Group Project in university. \n I developed Driver role in web application (both frontend and backend) and google map handling part. Working with a team of 6 members and holding team leadership.",
      technologies:
        "ReactJs, ExpressJs, NodeJs, TailwindCSS, PostgreSQL, javascript",
    },
    {
      id: 3,
      src: m1,
      githubLink: "https://github.com/ApsaraLiyanage99/mern_medApp",
      demoImages: [m1, m2, m3, m4, m5, m6],
      description:
        "Medi Care is Frontend Application. I developed landing page of a medical care center, which is implemented for the improvement of my frontend development skills.",
      technologies: "ReactJs, Bootstrap",
    },

    {
      id: 4,
      src: t1,
      githubLink: "https://github.com/ApsaraLiyanage99/pern_todoApp",
      demoImages: [t1, t2],
      description:
        "Todo is a simple Full Stack Web Application, I built to practice the pern stack development for the learning objective. ",
      technologies: "ReactJs, NodeJs, ExpressJs, PostgreSQL",
    },
    {
      id: 5,
      src: c1,
      githubLink: "https://github.com/ApsaraLiyanage99/kotlin_calculatorApp",
      demoImages: [c1, c2, c3],
      description:
        "This is a Mobile Application, I developed to perform basic calculator operations using Android Studio. ",
      technologies: "Kotlin",
    },
    {
      id: 6,
      src: s1,
      githubLink: "https://github.com/ApsaraLiyanage99/fullstack_springApp",
      demoImages: [s1, s2],
      description:
        "Simple Full Stack Web Application, I developed to perform CRUD operations in an Employee management system, for the learning perspective of Spring Boot framework and practice testing using postman. ",
      technologies: "Java, Spring Boot, ReactJs, MySQL, Axios",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  // --------------------------------------------------------------
  const [isModalOpen_data, setIsModalOpen_data] = useState(false);
  const [selectedProject_data, setSelectedProject_data] = useState(null);

  const openModal_data = (project) => {
    setSelectedProject_data(project);
    setIsModalOpen_data(true);
  };

  const closeModal_data = () => {
    setSelectedProject_data(null);
    setIsModalOpen_data(false);
  };

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        {/* card structure */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map((project) => (
            <div
              key={project.id}
              className="shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                src={project.src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
                onClick={() => openModal(project)}
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => openModal(project)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => openModal_data(project)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Details
                </button>
                <button
                  onClick={() => window.open(project.githubLink, "_blank")}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
        {/*  */}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Project Demo"
        className="modal"
        overlayClassName="overlay"
      >
        {/* <div> */}
        <div className="bg-white p-0 px-60 rounded-lg ">
          <div className="fixed top-0 left-0 w-screen  bg-stone-900/75 flex justify-center items-center  h-screen bg-gradient-to-b from-opacity-70 to-opacity-30">
            <div className="w-2/4  rounded-lg bg-white shadow-md flex flex-col p-5 ">
              <div className="flex justify-end">
                <button
                  className="text-2xl cursor-pointer "
                  onClick={() => {
                    setIsModalOpen(false);
                  }}
                >
                  X
                </button>
              </div>
              {selectedProject && (
                <>
                  <Carousel>
                    {selectedProject.demoImages.map((image, index) => (
                      <div key={index}>
                        <img src={image} alt={`Demo ${index + 1}`} />
                      </div>
                    ))}
                  </Carousel>
                  <button
                    className="bg-gray-700 text-white py-2 px-4 rounded-md mt-6 hover:bg-gray-400 transition duration-300"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        {/* </div> */}
      </Modal>

      {/* details modal */}
      <Modal
        isOpen={isModalOpen_data}
        onRequestClose={closeModal_data}
        contentLabel="Project Details"
        className="modal"
        overlayClassName="overlay"
      >
        {/* <div> */}
        <div className="bg-white p-0 px-60 rounded-lg ">
          <div className="fixed top-0 left-0 w-screen  bg-stone-900/75 flex justify-center items-center  h-screen bg-gradient-to-b from-opacity-70 to-opacity-30">
            <div className="w-2/4  rounded-lg bg-white shadow-md flex flex-col p-5 ">
              <div className="flex justify-end">
                <button
                  className="text-2xl cursor-pointer "
                  onClick={() => {
                    setIsModalOpen_data(false);
                  }}
                >
                  X
                </button>
              </div>

              {selectedProject_data && (
                <div className="text-center">
                  <h2 className="text-1xl mb-4">
                    {selectedProject_data.description}
                  </h2>
                  <p className="text-gray-600 font-semibold mb-4">
                    <span className="font-bold text-orange-900">Technologies:</span>{" "}
                    {selectedProject_data.technologies}
                  </p>
                  <button
                    className="bg-gray-700 text-white py-2 px-4 rounded-md mt-6 hover:bg-gray-400 transition duration-300"
                    onClick={closeModal_data}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* </div> */}
      </Modal>
    </div>
  );
};

export default Projects;
