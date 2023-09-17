import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
          LinkedIn
        </>
      ),
      href: "https://www.linkedin.com/in/apsara-hansani-liyanage-67aa70234/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
          Github
        </>
      ),
      href: "https://github.com/ApsaraLiyanage99",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
          Mail
        </>
      ),
      href: "mailto:apsliyanage99@gmail.com",
    },

    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
          Resume
        </>
      ),
      href: "/Apsara_Liyanage.pdf",
      style: "rounded-br-md",
      download: false,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] right-0 fixed ">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 mr-[-100px] hover:ml-[-98px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
