import React from "react";
import Imgs from "./Imgs";
function Home() {
  return (
    <>
      <div className="w-full bg-[#282a36] flex flex-col items-center p-5">
        <div className="flex items-center w-full max-w-[420px] rounded-lg border border-[#3b4157] bg-[#282a36] px-3 py-2">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-400 px-2"
          />
          <button className="flex items-center justify-center w-10 h-10 text-gray-300">
            🔍
          </button>
        </div>
        <div className="columns-3 gap-4 p-6 px-65">
          {Imgs.map((item) => (
            <div key={item.id} className="mb-4">
              <img
                src={item.img}
                alt=""
                className={`w-full ${item.h} object-cover rounded-xl`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
