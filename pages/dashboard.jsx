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
    <div className="lg:px-28 lg:py-16 px-6 py-7 font-jost">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <Credential />
        <Credential />
        <Credential />
      </div>
    </div>
  );
}

export default Dashboard;
