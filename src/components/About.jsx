import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>
        <p className="text-xl mt-20 ">
          I am Apsara Liyanage who is an current undergraduate of University of
          Colombo School of Computing reading for Bsc. Computer Science. I'm a
          motivated, innovative person who accept challenges and willing to
          improve and learn more. I am and prefer problem-solving, designing,
          and programming. I also have a strong feeling of empathy and
          cooperation also.
        </p>
        <br />
        <p className="text-xl">
          I chase new technologies and eager to designing and building software
          applications. Full stack development, Frontend development, Backend
          development, Mobile application development, Ui/Ux designing and
          Software quality assurance are my skilled areas.
        </p>
      </div>
    </div>
  );
};

export default About;
