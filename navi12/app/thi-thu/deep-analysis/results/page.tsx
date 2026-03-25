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
                  Dựa trên 12 câu hỏi chắt lọc, NaviEdu xác định bạn chỉ cần tập trung đạt đến <span className="text-gray-900 font-black underline decoration-blue-100 underline-offset-4">Vận dụng và Vận dụng cao</span> để giành lại toàn bộ phần điểm đang hụt mất.
               </p>
            </div>

            <div className="flex flex-col gap-16">
               {/* Section 1: Phân tích chuyên sâu */}
               <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col gap-10 overflow-hidden text-left w-full">
                  <div className="flex flex-col xl:flex-row items-center gap-12">
                     {/* Optimized Radar Chart (SVG) - 5 Axes for Knowledge Units */}
                     <div className="relative h-72 w-full max-w-[320px] md:max-w-[380px] shrink-0 flex items-center justify-center bg-gray-50/10 rounded-full">
                        <svg className="h-full w-full" viewBox="-40 -40 180 180">
                           {/* Radar Background Pentagon Grid */}
                           {[0.25, 0.5, 0.75, 1].map((scale) => {
                              const r = 50 * scale;
                              const pts = [
                                 `50,${50-r}`,
                                 `${50 + r*0.951},${50 - r*0.309}`,
                                 `${50 + r*0.587},${50 + r*0.809}`,
                                 `${50 - r*0.587},${50 + r*0.809}`,
                                 `${50 - r*0.951},${50 - r*0.309}`
                              ].join(" ");
                              return <polygon key={scale} points={pts} fill="none" stroke="#f1f5f9" strokeWidth="1" />;
                           })}

                           {/* Axes */}
                           {[
                              { x: 50, y: 0 },
                              { x: 50 + 50*0.951, y: 50 - 50*0.309 },
                              { x: 50 + 50*0.587, y: 50 + 50*0.809 },
                              { x: 50 - 50*0.587, y: 50 + 50*0.809 },
                              { x: 50 - 50*0.951, y: 50 - 50*0.309 }
                           ].map((pt, i) => (
                              <line key={i} x1="50" y1="50" x2={pt.x} y2={pt.y} stroke="#f1f5f9" strokeWidth="1" strokeDasharray="1 1" />
                           ))}

                           {/* Data Polygon (5 topics) */}
                           {/* Values: 85, 62, 88, 48, 35 */}
                           <polygon
                              points="50,7.5 79.4,40 76.4,86.4 36.8,70.2 33,42.3"
                              fill="rgba(79, 70, 229, 0.15)"
                              stroke="#0e56fa"
                              strokeWidth="2.5"
                              strokeLinejoin="round"
                           />

                           {/* Data Points */}
                           <circle cx="50" cy="7.5" r="3" fill="#0e56fa" />
                           <circle cx="79.4" cy="40" r="3" fill="#0e56fa" />
                           <circle cx="76.4" cy="86.4" r="3" fill="#0e56fa" />
                           <circle cx="36.8" cy="70.2" r="3" fill="#0e56fa" />
                           <circle cx="33" cy="42.3" r="3" fill="#0e56fa" />

                           {/* Labels */}
                           <text x="50" y="-12" textAnchor="middle" fontSize="8" fontWeight="900" fill="#64748b" className="font-montserrat uppercase">Đơn điệu</text>
                           <text x="105" y="45" textAnchor="start" fontSize="8" fontWeight="900" fill="#64748b" className="font-montserrat uppercase">Cực trị</text>
                           <text x="85" y="105" textAnchor="start" fontSize="8" fontWeight="900" fill="#64748b" className="font-montserrat uppercase">GTLN-GTNN</text>
                           <text x="15" y="105" textAnchor="end" fontSize="8" fontWeight="900" fill="#64748b" className="font-montserrat uppercase">Tiệm cận</text>
                           <text x="-5" y="45" textAnchor="end" fontSize="8" fontWeight="900" fill="#64748b" className="font-montserrat uppercase">Ứng dụng</text>
                        </svg>
                     </div>

                     {/* Topic Mastery Summary */}
                     <div className="flex-1 w-full space-y-6 text-left">
                        {[
                           { label: "Tính đơn điệu", val: "Level 3", progress: 85, color: "bg-green-500", text: "text-green-600" },
                           { label: "Cực trị hàm số", val: "Level 2", progress: 62, color: "bg-[#0e56fa]", text: "text-blue-600" },
                           { label: "GTLN - GTNN", val: "Level 4", progress: 92, color: "bg-indigo-600", text: "text-indigo-600" },
                           { label: "Tiệm cận đồ thị", val: "Level 2", progress: 48, color: "bg-[#0e56fa]", text: "text-blue-600" },
                           { label: "Ứng dụng thực tế", val: "Level 1", progress: 35, color: "bg-amber-400", text: "text-amber-600" }
                        ].map((topic, i) => (
                           <div key={i} className="flex flex-col gap-2.5">
                              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                 <span className="text-gray-500">{topic.label}</span>
                                 <span className={cn(topic.text, topic.val === "Level 4" ? "animate-pulse" : "")}>{topic.val}</span>
                              </div>
                              <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden border border-gray-100/50">
                                 <div
                                    className={cn("h-full transition-all duration-1000", topic.color)}
                                    style={{ width: `${topic.progress}%` }}
                                 />
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Section 1.2: Chi tiết năng lực theo đơn vị kiến thức */}
                  <div className="pt-10 border-t border-gray-100 flex flex-col gap-10">
                     <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Chi tiết năng lực</span>
                        <h3 className="text-2xl font-black font-montserrat text-gray-900 leading-tight">Kết quả từng đơn vị kiến thức</h3>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                        {[
                           { name: "Tính đơn điệu của hàm số", value: 85, avg: "Level 3 (VD)" },
                           { name: "Cực trị của hàm số", value: 62, avg: "Level 2 (TH)" },
                           { name: "GTLN - GTNN của hàm số", value: 92, avg: "Level 4 (VDC)" },
                           { name: "Tiệm cận của đồ thị hàm số", value: 48, avg: "Level 2 (TH)" },
                           { name: "Ứng dụng đạo hàm thực tế", value: 35, avg: "Level 1 (NB)" }
                        ].map((sub, i) => (
                           <div key={i} className="flex flex-col gap-4">
                              <div className="flex justify-between items-end">
                                 <h4 className="text-[13px] font-bold text-gray-800 leading-tight flex-1 pr-4">{sub.name}</h4>
                                 <span className={cn(
                                    "text-[10px] font-black uppercase tracking-widest whitespace-nowrap",
                                    sub.value >= 90 ? "text-indigo-600 animate-pulse" : 
                                    sub.value >= 70 ? "text-green-600" : 
                                    sub.value >= 40 ? "text-[#0e56fa]" : 
                                    "text-amber-600"
                                 )}>
                                    {sub.avg}
                                 </span>
                              </div>
                              
                              <div className="flex flex-col gap-2">
                                 <div className="h-3 w-full bg-gray-50 rounded-full overflow-hidden relative border border-gray-100/50">
                                    {/* Background Level Indicators */}
                                    <div className="absolute inset-0 flex">
                                       <div className="flex-1 border-r border-gray-200/30" />
                                       <div className="flex-1 border-r border-gray-200/30" />
                                       <div className="flex-1 border-r border-gray-200/30" />
                                       <div className="flex-1" />
                                    </div>
                                    <div 
                                       className={cn("h-full transition-all duration-1000", 
                                          sub.value >= 90 ? "bg-indigo-600" : sub.value >= 70 ? "bg-green-500" : sub.value >= 40 ? "bg-[#0e56fa]" : "bg-amber-400"
                                       )}
                                       style={{ width: `${sub.value}%` }}
                                    />
                                 </div>
                                 <div className="flex justify-between px-1">
                                    {["NB", "TH", "VD", "VDC"].map(lvl => (
                                       <span key={lvl} className="text-[7px] font-black text-gray-400 uppercase tracking-widest">{lvl}</span>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="p-8 md:p-10 bg-blue-50/30 rounded-[2rem] border border-blue-100/50">
                     <p className="text-lg font-medium text-gray-700 leading-relaxed text-left">
                        <span className="font-black text-blue-600 leading-relaxed italic block mb-3 underline decoration-blue-200 decoration-4">KẾT LUẬN MỤC TIÊU {targetScore}:</span>
                        Kỹ năng cơ bản của bạn đã ổn, nhưng để chạm mốc {targetScore}, bạn cần đạt được <span className="text-red-500 font-bold underline decoration-red-100 italic">Vận dụng và Vận dụng cao của Hàm số.</span>
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
                              title: "Luyện tập để lấp lỗ hổng",
                              desc: "Củng cố các dạng tiệm cận, cực trị hàm ẩn căn bản.",
                              icon: <LayoutList className="h-6 w-6 text-white" />
                           },
                           {
                              step: "Stage 02",
                              title: "Quét mọi dạng bài thường thi",
                              desc: "Luyện 50 câu VDC tương tác có giải thích từng bước.",
                              icon: <Award className="h-6 w-6 text-white" />
                           },
                           {
                              step: "Stage 03",
                              title: "Rèn phản xạ, tối ưu thời gian làm bài",
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
                           Bắt đầu lấy lại điểm
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
