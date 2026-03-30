"use client";

import { useState, useEffect } from "react";
import { Check, ArrowRight, ChevronRight, Info, ShieldCheck, ChevronLeft, Send, Flag, Pause, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function DeepAnalysis() {
  const [showStartOverlay, setShowStartOverlay] = useState(true);
  const [countdown, setCountdown] = useState(4);
  const [currentIdx, setCurrentIdx] = useState(1);
  const [marked, setMarked] = useState<number[]>([2, 7]);
  const [answered, setAnswered] = useState<number[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const totalQuestions = 12;

  useEffect(() => {
    if (showStartOverlay && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setShowStartOverlay(false);
    }
  }, [countdown, showStartOverlay]);

  if (showStartOverlay) {
    return (
      <main className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/60 backdrop-blur-md overflow-hidden p-4">
        <div className="relative w-full max-w-2xl bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl flex flex-col items-center text-center gap-8 animate-in fade-in zoom-in duration-500">
          
          <div className="flex flex-col items-center gap-4">
             <div className="flex items-center justify-center gap-2 mb-2">
                <div className="h-7 w-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm border border-blue-100">
                   <Sparkles className="h-4 w-4 fill-current" />
                </div>
                <span className="text-[11px] font-black text-[#0e56fa] uppercase tracking-[0.4em]">QUYẾT TÂM TĂNG ĐIỂM</span>
             </div>
             
             <h2 className="text-3xl md:text-4xl font-black font-montserrat text-gray-900 leading-[1.1] tracking-tight">
               Na sẽ tìm <br /> <span className="text-red-500 italic">từng 0.1đ</span> của Hàm số
             </h2>
             <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed max-w-md">
                Đừng rời mắt! Kết quả chuyên sâu sẽ lộ diện sau 10 phút tập trung cao độ phía trước.
             </p>
          </div>

          <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white">
             <img 
               src="/pic4.png" 
               alt="Kết quả phân tích" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
          </div>

          <div className="flex flex-col gap-6 w-full max-w-sm">
             <div className="flex flex-col gap-3">
                <div className="flex items-center justify-center gap-2">
                   <div className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-ping" />
                   <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Đang chuẩn bị bài thi... {countdown}s</span>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                   <div 
                     className="h-full bg-[#0e56fa] transition-all duration-1000 ease-linear" 
                     style={{ width: `${((4 - countdown) / 4) * 100}%` }}
                   />
                </div>
             </div>

             <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-relaxed">
                "Hãy cố gắng hoàn thành trọn vẹn 12 câu đánh giá nhé."
             </p>
          </div>
        </div>
      </main>
    );
  }

  const getStatusColor = (num: number) => {
    if (num === currentIdx) return "bg-blue-600 text-white shadow-lg shadow-blue-200 border-blue-600";
    if (marked.includes(num)) return "bg-orange-100 text-orange-600 border-orange-200";
    if (answered.includes(num) || userAnswers[num] !== undefined) return "bg-blue-50 text-blue-600 border-blue-200";
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
                { label: "Level 1", status: "completed", level: 1 },
                { label: "Level 2", status: "completed", level: 2 },
                { label: "Level 3", status: "current", level: 3 },
                { label: "Level 4", status: "pending", level: 4 }
              ].map((step, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest border transition-all",
                    step.status === "completed" ? "bg-level-1/10 text-level-1 border-level-1/20" :
                    step.status === "current" ? "bg-level-3/10 text-level-3 border-level-3/20 shadow-lg shadow-level-3/10" :
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
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-level-3/10 text-level-3 text-[10px] font-black uppercase tracking-widest mb-4 border border-level-3/20">
                         Level 3 · Khoảng đơn điệu
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
                      onClick={() => {
                        setUserAnswers(prev => ({...prev, [currentIdx]: i}));
                        if (!answered.includes(currentIdx)) {
                          setAnswered(prev => [...prev, currentIdx]);
                        }
                      }}
                      className={cn(
                        "flex items-center gap-4 w-full p-4 md:p-5 text-left rounded-2xl border transition-all duration-200 group",
                        userAnswers[currentIdx] === i 
                          ? "bg-level-2 border-level-2 text-white shadow-lg shadow-level-2/20 ring-4 ring-level-2/5" 
                          : "bg-white border-gray-100 text-gray-600 hover:border-level-2 hover:bg-level-2/5"
                      )}
                    >
                      <div className={cn(
                        "h-7 w-7 rounded-full border-2 flex items-center justify-center text-[10px] font-black",
                        userAnswers[currentIdx] === i ? "bg-white border-white text-level-2" : "border-gray-100 text-gray-300 group-hover:border-level-2"
                      )}>
                        {userAnswers[currentIdx] === i ? <Check className="h-4 w-4" /> : String.fromCharCode(65 + i)}
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
                  className="flex-1 max-w-sm flex items-center justify-center gap-2 px-8 py-5 bg-level-2 rounded-2xl text-white font-black text-base shadow-xl shadow-level-2/20 transition-all hover:scale-[1.01] active:scale-95"
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
                          i + 1 === currentIdx ? "bg-level-2 text-white border-level-2 shadow-sm" : 
                          answered.includes(i + 1) ? "bg-level-2/5 text-level-2 border-level-2/10" :
                          marked.includes(i + 1) ? "bg-orange-50 text-orange-600 border-orange-100" :
                          "bg-white text-gray-400 border-gray-100"
                       )}
                    >
                       {i + 1}
                    </button>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-50 grid grid-cols-2 gap-y-2">
                  <div className="flex items-center gap-2">
                     <div className="h-2.5 w-2.5 rounded-full bg-level-2/10 border border-level-2/20" />
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
                    <div className="h-2 w-2 rounded-full bg-level-2 animate-pulse" />
                  </h3>
                  
                  <div className="space-y-6">
                    {[
                      { label: "Level 1", val: "Vững 95%", progress: 95, color: "bg-level-1", text: "text-level-1" },
                      { label: "Level 2", val: "Vững 82%", progress: 82, color: "bg-level-2", text: "text-level-2" },
                      { label: "Level 3", val: "Đang đo...", progress: 45, color: "bg-level-3", text: "text-level-3", isPulse: true },
                      { label: "Level 4", val: "Chưa đến", progress: 0, color: "bg-gray-100", text: "text-gray-400" }
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
                   <div className="flex items-center gap-4 p-4 bg-level-2/5 rounded-2xl border border-level-2/10">
                      <div className="p-2 bg-level-2/10 rounded-lg text-level-2">
                         <Info className="h-4 w-4" />
                      </div>
                      <span className="text-[9px] font-black text-gray-400 uppercase tracking-tight">HỆ THỐNG ƯU TIÊN: <span className="text-level-2">KHOẢNG ĐƠN ĐIỆU</span></span>
                   </div>
                </div>
             </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
