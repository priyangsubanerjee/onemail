import GlobalStateContext from "@/context/GlobalStates";
import React, { useContext } from "react";

function Create() {
  const { createOpen, setCreateOpen } = useContext(GlobalStateContext);

  return (
    <>
      {createOpen && (
        <div className="z-20 fixed inset-0 h-full w-full bg-black/50 flex items-end lg:items-center lg:justify-center">
          <div className="w-full lg:w-[600px] h-fit bg-white p-8 font-jost lg:rounded">
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
            <form action="" className="mt-10">
              <input
                type="text"
                placeholder="Display name"
                className="h-14 px-4 border w-full"
                name=""
                id=""
              />
              <input
                type="text"
                placeholder="Email"
                className="h-14 px-4 border w-full mt-4"
                name=""
                id=""
              />
              <input
                type="text"
                placeholder="App password"
                className="h-14 px-4 border w-full mt-4"
                name=""
                id=""
              />
              <textarea
                name=""
                id=""
                cols="5"
                className="border p-4 w-full mt-4"
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
