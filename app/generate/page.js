import Image from "next/image";
import React from "react";
import Link from "next/link";
// import Profilepic from "../profilepic/page";

function Generate() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-20">
      <div className="flex flex-col justify-center items-center gap-2 ">
        <h1 className="font-bold text-3xl flex justify-center">
          Add your links
        </h1>
        <p>
          Complete the fields below to add your content to your new Linktree
        </p>
      </div>
      <div className="flex justify-center items-center flex-col gap-5">
        <h6 className="font-bold text-xl">Additional links</h6>
        <div className="links flex flex-col gap-3.5">
          <input
            className="border-gray-500 border-1 rounded w-2xl h-10 px-4 outline:black"
            type="text"
            placeholder="url"
          />
          <input
            className="border-gray-500 border-1 rounded w-2xl h-10 px-4 outline:black"
            type="text"
            placeholder="url"
          />
          <input
            className="border-gray-500 border-1 rounded w-2xl h-10 px-4 outline:black"
            type="text"
            placeholder="url"
          />
        </div>
        <Link     className="bg-purple-600 w-full h-10 font-bold text-white rounded-full cursor-pointer hover:bg-purple-500 text-center flex justify-center items-center" 
        href={"/Profilepic"}>
    Continue
        </Link>
      </div>
    </div>
  );
}

export default Generate;
