import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const members = [
  {
    name: "Abdelaziz Bounhar",
    role: "باحث فـ الذكاء الاصطناعي",
    description: "Machine Learning / AI Researcher",
    avatar:
      "https://ui-avatars.com/api/?name=Abdelaziz+Bounhar&background=FFE066&color=000",
    linkedin: "https://www.linkedin.com/in/abdelaziz-bounhar-a58910138",
    github: "https://github.com/BounharAbdelaziz",
  },
  {
    name: "Abdeljalil Elma",
    role: "Machine Learning Engineer",
    description: "كيطور الموديلات وكيعاون فبناء Atlas AI Dataset.",
    avatar:
      "https://ui-avatars.com/api/?name=Abdeljalil+Elma&background=FFD43B&color=000",
    linkedin: "https://www.linkedin.com/in/abdeljalil-el-majjodi",
    github: "https://github.com/elma-dev",
  },
  {
    name: "Oumayma Essarhi",
    role: "Data Scientist",
    description: "ساهمت فجمع وتنظيم البيانات المغربية باش يستافد منها الجميع.",
    avatar:
      "https://ui-avatars.com/api/?name=Oumayma+Essarhi&background=FFF3BF&color=000",
    linkedin: "https://www.linkedin.com/in/oumayma-essarhi",
    github: "https://github.com/oumayma-essarhi",
  },
];

export default function AtlasCommunity({ isLightMode = true }) {
  return (
    <section
      dir="rtl"
      className={`py-16 transition-colors ${
        isLightMode ? "bg-slate-50" : "bg-slate-950"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-14">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
              isLightMode
                ? "bg-yellow-100 text-yellow-800"
                : "bg-yellow-500/10 text-yellow-300"
            }`}
          >
            🤗 AtlasIA Community
          </div>

          <h2
            className={`mt-5 text-4xl font-bold ${
              isLightMode ? "text-gray-900" : "text-white"
            }`}
          >
            الناس لي واقفين ورا المشروع ❤️
          </h2>

          <p
            className={`mt-4 max-w-2xl mx-auto leading-8 ${
              isLightMode ? "text-gray-500" : "text-slate-400"
            }`}
          >
            شكراً بزاف لجميع أعضاء مجتمع AtlasIA لي خدمو على تطوير البيانات
            المغربية وخلاوها متاحة للجميع.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {members.map((member) => (
            <div
              key={member.name}
              className={`rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                isLightMode
                  ? "bg-white border-gray-200 hover:shadow-xl"
                  : "bg-slate-900 border-slate-800 hover:shadow-white/10"
              }`}
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto border-4 border-yellow-100"
              />

              <h3
                className={`mt-5 text-xl font-bold text-center ${
                  isLightMode ? "text-gray-900" : "text-white"
                }`}
              >
                {member.name}
              </h3>

              <div className="mt-2 flex justify-center">
                <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-semibold">
                  {member.role}
                </span>
              </div>

              <p
                className={`mt-5 text-sm text-center leading-7 ${
                  isLightMode ? "text-gray-500" : "text-slate-400"
                }`}
              >
                {member.description}
              </p>

              <div className="mt-6 flex justify-center gap-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:scale-110 transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center hover:scale-110 transition"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex mt-5 justify-center items-center">
          <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition">
            <a href="https://huggingface.co/atlasia?members=true">Explore More</a>
          </button>
        </div>

        {/* Footer */}
        <div
          className={`mt-16 rounded-3xl border p-8 text-center ${
            isLightMode
              ? "bg-yellow-50 border-yellow-200"
              : "bg-yellow-500/10 border-yellow-500/20"
          }`}
        >
          <HiSparkles className="mx-auto text-4xl text-yellow-500" />

          <h3
            className={`mt-4 text-2xl font-bold ${
              isLightMode ? "text-gray-900" : "text-white"
            }`}
          >
            شكراً لمجتمع AtlasIA كامل 💛
          </h3>

          <p
            className={`mt-3 max-w-3xl mx-auto leading-8 ${
              isLightMode ? "text-gray-600" : "text-slate-300"
            }`}
          >
            إلى كنتي من المساهمين ولا بغيتي تعاون فهاد المشروع، مرحبا بيك.
            مساهمتك غادي تعاون باش الذكاء الاصطناعي يفهم الدارجة المغربية حسن.
            🇲🇦🤗
          </p>
          
        </div>
      </div>
    </section>
  );
}
