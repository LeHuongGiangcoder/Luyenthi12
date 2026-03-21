"use client";

import { useState } from "react";
import { Check, ArrowRight, ChevronRight, Info, ShieldCheck, ChevronLeft, Send, Flag, Pause } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function DeepAnalysis() {
  const [currentIdx, setCurrentIdx] = useState(4);
  const [marked, setMarked] = useState<number[]>([2, 7]);
  const [answered, setAnswered] = useState<number[]>([1, 2, 3, 4]);
  const totalQuestions = 12;

  const getStatusColor = (num: number) => {
    if (num === currentIdx) return "bg-blue-600 text-white shadow-lg shadow-blue-200 border-blue-600";
    if (marked.includes(num)) return "bg-orange-100 text-orange-600 border-orange-200";
    if (answered.includes(num)) return "bg-blue-50 text-blue-600 border-blue-200";
    return "bg-white text-gray-400 border-gray-100 hover:border-gray-200";
  };

  return (
    <main className="flex min-h-screen flex-col bg-gray-50/30 overflow-x-hidden pt-4 pb-12">
      
      <div className="mx-auto w-full max-w-7xl px-4 md:px-10 py-2">
        {/* Optimized Header Area - Aligned with Room UI */}
        <div className="flex flex-col gap-3 mb-6">
           <div className="flex flex-col lg:flex-row gap-4 items-stretch">
              {/* Progress Header Card */}
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
                    <span className="text-xs font-bold text-gray-900 block font-montserrat tracking-tight uppercase">Đang đo: Khoảng đơn điệu</span>
                 </div>
              </div>
           </div>

           {/* Adaptive Levels Bar */}
           <div className="flex flex-wrap items-center gap-3 px-2">
              {[
                { label: "Nhận biết", status: "completed" },
                { label: "Thông hiểu", status: "completed" },
                { label: "Vận dụng", status: "current" },
                { label: "Vận dụng cao", status: "pending" }
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
          {/* Main Content (Left) */}
          <div className="flex-1 flex flex-col gap-6 w-full lg:w-2/3">
             <div className="bg-white p-6 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50 relative overflow-hidden text-left min-h-[400px]">
                <div className="mb-4 flex items-start justify-between">
                   <div>
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4 border border-blue-100">
                         Vận dụng · Khoảng đơn điệu
                      </span>
                      <h2 className="text-xl md:text-2xl font-bold font-montserrat text-gray-900 leading-tight md:leading-relaxed max-w-2xl">
                         Hàm số <span className="italic">f(x) = (x² - 2x + 3) / (x - 1)</span> đồng biến trên khoảng nào sau đây?
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
                  {[
                    'A. (−∞ ; 0)',
                    'B. (1 ; +∞)',
                    'C. (−∞ ; −1) và (1 ; +∞)',
                    'D. (−1 ; 1)'
                  ].map((option, i) => (
                    <button 
                      key={i}
                      className={cn(
                        "flex items-center gap-4 w-full p-4 md:p-5 text-left rounded-2xl border transition-all duration-200 group",
                        i === 0 
                          ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200 ring-4 ring-blue-50" 
                          : "bg-white border-gray-100 text-gray-600 hover:border-blue-200 hover:bg-blue-50/10"
                      )}
                    >
                      <div className={cn(
                        "h-7 w-7 rounded-full border-2 flex items-center justify-center text-[10px] font-black",
                        i === 0 ? "bg-white border-white text-blue-600" : "border-gray-100 text-gray-300 group-hover:border-blue-400"
                      )}>
                        {i === 0 ? <Check className="h-4 w-4" /> : String.fromCharCode(65 + i)}
                      </div>
                      <span className="font-bold text-sm md:text-base">{option}</span>
                    </button>
                  ))}
                </div>
             </div>

             {/* Pagination Controls - Optimized Action Bar */}
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
                
                <Link href="/thi-thu/deep-analysis/results" className="flex items-center gap-2 px-6 py-4 border border-pink-100 rounded-2xl bg-pink-50 text-pink-500 font-black transition-all hover:bg-pink-100 active:scale-95 text-sm">
                   <span className="hidden sm:inline">Hoàn thành</span>
                   <Send className="h-4 w-4" />
                </Link>
             </div>
          </div>

          {/* Metrics & Navigation Sidebar */}
          <aside className="w-full lg:w-[320px] flex flex-col gap-5 sticky top-20 h-fit">
             {/* Navigation Card */}
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

                <div className="pt-4 border-t border-gray-50 grid grid-cols-2 gap-y-2">
                  <div className="flex items-center gap-2">
                     <div className="h-2.5 w-2.5 rounded-full bg-blue-50 border border-blue-200" />
                     <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Đã làm</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="h-2.5 w-2.5 rounded-full bg-orange-100 border border-orange-200" />
                     <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Đánh dấu</span>
                  </div>
                </div>
             </div>

             {/* Metrics Card */}
             <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col gap-6 text-left">
                
                <div className="flex flex-col gap-6">
                  <h3 className="text-xs font-black text-gray-900 font-montserrat tracking-tight uppercase flex items-center gap-2">
                    Hệ thống đang ghi nhận
                    <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                  </h3>
                  
                  <div className="space-y-6">
                    {[
                      { label: "Nhận biết", val: "Vững 95%", progress: 95, color: "bg-green-500", text: "text-green-600" },
                      { label: "Thông hiểu", val: "Vững 82%", progress: 82, color: "bg-green-500", text: "text-green-600" },
                      { label: "Vận dụng", val: "Đang đo...", progress: 45, color: "bg-blue-500", text: "text-blue-600", isPulse: true },
                      { label: "Vận dụng cao", val: "Chưa đến", progress: 0, color: "bg-gray-100", text: "text-gray-400" }
                    ].map((metric, i) => (
                      <div key={i} className="flex flex-col gap-3">
                         <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                            <span className="text-gray-500">{metric.label}</span>
                            <span className={metric.text}>{metric.val}</span>
                         </div>
                         <div className="h-2 w-full bg-gray-200/50 rounded-full overflow-hidden">
                            <div 
                              className={cn("h-full transition-all duration-1000", metric.color, metric.isPulse && "animate-pulsing-custom")} 
                              style={{ width: `${metric.progress}%` }} 
                            />
                         </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200 flex flex-col gap-5">
                   <div className="flex items-center gap-4 p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-500">
                         <Info className="h-4 w-4" />
                      </div>
                      <span className="text-[9px] font-black text-gray-400 uppercase tracking-tight">HỆ THỐNG ƯU TIÊN: <span className="text-blue-600">KHOẢNG ĐƠN ĐIỆU</span></span>
                   </div>
                </div>
             </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
