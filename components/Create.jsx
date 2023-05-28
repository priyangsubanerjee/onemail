import GlobalStateContext from "@/context/GlobalStates";
import { useSession } from "next-auth/react";
import React, { useContext, useState } from "react";

function Create() {
  const session = useSession();
  const { createOpen, setCreateOpen, refreshData, setLoading, changeStatus } =
    useContext(GlobalStateContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    description: "",
    admin: session.data.user.email,
  });

  const handleSubmit = async (e) => {
    setLoading(true);
    changeStatus("Creating credential...");
    let res = await fetch("/api/create", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.status === 200) {
      let data = await res.json();
      if (data.success) {
        changeStatus("Upldating library...");
        let refreshed = await refreshData();
        if (refreshed) {
          setCreateOpen(false);
          setLoading(false);
        }
      }
    }
  };

  return (
    <>
      {createOpen && (
        <div className="z-20 fixed inset-0 h-full w-full bg-black/50 flex items-end lg:items-center lg:justify-center">
          <div className="w-full lg:w-[550px] h-full lg:h-fit bg-white p-6 lg:p-8 font-jost lg:rounded">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-light">Create credential</h1>
              <button onClick={() => setCreateOpen(false)}>
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="mt-10"
            >
              <input
                type="text"
                placeholder="Display name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className="h-14 px-4 border w-full rounded"
                name=""
                id=""
              />
              <input
                type="text"
                placeholder="Email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className="h-14 px-4 border w-full mt-4 rounded"
                name=""
                id=""
              />
              <input
                type="text"
                placeholder="App password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                className="h-14 px-4 border w-full mt-4 rounded"
                name=""
                id=""
              />
              <textarea
                name=""
                id=""
                rows={4}
                value={data.description}
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
                className="border p-4 w-full mt-4 rounded resize-none"
                placeholder="Description"
              ></textarea>
              <button className="w-full bg-black rounded text-white py-4 mt-7">
                Save credential
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Create;
