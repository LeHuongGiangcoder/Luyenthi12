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
      <main className="flex min-h-screen flex-col bg-[#fafbff] overflow-x-hidden pt-12 pb-20">

         <div className="mx-auto w-full max-w-7xl px-4 md:px-12">
            {/* Header Section - Consistent with results/page.tsx */}
            <div className="mb-16 text-left border-l-4 border-blue-600 pl-8">
               <span className="text-xs font-black text-blue-600 uppercase tracking-widest mb-4 block">PHÂN TÍCH CHUYÊN SÂU — MỤC TIÊU {targetScore} ĐIỂM</span>
               <h1 className="text-4xl md:text-6xl font-black font-montserrat tracking-tight text-gray-900 mb-6 leading-[1.1] max-w-4xl">
                  Bạn có thể "ăn trọn" <span className="text-[#0e56fa]">1.5 điểm nữa</span> từ chuyên đề Hàm số
               </h1>
               <p className="max-w-2xl text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
                  Dựa trên 12 câu hỏi chắt lọc, NaviEdu xác định bạn chỉ cần tập trung đạt đến <span className="text-gray-900 font-black underline decoration-blue-100 underline-offset-4">Vận dụng cao</span> để giành lại toàn bộ phần điểm đang hụt mất.
               </p>
            </div>

            <div className="flex flex-col gap-16">
               {/* Section 1: Phân tích chuyên sâu */}
               <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col gap-10 overflow-hidden text-left w-full">
                  <div className="flex flex-col xl:flex-row items-center gap-12">
                     {/* Optimized Radar Chart (SVG) */}
                     <div className="relative h-72 w-full max-w-[320px] md:max-w-[380px] shrink-0 flex items-center justify-center bg-gray-50/10 rounded-full">
                        <svg className="h-full w-full" viewBox="-40 -40 180 180">
                           {/* Radar Background Polygons - Diamond Grid (4-axis) */}
                           <polygon points="50,0 100,50 50,100 0,50" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                           <polygon points="50,12.5 87.5,50 50,87.5 12.5,50" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                           <polygon points="50,25 75,50 50,75 25,50" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                           <polygon points="50,37.5 62.5,50 50,62.5 37.5,50" fill="none" stroke="#f1f5f9" strokeWidth="1" />

                           {/* Axes */}
                           <line x1="50" y1="50" x2="50" y2="0" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="1 1" />
                           <line x1="50" y1="50" x2="100" y2="50" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="1 1" />
                           <line x1="50" y1="50" x2="50" y2="100" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="1 1" />
                           <line x1="50" y1="50" x2="0" y2="50" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="1 1" />

                           {/* Data Polygon (4-axis) */}
                           <polygon
                              points="50,2.5 91,50 50,72.5 41,50"
                              fill="rgba(79, 70, 229, 0.15)"
                              stroke="#0e56fa"
                              strokeWidth="2.5"
                              strokeLinejoin="round"
                           />

                           {/* Data Points */}
                           <circle cx="50" cy="2.5" r="3.5" fill="#0e56fa" />
                           <circle cx="91" cy="50" r="3.5" fill="#0e56fa" />
                           <circle cx="50" cy="72.5" r="3.5" fill="#0e56fa" />
                           <circle cx="41" cy="50" r="3.5" fill="#0e56fa" />

                           {/* Optimized Labels */}
                           <text x="50" y="-12" textAnchor="middle" fontSize="9" fontWeight="900" fill="#64748b" className="font-montserrat uppercase">NB</text>
                           <text x="108" y="53" textAnchor="start" fontSize="9" fontWeight="900" fill="#64748b" className="font-montserrat uppercase">TH</text>
                           <text x="50" y="115" textAnchor="middle" fontSize="9" fontWeight="900" fill="#64748b" className="font-montserrat uppercase">VD</text>
                           <text x="-8" y="53" textAnchor="end" fontSize="9" fontWeight="900" fill="#64748b" className="font-montserrat uppercase">VDC</text>
                        </svg>
                     </div>

                     {/* Legend & Stats */}
                     <div className="flex-1 w-full space-y-6 text-left">
                        {[
                           { label: "Nhận biết", val: "95%", progress: 95, color: "bg-green-500", text: "text-green-600" },
                           { label: "Thông hiểu", val: "82%", progress: 82, color: "bg-green-500", text: "text-green-600" },
                           { label: "Vận dụng", val: "45%", progress: 45, color: "bg-amber-400", text: "text-amber-600" },
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

                  <div className="p-8 md:p-10 bg-blue-50/30 rounded-[2rem] border border-blue-100/50">
                     <p className="text-lg font-medium text-gray-700 leading-relaxed text-left">
                        <span className="font-black text-blue-600 leading-relaxed italic block mb-3 underline decoration-blue-200 decoration-4">KẾT LUẬN MỤC TIÊU {targetScore}:</span>
                        Kỹ năng cơ bản của bạn đã ổn, nhưng để chạm mốc {targetScore}, bạn cần đạt được <span className="text-red-500 font-bold underline decoration-red-100 italic">Vận dụng cao của Hàm số.</span>
                        <br /> Dưới đây là lộ trình giúp bạn lấy lại <span className="font-black text-blue-600">1.5 điểm</span> còn thiếu ngay hôm nay.
                     </p>
                  </div>
               </div>

               {/* Section 2: Lộ trình cá nhân hoá */}
               <div className="bg-white rounded-[2.5rem] border-2 border-blue-100 shadow-2xl shadow-blue-100/30 p-10 md:p-14 text-center relative overflow-hidden flex flex-col items-center gap-12 transition-all hover:shadow-blue-200/40 w-full">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[100px] opacity-40 -mr-32 -mt-32" />
                  
                  <div className="relative z-10 w-full flex flex-col items-center">
                     <div className="inline-flex px-4 py-1.5 bg-[#0e56fa] text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6 relative w-fit mx-auto">
                        Lộ trình cá nhân hóa - Sprint 60
                     </div>
                     
                     <h2 className="text-3xl md:text-5xl font-black font-montserrat text-gray-900 leading-tight mb-4 max-w-2xl mx-auto">
                        Gỡ trọn 1.5 điểm Hàm số & Chinh phục mốc {targetScore}
                     </h2>
                     <p className="text-sm font-bold text-gray-400 mb-12">
                        Thiết kế riêng cho các chuyên đề bạn đang mất điểm.
                     </p>

                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 w-full max-w-5xl">
                        {[
                           {
                              step: "Stage 01",
                              title: "Lấp lỗ hổng Level 3",
                              desc: "Củng cố các dạng tiệm cận, cực trị hàm ẩn căn bản.",
                              icon: <LayoutList className="h-6 w-6 text-white" />
                           },
                           {
                              step: "Stage 02",
                              title: "Chuyên sâu Level 4",
                              desc: "Luyện 50 câu VDC tương tác có giải thích từng bước.",
                              icon: <Award className="h-6 w-6 text-white" />
                           },
                           {
                              step: "Stage 03",
                              title: "Chinh phục mốc 8+",
                              desc: "Mẹo giải nhanh các câu đồ thị phức tạp & tham số.",
                              icon: <TrendingUp className="h-6 w-6 text-white" />
                           }
                        ].map((item, i) => (
                           <div key={i} className="flex flex-col items-center gap-5 p-8 rounded-[2rem] bg-blue-50/50 hover:bg-blue-50 transition-all border border-blue-100/50 hover:scale-[1.02] shadow-sm">
                              <div className="h-14 w-14 shrink-0 rounded-2xl bg-[#0e56fa] flex items-center justify-center shadow-lg shadow-blue-200">
                                 {item.icon}
                              </div>
                              <div className="flex flex-col gap-2">
                                 <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.2em]">{item.step}</span>
                                 <h4 className="text-base font-black text-gray-900 font-montserrat">{item.title}</h4>
                                 <span className="text-xs font-medium text-gray-500 leading-relaxed max-w-[200px] mx-auto">
                                    {item.desc}
                                 </span>
                              </div>
                           </div>
                        ))}
                     </div>

                     <div className="w-full max-w-md mx-auto space-y-6">
                           <div className="flex items-center justify-center gap-1.5 px-4 py-1.5 bg-green-50 rounded-full border border-green-100 mx-auto w-fit">
                              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                              <span className="text-[10px] font-black text-green-700 uppercase tracking-widest">Trong tầm tay sau 7 ngày theo sát lộ trình</span>
                           </div>
                        <Link href="/pricing" className="w-full py-6 bg-[#0e56fa] text-white font-black rounded-2xl shadow-xl shadow-blue-400/30 transition-all hover:bg-blue-700 hover:scale-[1.05] active:scale-95 text-xl flex items-center justify-center gap-3 animate-subtle-pulse">
                           Luyện cá nhân hoá ngay
                           <ArrowRight className="h-6 w-6" />
                        </Link>
                        
                        <div className="flex flex-col items-center gap-4">
                           <div className="flex items-center gap-3 opacity-40">
                              <Users className="h-4 w-4 text-gray-400" />
                              <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">Cùng tham gia với 312 bạn khác</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Section 3: Tiếp tục đánh giá */}
               <div className="bg-white p-10 md:p-14 rounded-[2.5rem] border border-amber-100 shadow-sm relative overflow-hidden text-left w-full">
                  <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                     <TrendingUp className="h-40 w-40 text-amber-600" />
                  </div>

                  <div className="border-l-4 border-amber-400 pl-6 mb-10">
                     <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500 mb-3 block">TIẾP TỤC ĐÁNH GIÁ</span>
                     <h3 className="text-3xl font-black font-montserrat text-gray-900 leading-tight">Các chuyên đề gây mất điểm còn lại</h3>
                  </div>

                  <p className="text-xl text-gray-500 font-medium leading-relaxed mb-12 max-w-3xl text-left">
                     Số điểm bạn đang bị mất còn lại (khoảng 1.5đ nữa) đang nằm ở những chuyên đề NaviEdu chưa có đủ dữ liệu để đo đạc. Hình học không gian và Xác suất là những "lỗ hổng" tiềm ẩn cần được rà soát.
                  </p>

                  <div className="flex flex-wrap gap-4">
                     {[
                        { label: "Hàm số", status: "Đã phân tích", color: "bg-blue-50 border-blue-100 text-blue-600" },
                        { label: "Hình học KG", status: "Chưa đo", color: "bg-amber-50 border-amber-100 text-amber-600" },
                        { label: "Xác suất", status: "Chưa đo", color: "bg-amber-50 border-amber-100 text-amber-600" },
                        { label: "Tích phân", status: "Chưa đo", color: "bg-amber-50 border-amber-100 text-amber-600" }
                     ].map(tag => (
                        <div key={tag.label} className={cn("px-8 py-4 rounded-2xl border text-sm font-black flex items-center gap-3 shadow-sm transition-all hover:scale-105", tag.color)}>
                           <span>{tag.label}</span>
                           <span className="opacity-50 tracking-widest text-[10px] font-bold">✓ {tag.status}</span>
                        </div>
                     ))}
                  </div>
               </div>
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
