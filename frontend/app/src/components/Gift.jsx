import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function Gift({ isLightMode }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      dir="rtl"
      className="fixed bottom-6 right-6 z-50 w-[300px] drop-shadow-xl transition-all"
    >
      <div
        className={`rounded-2xl overflow-hidden p-1 border transition ${
          isLightMode ? "bg-white border-gray-200" : "bg-slate-900 border-slate-700"
        }`}
      >
        <div
          className={`flex items-center justify-between p-3 pb-2 ${
            isLightMode ? "text-gray-900" : "text-slate-100"
          }`}
        >
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-800 hover:bg-gray-100 p-1.5 rounded-lg transition"
            aria-label="Close"
          >
            <IoCloseOutline className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xl">🤗</span>
            <h3 className="text-gray-900 font-bold text-sm tracking-tight">
              Atlas AI Dataset
            </h3>
          </div>
        </div>

        <div
          className={`p-3 pt-1 space-y-3 text-right ${
            isLightMode ? "text-gray-500" : "text-slate-300"
          }`}
        >
          <p className="text-sm leading-relaxed">
            هاد المشروع كيعتمد على <strong>Atlas AI Dataset</strong> باش يفهم
            الدارجة المغربية ويجاوب بدقة. 🙌 شكراً بزاف لفريق
            <strong> AtlasIA </strong> على هاد <strong className="text-yellow-500">الخدمة النقية</strong> وعلى مشاركة هاد
            البيانات مع المطورين والباحثين. ❤️
          </p>

          <a
            href="https://huggingface.co/datasets/atlasia/Atlaset/viewer/default/train"
            target="_blank"
            rel="noreferrer"
            className={`block w-full font-semibold text-sm py-2.5 rounded-xl transition-colors text-center ${
              isLightMode
                ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
                : "bg-yellow-500 text-slate-950 hover:bg-yellow-400"
            }`}
          >
            🤗 شوف الـ Dataset
          </a>
        </div>
      </div>
    </div>
  );
}