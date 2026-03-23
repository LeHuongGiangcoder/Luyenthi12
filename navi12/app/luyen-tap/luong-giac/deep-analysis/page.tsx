"use client";

import { useState } from "react";
import { Check, ArrowRight, ChevronRight, Info, ShieldCheck, ChevronLeft, Send, Flag, Pause } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function LuongGiacDeepAnalysis() {
  const [currentIdx, setCurrentIdx] = useState(1);
  const [marked, setMarked] = useState<number[]>([]);
  const [answered, setAnswered] = useState<number[]>([]);
  const totalQuestions = 10;

  const getStatusColor = (num: number) => {
    if (num === currentIdx) return "bg-blue-600 text-white shadow-lg shadow-blue-200 border-blue-600";
    if (marked.includes(num)) return "bg-orange-100 text-orange-600 border-orange-200";
    if (answered.includes(num)) return "bg-blue-50 text-blue-600 border-blue-200";
    return "bg-white text-gray-400 border-gray-100 hover:border-gray-200";
  };

  const questions = [
    {
      id: 1,
      level: "Nhận biết",
      subtopic: "Giá trị lượng giác",
      text: "Cho góc α thỏa mãn π/2 < α < π. Khẳng định nào sau đây là đúng?",
      options: [
        "A. sin α > 0, cos α > 0",
        "B. sin α > 0, cos α < 0",
        "C. sin α < 0, cos α > 0",
        "D. sin α < 0, cos α < 0"
      ]
    },
    {
      id: 2,
      level: "Thông hiểu",
      subtopic: "Công thức lượng giác",
      text: "Rút gọn biểu thức P = sin(x + π/4) - cos(x - π/4) ta được:",
      options: [
        "A. P = 0",
        "B. P = √2 sin x",
        "C. P = √2 cos x",
        "D. P = 2 sin x"
      ]
    }
  ];

  const currentQuestion = questions[currentIdx - 1] || questions[0];

  return (
    <main className="flex min-h-screen flex-col bg-gray-50/30 overflow-x-hidden pt-4 pb-12">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-10 py-2">
        <div className="flex flex-col gap-3 mb-6">
           <div className="flex flex-col lg:flex-row gap-4 items-stretch">
              <div className="flex-1 bg-white/50 backdrop-blur-sm p-5 md:p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between">
                 <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                      <span className="text-xl font-black font-montserrat text-blue-600 leading-none">{currentIdx} / {totalQuestions}</span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Câu hỏi</span>
                    </div>
                    <div className="h-2 w-32 md:w-48 rounded-full bg-gray-100 overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 transition-all duration-500" 
                        style={{ width: `${(currentIdx / totalQuestions) * 100}%` }} 
                      />
                    </div>
                 </div>
                 <div className="hidden md:block text-right">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 italic">CHẾ ĐỘ ĐÁNH GIÁ CHUYÊN SÂU</span>
                    <span className="text-xs font-bold text-gray-900 block font-montserrat tracking-tight uppercase">Đang đo: {currentQuestion.subtopic}</span>
                 </div>
              </div>
           </div>

           <div className="flex flex-wrap items-center gap-3 px-2">
              {[
                { label: "Nhận biết", status: currentIdx <= 3 ? "current" : "completed" },
                { label: "Thông hiểu", status: currentIdx > 3 && currentIdx <= 6 ? "current" : (currentIdx > 6 ? "completed" : "pending") },
                { label: "Vận dụng", status: currentIdx > 6 && currentIdx <= 9 ? "current" : (currentIdx > 9 ? "completed" : "pending") },
                { label: "Vận dụng cao", status: currentIdx > 9 ? "current" : "pending" }
              ].map((step, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest border transition-all",
                    step.status === "completed" ? "bg-green-50 text-green-600 border-green-100" :
                    step.status === "current" ? "bg-blue-50 text-blue-600 border-blue-200 shadow-lg shadow-blue-50/50" :
                    "bg-white text-gray-300 border-gray-100"
                  )}
                >
                   {step.label}
                   {step.status === "completed" && <Check className="h-2.5 w-2.5" />}
                   {step.status === "current" && <span className="ml-1 opacity-60">— ĐANG ĐO...</span>}
                </div>
              ))}
           </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1 flex flex-col gap-6 w-full lg:w-2/3">
             <div className="bg-white p-6 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50 relative overflow-hidden text-left min-h-[400px]">
                <div className="mb-4 flex items-start justify-between">
                   <div>
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4 border border-blue-100">
                         {currentQuestion.level} · {currentQuestion.subtopic}
                      </span>
                      <h2 className="text-xl md:text-2xl font-bold font-montserrat text-gray-900 leading-tight md:leading-relaxed max-w-2xl">
                         {currentQuestion.text}
                      </h2>
                   </div>
                   <button 
                     onClick={() => {
                        setMarked(prev => prev.includes(currentIdx) ? prev.filter(n => n !== currentIdx) : [...prev, currentIdx]);
                     }}
                     className={cn(
                       "flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all text-[10px] font-bold shrink-0 mt-1",
                       marked.includes(currentIdx) 
                         ? "bg-orange-50 border-orange-200 text-orange-600" 
                         : "bg-white border-gray-100 text-gray-400 hover:border-gray-200"
                     )}
                   >
                      <Flag className={cn("h-3.5 w-3.5", marked.includes(currentIdx) && "fill-orange-600")} />
                      <span className="hidden sm:inline">{marked.includes(currentIdx) ? "Đã đánh dấu" : "Đánh dấu"}</span>
                   </button>
                </div>

                <div className="flex flex-col gap-3">
                  {currentQuestion.options.map((option, i) => (
                    <button 
                      key={i}
                      onClick={() => setAnswered(prev => answered.includes(currentIdx) ? prev : [...prev, currentIdx])}
                      className={cn(
                        "flex items-center gap-4 w-full p-4 md:p-5 text-left rounded-2xl border transition-all duration-200 group",
                        answered.includes(currentIdx) && i === 0 // Mock selection for demo
                          ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200 ring-4 ring-blue-50" 
                          : "bg-white border-gray-100 text-gray-600 hover:border-blue-200 hover:bg-blue-50/10"
                      )}
                    >
                      <div className={cn(
                        "h-7 w-7 rounded-full border-2 flex items-center justify-center text-[10px] font-black",
                        answered.includes(currentIdx) && i === 0 ? "bg-white border-white text-blue-600" : "border-gray-100 text-gray-300 group-hover:border-blue-400"
                      )}>
                        {answered.includes(currentIdx) && i === 0 ? <Check className="h-4 w-4" /> : String.fromCharCode(65 + i)}
                      </div>
                      <span className="font-bold text-sm md:text-base">{option}</span>
                    </button>
                  ))}
                </div>
             </div>

             <div className="flex items-center justify-between gap-4 mt-2 mb-4">
                <button 
                  onClick={() => setCurrentIdx(prev => Math.max(1, prev - 1))}
                  className="flex items-center gap-2 px-6 py-4 border border-gray-100 rounded-2xl bg-white text-gray-400 font-bold transition-all hover:bg-gray-50 active:scale-95 text-sm"
                >
                   <ChevronLeft className="h-4 w-4" />
                   <span className="hidden sm:inline">Câu trước</span>
                </button>
                
                <button 
                  onClick={() => setCurrentIdx(prev => Math.min(totalQuestions, prev + 1))}
                  className="flex-1 max-w-sm flex items-center justify-center gap-2 px-8 py-5 bg-[#0e56fa] rounded-2xl text-white font-black text-base shadow-xl shadow-blue-100 transition-all hover:bg-blue-700 hover:scale-[1.01] active:scale-95"
                >
                   Tiếp theo
                   <ChevronRight className="h-5 w-5" />
                </button>
                
                <Link href="/luyen-tap" className="flex items-center gap-2 px-6 py-4 border border-pink-100 rounded-2xl bg-pink-50 text-pink-500 font-black transition-all hover:bg-pink-100 active:scale-95 text-sm">
                   <span className="hidden sm:inline">Hoàn thành</span>
                   <Send className="h-4 w-4" />
                </Link>
             </div>
          </div>

          <aside className="w-full lg:w-[320px] flex flex-col gap-5 sticky top-20 h-fit">
             <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col gap-5">
                <span className="text-xs font-black text-gray-900 font-montserrat tracking-tight uppercase">Danh sách câu hỏi</span>
                <div className="grid grid-cols-5 gap-2 max-h-[250px] overflow-y-auto pr-1">
                  {Array.from({ length: totalQuestions }).map((_, i) => (
                    <button 
                       key={i + 1}
                       onClick={() => setCurrentIdx(i + 1)}
                       className={cn(
                         "h-9 w-full rounded-lg flex items-center justify-center text-[10px] font-black border transition-all",
                         getStatusColor(i + 1)
                       )}
                    >
                       {i + 1}
                    </button>
                  ))}
                </div>
             </div>

             <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col gap-6 text-left">
                <div className="flex flex-col gap-6">
                  <h3 className="text-xs font-black text-gray-900 font-montserrat tracking-tight uppercase flex items-center gap-2">
                    Hệ thống đang đo
                    <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                  </h3>
                  <div className="space-y-6">
                    {[
                      { label: "Nhận biết", val: currentIdx > 3 ? "Vững" : "Đang đo...", progress: currentIdx > 3 ? 100 : 40, color: currentIdx > 3 ? "bg-green-500" : "bg-blue-500", text: currentIdx > 3 ? "text-green-600" : "text-blue-600", isPulse: currentIdx <= 3 },
                      { label: "Thông hiểu", val: currentIdx > 6 ? "Vững" : (currentIdx > 3 ? "Đang đo..." : "Chưa đo"), progress: currentIdx > 6 ? 100 : (currentIdx > 3 ? 30 : 0), color: currentIdx > 6 ? "bg-green-500" : (currentIdx > 3 ? "bg-blue-500" : "bg-gray-100"), text: currentIdx > 6 ? "text-green-600" : (currentIdx > 3 ? "text-blue-600" : "text-gray-400"), isPulse: currentIdx > 3 && currentIdx <= 6 },
                      { label: "Vận dụng", val: "Chưa đến", progress: 0, color: "bg-gray-100", text: "text-gray-400" },
                      { label: "Vận dụng cao", val: "Chưa đến", progress: 0, color: "bg-gray-100", text: "text-gray-400" }
                    ].map((metric, i) => (
                      <div key={i} className="flex flex-col gap-3">
                         <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                            <span className="text-gray-500">{metric.label}</span>
                            <span className={metric.text}>{metric.val}</span>
                         </div>
                         <div className="h-2 w-full bg-gray-200/50 rounded-full overflow-hidden">
                            <div 
                              className={cn("h-full transition-all duration-1000", metric.color, metric.isPulse && "animate-pulse")} 
                              style={{ width: `${metric.progress}%` }} 
                            />
                         </div>
                      </div>
                    ))}
                  </div>
                </div>
             </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
