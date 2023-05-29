/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";
import Credential from "@/components/Credential";
import Create from "@/components/Create";
import GlobalStateContext from "@/context/GlobalStates";
import Head from "next/head";

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/",
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

function Dashboard() {
  const { createOpen, setCreateOpen, credentials } =
    useContext(GlobalStateContext);
  const session = useSession();

  return (
    <main>
      <Head>
        <title>Dashboard | Onemail</title>
      </Head>
      <div className="lg:px-28 lg:py-0 pb-20 font-jost">
        <div className="py-4 px-5 lg:px-0 border-b lg:border-none lg:bg-transparent lg:mt-6 flex justify-between bg-white">
          <div className="flex items-center space-x-3 lg:hover:bg-zinc-100 lg:px-5 rounded">
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
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
            <span>Sort</span>
          </div>
          <button
            onClick={() => setCreateOpen(true)}
            className="border border-black/20 rounded bg-white text-black px-5 h-10"
          >
            Create new
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:mt-7 px-5 mt-7">
          {credentials == null ? (
            <div className="mt-10 lg:col-span-3 flex flex-col items-center">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/add-photo-2670583-2215267.png"
                alt=""
                className="h-44"
              />
              <h1 className="text-xl text-center mt-10">
                No credentials found
              </h1>
            </div>
          ) : credentials.length == 0 ? (
            <div className="flex items-center justify-center lg:col-span-3">
              <img
                src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"
                alt=""
                className="h-56"
              />
            </div>
          ) : (
            credentials.map((credential, i) => {
              return <Credential key={i} data={credential} />;
            })
          )}
        </div>
        <Create />
      </div>
    </main>
  );
}

export default Dashboard;
