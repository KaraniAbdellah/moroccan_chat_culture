import React, { useState } from "react";
import { FaMicrophone, FaArrowUp } from "react-icons/fa6";
import person1 from "../assets/person1.png";

export default function Hero({ isLightMode }) {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasStartedConversation, setHasStartedConversation] = useState(false);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!question.trim() || loading) return;

    const userQuestion = question;
    setHasStartedConversation(true);
    setLoading(true);
    setResponse("");
    setQuestion("");

    try {
      const API_URL = "https://mcc-backend-docker-apc5bxhhcjgcbfe0.australiaeast-01.azurewebsites.net/get-response";

      const res = await fetch(`${API_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userQuestion }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      console.log(userQuestion);

      const data = await res.json();
      setResponse(data.response || "No response from server");
    } catch (err) {
      console.error("API ERROR:", err);

      setResponse(
        "هاد جواب تجريبي 🤖\nأنا Atlas AI، نقدر نعاونك فكل ما يتعلق بالمغرب 🇲🇦",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      dir="rtl"
      className={`relative flex items-center justify-center min-h-screen ${
        isLightMode ? "" : "bg-slate-950"
      }`}
    >
      <div className="relative w-full max-w-4xl">
        {!hasStartedConversation && (
          <>
            <div className="px-8 pt-8 pb-5 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-100 border border-yellow-300 text-yellow-800 text-xs font-medium">
                🤗
                <span>Powered by</span>
                <a
                  href="https://huggingface.co/atlasia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                >
                  Atlas AI Dataset
                </a>
              </div>

              <img
                src={person1}
                alt="Atlas AI"
                className="w-56 h-56 mx-auto mt-8 object-contain drop-shadow-xl"
              />

              <p
                className={`mt-5 max-w-2xl mx-auto leading-8 ${
                  isLightMode ? "text-gray-500" : "text-slate-400"
                }`}
              >
                🇲🇦 إسول Atlas AI على أي حاجة على المغرب 🕌🏙️🍽️🎭، وغادي يجاوبك
                بدقة وبالدارجة المغربية. ✨
              </p>
            </div>
          </>
        )}

        {(response || loading) && (
          <div className="px-8 mb-6">
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
              {loading ? (
                <div className="flex items-center gap-2 py-3">
                  <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-150"></span>
                  <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-300"></span>
                </div>
              ) : (
                <p className="text-gray-700 leading-8 whitespace-pre-line">
                  {response}
                </p>
              )}
            </div>
          </div>
        )}

        <div className="px-6 pb-6">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-200  shadow-md p-3"
          >
            <textarea
              rows={1}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="اكتب سؤالك حول الثقافة المغربية..."
              className={`w-full bg-transparent resize-none outline-none text-sm leading-6 min-h-[32px] max-h-32 ${
                isLightMode
                  ? "text-black-800 placeholder:text-gray-400"
                  : "text-white-900 placeholder:text-white-400"
              }`}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
            />

            <div className="flex items-center justify-between mt-3">
              <button
                type="button"
                className="w-9 h-9 rounded-full border border-gray-200 hover:bg-red-700 transition flex items-center justify-center text-gray-600"
              >
                <FaMicrophone className="text-sm" color={"gray"} />
              </button>

              <button
                type="submit"
                disabled={!question.trim() || loading}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  question.trim() && !loading
                    ? "bg-red-800 hover:scale-105 text-white shadow-md"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <FaArrowUp className="text-sm" />
                )}
              </button>
            </div>
          </form>

          {!hasStartedConversation && (
            <>
              {/* Suggestions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4">
                <button
                  onClick={() => setQuestion("شنو هي أشهر الأكلات المغربية؟")}
                  className="rounded-xl border border-gray-200 px-3 py-2 text-xs hover:border-black hover:bg-gray-50 transition"
                >
                  🍲 أشهر الأكلات المغربية
                </button>

                <button
                  onClick={() => setQuestion("عرفني بمدينة فاس")}
                  className="rounded-xl border border-gray-200 px-3 py-2 text-xs hover:border-black hover:bg-gray-50 transition"
                >
                  🏛️ عرفني بمدينة فاس
                </button>

                <button
                  onClick={() =>
                    setQuestion("شنو هي العادات المغربية فالأعراس؟")
                  }
                  className="rounded-xl border border-gray-200 px-3 py-2 text-xs hover:border-black hover:bg-gray-50 transition"
                >
                  💍 العادات المغربية
                </button>
              </div>

              {/* Footer */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-400">
                  Built with ❤️ by{" "}
                  <a
                    href="https://www.linkedin.com/in/abdellah-karani-965928294/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gray-600 hover:text-black transition-colors"
                  >
                    Abdellah Karani
                  </a>{" "}
                  • Powered by{" "}
                  <a
                    href="https://huggingface.co/atlasia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
                  >
                    🤗 Atlas AI Dataset
                  </a>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
