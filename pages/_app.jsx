/* eslint-disable react-hooks/exhaustive-deps */
import Create from "@/components/Create";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import GlobalStateContext from "@/context/GlobalStates";
import "@/styles/globals.css";
import { SessionProvider, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [credentials, setCredentials] = useState([]);
  const [statusText, setStatusText] = useState("Loading...");
  const [loading, setLoading] = useState(true);

  const changeStatus = async (text) => {
    setStatusText(text);
  };

  const refreshData = async () => {
    if (session && session.user && session.user.email) {
      let res = await fetch("/api/fetch", {
        method: "POST",
        body: JSON.stringify({ admin: session.user.email }),
      });

      if (res.status === 200) {
        let data = await res.json();
        if (data.success) {
          console.log(data.credentials);
          setCredentials(data.credentials);
          return true;
        }
      } else {
        console.log("Error");
      }
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  useEffect(() => {
    if (setSidebarOpen == true || createOpen == true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [createOpen, sidebarOpen]);

  return (
    <SessionProvider session={session}>
      <GlobalStateContext.Provider
        value={{
          sidebarOpen,
          setSidebarOpen,
          createOpen,
          setCreateOpen,
          credentials,
          setCredentials,
          refreshData,
          changeStatus,
          statusText,
          loading,
          setLoading,
        }}
      >
        <Navbar />
        <Component {...pageProps} />
        <Sidebar />
        <Loading />
      </GlobalStateContext.Provider>
    </SessionProvider>
  );
}
