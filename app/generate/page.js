"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Generate() {

  const searchparams = useSearchParams()

  // const [link, setLink] = useState("");
  // const [linktext, setLinktext] = useState("");
  const [links, setLinks] = useState([{ link: "", linktext: "" }]);

  const [handle, setHandle] = useState(searchparams.get("handle"));

  const setLink = (index, link, linktext ) => {
    setLinks((initialLinks)=>{
     return initialLinks.map((item , i) =>{
        if (i == index){
          return {link , linktext}
        }
        else{
          return item
        }
      })
    })
  }

  const addmoreLink = (params) => {
    setLinks(links.concat([{link: "" , linktext: ""}]))
  }
  
  

  const router = useRouter();

 const addLink = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    links,
    handle,
    action: "add",
  });

  try {
    const r = await fetch("/api/generate", {
      method: "POST",
      headers: myHeaders,
      body,
    });
    const result = await r.json();
    console.log(result);

    if (result.success) {
      toast.success(result.message, {
        onClose: () => router.push(`/Profilepic?_id=${result.insertedId}`),
        autoClose: 1000,
      });
    } else {
      toast.error(result.message);
    }
  } catch (error) {
    console.error("Error:", error);
    toast.error("Something went wrong!");
  }
};


  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-20">
      <ToastContainer />
      <div className="flex flex-col justify-center items-center gap-2 ">
        <h1 className="font-bold text-3xl flex justify-center">
          Add your links
        </h1>
        <p>
          Complete the fields below to add your content to your new Linktree
        </p>
      </div>

      <div className="handle flex justify-center items-center flex-col gap-5 w-full max-w-md">
        <h6 className="font-bold text-xl">Claim your Handle</h6>
        <input
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
          className="border border-gray-500 rounded w-full h-10 px-4 outline-black"
          type="text"
          placeholder="Your handle"
        />
      </div>

      <div className="flex justify-center items-center flex-col gap-5 w-full max-w-md">
        <h6 className="font-bold text-xl">Additional links</h6>

        {links &&
          links.map((item, index) => {
            return(
            <div key={index} className="links flex flex-row gap-3.5 w-full">
              <input
                value={item.link || ""}
                onChange={(e) => setLink(index , e.target.value , item.linktext)}
                className="border border-gray-500 rounded w-full h-10 px-4 outline-black"
                type="text"
                placeholder="url"
              />
              <input
                value={item.linktext || ""}
                onChange={(e) =>setLink( index , item.link ,e.target.value )}
                className="border border-gray-500 rounded w-full h-10 px-4 outline-black"
                type="text"
                placeholder="add link text"
              />
            </div>);
          })}
       <button
          onClick={() => addmoreLink()}
          className="bg-purple-600 px-2 h-10 font-bold text-white rounded-full cursor-pointer hover:bg-purple-500 flex justify-center items-center"
        >
          +add another link
        </button>
        <button
          onClick={() => addLink()}
          className="bg-purple-600 w-full h-10 font-bold text-white rounded-full cursor-pointer hover:bg-purple-500 flex justify-center items-center"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Generate;
