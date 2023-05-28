/* eslint-disable @next/next/no-img-element */
import GlobalStateContext from "@/context/GlobalStates";
import { signIn, useSession } from "next-auth/react";
import React, { useContext } from "react";

function Navbar() {
  const session = useSession();
  const { sidebarOpen, setSidebarOpen } = useContext(GlobalStateContext);

  return (
    <div className="font-jost bg-white">
      <nav className="h-20 flex items-center px-5 lg:px-28 bg-white border-b">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" className="h-12" alt="" />
          <h1 className="text-xl lg:text-2xl">Onemail</h1>
        </div>
        <ul className="hidden lg:flex items-center ml-16 text-zinc-700 space-x-8">
          {session.status == "unauthenticated" && (
            <li>
              {" "}
              <a href="">Home</a>
            </li>
          )}
          <li>
            <a href="">Documentaion</a>
          </li>
          <li>
            <a href="">Feedback</a>
          </li>
        </ul>
        <div className="ml-auto">
          {session.status == "authenticated" ? (
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex items-center cursor-pointer lg:hover:bg-zinc-100 lg:px-4 py-2 rounded-md"
            >
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={session.data.user.image}
                alt=""
              />
              <div className="hidden lg:block text-left ml-2">
                <p className="text-sm">{session.data.user.name}</p>
                <p className="text-xs text-zinc-700 mt-[2px]">
                  {session.data.user.email}
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 ml-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="border hover:bg-black/5 border-black text-black px-8 lg:px-6 py-1 transition-all rounded-full"
            >
              Sign in
            </button>
          )}
        </div>
      </nav>
      <div>
        <ul className="flex lg:hidden items-center p-3 justify-center border-b text-zinc-700 space-x-8">
          {session.status == "unauthenticated" && (
            <li>
              {" "}
              <a href="">Home</a>
            </li>
          )}
          <li>
            <a href="">Documentaion</a>
          </li>
          <li>
            <a href="">Feedback</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
