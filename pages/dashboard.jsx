import React from "react";
import { signIn, signOut } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";
import Credential from "@/components/Credential";

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
  return (
    <div className="lg:px-28 lg:py-0 px-5  font-jost">
      <div className="py-5 lg:mt-6 flex justify-between">
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
        <button className="border border-black/30 rounded bg-white text-black px-5 h-10">
          Create new
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:mt-7">
        <Credential />
        <Credential />
        <Credential />
      </div>
    </div>
  );
}

export default Dashboard;
