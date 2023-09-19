// pages/index.js

import React from "react";
import BFHLForm from "../components/BFHLForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-200 flex justify-center items-center">
      <div>
        <BFHLForm />
      </div>
    </main>
  );
}
