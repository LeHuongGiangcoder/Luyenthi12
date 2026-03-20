"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import { ChevronLeft, ChevronRight, Send, Pause, Flag } from "lucide-react";
import { cn } from "@/lib/utils";
import { mockQuestions } from "@/lib/mock-data";

export default function ExamRoom() {
  const [currentIdx, setCurrentIdx] = useState(1); // Starting from 1 for display
  const [marked, setMarked] = useState<number[]>([]);
  const [answered, setAnswered] = useState<Record<number, any>>({
    1: 0, 3: 0, 4: 0, 6: 0, 7: 0, 9: 0, 11: 0 // Mock some answers
  });
  const [timeLeft, setTimeLeft] = useState(5400 - 1666); // 90 min - some time
  
  // Format seconds to mm:ss
  const formatTime = (seconds: number) => {
    const mm = Math.floor(seconds / 60);
    const ss = seconds % 60;
    return `${mm}:${ss.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const totalQuestions = 40;
  
  const getStatusColor = (num: number) => {
    if (num === currentIdx) return "bg-blue-600 text-white shadow-lg shadow-blue-200";
    if (marked.includes(num)) return "bg-orange-100 text-orange-600 border border-orange-200";
    if (answered[num] !== undefined) {
       // Mock some correct/incorrect colors like in the image
       if ([1, 4, 6, 7, 9, 11].includes(num)) return "bg-green-500 text-white";
       if (num === 3) return "bg-red-500 text-white";
       return "bg-blue-100 text-blue-600";
    }
    return "bg-white text-gray-400 border border-gray-100 hover:border-gray-200";
  };

  return (
    <main className="flex min-h-screen flex-col bg-gray-50/30 overflow-x-hidden pt-20">
      <Navbar />
      
      <div className="mx-auto w-full max-w-5xl px-4 py-8 flex flex-col gap-6">
        {/* Exam Header */}
        <div className="flex flex-col gap-4 bg-white/50 backdrop-blur-sm p-6 rounded-[2rem] border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-black text-gray-900 font-montserrat tracking-tight">Câu {currentIdx} / {totalQuestions}</span>
              <div className="mt-2 h-1.5 w-64 rounded-full bg-gray-100 overflow-hidden">
                <div 
                  className="h-full bg-blue-500 transition-all duration-500" 
                  style={{ width: `${(currentIdx / totalQuestions) * 100}%` }} 
                />
              </div>
            </div>
            
            <div className="flex flex-col items-center">
               <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">ĐỀ SỐ 2 - THI THỬ</span>
               <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-2xl border border-blue-100">
                    <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-xl font-black font-montserrat text-blue-900 tracking-tighter">
                      {formatTime(timeLeft)}
                    </span>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-100 hover:bg-gray-50 rounded-2xl text-sm font-bold text-gray-500 transition-colors">
                    <Pause className="h-4 w-4" />
                    Tạm dừng
                  </button>
               </div>
            </div>
          </div>
        </div>

        {/* Question Navigation */}
        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
           <div className="grid grid-cols-7 md:grid-cols-10 gap-3">
              {Array.from({ length: 14 }).map((_, i) => (
                <button 
                   key={i + 1}
                   onClick={() => setCurrentIdx(i + 1)}
                   className={cn(
                     "h-10 w-10 md:h-12 md:w-12 rounded-xl flex items-center justify-center text-sm font-black transition-all",
                     getStatusColor(i + 1)
                   )}
                >
                   {i + 1}
                </button>
              ))}
              <div className="h-12 w-12 flex items-center justify-center text-gray-300 font-black tracking-widest">
                ...
              </div>
           </div>
           
           <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-gray-50 pt-6">
              <div className="flex items-center gap-2">
                 <div className="h-3 w-3 rounded-full bg-green-500" />
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Đúng</span>
              </div>
              <div className="flex items-center gap-2">
                 <div className="h-3 w-3 rounded-full bg-red-500" />
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sai / Bỏ qua</span>
              </div>
              <div className="flex items-center gap-2">
                 <div className="h-3 w-3 rounded-full bg-orange-400" />
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Đánh dấu xem lại</span>
              </div>
              <div className="flex items-center gap-2">
                 <div className="h-3 w-3 rounded-full bg-blue-500" />
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Câu đang làm</span>
              </div>
           </div>
        </div>

        {/* Question Card */}
        <div className="flex flex-col gap-6 animate-fade-in">
           <div className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                 <button 
                   onClick={() => {
                     setMarked(prev => prev.includes(currentIdx) ? prev.filter(n => n !== currentIdx) : [...prev, currentIdx]);
                   }}
                   className={cn(
                     "flex items-center gap-2 px-4 py-2 rounded-xl border transition-all text-xs font-bold",
                     marked.includes(currentIdx) 
                       ? "bg-orange-50 border-orange-200 text-orange-600 shadow-lg shadow-orange-100" 
                       : "bg-white border-gray-100 text-gray-400 hover:border-gray-200"
                   )}
                 >
                    <Flag className={cn("h-4 w-4", marked.includes(currentIdx) && "fill-orange-600")} />
                    {marked.includes(currentIdx) ? "Đã đánh dấu" : "Đánh dấu"}
                 </button>
              </div>
              
              <div className="mb-8">
                 <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest mb-4">
                   Hàm số — Vận dụng cao
                 </span>
                 <h2 className="text-xl md:text-2xl font-bold font-montserrat text-gray-900 leading-relaxed">
                   Cho hàm số <span className="italic">y = x³ - 3x + 2</span>. Số điểm cực trị của hàm số là:
                 </h2>
              </div>

              <div className="flex flex-col gap-4">
                 {['Không có điểm cực trị', 'Có 1 điểm cực trị', 'Có 2 điểm cực trị', 'Có 3 điểm cực trị'].map((option, i) => (
                   <button 
                     key={i}
                     onClick={() => setAnswered(prev => ({...prev, [currentIdx]: i}))}
                     className={cn(
                       "flex items-center gap-4 w-full p-6 h-18 text-left rounded-3xl border transition-all duration-200 group",
                       answered[currentIdx] === i 
                         ? "bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-200 ring-4 ring-blue-50" 
                         : "bg-white border-gray-100 text-gray-600 hover:border-blue-200 hover:bg-blue-50/30"
                     )}
                   >
                     <div className={cn(
                       "h-8 w-8 min-w-[2rem] rounded-full border-2 flex items-center justify-center text-xs font-black",
                       answered[currentIdx] === i 
                         ? "bg-white border-white text-blue-600" 
                         : "border-gray-100 text-gray-300 group-hover:border-blue-300 group-hover:text-blue-400"
                     )}>
                       {String.fromCharCode(65 + i)}
                     </div>
                     <span className="font-bold">{option}</span>
                   </button>
                 ))}
              </div>
           </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between mt-4 pb-12">
           <button 
             onClick={() => setCurrentIdx(prev => Math.max(1, prev - 1))}
             className="flex items-center gap-2 px-8 py-5 border border-gray-100 rounded-[1.5rem] bg-white text-gray-400 font-bold transition-all hover:bg-gray-50 hover:border-gray-200 active:scale-95"
           >
              <ChevronLeft className="h-5 w-5" />
              Câu trước
           </button>
           
           <button 
             onClick={() => setCurrentIdx(prev => Math.min(totalQuestions, prev + 1))}
             className="flex-1 max-w-sm flex items-center justify-center gap-3 px-10 py-5 bg-gray-400 rounded-[1.5rem] text-white font-black text-lg shadow-xl shadow-gray-200 transition-all hover:bg-gray-500 hover:scale-[1.02] active:scale-95 mx-4"
           >
              Câu tiếp theo
              <ChevronRight className="h-6 w-6" />
           </button>
           
           <button className="flex items-center gap-2 px-8 py-5 border border-red-100 rounded-[1.5rem] bg-red-50 text-red-500 font-black transition-all hover:bg-red-100 active:scale-95">
              Nộp bài
              <Send className="h-5 w-5" />
           </button>
        </div>
      </div>
    </main>
  );
}
