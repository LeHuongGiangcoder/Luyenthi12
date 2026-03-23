"use client";

import { Check, ArrowRight, Zap, Star, Users, TrendingUp, Target, ShieldAlert, Award, ChevronRight, LayoutList } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { getDaysRemaining } from "@/lib/exam-date";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function DeepAnalysisResultsContent() {
  const daysRemaining = getDaysRemaining();
  const searchParams = useSearchParams();
  const targetScore = searchParams.get("target") || "8.0";

  return (
    <main className="flex min-h-screen flex-col bg-gray-50/20 overflow-x-hidden pt-8 pb-20">
      
      <div className="mx-auto w-full max-w-7xl px-4 md:px-12">
         <div className="mb-12 text-left border-l-4 border-blue-600 pl-8">
            <span className="text-xs font-black text-blue-600 uppercase tracking-widest mb-4 block">PHÂN TÍCH CHUYÊN SÂU — MỤC TIÊU {targetScore} ĐIỂM</span>
            <h1 className="text-4xl md:text-5xl font-black font-montserrat tracking-tight text-gray-900 mb-6 leading-tight max-w-4xl">
              Bạn có thể "ăn trọn" <span className="text-[#0e56fa]">1.5 điểm nữa</span> từ chuyên đề Hàm số
            </h1>
            <p className="max-w-2xl text-lg text-gray-500 font-medium leading-relaxed">
              Dựa trên 12 câu hỏi chắt lọc, Navi xác định bạn chỉ cần đạt đến <span className="text-gray-900 font-black underline decoration-blue-100 underline-offset-4">Level 4/5</span> để giành lại toàn bộ phần điểm đang bị hụt mất.
            </p>
         </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Analysis Column (Left) */}
          <div className="flex-1 flex flex-col gap-8">
             {/* Radar Chart Card */}
             <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col gap-10 overflow-hidden text-left">
                <div className="flex flex-col xl:flex-row items-center gap-12">
                   {/* Optimized Radar Chart (SVG) */}
                   <div className="relative h-72 w-full max-w-[320px] md:max-w-[380px] shrink-0 flex items-center justify-center bg-gray-50/10 rounded-full">
                      <svg className="h-full w-full" viewBox="-40 -40 180 180">
                        {/* Radar Background Polygons - SCALED DOWN FOR AIR */}
                        <polygon points="50,0 95,33 78,85 22,85 5,33" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                        <polygon points="50,15 82,39 70,76 30,76 18,39" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                        <polygon points="50,30 68,43 62,65 38,65 32,43" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                        
                        {/* Axes */}
                        <line x1="50" y1="50" x2="50" y2="0" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="1 1" />
                        <line x1="50" y1="50" x2="95" y2="33" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="1 1" />
                        <line x1="50" y1="50" x2="78" y2="85" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="1 1" />
                        <line x1="50" y1="50" x2="22" y2="85" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="1 1" />
                        <line x1="50" y1="50" x2="5" y2="33" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="1 1" />

                        {/* Data Polygon */}
                        <polygon 
                          points="50,10 90,38 72,80 30,85 15,45" 
                          fill="rgba(79, 70, 229, 0.15)" 
                          stroke="#0e56fa" 
                          strokeWidth="2.5" 
                          strokeLinejoin="round"
                        />
                        
                        {/* Data Points */}
                        <circle cx="50" cy="10" r="3.5" fill="#0e56fa" />
                        <circle cx="90" cy="38" r="3.5" fill="#0e56fa" />
                        <circle cx="72" cy="80" r="3.5" fill="#0e56fa" />
                        <circle cx="30" cy="85" r="3.5" fill="#0e56fa" />
                        <circle cx="15" cy="45" r="3.5" fill="#0e56fa" />

                        {/* Optimized Labels */}
                        <text x="50" y="-12" textAnchor="middle" fontSize="8" fontWeight="900" fill="#64748b" className="font-montserrat">Nhận biết</text>
                        <text x="102" y="36" textAnchor="start" fontSize="8" fontWeight="900" fill="#64748b" className="font-montserrat">Thông hiểu</text>
                        <text x="82" y="96" textAnchor="start" fontSize="8" fontWeight="900" fill="#64748b" className="font-montserrat">Vận dụng</text>
                        <text x="18" y="96" textAnchor="end" fontSize="8" fontWeight="900" fill="#64748b" className="font-montserrat">VDC</text>
                        <text x="-2" y="36" textAnchor="end" fontSize="8" fontWeight="900" fill="#64748b" className="font-montserrat">Ứng dụng</text>
                      </svg>
                   </div>

                   {/* Legend & Stats */}
                   <div className="flex-1 w-full space-y-6 text-left">
                      {[
                        { label: "Nhận biết", val: "95%", progress: 95, color: "bg-green-500", text: "text-green-600" },
                        { label: "Thông hiểu", val: "82%", progress: 82, color: "bg-green-500", text: "text-green-600" },
                        { label: "Vận dụng - Ứng dụng", val: "45%", progress: 45, color: "bg-amber-400", text: "text-amber-600" },
                        { label: "Vận dụng cao", val: "18%", progress: 18, color: "bg-red-500", text: "text-red-600" }
                      ].map((metric, i) => (
                        <div key={i} className="flex flex-col gap-2.5">
                           <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                              <div className="flex items-center gap-2.5 text-left">
                                 <div className="h-2.5 w-2.5 rounded-full" />
                                 <span className="text-gray-500">{metric.label}</span>
                              </div>
                              <span className={metric.text}>{metric.val}</span>
                           </div>
                           <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden">
                              <div 
                                className={cn("h-full transition-all duration-1000", metric.color)} 
                                style={{ width: `${metric.progress}%` }} 
                              />
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                 <div className="p-6 md:p-8 bg-gray-50/50 rounded-3xl border border-gray-100 group hover:border-blue-100 transition-colors">
                    <p className="text-base font-medium text-gray-600 leading-relaxed text-left">
                      <span className="font-black text-gray-900 leading-relaxed italic block mb-3 underline decoration-blue-100 decoration-4">Kết luận mục tiêu {targetScore}:</span> 
                      Kỹ năng cơ bản của bạn đã ổn, nhưng con đường chạm mốc {targetScore} đang bị chặn bởi <span className="text-red-500 font-bold underline decoration-red-100 italic">Level 4 & 5 của Hàm số.</span> 
                      Dưới đây là lộ trình giúp bạn lấy lại <span className="font-black text-blue-600">1.5 điểm</span> còn thiếu ngay hôm nay.
                    </p>
                 </div>
             </div>

             {/* Other Topics Card */}
             <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-amber-100 shadow-sm relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <TrendingUp className="h-24 w-24 text-amber-600" />
                </div>
                 <h3 className="text-xl font-black font-montserrat text-gray-900 mb-4">Các chuyên đề gây mất điểm còn lại</h3>
                 <p className="text-sm font-medium text-gray-500 leading-relaxed mb-8 max-w-xl text-left">
                  Số điểm bạn đang bị mất còn lại (khoảng 1.5đ nữa) đang nằm ở những chuyên đề Navi chưa có đủ dữ liệu để đo đạc. Rất có thể Hình học không gian và Xác suất là những "lỗ hổng" âm thầm chưa được bạn kiểm tra đúng cách.
                 </p>

                <div className="flex flex-wrap gap-2">
                   {[
                     { label: "Hàm số", status: "Đã phân tích", color: "bg-gray-50 border-gray-100 text-gray-500" },
                     { label: "Hình học KG", status: "Chưa đo", color: "bg-amber-50 border-amber-100 text-amber-600" },
                     { label: "Xác suất", status: "Chưa đo", color: "bg-amber-50 border-amber-100 text-amber-600" },
                     { label: "Tịch phân", status: "Chưa đo", color: "bg-amber-50 border-amber-100 text-amber-600" }
                   ].map(tag => (
                     <div key={tag.label} className={cn("px-4 py-2 rounded-xl border text-[10px] font-bold flex items-center gap-2 shadow-sm", tag.color)}>
                        <span>{tag.label}</span>
                        <span className="opacity-50">✓ {tag.status}</span>
                     </div>
                   ))}
                </div>
             </div>
          </div>

          {/* Roadmap Column (Right) - Sprint 60 */}
          <aside className="w-full lg:w-[420px]">
             <div className="bg-white rounded-[2.5rem] border-2 border-indigo-100 shadow-2xl shadow-indigo-100 p-8 md:p-10 text-left relative overflow-hidden flex flex-col h-full transition-all hover:shadow-indigo-200">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl opacity-50 -mr-16 -mt-16" />
                
                <div className="inline-flex px-4 py-1.5 bg-indigo-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6 relative w-fit">
                   Lộ trình cá nhân hóa - Sprint 60
                </div>
                
                <h2 className="text-2xl font-black font-montserrat text-gray-900 leading-tight mb-4 relative">
                  Gỡ trọn 1.5 điểm Hàm số & Chinh phục mốc {targetScore}
                </h2>
                <p className="text-xs font-bold text-gray-400 mb-10">
                   Thiết kế riêng cho lỗ hổng "Vận dụng cao" của bạn.
                </p>

                <div className="space-y-6 mb-12 flex-1">
                   {[
                     { 
                       step: "01", 
                       title: "Lấp lỗ hổng Level 3", 
                       desc: "Củng cố các dạng tiệm cận, cực trị hàm ẩn căn bản.",
                       icon: <LayoutList className="h-5 w-5" />
                     },
                     { 
                       step: "02", 
                       title: "Chuyên sâu Level 4", 
                       desc: "Luyện 50 câu VDC tương tác có giải thích từng bước.",
                       icon: <Award className="h-5 w-5" />
                     },
                     { 
                       step: "03", 
                       title: "Chinh phục mốc 9+", 
                       desc: "Mẹo giải nhanh các câu đồ thị phức tạp & tham số.",
                       icon: <TrendingUp className="h-5 w-5" />
                     }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-5 items-start group">
                        <div className="h-12 w-12 shrink-0 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-black text-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                           {item.icon}
                        </div>
                        <div className="flex flex-col gap-1 text-left">
                           <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">{item.step} — STAGE</span>
                           <h4 className="text-sm font-black text-gray-900 font-montserrat">{item.title}</h4>
                           <span className="text-xs font-medium text-gray-500 leading-relaxed text-left">
                              {item.desc}
                           </span>
                        </div>
                     </div>
                   ))}
                </div>

                <div className="mb-8 pt-6 border-t border-gray-50">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-black text-green-600 uppercase tracking-[0.2em]">Khả quan để gỡ 1.5đ trong 2 tuần</span>
                   </div>
                   <div className="flex items-center gap-4 text-left">
                      <Users className="h-8 w-8 text-indigo-100" />
                      <p className="text-[10px] font-medium text-gray-400">Đã có hơn 312 học sinh cùng mục tiêu {targetScore} đang tham gia lộ trình này.</p>
                   </div>
                </div>

                <Link href="/pricing" className="w-full py-5 bg-[#0e56fa] text-white font-black rounded-2xl shadow-xl shadow-blue-200 transition-all hover:bg-blue-700 hover:scale-[1.01] active:scale-95 text-lg flex items-center justify-center gap-3">
                   Xem chi tiết lộ trình
                   <ChevronRight className="h-5 w-5" />
                </Link>
             </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default function DeepAnalysisResults() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-black animate-pulse text-gray-300 uppercase tracking-widest">Đang tải phân tích chuyên sâu...</div>}>
      <DeepAnalysisResultsContent />
    </Suspense>
  );
}
