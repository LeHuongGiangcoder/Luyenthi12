"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Send, Pause, Flag, Target, Sparkles, Trophy, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function ExamRoom() {
  const [isStarted, setIsStarted] = useState(false);
  const [targetScore, setTargetScore] = useState<number | null>(null);
  const [currentIdx, setCurrentIdx] = useState(1); 
  const [marked, setMarked] = useState<number[]>([]);
  const [answered, setAnswered] = useState<Record<number, any>>({});
  const [timeLeft, setTimeLeft] = useState(5400); 
  const [showToast, setShowToast] = useState(false);
  
  const formatTime = (seconds: number) => {
    const mm = Math.floor(seconds / 60);
    const ss = seconds % 60;
    return `${mm}:${ss.toString().padStart(2, "0")}`;
  };
  
  // Motivational Toast Logic
  useEffect(() => {
    if (isStarted) {
      setShowToast(true);
      const timer = setTimeout(() => setShowToast(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isStarted]);

  useEffect(() => {
    if (!isStarted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [isStarted]);

  const totalQuestions = 22;

  if (!isStarted) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#fafbff] p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-2xl bg-white rounded-[3rem] border border-gray-100 shadow-2xl p-8 md:p-16 text-center"
        >
          
          <h1 className="text-3xl md:text-4xl font-black font-montserrat text-gray-900 mb-4">
            Mục tiêu của bạn là bao nhiêu điểm?
          </h1>
          <p className="text-gray-500 font-medium mb-12 max-w-md mx-auto">
            Navi sẽ dựa trên mục tiêu này để đề xuất các cấp độ câu hỏi phù hợp nhất giúp bạn "ăn điểm" tối ưu.
          </p>

          <div className="flex flex-col items-center gap-6 mb-12">
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setTargetScore(prev => Math.max(0, (prev || 0) - 0.2))}
                className="h-14 w-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-all active:scale-90"
              >
                <ChevronLeft className="h-6 w-6 stroke-[3]" />
              </button>
              
              <div className="relative">
                <input 
                  type="number" 
                  step="0.2"
                  min="0"
                  max="10"
                  value={targetScore === null ? "" : targetScore}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    if (isNaN(val)) setTargetScore(null);
                    else setTargetScore(Math.min(10, Math.max(0, val)));
                  }}
                  placeholder="0.0"
                  className="w-40 text-center text-6xl font-black font-montserrat text-blue-600 bg-transparent border-none outline-none focus:ring-0 placeholder:text-gray-100"
                />
                <div className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] mt-2">Điểm số mục tiêu</div>
              </div>

              <button 
                onClick={() => setTargetScore(prev => Math.min(10, (prev || 0) + 0.2))}
                className="h-14 w-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-all active:scale-90"
              >
                <ChevronRight className="h-6 w-6 stroke-[3]" />
              </button>
            </div>

            <div className="flex gap-2">
              {[8.0, 9.0, 9.6].map(val => (
                <button 
                  key={val}
                  onClick={() => setTargetScore(val)}
                  className="px-4 py-2 rounded-xl bg-gray-50 text-[10px] font-black text-gray-400 uppercase tracking-widest hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {val.toFixed(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button
              disabled={!targetScore}
              onClick={() => setIsStarted(true)}
              className={cn(
                "w-full py-6 rounded-3xl font-black text-xl flex items-center justify-center gap-3 transition-all",
                targetScore 
                  ? "bg-[#0e56fa] text-white shadow-2xl shadow-blue-200 hover:bg-blue-700 active:scale-95"
                  : "bg-gray-100 text-gray-300 cursor-not-allowed"
              )}
            >
              Bắt đầu làm bài
            </button>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Đề thi gồm 22 câu hỏi · Thời gian 90 phút
            </p>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="fixed top-1/4 -left-20 h-64 w-64 rounded-full bg-blue-100/30 blur-3xl pointer-events-none" />
        <div className="fixed bottom-1/4 -right-20 h-64 w-64 rounded-full bg-pink-100/30 blur-3xl pointer-events-none" />
      </main>
    );
  }
  
  const getStatusColor = (num: number) => {
    if (num === currentIdx) return "bg-blue-600 text-white shadow-lg shadow-blue-200 border-blue-600";
    if (marked.includes(num)) return "bg-orange-100 text-orange-600 border-orange-200";
    if (answered[num] !== undefined) return "bg-blue-50 text-blue-600 border-blue-200";
    return "bg-white text-gray-400 border-gray-100 hover:border-gray-200";
  };

  return (
    <main className="flex min-h-screen flex-col bg-gray-50/30 overflow-x-hidden pt-16">
      
      <div className="mx-auto w-full max-w-7xl px-4 md:px-10 py-6">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          
          {/* Main Content (Left) */}
          <div className="flex-1 flex flex-col gap-4 w-full lg:w-2/3">
            {/* Optimized Progress Header - More Compact */}
            <div className="bg-white/50 backdrop-blur-sm p-5 md:p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between">
               <div className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-xl font-black font-montserrat text-blue-600 leading-none">{currentIdx} / {totalQuestions}</span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Câu hỏi</span>
                  </div>
                  <div className="h-10 w-[1px] bg-gray-100 hidden md:block" />
                  <div className="hidden md:flex flex-col">
                    <span className="text-xl font-black font-montserrat text-gray-900 leading-none">{targetScore?.toFixed(1)}</span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Mục tiêu</span>
                  </div>
                  <div className="h-2 w-32 md:w-48 rounded-full bg-gray-100 overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 transition-all duration-500" 
                      style={{ width: `${(currentIdx / totalQuestions) * 100}%` }} 
                    />
                  </div>
               </div>
               <div className="hidden md:block">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block text-right">Đề số 2 - Thi thử THPTQG</span>
               </div>
            </div>

            {/* Question Card - Reduced Padding and More Compact */}
            <div className="bg-white p-6 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50 relative overflow-hidden min-h-[450px]">
              <div className="mb-8 flex items-start justify-between">
                 <div>
                   <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest mb-3">
                     Hàm số — Vận dụng cao
                   </span>
                   <h2 className="text-xl md:text-2xl font-bold font-montserrat text-gray-900 leading-tight md:leading-relaxed max-w-2xl">
                     Cho hàm số <span className="italic">y = x³ - 3x + 2</span>. Số điểm cực trị của hàm số là:
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
                 {['Không có điểm cực trị', 'Có 1 điểm cực trị', 'Có 2 điểm cực trị', 'Có 3 điểm cực trị'].map((option, i) => (
                   <button 
                     key={i}
                     onClick={() => setAnswered(prev => ({...prev, [currentIdx]: i}))}
                     className={cn(
                       "flex items-center gap-4 w-full p-4 md:p-5 text-left rounded-2xl border transition-all duration-200 group",
                       answered[currentIdx] === i 
                         ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200 ring-4 ring-blue-50" 
                         : "bg-white border-gray-100 text-gray-600 hover:border-blue-200 hover:bg-blue-50/10"
                     )}
                   >
                     <div className={cn(
                       "h-7 w-7 min-w-[1.75rem] rounded-full border-2 flex items-center justify-center text-[10px] font-black",
                       answered[currentIdx] === i 
                         ? "bg-white border-white text-blue-600" 
                         : "border-gray-100 text-gray-300 group-hover:border-blue-300 group-hover:text-blue-400"
                     )}>
                       {String.fromCharCode(65 + i)}
                     </div>
                     <span className="font-bold text-sm md:text-base">{option}</span>
                   </button>
                 ))}
              </div>
            </div>

            {/* Pagination Controls - More Compact */}
            <div className="flex items-center justify-between gap-4 mt-2 mb-8">
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
               
               <Link href={`/thi-thu/results?target=${targetScore}`} className="flex items-center gap-2 px-6 py-4 border border-pink-100 rounded-2xl bg-pink-50 text-pink-500 font-black transition-all hover:bg-pink-100 active:scale-95 text-sm">
                  <span className="hidden sm:inline">Hoàn thành</span>
                  <Send className="h-4 w-4" />
               </Link>
            </div>
          </div>

          {/* Sidebar (Right) - Sticky and Compact */}
          <aside className="w-full lg:w-[320px] flex flex-col gap-5 sticky top-20 h-fit">
             {/* Timer Card */}
             <div className="bg-white/50 backdrop-blur-sm p-5 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thời gian còn lại</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-2xl font-black font-montserrat text-blue-900 tracking-tighter">
                      {formatTime(timeLeft)}
                    </span>
                  </div>
                </div>
                <button className="p-3 bg-gray-50 rounded-xl text-gray-300 hover:bg-gray-100 transition-colors">
                  <Pause className="h-4 w-4" />
                </button>
             </div>

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

                <div className="pt-5 border-t border-gray-50 grid grid-cols-2 gap-y-2">
                  <div className="flex items-center gap-2">
                     <div className="h-2.5 w-2.5 rounded-full bg-blue-50 border border-blue-200" />
                     <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Đã làm</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="h-2.5 w-2.5 rounded-full bg-orange-100 border border-orange-200" />
                     <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Đánh dấu</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                     <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Đang làm</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="h-2.5 w-2.5 rounded-full bg-white border border-gray-100" />
                     <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Chưa làm</span>
                  </div>
                </div>
             </div>
          </aside>

        </div>
      </div>

      {/* Mission Briefing Modal - Centered and High Impact */}
      <AnimatePresence>
        {showToast && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-gray-900/60 backdrop-blur-md"
              onClick={() => setShowToast(false)}
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20, x: "-50%" }}
              animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
              exit={{ opacity: 0, scale: 0.95, y: 10, x: "-50%" }}
              className="fixed top-1/2 left-1/2 z-[101] w-[95vw] max-w-xl bg-white rounded-[3.5rem] border border-white shadow-[0_32px_80px_rgba(0,0,0,0.3)] p-8 md:p-12 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Highlight Header */}
              <div className="mb-8 w-full aspect-[4/3] rounded-[2.5rem] bg-gray-50 border border-gray-100 overflow-hidden relative group">
                <img 
                  src="/pic1.png" 
                  className="w-full h-full object-cover object-top p-0 group-hover:scale-110 transition-transform duration-1000" 
                  alt="Diagnostic Report" 
                />
                
                {/* Floating "System Detected" Callout */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute top-[18%] right-8 bg-red-500 text-white px-4 py-2 rounded-2xl shadow-lg border border-red-400 z-10 flex items-center gap-2"
                >
                   <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                   <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">Lỗ hổng (-1.5đ)</span>
                   <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-red-400" />
                </motion.div>

                {/* Annotation Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40 pointer-events-none" />
              </div>

              <div className="flex flex-col gap-4 mb-2 max-w-md mx-auto relative z-10">
                <div className="flex items-center justify-center gap-2 mb-2">
                   <span className="text-[10px] font-black text-[#0e56fa] uppercase tracking-[0.4em]">QUYẾT TÂM TĂNG ĐIỂM</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black font-montserrat text-gray-900 leading-tight">
                  Na sẽ chỉ ra chính xác <br /> <span className="text-red-500 italic">từng 0.1đ</span> bạn đang bị phí
                </h3>
                <p className="text-sm font-medium text-gray-500 leading-relaxed px-4">
                  Sự tập trung của bạn trong 90 phút tới sẽ giúp hệ thống "quét" chính xác các dạng Toán bạn đang yếu nhất để bắt đầu lộ trình gỡ điểm.
                </p>
              </div>

              {/* Progress bar countdown - Bottom indicator */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-50">
                 <motion.div 
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="h-full bg-blue-600"
                 />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
