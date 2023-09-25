import React from "react";
import { useState } from "react";

import html1 from "../assets/certificates/html1.jpg";
import html2 from "../assets/certificates/html2.png";
import python1 from "../assets/certificates/python1.png";
import python2 from "../assets/certificates/python2.png";
import python3 from "../assets/certificates/python3.png";
import web1 from "../assets/certificates/web.jpg";
import web2 from "../assets/certificates/web2.jpg";
import sql1 from "../assets/certificates/sql1.png";
import sql2 from "../assets/certificates/sql2.png";
import sql3 from "../assets/certificates/sql3.png";
import uiux1 from "../assets/certificates/uiux1.png";
import php1 from "../assets/certificates/php.jpg";
import js1 from "../assets/certificates/js1.png";
import c1 from "../assets/certificates/c1.jpg";
import jira1 from "../assets/certificates/jira1.png";
import oop1 from "../assets/certificates/oop1.jpg";
import aws1 from "../assets/certificates/aws1.jpg";
import other1 from "../assets/certificates/other1.png";
import postman from "../assets/certificates/postman.png";

const Certification = () => {
  const [selectedCategory, setSelectedCategory] = useState("web"); // Default category is "all"

  const techs = [
    {
      id: 1,
      src: html1,
      // title: "HTML",
      // style: "shadow-orange-500",
      category: "html",
    },
    {
      id: 2,
      src: html2,
      // title: "CSS",
      // style: "shadow-blue-500",
      category: "html",
    },
    {
      id: 3,
      src: python1,
      // title: "JavaScript",
      // style: "shadow-yellow-500",
      category: "python",
    },
    {
      id: 4,
      src: python2,
      // title: "PHP",
      // style: "shadow-gray-500",
      category: "python",
    },
    {
      id: 5,
      src: python3,
      // title: "React",
      // style: "shadow-blue-600",
      category: "python",
    },
    {
      id: 6,
      src: web2,
      // title: "TailwindCss",
      // style: "shadow-sky-400",
      category: "web",
    },
    {
      id: 7,
      src: web1,
      // title: "NodeJs",
      // style: "shadow-green-500",
      category: "web",
    },
    {
      id: 8,
      src: sql1,
      // title: "Java",
      // style: "shadow-red-500",
      category: "sql",
    },
    {
      id: 9,
      src: sql2,
      // title: "Python",
      // style: "shadow-yellow-500",
      category: "sql",
    },
    {
      id: 10,
      src: sql3,
      // title: "MySQL",
      // style: "shadow-blue-500",
      category: "sql",
    },
    {
      id: 11,
      src: uiux1,
      // title: "MongoDB",
      // style: "shadow-green-500",
      category: "uiux",
    },
    {
      id: 12,
      src: php1,
      // title: "PostgreSQL",
      // style: "shadow-gray-500",
      category: "php",
    },
    {
      id: 13,
      src: js1,
      // title: "Flutter",
      // style: "shadow-sky-500",
      category: "js",
    },
    {
      id: 14,
      src: c1,
      // title: "Postman",
      // style: "shadow-gray-500",
      category: "other",
    },
    {
      id: 15,
      src: other1,
      // title: "Canva",
      // style: "shadow-green-500",
      category: "other",
    },
    {
      id: 16,
      src: jira1,
      // title: "Flutter",
      // style: "shadow-sky-500",
      category: "project management",
    },
    {
      id: 17,
      src: oop1,
      // title: "Postman",
      // style: "shadow-gray-500",
      category: "oop",
    },
    {
      id: 18,
      src: aws1,
      // title: "Canva",
      // style: "shadow-green-500",
      category: "other",
    },
    {
      id: 19,
      src: postman,
      // title: "Canva",
      // style: "shadow-green-500",
      category: "other",
    },
  ];

  // Filter technologies based on the selected category
  const filteredTechs =
    selectedCategory === "all"
      ? techs
      : techs.filter((tech) => tech.category === selectedCategory);

  return (
    <div
      name="certification"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Certificates
          </p>
          <p className="py-6">These are the certifications i've obtained</p>
        </div>

        <div className="flex space-x-4 mt-10 mb-10">
          {/* <button
            onClick={() => setSelectedCategory("all")}
            className={`${
              selectedCategory === "all" ? "bg-blue-500" : "bg-gray-500"
            } hover:bg-blue-600 px-4 py-2 rounded-lg`}
          >
            All
          </button> */}
          <button
            onClick={() => setSelectedCategory("web")}
            className={`${
              selectedCategory === "web"
                ? "bg-gradient-to-r from-pink-300 to-purple-700"
                : "bg-gray-500"
            } hover:bg-gray-800 px-4 py-1 text-sm w-[16%] rounded-lg`}
          >
            Web Development
          </button>
          <button
            onClick={() => setSelectedCategory("sql")}
            className={`${
              selectedCategory === "sql"
                ? "bg-gradient-to-r from-pink-300 to-purple-700"
                : "bg-gray-500"
            } hover:bg-gray-800 px-4 py-1 text-sm w-[16%] rounded-lg`}
          >
            SQL
          </button>
          <button
            onClick={() => setSelectedCategory("html")}
            className={`${
              selectedCategory === "html"
                ? "bg-gradient-to-r from-pink-300 to-purple-700"
                : "bg-gray-500"
            } hover:bg-gray-800 px-4 py-1 text-sm w-[16%] rounded-lg`}
          >
            HTML
          </button>

          <button
            onClick={() => setSelectedCategory("python")}
            className={`${
              selectedCategory === "python"
                ? "bg-gradient-to-r from-pink-300 to-purple-700"
                : "bg-gray-500"
            } hover:bg-gray-800 px-4 py-1 text-sm w-[16%] rounded-lg`}
          >
            Python
          </button>
          <button
            onClick={() => setSelectedCategory("uiux")}
            className={`${
              selectedCategory === "uiux"
                ? "bg-gradient-to-r from-pink-300 to-purple-700"
                : "bg-gray-500"
            } hover:bg-gray-800 px-4 py-1 text-sm w-[16%] rounded-lg`}
          >
            UI/UX
          </button>
          <button
            onClick={() => setSelectedCategory("php")}
            className={`${
              selectedCategory === "php"
                ? "bg-gradient-to-r from-pink-300 to-purple-700"
                : "bg-gray-500"
            } hover:bg-gray-800 px-4 py-1 text-sm w-[16%] rounded-lg`}
          >
            PHP
          </button>
          <button
            onClick={() => setSelectedCategory("project management")}
            className={`${
              selectedCategory === "project management"
                ? "bg-gradient-to-r from-pink-300 to-purple-700"
                : "bg-gray-500"
            } hover:bg-gray-800 px-4 py-1 text-sm w-[16%] rounded-lg`}
          >
            Project Management
          </button>
          <button
            onClick={() => setSelectedCategory("js")}
            className={`${
              selectedCategory === "js"
                ? "bg-gradient-to-r from-pink-300 to-purple-700"
                : "bg-gray-500"
            } hover:bg-gray-800 px-4 py-1 text-sm w-[16%] rounded-lg`}
          >
            JavaScript
          </button>
          <button
            onClick={() => setSelectedCategory("oop")}
            className={`${
              selectedCategory === "oop"
                ? "bg-gradient-to-r from-pink-300 to-purple-700"
                : "bg-gray-500"
            } hover:bg-gray-800 px-4 py-1 text-sm w-[16%] rounded-lg`}
          >
            OOP
          </button>
          <button
            onClick={() => setSelectedCategory("other")}
            className={`${
              selectedCategory === "other"
                ? "bg-gradient-to-r from-pink-300 to-purple-700"
                : "bg-gray-500"
            } hover:bg-gray-800 px-4 py-1 text-sm w-[16%] rounded-lg`}
          >
            Other
          </button>

          {/* Add buttons for other categories here */}
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-8 text-center py-1 px-12 sm:px-0">
          {filteredTechs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-150 duration-500 py-2rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-80 text-xs mx-auto" />
              {/* <p className="mt-4">{title}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;
