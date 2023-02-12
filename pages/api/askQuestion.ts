// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import query from "../../lib/queryApi";
import admin from "firebase-admin";
import { adminDb } from "../../firebaseAdmin";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "No prompt provided" });
    return;
  }
  if (!chatId) {
    res.status(400).json({ answer: "No chatId provided" });
    return;
  }

  // ChatGPT API
  // console.log("before query")
  const response = await query(prompt, chatId, model);
// console.log(response);
  const message: Message = {
    text:
      response ||
      "ChatGPT was unable to find ans for this question. Please try again later.",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      avatar: "https://links.papareact.com/89k",
    },
  };

  // console.log("after response.......................");
  // console.log(message);

  // Push the message to the firebase database
  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}
