import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#005D99] w-full h-12 flex items-center justify-between px-8 ">
      <div className="flex items-center">
        <a href="/">
          <span className="text-white font-semibold text-xl tracking-wide">
            TRT
            <span className="text-[#33D8FF]">WORLD</span>
          </span>
        </a>
      </div>

      <div className="flex items-center">
        <nav className="hidden md:flex items-center gap-[33px]">
          <NavLink
            to="/not-found"
            className="flex items-center text-white font-semibold text-sm"
          >
            NEWS
            <i className="fa-solid fa-chevron-down ml-2 text-[12px] leading-[20px] inline-block align-middle"></i>
          </NavLink>
          <NavLink
            to="/not-found"
            className="flex items-center text-white font-semibold text-sm"
          >
            FEATURES
            <i className="fa-solid fa-chevron-down ml-2 text-[12px] leading-[20px] inline-block align-middle"></i>
          </NavLink>
          <div className="flex items-center text-white font-semibold text-sm">
            TOPICS
            <i className="fa-solid fa-chevron-down ml-2 text-[12px] leading-[20px] inline-block align-middle"></i>
          </div>
          <div className="flex items-center text-white font-semibold text-sm">
            VIDEO
            <i className="fa-solid fa-chevron-down ml-2 text-[12px] leading-[20px] inline-block align-middle"></i>
          </div>
          <div className="flex items-center text-white font-semibold text-sm">
            <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span> LIVE
          </div>
        </nav>

        <div className="flex items-center justify-center w-12 h-12 bg-[#0089CC] rounded ml-[33px]">
          <i className="fa-solid fa-search text-white text-lg"></i>
        </div>
      </div>
    </header>
  );
}
