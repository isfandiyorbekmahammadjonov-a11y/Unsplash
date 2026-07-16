import React from "react";
import { useState } from "react";
import { FiEye, FiDownload } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { like, dowlands } from "../redux/features/gallerySlice";
function Home() {
  const data = useSelector((state) => state.gallery.gallery);
  const dispatch = useDispatch();
  let [count, setCount] = useState(5);
  function handleChange() {
    setCount((count += 5));
  }
  return (
    <>
      <div className="w-full bg-[#282a36] flex flex-col items-center p-5 px-40">
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
          {data &&
            data.slice(0, count).map((item) => (
              <div
                key={item.id}
                className="relative mb-4 overflow-hidden rounded-xl group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full ${item.h} object-cover transition-transform duration-500 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {/* Top Left */}
                  <Link
                    to={`/modal/${item.id}`}
                    className="absolute top-4 left-4 text-white text-2xl"
                  >
                    <FiEye />
                  </Link>
                  <button
                    onClick={() => dispatch(like(item.id))}
                    className="absolute top-4 right-4 text-white text-2xl"
                  >
                    <AiOutlineHeart color={item.liked ? "red" : "white"} />
                  </button>
                  <button
                    onClick={() => {
                      dispatch(dowlands(item.id));

                      const link = document.createElement("a");
                      link.href = item.image;
                      link.download = item.title;
                      link.click();
                    }}
                    className="absolute bottom-4 right-4 text-white text-3xl hover:text-green-400"
                  >
                    <FiDownload />
                  </button>
                </div>
              </div>
            ))}
        </div>
        <button
          className="w-[70%] h-12 mx-auto block rounded-md bg-[#ec6bb5] text-black font-semibold hover:bg-[#e85cae] transition"
          onClick={handleChange}
        >
          Read More
        </button>
      </div>
    </>
  );
}

export default Home;
