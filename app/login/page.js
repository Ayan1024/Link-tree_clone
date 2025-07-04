import Image from "next/image";
import React from "react";

function login() {
  return (
    <div className="bg-white min-h-screen grid grid-cols-2">
      <div className="col1">
<div className="logo">
     <Image
            className=" cursor-pointer"
            src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
            alt=""
            width={120}
            height={69}
          />
</div>
        <h1 className="font-bold text-2xl">Create your Likntree</h1>
        <div className="flex flex-col gap-5 justify-center items-center">
          <input  className="px-4 py-4 focus:outline-pink-500 rounded-4xl" type="text" placeholder="Enter your Link" />
          <input className="px-4 py-4 focus:outline-pink-500 rounded-4xl"  type="text" placeholder="Enter your Link" />
        </div>
      </div>
      <div className="col2 h-screen">
        <img
          className="h-full w-full object-cover"
          src="/banner-login-desktop.f355be949b508c58ec2d.webp"
          alt=""
        />
      </div>
    </div>
  );
}

export default login;
