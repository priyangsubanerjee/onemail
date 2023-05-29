import GlobalStateContext from "@/context/GlobalStates";
import React, { useContext, useState } from "react";

function Edit({ credential, setEditOpen }) {
  const { setLoading, changeStatus, refreshData } =
    useContext(GlobalStateContext);
  const [credCopy, setCredCopy] = useState(credential);
  const handleSubmit = async () => {
    setLoading(true);
    changeStatus("Updating credential ...");
    const res = await fetch("/api/update", {
      method: "POST",
      body: JSON.stringify(credCopy),
    });
    const data = await res.json();
    if (data.success) {
      changeStatus("Updating library ...");
      let refresh = await refreshData();
      if (refresh) {
        setLoading(false);
        setEditOpen(false);
      }
    }
  };
  return (
    <div className="z-20 fixed inset-0 h-full w-full bg-black/50 flex items-end lg:items-center lg:justify-center">
      <div className="w-full lg:w-[550px] h-full lg:h-fit bg-white p-6 lg:p-8 font-jost">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-light">Edit credential</h1>
          <button onClick={() => setEditOpen(false)}>
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
            value={credCopy.name}
            onChange={(e) => setCredCopy({ ...credCopy, name: e.target.value })}
            className="h-14 px-4 border w-full rounded"
            name=""
            id=""
          />
          <input
            type="text"
            placeholder="Email"
            value={credCopy.email}
            onChange={(e) =>
              setCredCopy({ ...credCopy, email: e.target.value })
            }
            className="h-14 px-4 border w-full mt-4 rounded"
            name=""
            id=""
          />
          <input
            type="text"
            placeholder="App password"
            value={credCopy.password}
            onChange={(e) =>
              setCredCopy({ ...credCopy, password: e.target.value })
            }
            className="h-14 px-4 border w-full mt-4 rounded"
            name=""
            id=""
          />
          <textarea
            name=""
            id=""
            rows={4}
            value={credCopy.description}
            onChange={(e) =>
              setCredCopy({ ...credCopy, description: e.target.value })
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
  );
}

export default Edit;
