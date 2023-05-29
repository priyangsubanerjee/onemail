import GlobalStateContext from "@/context/GlobalStates";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useContext } from "react";

function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useContext(GlobalStateContext);
  const session = useSession();

  return (
    <>
      {sidebarOpen && (
        <div className="fixed inset-0 h-screen w-screen bg-black/50 flex">
          <div className="h-screen w-screen lg:w-[400px] bg-white ml-auto font-jost p-8">
            <div className="flex items-center justify-end">
              <button onClick={() => setSidebarOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div>
              <p>Good morning</p>
              <h1 className="text-2xl font-medium mt-2">
                {session.data.user.name}
              </h1>
            </div>
            <div className="mt-8 border-t pt-8">
              <ul className="text-sm space-y-4 text-zinc-700">
                <li>
                  <Link href={"/dashboard"}>Active credentials</Link>
                </li>
                <li>Documentation</li>
                <li>Feedback</li>
              </ul>
            </div>
            <div className="mt-8 border-t pt-8">
              <button
                onClick={() => signOut()}
                className="border px-6 h-10 border-zinc-400 rounded"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
