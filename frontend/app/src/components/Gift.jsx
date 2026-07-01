import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { GiTeapot } from "react-icons/gi";
import { BsChatRightTextFill } from "react-icons/bs";

export default function Gift() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[300px] animate-fadeIn">
      <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">

        {/* top bar */}
        <div className="h-1.5 bg-gradient-to-r from-red-700 via-red-500 to-amber-400" />

        {/* close */}
        <button
          onClick={() => setIsVisible(false)}
          aria-label="Close"
          className="absolute top-3 right-3 rounded-full p-1 text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
        >
          <IoCloseOutline className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center px-5 py-6 space-y-3">

          {/* icon */}
          <div className="text-red-600">
            <GiTeapot className="w-12 h-12" />
          </div>

          {/* title */}
          <h3 className="text-sm font-bold text-gray-900">
            خدام ب Atlass AI Dataset
          </h3>

          {/* description (REAL Darija) */}
          <p className="text-xs text-gray-500 leading-relaxed px-2">
            أنا جيت كنستعمل الداتا ديال Atlass AI باش نحسنو هاد السيستم و نطورو AI كيعطي نتائج مزيانة.
          </p>

          {/* button */}
          <a
            href="https://huggingface.co/datasets"
            target="_blank"
            rel="noreferrer"
            className="group w-full flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md transition hover:bg-red-700 active:scale-[0.98]"
          >
            <span>شوف Hugging Face Dataset</span>
            <BsChatRightTextFill className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* footer */}
          <p className="text-[10px] text-gray-400">
            شكراً بزاف لمجتمع Atlass AI ❤️
          </p>
        </div>
      </div>
    </div>
  );
}