/* eslint-disable @next/next/no-img-element */
import GlobalStateContext from "@/context/GlobalStates";
import React, { useContext } from "react";

function Loading() {
  const { statusText, loading } = useContext(GlobalStateContext);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 h-full w-full bg-black/50 flex items-center justify-center z-30">
          <div className="w-[80%] lg:w-[400px] flex flex-col items-center justify-center p-8 bg-white rounded-md">
            <img
              src="https://cdn.dribbble.com/users/807926/screenshots/3629667/loadingtwo.gif"
              alt=""
              className="h-56 object-contain"
            />
            <p className="text-xl font-jost text-gray-700 mt-4">{statusText}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Loading;
