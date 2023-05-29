import GlobalStateContext from "@/context/GlobalStates";
import React, { useContext, useState } from "react";
import Edit from "./Edit";

function Credential({ data }) {
  const { setLoading, changeStatus, refreshData } =
    useContext(GlobalStateContext);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const deleteProduct = async () => {
    setLoading(true);
    changeStatus("Deleting credential...");
    const res = await fetch("/api/delete", {
      method: "POST",
      body: JSON.stringify({ id: data._id }),
    });

    if (res.status === 200) {
      let data = await res.json();
      if (data.success) {
        changeStatus("Updating library...");
        let refreshed = await refreshData();
        if (refreshed) {
          setDeleteOpen(false);
          setLoading(false);
        }
      }
    }
  };
  return (
    <div className="bg-white border p-6 font-jost">
      <h1 className="text-lg font-medium">{data.name}</h1>
      <p className="text-sm mt-2 text-zinc-700 overflow-hidden whitespace-nowrap text-ellipsis">
        {data.description}
      </p>
      <p className="text-sm mt-4 text-zinc-700">{data.email}</p>
      <div className="mt-6 flex items-center">
        <button className="text-sm h-10 px-5 border rounded bg-zinc-50">
          Copy secret id
        </button>
        <button
          onClick={() => setEditOpen(true)}
          className="ml-2 text-sm h-10 px-4 border rounded bg-zinc-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </button>
        <button
          onClick={() => setDeleteOpen(true)}
          className="ml-auto text-sm h-10 px-4 border rounded bg-zinc-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
      {deleteOpen && (
        <div className="fixed font-jost inset-0 h-full w-full bg-black/50 z-10 flex items-center justify-center">
          <div className="w-[95%] lg:w-[500px] bg-white p-8">
            <h1 className="text-xl font-medium leading-8">
              Are you sure you want to delete this credential?
            </h1>
            <p className="mt-5 text-zinc-600 text-sm">
              This action is irreversibe &amp; cannot be undone
            </p>
            <div className="grid grid-cols-2 mt-10 gap-4">
              <button
                onClick={() => setDeleteOpen(false)}
                className="bg-zinc-100 py-2"
              >
                Cancel
              </button>
              <button
                onClick={async () => deleteProduct()}
                className="bg-red-600 text-white py-2"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {editOpen && <Edit credential={data} setEditOpen={setEditOpen} />}
    </div>
  );
}

export default Credential;
