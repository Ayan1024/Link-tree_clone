import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const handle = params.handle;

  const client = await clientPromise;
  const db = client.db("linktree");
  const collection = db.collection("links");

  const item = await collection.findOne({ handle: `linktr.ee/${handle}` });

  if (!item) {
    return notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white justify-start items-center py-10">
      <div className="text-center">
        <img
          className="w-52 h-52 rounded-full object-cover mx-auto"
          src={item.pic}
          alt={item.displayName}
        />
        <div className="text-2xl font-bold mt-3">{item.displayName}</div>
        <div className="font-mono text-gray-600">@{item.handle}</div>
        <div className="text-xl mt-2">{item.bio}</div>
      </div>

      <div className="text-center mt-6 w-full max-w-md">
        {item.links.map((link, index) => {
          // Ensure link is absolute (starts with http)
          const href = link.link.startsWith("http")
            ? link.link
            : `https://${link.link}`;

          return (
            <a
              key={index}
              href={href}
          
              rel="noopener noreferrer"
            >
              <div className="flex justify-center mb-3 border rounded-xl px-6 py-3 shadow hover:bg-gray-100 transition cursor-pointer">
                <span className="hover:underline text-lg">
                  {link.linktext}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
