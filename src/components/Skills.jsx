import React from "react";
import { useState } from "react";

import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";
import js from "../assets/logos/js.png";
import php from "../assets/logos/php.png";
import react from "../assets/logos/react.png";
import node from "../assets/logos/Node JS.png";
import tailwind from "../assets/logos/Tailwind CSS.png";
import mysql from "../assets/logos/mysql.png";
import mongo from "../assets/logos/mongo.png";
import postgres from "../assets/logos/postgres.png";
import java from "../assets/logos/java (2).png";
import python from "../assets/logos/Python.png";
import postman from "../assets/logos/postman.png";
import flutter from "../assets/logos/Flutter.png";
import angular from "../assets/logos/Angular.png";
import c from "../assets/logos/C.png";
import cpp from "../assets/logos/C++.png";
import kotlin from "../assets/logos/Kotlin.png";
import linux from "../assets/logos/linux.png";
import aws from "../assets/logos/aws.png";
import go from "../assets/logos/go.png";

import canva from "../assets/logos/canva.png";
import figma from "../assets/logos/Figma.png";
import github from "../assets/logos/github.png";
import jira from "../assets/logos/Jira.png";
import phpmyadmin from "../assets/logos/phpmyadmin.png";
import mysqlworkbench from "../assets/logos/mysqlworkbench.png";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("web development"); // Default category is "all"

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      category: "web development",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      category: "web development",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
      category: "programming languages",
    },
    {
      id: 4,
      src: php,
      title: "PHP",
      style: "shadow-gray-500",
      category: "programming languages",
    },
    {
      id: 5,
      src: react,
      title: "React",
      style: "shadow-blue-600",
      category: "web development",
    },
    {
      id: 6,
      src: tailwind,
      title: "TailwindCss",
      style: "shadow-sky-400",
      category: "web development",
    },
    {
      id: 7,
      src: node,
      title: "NodeJs",
      style: "shadow-green-500",
      category: "web development",
    },
    {
      id: 8,
      src: java,
      title: "Java",
      style: "shadow-red-500",
      category: "programming languages",
    },
    {
      id: 9,
      src: python,
      title: "Python",
      style: "shadow-orange-500",
      category: "programming languages",
    },
    {
      id: 10,
      src: mysql,
      title: "MySQL",
      style: "shadow-blue-500",
      category: "database",
    },
    {
      id: 11,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-500",
      category: "database",
    },
    {
      id: 12,
      src: postgres,
      title: "PostgreSQL",
      style: "shadow-gray-500",
      category: "database",
    },

    {
      id: 13,
      src: flutter,
      title: "Flutter",
      style: "shadow-sky-500",
      category: "mobile development",
    },
    {
      id: 14,
      src: postman,
      title: "Postman",
      style: "shadow-gray-500",
      category: "other",
    },
    {
      id: 15,
      src: canva,
      title: "Canva",
      style: "shadow-green-500",
      category: "tools",
    },
    {
      id: 16,
      src: figma,
      title: "Figma",
      style: "shadow-sky-500",
      category: "tools",
    },
    {
      id: 17,
      src: github,
      title: "Githib",
      style: "shadow-gray-500",
      category: "project management",
    },
    {
      id: 18,
      src: jira,
      title: "Jira",
      style: "shadow-green-500",
      category: "project management",
    },
    {
      id: 19,
      src: postgres,
      title: "pgAdmin",
      style: "shadow-sky-500",
      category: "database",
    },
    {
      id: 20,
      src: phpmyadmin,
      title: "phpMyAdmin",
      style: "shadow-sky-500",
      category: "database",
    },

    {
      id: 21,
      src: mysqlworkbench,
      title: "MySql Workbench",
      style: "shadow-sky-500",
      category: "database",
    },
    {
      id: 22,
      src: angular,
      title: "AngularJs",
      style: "shadow-red-500",
      category: "web development",
    },
    {
      id: 23,
      src: cpp,
      title: "C++",
      style: "shadow-blue-500",
      category: "programming languages",
    },
    {
      id: 24,
      src: c,
      title: "C",
      style: "shadow-blue-500",
      category: "programming languages",
    },
    {
      id: 25,
      src: kotlin,
      title: "Kotlin",
      style: "shadow-orange-500",
      category: "mobile development",
    },
    {
      id: 26,
      src: aws,
      title: "AWS",
      style: "shadow-gray-500",
      category: "other",
    },
    {
      id: 27,
      src: linux,
      title: "Linux",
      style: "shadow-gray-500",
      category: "other",
    },
    {
      id: 28,
      src: go,
      title: "Golang",
      style: "shadow-green-500",
      category: "programming languages",
    },
  ];

  // Filter technologies based on the selected category
  const filteredTechs =
    selectedCategory === "all"
      ? techs
      : techs.filter((tech) => tech.category === selectedCategory);

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies i've worked with</p>
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
            onClick={() => setSelectedCategory("web development")}
            className={`${
              selectedCategory === "web development"
                ? "bg-gradient-to-r from-pink-300 to-purple-700"
                : "bg-gray-500 "
            } hover:bg-gray-800 px-1 py-1 text-sm w-[16%] rounded-lg`}
          >
            Web Development
          </button>
          <button
            onClick={() => setSelectedCategory("programming languages")}
            className={`${
              selectedCategory === "programming languages"
                ? "bg-gradient-to-r from-pink-300 to-purple-700"
                : "bg-gray-500"
            } hover:bg-gray-800 px-1 py-1 text-sm w-[16%] rounded-lg`}
          >
            Programming Languages
          </button>
          <button
            onClick={() => setSelectedCategory("database")}
            className={`${
              selectedCategory === "database"
                ? "bg-gradient-to-r from-pink-300 to-purple-700"
                : "bg-gray-500"
            } hover:bg-gray-800 px-1 py-1 text-sm w-[16%] rounded-lg`}
          >
            Database
          </button>

          <button
            onClick={() => setSelectedCategory("project management")}
            className={`${
              selectedCategory === "project management"
                ? "bg-gradient-to-r from-pink-300 to-purple-700"
                : "bg-gray-500"
            } hover:bg-gray-800 px-1 py-1 text-sm w-[16%] rounded-lg`}
          >
            Project Management
          </button>
          <button
            onClick={() => setSelectedCategory("mobile development")}
            className={`${
              selectedCategory === "mobile development"
                ? "bg-gradient-to-r from-pink-300 to-purple-700"
                : "bg-gray-500"
            } hover:bg-gray-800 px-1 py-1 text-sm w-[16%] rounded-lg`}
          >
            Mobile Development
          </button>
          <button
            onClick={() => setSelectedCategory("tools")}
            className={`${
              selectedCategory === "tools"
                ? "bg-gradient-to-r from-pink-300 to-purple-700"
                : "bg-gray-500"
            } hover:bg-gray-800 px-1 py-1 text-sm w-[16%] rounded-lg`}
          >
            Designing Tools
          </button>

          <button
            onClick={() => setSelectedCategory("other")}
            className={`${
              selectedCategory === "other"
                ? "bg-gradient-to-r from-pink-300 to-purple-700"
                : "bg-gray-500"
            } hover:bg-gray-800 px-1 py-1 text-sm w-[16%] rounded-lg`}
          >
            Other
          </button>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {filteredTechs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 text-xs mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
