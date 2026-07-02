import React from "react";
import { Link, NavLink } from "react-router-dom";
import tarbouch from "../assets/tarbouch.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
export default function Header({ isLightMode }) {
  const navItems = [
    { label: "الرئيسية", path: "/" },
    { label: "الداتا سيت", path: "/dataset" },
    { label: "المجتمع", path: "/community" },
  ];

  return (
    <header
      dir="rtl"
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-50 
        w-[calc(100%-2rem)] max-w-6xl 
        rounded-full backdrop-blur-xl transition-all duration-300
        border
        ${
          isLightMode
            ? "bg-white/80 border-slate-200 shadow-sm"
            : "bg-slate-950/40 border-white/10"
        }
      `}
    >
      <div className="h-14 px-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <img src={tarbouch} alt="logo" className="w-10 h-10 object-cover" />
            <div>
              <h2
                className={`
                  text-sm font-semibold tracking-tight
                  ${isLightMode ? "text-slate-900" : "text-white"}
                `}
              >
                MCC شات AI 🇲🇦
              </h2>
              <p className="text-[11px] text-red-600 font-medium">
                الذكاء الاصطناعي ديال الثقافة المغربية
              </p>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-red-700 ${
                  isLightMode ? "text-slate-600" : "text-slate-300"
                } ${isActive ? "text-red-700" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/abdellah-karani-965928294/"
            target="_blank"
            rel="noopener noreferrer"
            className={`
      flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200 hover:scale-105
      ${
        isLightMode
          ? "bg-white border-gray-200 text-[#0A66C2] hover:bg-blue-50"
          : "bg-gray-800 border-gray-700 text-blue-400 hover:bg-gray-700"
      }
    `}
            title="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className={`
      flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200 hover:scale-105
      ${
        isLightMode
          ? "bg-white border-gray-200 text-gray-800 hover:bg-gray-100"
          : "bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
      }
    `}
            title="GitHub"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
