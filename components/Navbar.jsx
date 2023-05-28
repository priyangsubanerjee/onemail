/* eslint-disable @next/next/no-img-element */
import { signIn, useSession } from "next-auth/react";
import React from "react";

function Navbar() {
  const session = useSession();

  return (
    <div className="font-jost">
      <nav className="h-20 flex items-center px-5 lg:px-28 bg-white border-b">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" className="h-12" alt="" />
          <h1 className="text-xl lg:text-2xl">Onemail</h1>
        </div>
        <ul className="hidden lg:flex items-center ml-16 text-zinc-700 space-x-8">
          <li>
            {session.status == "authenticated" ? (
              <a href="">Credentials</a>
            ) : (
              <a href="">Home</a>
            )}
          </li>
          <li>
            <a href="">Documentaion</a>
          </li>
          <li>
            <a href="">Feedback</a>
          </li>
        </ul>
        <div className="ml-auto">
          {session.status == "authenticated" ? (
            <div></div>
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
          <li>
            <a href="">Home</a>
          </li>
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
