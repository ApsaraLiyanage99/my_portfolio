import React from "react";
import ApsiImg from "../assets/apsi.png";
import { Link } from "react-scroll";

// import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-gray-200 via-gray-800 to-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            I'm a Associate Software Engineer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I chase new technologies and eager to designing and building
            software applications. Frontend development, Backend development,
            Mobile application development, and Database Management are my
            skilled areas.
          </p>

          <div>
            {/* <a
              href="/Apsara_Liyanage.pdf"
              // download= true
              target="_blank"
              rel="noreferrer"
              className="group text-white w-fit px-6 py-2 my-2 text-lg flex items-center rounded-md bg-gradient-to-r from-pink-300 to-purple-700 cursor-pointer"
            > */}
            <Link
              to="contact"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-2 my-2 text-lg flex items-center rounded-md bg-gradient-to-r from-pink-300 to-purple-700 cursor-pointer"
            >
              Say Hi!
              <span className="group-hover:rotate-45 duration-300 text-2xl">
                <div className="ml-1"></div>👋
                {/* <MdOutlineKeyboardArrowRight size={25} className="ml-1" /> */}
              </span>
              {/* </a> */}
            </Link>
          </div>
        </div>
        <div>
          <img
            src={ApsiImg}
            alt="my_pic"
            className="rounded-2xl mx-auto w-2/4 md:w-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
