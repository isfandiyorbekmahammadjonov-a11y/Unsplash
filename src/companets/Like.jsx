import React from "react";
import { FiEye, FiDownload } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { like } from "../redux/features/gallerySlice";

function Contact() {
  const data = useSelector((state) => state.gallery.gallery);
  const dispatch = useDispatch();

  const likedItems = data.filter((item) => item.liked);

  return (
    <div className="w-full min-h-screen bg-[#282a36] p-10 px-20">
      <h1 className="text-white text-3xl font-bold mb-8">Liked Images ❤️</h1>

      {likedItems.length === 0 ? (
        <div className="text-center text-gray-400 text-xl mt-20">
          No liked images yet
        </div>
      ) : (
        <div className="columns-3 gap-5">
          {likedItems.map((item) => (
            <div
              key={item.id}
              className="
              relative mb-5 overflow-hidden rounded-xl 
              group shadow-lg
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                w-full object-cover
                transition duration-500
                group-hover:scale-110
                "
              />
              <div
                className="
                absolute inset-0
                bg-black/60
                opacity-0
                group-hover:opacity-100
                transition duration-300
                "
              >
                {/* Eye */}
                <Link
                  to={`/modal/${item.id}`}
                  className="
                  absolute top-4 left-4
                  text-white text-3xl
                  hover:text-pink-400
                  transition
                  "
                >
                  <FiEye />
                </Link>

                {/* Like */}
                <button
                  onClick={() => dispatch(like(item.id))}
                  className="
                  absolute top-4 right-4
                  text-3xl
                  hover:scale-125
                  transition
                  "
                >
                  <AiFillHeart color="red" />
                </button>

                {/* Info bottom */}
                <div
                  className="
                  absolute bottom-4 left-4
                  text-white
                  "
                >
                  <h2 className="font-bold text-lg">{item.title}</h2>

                  <p className="text-sm text-gray-300">{item.category}</p>
                </div>
                <a
                  href={item.image}
                  download
                  className="
                  absolute bottom-4 right-4
                  text-white text-3xl
                  hover:text-green-400
                  transition
                  "
                >
                  <FiDownload />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Contact;
