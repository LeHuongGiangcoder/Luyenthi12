"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import { Check, ArrowRight, ChevronRight, Info, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function DeepAnalysis() {
  const [currentIdx, setCurrentIdx] = useState(4);
  const totalQuestions = 12;

  return (
    <main className="flex min-h-screen flex-col bg-white overflow-x-hidden pt-20">
      <Navbar />
      
      <div className="mx-auto w-full max-w-6xl px-4 md:px-12 py-10">
        {/* Header Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
           <div className="flex flex-col items-center md:items-start">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">ĐÁNH GIÁ CHUYÊN ĐỀ — HÀM SỐ</span>
              <h1 className="text-3xl md:text-4xl font-black font-montserrat text-gray-900 tracking-tight">
                Đo chính xác bạn đang yếu ở dạng nào
              </h1>
           </div>
           <div className="bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100">
              <span className="text-lg font-black font-montserrat text-gray-900 leading-none block">Câu {currentIdx} / {totalQuestions}</span>
           </div>
        </div>

        {/* Adaptive Status Bar */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
           {[
             { label: "Nhận biết", status: "completed" },
             { label: "Thông hiểu", status: "completed" },
             { label: "Vận dụng", status: "current" },
             { label: "Vận dụng cao", status: "pending" }
           ].map((step, i) => (
             <div 
               key={i} 
               className={cn(
                 "flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all",
                 step.status === "completed" ? "bg-green-50 text-green-600 border-green-100" :
                 step.status === "current" ? "bg-amber-50 text-amber-600 border-amber-200 shadow-xl shadow-amber-50/20" :
                 "bg-gray-50 text-gray-400 border-gray-100 opacity-60"
               )}
             >
                {step.label}
                {step.status === "completed" && <Check className="h-3 w-3" />}
                {step.status === "current" && <span className="ml-1 opacity-60">— ĐANG ĐO...</span>}
             </div>
           ))}
        </div>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-10 text-center md:text-left">
           Câu hỏi tự động điều chỉnh theo câu trả lời của bạn — xác định đúng chỗ cần tập trung luyện
        </p>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Question Column (Left) */}
          <div className="flex-1 flex flex-col gap-8">
             <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/20 relative overflow-hidden">
                <div className="mb-10">
                   <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-[10px] font-black uppercase tracking-widest mb-5 border border-amber-100">
                      Vận dụng · Khoảng đơn điệu
                   </span>
                   <h2 className="text-xl md:text-2xl font-bold font-montserrat text-gray-900 leading-relaxed">
                      Hàm số <span className="italic">f(x) = (x² - 2x + 3) / (x - 1)</span> đồng biến trên khoảng nào sau đây?
                   </h2>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    'A. (−∞ ; 0)',
                    'B. (1 ; +∞)',
                    'C. (−∞ ; −1) và (1 ; +∞)',
                    'D. (−1 ; 1)'
                  ].map((option, i) => (
                    <button 
                      key={i}
                      className={cn(
                        "flex items-center gap-4 w-full p-6 text-left rounded-2xl border transition-all group",
                        i === 0 
                          ? "bg-indigo-50 border-indigo-200 text-indigo-700 shadow-sm ring-2 ring-indigo-50" 
                          : "bg-white border-gray-100 text-gray-600 hover:bg-gray-50 hover:border-gray-200"
                      )}
                    >
                      <div className={cn(
                        "h-7 w-7 rounded-full border-2 flex items-center justify-center text-[10px] font-black",
                        i === 0 ? "bg-indigo-600 border-indigo-600 text-white" : "border-gray-200 text-gray-300"
                      )}>
                        {i === 0 ? <Check className="h-4 w-4" /> : String.fromCharCode(65 + i)}
                      </div>
                      <span className="font-bold text-base">{option}</span>
                    </button>
                  ))}
                </div>
             </div>

             <button className="w-full md:w-fit px-12 py-5 bg-gray-900 text-white font-black rounded-2xl shadow-xl shadow-gray-200 transition-all hover:bg-black hover:scale-[1.02] active:scale-95 self-center md:self-start">
                Câu tiếp theo →
             </button>
          </div>

          {/* AI Metrics Sidebar (Right) */}
          <aside className="w-full lg:w-[380px]">
             <div className="bg-gray-50/80 backdrop-blur-sm p-8 rounded-[2.5rem] border border-gray-100 flex flex-col gap-10">
                
                <div className="flex flex-col gap-6">
                  <h3 className="text-xs font-black text-gray-900 font-montserrat tracking-tight uppercase flex items-center gap-2">
                    Hệ thống đang ghi nhận
                    <div className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
                  </h3>
                  
                  <div className="space-y-6">
                    {[
                      { label: "Nhận biết", val: "Vững 95%", progress: 95, color: "bg-green-500", text: "text-green-600" },
                      { label: "Thông hiểu", val: "Vững 82%", progress: 82, color: "bg-green-500", text: "text-green-600" },
                      { label: "Vận dụng", val: "Đang đo...", progress: 45, color: "bg-amber-500", text: "text-amber-600", isPulse: true },
                      { label: "Vận dụng cao", val: "Chưa đến", progress: 0, color: "bg-gray-200", text: "text-gray-400" }
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

                <div className="pt-8 border-t border-gray-200 flex flex-col gap-5">
                   <p className="text-[11px] font-medium text-gray-500 leading-relaxed italic opacity-80">
                      "Câu hỏi tiếp theo sẽ được chọn dựa trên câu trả lời của bạn. Hệ thống đang xác định chính xác bạn đang vững đến mức nào."
                   </p>
                   <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-indigo-50 shadow-sm shadow-indigo-50/50">
                      <div className="p-2 bg-indigo-50 rounded-lg text-indigo-500">
                         <Info className="h-4 w-4" />
                      </div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tight">AI đang ưu tiên: <span className="text-indigo-600">Khoảng đơn điệu</span></span>
                   </div>
                </div>
             </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
