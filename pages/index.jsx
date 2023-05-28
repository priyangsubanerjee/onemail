/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <main className="font-jost">
      <div>
        <nav className="h-20 flex items-center px-5 lg:px-28 bg-white border-b">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" className="h-12" alt="" />
            <h1 className="text-xl lg:text-2xl">Onemail</h1>
          </div>
          <ul className="hidden lg:flex items-center ml-16 text-zinc-700 space-x-8">
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
          <div className="ml-auto">
            <button className="border hover:bg-black/5 border-black text-black px-8 lg:px-6 py-1 transition-all rounded-full">
              Sign in
            </button>
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
      <div className="lg:px-28 px-6 py-16 lg:py-28 text-center">
        <h1 className="lg:text-4xl text-xl font-semibold">
          The only email API you&apos;ll ever need
        </h1>
        <p className="mt-4 lg:mt-5 leading-8 text-sm lg:text-base">
          Onemail is a simple, reliable API for sending html temaplates directly
          from your frontend app to your users&apos; inbox.
        </p>
        <img
          className="mt-7"
          src="https://magicbell.com/api/og-images?url=https://magicbell.ghost.io/content/images/2022/01/EmailAPIs.jpeg"
          alt=""
        />
        <div className="lg:flex justify-center lg:px-24 text-left mt-20">
          <div className="flex flex-col justify-center">
            <h1 className="lg:text-3xl text-xl font-medium">
              Wanna do a quick OTP verification?{" "}
              <span className="text-indigo-500">We got you !</span>
            </h1>
            <img
              src="https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5488.jpg?w=2000"
              alt=""
              className="h-[300px] lg:hidden block mt-5"
            />
            <p className="leading-7 lg:leading-8 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium quis, temporibus omnis inventore consectetur rem
              tempore adipisci harum est impedit modi suscipit, possimus
              necessitatibus voluptatibus, sapiente deserunt quisquam quidem
              dolor?s
            </p>
            <button className="w-fit px-6 py-2 bg-indigo-500 rounded text-white mt-10">
              Read more
            </button>
          </div>
          <img
            src="https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5488.jpg?w=2000"
            alt=""
            className="h-[500px] hidden lg:block"
          />
        </div>
      </div>
    </main>
  );
}
