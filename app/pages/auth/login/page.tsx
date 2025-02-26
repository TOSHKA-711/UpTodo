import OR from "@/app/items/OR";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// icons
import { IoIosArrowBack } from "react-icons/io";

const Login = () => {
  return (
    <div className="login h-screen relative flex flex-col items-center  justify-center gap-10 p-[3rem] ">
      <Link
        href="/pages/auth"
        className=" absolute top-8 left-8 text-3xl text-zinc-500 cursor-pointer "
      >
        <IoIosArrowBack />
      </Link>

      <h1 className="title text-4xl mb-8 ">Login</h1>
      <div className="inputs flex flex-col gap-16">
        <span className=" relative ">
          <input
            className=" bg-[#1D1D1D] border-2 border-zinc-500 p-2 outline-none focus:border-[#8687E7] rounded-[5px] w-64 "
            type="text"
            placeholder="Enter Your Username"
          />
          <p className=" absolute -top-7 left-0">Username</p>
        </span>
        <span className=" relative ">
          <input
            className=" bg-[#1D1D1D] border-2 border-zinc-500 p-2 outline-none focus:border-[#8687E7] rounded-[5px] w-64 "
            type="password"
            placeholder="***************"
          />
          <p className=" absolute -top-7 left-0">Password</p>
        </span>
      </div>
      <Link
        href="/pages/index"
        className="  hover:bg-inherit bg-[#8687E7] duration-300 border-2 border-[#8875FF] p-2 text-center w-64 "
      >
        LOGIN
      </Link>

      <OR />
     <div className="alter-btns flex flex-col items-center justify-center gap-5">

     <Link
        href=""
        className=" bg-inherit  hover:bg-[#8687E7]  duration-300 border-2 border-[#8875FF] p-2 text-center w-64 flex items-center justify-center gap-2 "
      >
        <Image src="/google.png" alt="google" width={30} height={50}/>
        Login with Google
      </Link>
      <Link
        href=""
        className=" bg-inherit  hover:bg-[#8687E7]  duration-300 border-2 border-[#8875FF] p-2 text-center w-64 flex items-center justify-center gap-2 "
      >
        <Image src="/apple.png" alt="apple" width={30} height={50}/>
        Login with Apple
      </Link>
     </div>
        
 <span className="register-link flex flex-row items-center justify-center text-zinc-500">
<p>Don’t have an account?</p>
<Link href="/pages/auth/signup" className="text-zinc-300 text-lg">Register</Link>
 </span>

     </div>

  );
};

export default Login;
