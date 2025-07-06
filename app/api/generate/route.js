import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(request) {
  const body = await request.json();

  const client = await clientPromise;
  const db = client.db("linktree");
  const collection = db.collection("links");

  if (body.action === "add") {
    const doc = await collection.findOne({ handle: body.handle });
    if (doc) {
      return Response.json({
        success: false,
        error: true,
        message: "This handle already exists",
      });
    }

    const result = await collection.insertOne({
      handle: body.handle,
      links: body.links,
    });

    return Response.json({
      success: true,
      error: false,
      message: "Handle & links saved. Continue to profile.",
      insertedId: result.insertedId, 
    });
  }

  if (body.action === "complete") {
    console.log("Updating profile for _id:", body._id);
    console.log("Data to set:", {
      bio: body.bio,
      displayName: body.displayName,
      pic: body.pic
    });

    const updateResult = await collection.updateOne(
      { _id: new ObjectId(body._id) },
      { $set: { bio: body.bio, displayName: body.displayName, pic: body.pic } }
    );

    const updatedDoc = await collection.findOne({ _id: new ObjectId(body._id) });

    return Response.json({
      success: true,
      error: false,
      message: "Profile completed",
      handle: updatedDoc.handle,  // so your frontend can safely redirect
    });
  }

  return Response.json({ success: false, message: "Invalid request" });
}
