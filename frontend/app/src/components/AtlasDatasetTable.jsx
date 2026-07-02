import React, { useState } from "react";
import { FaDatabase, FaArrowRight, FaArrowLeft, FaCode } from "react-icons/fa6";

const datasetRows = [
  {
    source: "moroccan_history_qa",
    text: "أكثر من نصف مصاريف المخزن كانت كتمشي لبرّا باش يتخلصو تعويضات الحرب ويتشراو الأسلحة والمعدات العسكرية والسلع...",
    metadata: {
      english: "أكثر من نصف مصاريف المخزن كانت كتمشي لبرّا باش يخلصو تعويضات الحرب ويشريو الأسلحة والمعدات العسكرية...",
      tokens: 97,
      words: 75
    }
  },
  {
    source: "moroccan_history_qa",
    text: "شنو هي العواقب ديال مصاريف المخزن على الاقتصاد المغربي؟",
    metadata: {
      english: "What were the consequences of the Makhzen's expenditures on the Moroccan economy?",
      tokens: 9,
      words: 7
    }
  },
  {
    source: "moroccan_history_qa",
    text: "مصاريف المخزن خلات الاقتصاد المغربي يضعف، حيث تم صرف جزء كبير من الثروة ديال البلاد على تعويضات الحرب وشراء الأسلحة والمعدات...",
    metadata: {
      english: "The Makhzen's expenditures led to a deterioration of the Moroccan economy, as a large portion of the country's wealth...",
      tokens: 48,
      words: 42
    }
  },
  {
    source: "moroccan_history_qa",
    text: "فالتسعينات ديال القرن 19، الإدارة والجيش الفرنسي فالجزائر طالبو بضم توات وقورارة وتيديكلت، اللي كانوا جزء من المنطقة...",
    metadata: {
      english: "In the 1890s, the French administration and military in Algiers called for the annexation of Touat, Gourara and Tidikelt...",
      tokens: 57,
      words: 47
    }
  },
  {
    source: "moroccan_history_qa",
    text: "شنو هي الأسباب الرئيسية اللي خلات فرنسا تحتل توات وقورارة وتيديكلت فسنين 1890؟",
    metadata: {
      english: "What were the main reasons behind the French annexation of the Touat, Gourara, and Tidikelt in the 1890s?",
      tokens: 24,
      words: 16
    }
  }
];

export default function AtlasDatasetViewer({ isLightMode }) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section
      dir="rtl"
      className={`py-12 min-h-screen ${
        isLightMode ? "bg-slate-50" : "bg-slate-950"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-medium mb-4">
            🤗 Dataset Viewer
          </div>

          <h2
            className={`text-3xl font-bold tracking-tight ${
              isLightMode ? "text-gray-900" : "text-white"
            }`}
          >
            نظرة عامة على الداتا 📊
          </h2>

          <p
            className={`mt-2 text-sm max-w-xl mx-auto leading-6 ${
              isLightMode ? "text-gray-500" : "text-slate-400"
            }`}
          >
            هنا غادي تشوف عينة من قاعدة البيانات ديال{" "}
            <span className="font-semibold text-gray-800">Atlas AI</span>.
            البيانات منظمة باش تعاون النماذج تفهم التاريخ والثقافة المغربية بالدارجة 🇲🇦
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          
          <div
            className={`p-5 rounded-2xl border shadow-sm flex items-center gap-4 ${
              isLightMode
                ? "bg-white border-gray-200"
                : "bg-slate-900 border-slate-800"
            }`}
          >
            <div className="p-3 bg-yellow-50 text-yellow-600 rounded-xl">
              <FaDatabase size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-400">حجم الداتا كامل</p>
              <h4 className="text-xl font-bold text-gray-800">1.17M سطر</h4>
            </div>
          </div>

          <div
            className={`p-5 rounded-2xl border shadow-sm flex items-center gap-4 ${
              isLightMode
                ? "bg-white border-gray-200"
                : "bg-slate-900 border-slate-800"
            }`}
          >
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <FaCode size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-400">نوع المهمة</p>
              <h4 className="text-xl font-bold text-gray-800">Moroccan History QA</h4>
            </div>
          </div>

          <div
            className={`p-5 rounded-2xl border shadow-sm flex items-center gap-4 ${
              isLightMode
                ? "bg-white border-gray-200"
                : "bg-slate-900 border-slate-800"
            }`}
          >
            <div className="p-3 bg-green-50 rounded-xl">
              <span className="text-xl">🇲🇦</span>
            </div>
            <div>
              <p className="text-xs text-gray-400">اللغة</p>
              <h4 className="text-xl font-bold text-gray-800">دارجة + English</h4>
            </div>
          </div>
        </div>

        {/* Table */}
        <div
          className={`rounded-2xl border shadow-sm overflow-hidden ${
            isLightMode
              ? "bg-white border-gray-200"
              : "bg-slate-900 border-slate-800"
          }`}
        >
          <div className="overflow-x-auto">
            <table
              className={`w-full text-right ${
                isLightMode ? "" : "text-slate-100"
              }`}
            >
              <thead
                className={`text-xs uppercase ${
                  isLightMode
                    ? "bg-gray-50 text-gray-500"
                    : "bg-slate-900 text-slate-400"
                }`}
              >
                <tr className="bg-gray-50 text-xs text-gray-500 uppercase">
                  <th className="p-4">المصدر</th>
                  <th className="p-4">النص (دارجة)</th>
                  <th className="p-4">المعنى بالإنجليزية</th>
                  <th className="p-4 text-center">Tokens</th>
                  <th className="p-4 text-center">Words</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {datasetRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition ${
                      isLightMode ? "hover:bg-gray-50" : "hover:bg-slate-800"
                    }`}
                  >
                    
                    <td
                      className={`p-4 text-blue-600 font-mono text-xs ${
                        isLightMode ? "" : "text-blue-400"
                      }`}
                    >
                      {row.source}
                    </td>

                    <td
                      className={`p-4 font-medium max-w-xs truncate ${
                        isLightMode ? "text-gray-800" : "text-slate-100"
                      }`}
                    >
                      {row.text}
                    </td>

                    <td
                      className={`p-4 text-xs max-w-xs truncate ${
                        isLightMode ? "text-gray-400" : "text-slate-400"
                      }`}
                      dir="ltr"
                    >
                      {row.metadata.english}
                    </td>

                    <td
                      className={`p-4 text-center text-xs font-mono ${
                        isLightMode ? "text-gray-600" : "text-slate-400"
                      }`}
                    >
                      {row.metadata.tokens}
                    </td>

                    <td
                      className={`p-4 text-center text-xs font-mono ${
                        isLightMode ? "text-gray-600" : "text-slate-400"
                      }`}
                    >
                      {row.metadata.words}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div
            className={`p-4 border-t flex justify-between flex-row-reverse items-center ${
              isLightMode
                ? "bg-gray-50 border-gray-200"
                : "bg-slate-900 border-slate-800"
            }`}
          >

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className="p-2 bg-white border rounded-lg"
                disabled={currentPage === 1}
              >
                <FaArrowRight size={12} />
              </button>

              <span className="text-xs">
                الصفحة {currentPage} من 11716
              </span>

              <button
                onClick={() => setCurrentPage(prev => prev + 1)}
                className="p-2 bg-white border rounded-lg"
              >
                <FaArrowLeft size={12} />
              </button>
            </div>

            <p
              className={`text-xs ${
                isLightMode ? "text-gray-400" : "text-slate-400"
              }`}
            >
              عرض 5 أسطر من أصل 1,171,600
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}