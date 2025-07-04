import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-white w-[90vw] top-12 right-[5vw] rounded-full p-3.5 mx-auto flex justify-between fixed text-black">
      <div className="logo flex gap-15 px-6">
        <Image
          className=" cursor-pointer"
          src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
          alt=""
          width={120}
          height={69}
        />

        <ul className="flex gap-10 items-center font-medium text-[17px]">
          <li className=" cursor-pointer">Products</li>
          <li className=" cursor-pointer">Templates</li>
          <li className=" cursor-pointer">Marketplace</li>
          <li className=" cursor-pointer">Learn</li>
          <li className=" cursor-pointer">Price</li>
        </ul>
      </div>
      <div className="button flex gap-3 font-semibold text-lg align-middle">
        <Link href={"/login"}>
          <button className="h-[60px] w-[100px] cursor-pointer rounded-lg hover:bg-pink-100 ">
            Log in
          </button>
        </Link>

        <Link href={"signup"}>
          <button className="bg-[#1f252f] hover:bg-[#252a35] cursor-pointer text-white h-[60px] w-[150px] rounded-full">
            Sign up free
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
