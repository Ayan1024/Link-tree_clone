import React from 'react'
import Link from 'next/link'

function Profilepic() {
  return (
      <div className="flex flex-col justify-center items-center gap-10 mt-20">
      <div className="flex flex-col justify-center items-center gap-2 ">
        <h1 className="font-bold text-3xl flex justify-center">
          Add profile details
        </h1>
        <p>
        Add your profile image, name, and bio
        </p>
      </div>
      <div className="flex justify-center items-center flex-col gap-5">
        <h6 className="font-bold text-xl h-3xl  rounded-full bg-red-300 ">pic</h6>
        <div className="links flex flex-col gap-3.5">
          <input
            className="border-gray-500 border-1 rounded w-2xl h-10 px-4 outline:black"
            type="text"
            placeholder="Display Name"
          />
          <input
            className="border-gray-500 border-1 rounded w-2xl h-20 px-4 outline:black"
            type="text"
            placeholder="Bio"
          />
    
        </div>
        <Link     className="bg-purple-600 w-full h-10 font-bold text-white rounded-full cursor-pointer hover:bg-purple-500 text-center flex justify-center items-center" 
        href={"/"}>
    Continue
        </Link>
      </div>
    </div>
  )
}

export default Profilepic
