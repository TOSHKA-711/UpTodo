"use client";

import React from "react";
import { RiHome5Fill } from "react-icons/ri";
import { IoAddOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaClock } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { taskOpen } from "../Redux/Slices/DialogsSlice";

const Footer: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="footer flex flex-row justify-center items-center absolute bottom-0 left-0 w-full pb-[0.35rem] max-sm:pb-0">
      <div className="container relative bg-[#363636] p-5 rounded-lg max-sm:rounded-none max-w-lg max-sm:max-w-full  grid grid-cols-5 items-center">
        <span className="flex flex-col justify-center items-center gap-2 hover:text-[#8687E7] duration-300 cursor-pointer">
          <RiHome5Fill className="text-2xl max-sm:text-[18px]" />
          Home
        </span>
        <span className="flex flex-col justify-center items-center gap-2 hover:text-[#8687E7] duration-300 cursor-pointer">
          <SlCalender className="text-2xl max-sm:text-[18px]" />
          Calender
        </span>
        <span
          onClick={() => dispatch(taskOpen())}
          className=" flex items-center justify-center"
        >
          <IoAddOutline className=" text-[3.5rem] bg-[#8687E7] p-3 rounded-full -translate-y-[85%] cursor-pointer duration-300 hover:scale-110" />
        </span>
        <span className="flex flex-col justify-center items-center gap-2 hover:text-[#8687E7] duration-300 cursor-pointer">
          <FaClock className="text-2xl max-sm:text-[18px]" />
          Focus
        </span>
        <span className="flex flex-col justify-center items-center gap-2 hover:text-[#8687E7] duration-300 cursor-pointer">
          <CgProfile className="text-2xl max-sm:text-[18px]" />
          Profile
        </span>
      </div>
    </div>
  );
};

export default Footer;
