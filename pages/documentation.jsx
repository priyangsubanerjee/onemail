import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";

function Documentation() {
  const codeStringAsync = `
    const sendEmail = async () => {

        let endpoint = "https://onemail.vercel.app/api/send";
    
        let params = {
            to: "",
            subject: "",
            text: "",
            html: "",
            secret: ""
        }
    
        let response = await fetch(endpoint, {
            method: "POST",
            body: JSON.stringify(params)
        });
        
        let data = await response.json();
        console.log(data);
    }
    `;

  const codeStringServerLess = `
     const sendEmail = () => {

        let endpoint = "https://onemail.vercel.app/api/send";
    
        let params = {
            to: "",
            subject: "",
            text: "",
            html: "",
            secret: ""
        }
    
        fetch(endpoint, {
            method: "POST",
            body: JSON.stringify(params)
        });
        
       // email will be delivered in the background
    }
    `;
  return (
    <main>
      <Head>
        <title>Documentation | Onemail</title>
      </Head>
      <div className="lg:px-28 px-5 py-8 lg:py-16 font-jost">
        <h1 className="text-2xl">Documentation</h1>
        <p className="text-sm mt-2 text-zinc-600">
          make sure you have a onemail account & atleast 1 active credential
        </p>

        <h1 className="text-lg lg:text-xl mt-10 lg:mt-24 leading-[1.9]">
          Send email & wait for response using{" "}
          <span className="font-mono text-sm lg:text-base bg-red-100 px-2 py-1">
            async & await
          </span>
        </h1>

        <pre className="bg-zinc-200 pb-4 mt-7 w-full pl-8 lg:pl-0 relative">
          <code className="text-xs whitespace-pre-line lg:whitespace-pre-wrap">
            {codeStringAsync}
          </code>
          <button
            onClick={(e) => {
              navigator.clipboard.writeText(codeStringAsync);
              e.target.innerText = "Copied!";
              setTimeout(() => {
                e.target.innerText = "Copy";
              }, 4000);
            }}
            className="absolute right-2 top-2 text-sm font-jost bg-white px-4 py-2 rounded"
          >
            Copy
          </button>
        </pre>

        <h1 className="text-xl mt-28 leading-[1.9]">
          Send email in the background using our{" "}
          <span className="font-mono text-sm lg:text-base bg-red-100 px-2 py-1">
            serverless function
          </span>
        </h1>

        <pre className="bg-zinc-200 pb-4 mt-7 w-full pl-8 lg:pl-0 relative">
          <code className="text-xs whitespace-pre-line lg:whitespace-pre-wrap">
            {codeStringServerLess}
          </code>
          <button
            onClick={(e) => {
              navigator.clipboard.writeText(codeStringServerLess);
              e.target.innerText = "Copied!";
              setTimeout(() => {
                e.target.innerText = "Copy";
              }, 4000);
            }}
            className="absolute right-2 top-2 text-sm font-jost bg-white px-4 py-2 rounded"
          >
            Copy
          </button>
        </pre>
      </div>
    </main>
  );
}

export default Documentation;
