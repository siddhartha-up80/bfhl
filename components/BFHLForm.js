// components/BFHLForm.js

import React, { useState } from "react";

export default function BFHLForm() {
  const [data, setData] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/bfhl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: data.split("\n") }), // Split input by newline
      });

      if (res.ok) {
        const result = await res.json();
        setResponse(result);
      } else {
        setResponse(null);
      }
    } catch (error) {
      console.error("Error:", error);
      setResponse(null);
    }
  };

  return (
    <div className="p-4 border rounded-md shadow-lg bg-white text-black">
      <h2 className="text-2xl font-semibold mb-4">BFHL API Frontend</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full h-32 p-2 border rounded-md mb-4"
          placeholder="Enter data here..."
          value={data}
          onChange={(e) => setData(e.target.value)}
        ></textarea>
        <button
          className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition-colors duration-300"
          type="submit"
        >
          Submit
        </button>
      </form>
      {response && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Response:</h3>
          <pre className="border p-2 rounded-md bg-gray-100">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
