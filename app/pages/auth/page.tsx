import Link from "next/link";
import React from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";

const Auth: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-evenly relative">
      <Link
        href="/pages/intro"
        className=" absolute top-8 left-8 text-lg text-zinc-500 cursor-pointer "
      >
        <MdOutlineArrowBackIos />
      </Link>
      <div className="text flex flex-col items-center justify-center gap-3">
        <h1 className=" text-[2.5rem]  max-sm:text-3xl ">Welcome to UpTodo</h1>
        <p className="text-zinc-500 text-center max-sm:text-sm max-sm:w-80">
          Please login to your account or create new account to continue
        </p>
      </div>
      <div className="btns flex flex-col items-stretch gap-8">
        <Link
          href="/pages/auth/login"
          className="  hover:bg-inherit bg-[#8875FF] duration-300 border-2 border-[#8875FF] p-2 text-center  "
        >
          LOGIN
        </Link>
        <Link
          href="/pages/auth/signup"
          className=" hover:bg-[#8875FF] transition duration-300 ease-in-out  border-2 border-[#8875FF]  py-2 px-20 text-center  "
        >
          CREATE ACCOUNT
        </Link>
      </div>
    </div>
  );
};

export default Auth;
