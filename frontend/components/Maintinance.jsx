import React from "react";

const Maintinance = () => {
  return (
    <div className="">
      <main className="flex h-screen flex-col items-center justify-center flex-1 px-20 text-center text-white">
        <h1 className="text-6xl font-bold">
          We're Sorry, This Page is Currently Under Maintenance
        </h1>

        <p className="mt-3 text-2xl">
          We apologize for the inconvenience. Please check back later.
        </p>
      </main>
      <footer className="flex items-center align-bottom justify-center w-full h-24 border-t">
        <p className="text-gray-500">Powered by Dev Wizard Team</p>
      </footer>
    </div>
  );
};

export default Maintinance;
