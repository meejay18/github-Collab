import React from "react";
import img from "../assets/tailwindimg.png";
import { LuMoonStar } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
const HeaderComp = () => {
  const Navs = [
    {
      id: 1,
      title: "Docs",
    },
    {
      id: 1,
      title: "Components",
    },
    {
      id: 1,
      title: "Blogs",
    },
    {
      id: 1,
      title: "Showcase",
    },
  ];

  return (
    <div className="w-full h-[4.5rem] bg-[#0B1120] text-white flex justify-center items-center">
      <div className="w-[95%] h-full  flex justify-between">
        <div className="w-[250px] h-full ">
          <img src={img} alt="" />
        </div>
        <div className="w-[500px] h-full flex">
          <div className="w-[75%] h-full  text-[18px] flex justify-between items-center">
            {Navs.map((el) => (
              <div>{el.title}</div>
            ))}
          </div>
          <div className="w-[25%] h-full flex  items-center">
            <div className="w-[50%] h-full flex justify-center items-center text-[30px]">
              <LuMoonStar />
            </div>
            <div className="w-[50%] h-full flex justify-center items-center text-[30px]">
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComp;
