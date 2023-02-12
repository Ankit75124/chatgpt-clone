"use client";

import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import ModalSelection from "./ModalSelection";
import Link from "next/link";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  // console.log(chats);

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* New Chat */}

          <NewChat />
          <div className="hidden sm:inline">
            {/* Model Selection */}
            <ModalSelection />
          </div>

          {/* Map through chat rows */}
          <div className="flex flex-col space-y-2 my-2">
            {loading && (
              <div className="animate-pulse text-center text-white">
                <p>Loading Chats ...</p>
              </div>
            )}
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>

      {session && (
        <div>
          <img
            src={session.user?.image!}
            alt="user"
            className="h-12 w-12 rounded-full mx-auto mb-2 hover:opacity-50"
          />
          <div
            className={`chatRow justify-center hover:bg-gray-700`}
            onClick={() => signOut()}
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
            <p className="flex-1 hidden md:inline-flex truncate">Log Out</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBar;
