"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Rive from "@rive-app/react-canvas";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [text, setText] = useState("linktr.ee/");

const router = useRouter();

const createTree = () => {
  router.push(`/generate?handle=${text}`);
};


  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#254F1A] min-h-[130vh] grid grid-cols-2">
          <div className="flex justify-center flex-col ml-[5vw]">
            <p className="text-[#D2E823] font-bold text-7xl">Everything you</p>
            <p className="text-[#D2E823] font-bold text-7xl">are. In one,</p>
            <p className="text-[#D2E823] font-bold text-7xl mb-5">
              simple link in bio.
            </p>

            <p className="text-white text-xl font-medium">
              Join 70M+ people using Linktree for their link in bio. One link to
              help you share everything you create, curate and sell from your
              Instagram, TikTok, Twitter, YouTube and other social media
              profiles.
            </p>

            <div className="form mt-16">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                placeholder=""
                className="w-80 px-5 py-5 bg-white rounded-lg placeholder:font-bold focus:outline-green-700 mr-3"
              />
              <button
                href="/Generate"
                onClick={() => createTree()}
                className="rounded-full bg-[#E9C0E9] px-7 py-5 text-lg cursor-pointer font-semibold"
              >
                Claim your Linktree
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col mr-[5vw]">
            <Image
              src="/rotate1.png"
              alt="rotate images"
              width={400}
              height={400}
            />
          </div>
        </section>

        {/* <section className="bg-[#bb2121] min-h-screen"></section>

        <div className="bg-[url('https://assets.production.linktr.ee/auth/3410/media/banner-register-social-desktop.18fa56fce6ad2db4f48b.webp')] h-[400px] w-full bg-cover bg-center"></div>

        <div className="w-80 h-80">
          <Rive src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/680faadc0a1fc2e5ead38037_homeage_image_2.riv" />
        </div> */}
      </main>
    </>
  );
}
