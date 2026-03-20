"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { ChevronLeft, ChevronRight, ArrowLeft, Check, X, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ExamReview() {
  const [currentIdx, setCurrentIdx] = useState(1);
  const totalQuestions = 22;

  // Mock results
  const results = {
    1: { correct: true, userChoice: 2, correctChoice: 2 },
    2: { correct: false, userChoice: 1, correctChoice: 3 },
    3: { correct: true, userChoice: 0, correctChoice: 0 },
    4: { correct: true, userChoice: 1, correctChoice: 1 },
    5: { correct: false, userChoice: 3, correctChoice: 2 },
    // ... filling others
  };

  const getStatusColor = (num: number) => {
    if (num === currentIdx) return "bg-blue-600 text-white shadow-lg shadow-blue-200 border-blue-600";
    const res = results[num as keyof typeof results];
    if (res) {
      return res.correct ? "bg-green-500 text-white border-green-500" : "bg-red-500 text-white border-red-500";
    }
    // Default for mock
    return (num % 3 === 0) ? "bg-red-500 text-white border-red-500" : "bg-green-500 text-white border-green-500";
  };

  const currentResult = results[currentIdx as keyof typeof results] || { correct: true, userChoice: 2, correctChoice: 2 };

  return (
    <main className="flex min-h-screen flex-col bg-gray-50/30 overflow-x-hidden pt-16 pb-20">
      <Navbar />
      
      <div className="mx-auto w-full max-w-7xl px-4 md:px-10 py-6">
        {/* Review Header */}
        <div className="flex items-center justify-between mb-8">
           <div className="flex items-center gap-4">
              <Link href="/thi-thu/results" className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-gray-400 hover:bg-gray-50 transition-colors">
                 <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                 <h1 className="text-2xl font-black font-montserrat text-gray-900 leading-none">Xem lại bài làm</h1>
                 <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Đề số 1 · 19/3/2026</p>
              </div>
           </div>
           
           <div className="flex items-center gap-6 px-6 py-2 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2">
                 <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                 <span className="text-[10px] font-bold text-gray-400 uppercase">Đúng</span>
              </div>
              <div className="flex items-center gap-2">
                 <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                 <span className="text-[10px] font-bold text-gray-400 uppercase">Sai</span>
              </div>
           </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Question Card (Left) */}
          <div className="flex-1 flex flex-col gap-4 w-full lg:w-2/3">
             <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50 relative overflow-hidden min-h-[500px]">
                <div className="mb-10 flex items-start justify-between">
                   <div>
                     <span className={cn(
                       "inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4",
                       currentResult.correct ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                     )}>
                       {currentResult.correct ? "Bạn trả lời Đúng" : "Bạn trả lời Sai"} — Câu {currentIdx}
                     </span>
                     <h2 className="text-xl md:text-2xl font-bold font-montserrat text-gray-900 leading-relaxed max-w-2xl">
                       Cho hàm số <span className="italic">y = x³ - 3x + 2</span>. Số điểm cực trị của hàm số là:
                     </h2>
                   </div>
                   <div className={cn(
                     "h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg",
                     currentResult.correct ? "bg-green-500 text-white shadow-green-100" : "bg-red-500 text-white shadow-red-100"
                   )}>
                      {currentResult.correct ? <Check className="h-6 w-6" /> : <X className="h-6 w-6" />}
                   </div>
                </div>

                <div className="flex flex-col gap-4">
                   {['Không có điểm cực trị', 'Có 1 điểm cực trị', 'Có 2 điểm cực trị', 'Có 3 điểm cực trị'].map((option, i) => {
                     const isSelected = currentResult.userChoice === i;
                     const isCorrect = currentResult.correctChoice === i;
                     
                     return (
                       <div 
                         key={i}
                         className={cn(
                           "flex items-center gap-4 w-full p-6 text-left rounded-3xl border transition-all duration-200",
                           isSelected && !isCorrect ? "bg-red-50 border-red-200 text-red-700" :
                           isCorrect ? "bg-green-50 border-green-200 text-green-700 shadow-lg shadow-green-50" :
                           "bg-white border-gray-100 text-gray-500"
                         )}
                       >
                         <div className={cn(
                           "h-8 w-8 min-w-[2rem] rounded-full border-2 flex items-center justify-center text-xs font-black",
                           isSelected && !isCorrect ? "bg-red-500 border-red-500 text-white" :
                           isCorrect ? "bg-green-500 border-green-500 text-white" :
                           "border-gray-100 text-gray-300"
                         )}>
                           {String.fromCharCode(65 + i)}
                         </div>
                         <div className="flex-1 flex items-center justify-between">
                            <span className="font-bold">{option}</span>
                            {isCorrect && <Check className="h-4 w-4" />}
                            {isSelected && !isCorrect && <X className="h-4 w-4" />}
                         </div>
                       </div>
                     );
                   })}
                </div>
             </div>

             {/* Review Nav Footer */}
             <div className="flex items-center justify-between mt-2">
                <button 
                  onClick={() => setCurrentIdx(prev => Math.max(1, prev - 1))}
                  className="flex items-center gap-2 px-8 py-5 border border-gray-100 rounded-[1.5rem] bg-white text-gray-400 font-bold transition-all hover:bg-gray-50"
                >
                   <ChevronLeft className="h-5 w-5" />
                   Câu trước
                </button>
                <button 
                  onClick={() => setCurrentIdx(prev => Math.min(totalQuestions, prev + 1))}
                  className="px-10 py-5 bg-gray-900 rounded-[1.5rem] text-white font-black text-lg shadow-xl shadow-gray-200 transition-all hover:bg-black"
                >
                   Tiếp theo
                </button>
             </div>
          </div>

          {/* Sidebar (Right) - Question Picker */}
          <aside className="w-full lg:w-[320px] flex flex-col gap-6 sticky top-24 h-fit">
             <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col gap-6">
                <span className="text-xs font-black text-gray-900 font-montserrat tracking-tight uppercase">Danh sách câu hỏi</span>
                
                <div className="grid grid-cols-5 gap-2 max-h-[400px] overflow-y-auto pr-1">
                  {Array.from({ length: totalQuestions }).map((_, i) => (
                    <button 
                       key={i + 1}
                       onClick={() => setCurrentIdx(i + 1)}
                       className={cn(
                         "h-10 w-full rounded-lg flex items-center justify-center text-[10px] font-black border transition-all",
                         getStatusColor(i + 1)
                       )}
                    >
                       {i + 1}
                    </button>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-gray-50 flex flex-col gap-4">
                   <div className="flex items-center gap-3 p-4 bg-green-50 rounded-2xl border border-green-100">
                      <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-green-500 text-white">
                         <Check className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg font-black font-montserrat text-green-700 leading-none">28</span>
                        <span className="text-[10px] font-bold text-green-600 uppercase">Câu đúng</span>
                      </div>
                   </div>
                   <div className="flex items-center gap-3 p-4 bg-red-50 rounded-2xl border border-red-100">
                      <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-red-500 text-white">
                         <X className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg font-black font-montserrat text-red-700 leading-none">12</span>
                        <span className="text-[10px] font-bold text-red-600 uppercase">Câu sai</span>
                      </div>
                   </div>
                </div>
             </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
