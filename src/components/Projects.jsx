import React, { useState } from "react";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import k1 from "../assets/projects/koratuwa/k1.jpeg";
import k2 from "../assets/projects/koratuwa/k2.jpeg";
import k3 from "../assets/projects/koratuwa/k3.jpeg";
import k4 from "../assets/projects/koratuwa/k4.jpeg";
import k5 from "../assets/projects/koratuwa/k5.jpeg";
import k6 from "../assets/projects/koratuwa/k6.jpeg";
import k7 from "../assets/projects/koratuwa/k7.jpeg";
// import k8 from "../assets/projects/koratuwa/k8.jpeg";
import e1 from "../assets/projects/edugo/e1.png";
import e2 from "../assets/projects/edugo/e2.png";
import e3 from "../assets/projects/edugo/e3.png";
import e4 from "../assets/projects/edugo/e4.png";
import e5 from "../assets/projects/edugo/e5.png";

Modal.setAppElement("#root");

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: k1,
      githubLink: "https://github.com/GroupCS31-UCSC/Koratuwa",
      demoImages: [k1, k2, k3, k4, k5, k6, k7],
    },
    {
      id: 2,
      src: e1,
      githubLink: "https://github.com/Group45-UCSC/EduGo",
      demoImages: [e1, e2, e3, e4, e5],
    },
    // {
    //   id: 3,
    //   src: k1,
    //   githubLink: "https://github.com/your-repo-url-1",
    //   demoImages: [k1, k2, k3, k4, k5, k6],
    // },
    // {
    //   id: 4,
    //   src: k1,
    //   githubLink: "https://github.com/your-repo-url-1",
    //   demoImages: [k1, k2, k3, k4, k5, k6],
    // },
    // {
    //   id: 5,
    //   src: k1,
    //   githubLink: "https://github.com/your-repo-url-1",
    //   demoImages: [k1, k2, k3, k4, k5, k6],
    // },
    // {
    //   id: 6,
    //   src: k1,
    //   githubLink: "https://github.com/your-repo-url-1",
    //   demoImages: [k1, k2, k3, k4, k5, k6],
    // },
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
              <div className="w-1/3  rounded-lg bg-white shadow-md flex flex-col p-5 ">
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
                    <button className="close-button" onClick={closeModal}>
                      Close
                    </button>
                  </>
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
