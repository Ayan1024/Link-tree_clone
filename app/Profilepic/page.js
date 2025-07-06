"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProfileContent() {
  const [bio, setBio] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [pic, setPic] = useState("");
  const [id, setId] = useState(null);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams) {
      const _id = searchParams.get("_id");
      setId(_id);
    }
  }, [searchParams]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPic(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const saveProfile = async () => {
    try {
      const r = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _id: id,
          action: "complete",
          bio,
          displayName,
          pic
        })
      });
      const result = await r.json();
      if (result.success) {
        toast.success("Profile completed!");
        router.push(`/${result.handle}`);
      } else {
        toast.error("Failed to save profile");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20 gap-4">
      <ToastContainer />
      <h1 className="text-3xl font-bold">Complete your profile</h1>
      <input 
        type="text"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        placeholder="Display Name"
        className="border border-gray-400 rounded px-4 py-2 w-80"
      />
      <textarea 
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Your bio"
        className="border border-gray-400 rounded px-4 py-2 w-80 h-24"
      ></textarea>
      <input 
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      {pic && <img src={pic} alt="Preview" className="w-40 h-40 rounded-full object-cover" />}
      <button 
        onClick={saveProfile}
        className="bg-purple-600 text-white font-bold rounded-full px-6 py-2 hover:bg-purple-500"
      >
        Save
      </button>
    </div>
  );
}

export default function Profilepic() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfileContent />
    </Suspense>
  );
}
