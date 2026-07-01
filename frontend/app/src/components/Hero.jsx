import React, { useState } from 'react';
import { FaPlus, FaMicrophone, FaArrowUp } from 'react-icons/fa6';
import { LuSparkles } from 'react-icons/lu';

/* A repeating 8-point zellige star, used as a thin decorative seam.
   Grounded in real Moroccan tilework rather than a generic divider line. */
function ZelligeSeam({ className = '' }) {
  return (
    <svg
      viewBox="0 0 120 16"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <pattern id="zellige-seam" width="20" height="16" patternUnits="userSpaceOnUse">
          <path
            d="M10 1 L13 6 L19 6 L14 9.5 L16 15 L10 11.5 L4 15 L6 9.5 L1 6 L7 6 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="120" height="16" fill="url(#zellige-seam)" />
    </svg>
  );
}

/* Small corner star used to frame the console like a mosaic panel. */
function CornerStar({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 1 L15 9 L23 12 L15 15 L12 23 L9 15 L1 12 L9 9 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Hero() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('http://127.0.0.1:8000/get-response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: question }),
      });

      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Error fetching response:', error);
      setResponse("Kayn chi mochkil fl-backend, awwled nass. 'Awd rj3 mn b3d!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-28 pb-14 text-center max-w-3xl mx-auto">
      {/* Eyebrow */}
      <div className="flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full bg-[#241C15]/30 border border-[#F2E8D5]/15 backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
        <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#F2E8D5]/85">
          Atlas AI &middot; Culture Engine
        </span>
      </div>

      {/* Title */}
      <div className="space-y-3 mb-9 select-none">
        <h1
          dir="rtl"
          className="text-4xl md:text-6xl font-bold text-[#F8F1E1] tracking-tight drop-shadow-md"
          style={{ fontFamily: "'Amiri', serif" }}
        >
          دردشة الأطلس
        </h1>
        <p className="text-lg md:text-xl text-[#F2E8D5]/90 font-medium max-w-xl mx-auto drop-shadow-sm">
          Swwl f'ayi haja dynamic katkhss l-tqafa w l-a3raf dylna 🇲🇦
        </p>
      </div>

      {/* Console */}
      <div className="relative w-full max-w-2xl">
        <CornerStar className="absolute -top-2.5 -left-2.5 w-5 h-5 text-[#D4A017] z-10" />
        <CornerStar className="absolute -top-2.5 -right-2.5 w-5 h-5 text-[#D4A017] z-10" />
        <CornerStar className="absolute -bottom-2.5 -left-2.5 w-5 h-5 text-[#D4A017] z-10" />
        <CornerStar className="absolute -bottom-2.5 -right-2.5 w-5 h-5 text-[#D4A017] z-10" />

        <div className="w-full bg-[#FBF6E9]/95 backdrop-blur-xl rounded-[26px] shadow-2xl overflow-hidden border-2 border-[#C1502E]/25 p-5 transition-all duration-300">
          <form onSubmit={handleSubmit} className="relative">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Swwl qql haja hna... (e.g., Chno hwa l-asl dyal l-Heik?)"
              className="w-full min-h-[140px] max-h-[320px] bg-transparent resize-y outline-none text-[#241C15] placeholder-[#241C15]/40 text-lg p-2 font-medium leading-relaxed"
              style={{ fontFamily: "'Tajawal', sans-serif" }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
            />

            <ZelligeSeam className="w-full h-3 text-[#C1502E]/25 my-1" />

            {/* Action row */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                className="p-2.5 text-[#241C15]/40 hover:text-[#C1502E] rounded-xl hover:bg-[#C1502E]/10 transition-colors"
                aria-label="Zid chi haja"
              >
                <FaPlus className="w-4 h-4" />
              </button>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  className="p-2.5 text-[#241C15]/40 hover:text-[#C1502E] rounded-xl hover:bg-[#C1502E]/10 transition-colors"
                  aria-label="Hdr b sut"
                >
                  <FaMicrophone className="w-4 h-4" />
                </button>
                <button
                  type="submit"
                  disabled={loading || !question.trim()}
                  className={`p-3 rounded-2xl text-[#FBF6E9] transition-all duration-200 ${
                    question.trim()
                      ? 'bg-[#C1502E] hover:bg-[#a8431f] shadow-md scale-100 active:scale-95'
                      : 'bg-[#241C15]/15 text-[#241C15]/30 cursor-not-allowed'
                  }`}
                  aria-label="Sift"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-[#FBF6E9] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <FaArrowUp className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Answer */}
      {response && (
        <div className="w-full max-w-2xl mt-6 rounded-2xl shadow-xl text-left border border-[#D4A017]/30 overflow-hidden animate-fade-in">
          <div className="h-1 bg-gradient-to-r from-[#D4A017] via-[#C1502E] to-[#1B4B66]" />
          <div className="p-6 bg-[#1B4B66]/95 backdrop-blur-xl">
            <div className="flex items-center space-x-2 text-[#D4A017] font-mono font-bold text-[11px] uppercase tracking-[0.2em] mb-3">
              <LuSparkles className="w-4 h-4 animate-pulse" />
              <span>Al-Jawab &middot; الجواب</span>
            </div>
            <p
              className="text-[#F2E8D5] leading-relaxed text-base font-medium whitespace-pre-line"
              style={{ fontFamily: "'Tajawal', sans-serif" }}
            >
              {response}
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-9 bg-[#241C15]/30 backdrop-blur-md rounded-full px-5 py-2.5 border border-[#F2E8D5]/15 flex items-center justify-center space-x-2 max-w-md shadow-sm">
        <span className="text-[11px] md:text-xs font-mono uppercase tracking-[0.15em] text-[#F2E8D5]/85">
          Powered by Atlas Dataset &middot; Groq &amp; Qdrant Hybrid Search
        </span>
      </div>
    </div>
  );
}   