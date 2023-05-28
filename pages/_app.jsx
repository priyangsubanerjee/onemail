import Create from "@/components/Create";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import GlobalStateContext from "@/context/GlobalStates";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);

  return (
    <SessionProvider session={session}>
      <GlobalStateContext.Provider
        value={{
          sidebarOpen,
          setSidebarOpen,
          createOpen,
          setCreateOpen,
        }}
      >
        <Navbar />
        <Component {...pageProps} />
        <Sidebar />
      </GlobalStateContext.Provider>
    </SessionProvider>
  );
}
