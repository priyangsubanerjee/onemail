/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import { signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";
import Head from "next/head";

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default function Home() {
  return (
    <main className="font-jost bg-white">
      <Head>
        <title>Onemail | Email service api</title>
      </Head>
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

        <div className="h-[1px] lg:hidden block w-full bg-slate-200 mt-20"></div>
        <div className="lg:flex lg:space-x-16 justify-center lg:px-16 mt-24">
          <div className="flex flex-col items-center justify-center">
            <h1 className="lg:text-3xl text-xl font-medium leading-[1.4]">
              Wanna do a quick OTP verification?{" "}
            </h1>
            <img
              src="https://i.pinimg.com/originals/40/78/f9/4078f9f1cb24f4020bed0062957a54ff.jpg"
              alt=""
              className="h-[200px] lg:hidden block mt-10 object-contain"
            />
            <p className="leading-7 lg:leading-8 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium quis, temporibus omnis inventore consectetur rem
              tempore adipisci harum est impedit modi suscipit, possimus
              necessitatibus voluptatibus, sapiente deserunt quisquam quidem
              dolor?s
            </p>
            <div className="mt-10 flex items-center space-x-4">
              <button className="w-fit px-6 py-2 bg-indigo-500 rounded text-white">
                Read more
              </button>
              <button className="w-fit px-6 py-2 border border-black rounded">
                Report an issue
              </button>
            </div>
          </div>
          <img
            src="https://i.pinimg.com/originals/40/78/f9/4078f9f1cb24f4020bed0062957a54ff.jpg"
            alt=""
            className="w-[500px] hidden lg:block"
          />
        </div>
        <div className="h-[1px] lg:hidden block w-full bg-slate-200 mt-28"></div>
        <div className="lg:flex lg:flex-row-reverse lg:space-x-16 justify-center lg:px-16 lg:mt-44 mt-32">
          <div className="flex flex-col items-center justify-center">
            <h1 className="lg:text-3xl text-xl font-medium leading-[1.4]">
              Need to send a welcome email?{" "}
            </h1>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/welcome-3688628-3231459.png"
              alt=""
              className="h-[200px] lg:hidden block mt-10 object-contain"
            />
            <p className="leading-7 lg:leading-8 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium quis, temporibus omnis inventore consectetur rem
              tempore adipisci harum est impedit modi suscipit, possimus
              necessitatibus voluptatibus, sapiente deserunt quisquam quidem
              dolor?s
            </p>
            <div className=" mt-10 flex items-center space-x-4">
              <button className="w-fit px-6 py-2 bg-indigo-500 rounded text-white">
                Read more
              </button>
              <button className="w-fit px-6 py-2 border border-black rounded">
                Report an issue
              </button>
            </div>
          </div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/welcome-3688628-3231459.png"
            alt=""
            className="w-[500px] hidden lg:block"
          />
        </div>
        <div className="h-[1px] lg:hidden block w-full bg-slate-200 mt-28"></div>
        <div className="lg:flex lg:space-x-16 justify-center lg:px-16 lg:mt-44 mt-32">
          <div className="flex flex-col items-center justify-center">
            <h1 className="lg:text-3xl text-xl font-medium leading-[1.4]">
              Send a detailed invoice? Huh got you covered !
            </h1>
            <img
              src="https://i.pinimg.com/originals/86/d7/d7/86d7d7a0f62524f6db1db0dc82d4d4b8.png"
              alt=""
              className="h-[200px] lg:hidden block mt-10 object-contain scale-125"
            />
            <p className="leading-7 lg:leading-8 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium quis, temporibus omnis inventore consectetur rem
              tempore adipisci harum est impedit modi suscipit, possimus
              necessitatibus voluptatibus, sapiente deserunt quisquam quidem
              dolor?s
            </p>
            <div className="mt-10 flex items-center space-x-4">
              <button className="w-fit px-6 py-2 bg-indigo-500 rounded text-white">
                Read more
              </button>
              <button className="w-fit px-6 py-2 border border-black rounded">
                Report an issue
              </button>
            </div>
          </div>
          <img
            src="https://i.pinimg.com/originals/86/d7/d7/86d7d7a0f62524f6db1db0dc82d4d4b8.png"
            alt=""
            className="w-[500px] hidden lg:block scale-150"
          />
        </div>
      </div>
    </main>
  );
}
