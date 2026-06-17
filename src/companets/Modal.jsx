import { useNavigate, useParams } from "react-router-dom";
import Imgs from "./Imgs";
import { FiArrowLeft } from "react-icons/fi";
function Modal() {
  const { id } = useParams();
  const item = Imgs.find((img) => img.id == id);
  const navigate = useNavigate();
  return (
    <div className=" bg-[#282a36] h-211 flex items-center">
      <div className="w-full max-w-sm mx-auto bg-[#14151d] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
        {/* IMAGE */}
        <div className="relative h-[240px]">
          <img src={item.image} className="w-full h-full object-cover" />

          {/* DARK GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

          {/* TOP BADGES */}
          <div className="absolute top-3 left-3 flex gap-2">
            <span className="bg-black/40 backdrop-blur-md text-white text-[11px] px-3 py-1 rounded-full">
              {item.category}
            </span>
            <span className="bg-red-500 text-white text-[11px] px-3 py-1 rounded-full">
              {String(item.featured)}
            </span>
          </div>
          {/* TITLE BOTTOM */}
          <div className="absolute bottom-3 left-3 text-white">
            <h2 className="text-lg font-bold">{item.title}</h2>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-4 space-y-3 text-white">
          <p className="text-sm text-gray-400 leading-relaxed">
            {item.description}
          </p>

          {/* INFO ROW */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>👤 {item.author}</span>
            <span>📅 {item.createdAt}</span>
          </div>

          {/* BUTTON */}
          <button className="w-full py-2 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition">
            View Details
          </button>
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition"
          >
            <FiArrowLeft />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
