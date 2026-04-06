"use client";

import { Check, ArrowRight, Zap, Star, Users, TrendingUp, Target, ShieldAlert, Award, ChevronRight, LayoutList } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { getDaysRemaining } from "@/lib/exam-date";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function DeepAnalysisResultsContent() {
   const [expandedTopic, setExpandedTopic] = useState<number | null>(null);
   const daysRemaining = getDaysRemaining();
   const searchParams = useSearchParams();
   const targetScore = searchParams.get("target") || "8.0";

   return (
      <main className="flex min-h-screen flex-col bg-[#fafbff] overflow-x-hidden pt-12 pb-20">

         <div className="mx-auto w-full max-w-7xl px-4 md:px-12">
            {/* Header Section */}
            <div className="mb-16 text-left border-l-4 border-[#0e56fa] pl-8 relative animate-fade-in">
               <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4 block">PHÂN TÍCH CHUYÊN SÂU — MỤC TIÊU {targetScore} ĐIỂM</span>
               <h1 className="text-4xl md:text-6xl font-black font-montserrat tracking-tight text-gray-900 mb-6 leading-[1.1] max-w-4xl">
                  Bạn có thể "ăn trọn" <br /> <span className="text-[#0e56fa]">1.5 điểm nữa</span> từ chuyên đề Hàm số
               </h1>
               <p className="max-w-2xl text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
                  Dựa trên 12 câu hỏi chắt lọc, NaviEdu xác định bạn cần tập trung luyện <span className="text-gray-900 font-black underline decoration-blue-100 underline-offset-4">Ứng dụng đạo hàm thực tế</span> để giành lại điểm đang hụt mất.
               </p>
            </div>

            <div className="flex flex-col gap-16">
               {/* Section 1: Phân tích chuyên sâu */}
               <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col gap-10 overflow-hidden text-left w-full">
                  
                  {/* Radar Section */}
                  <div className="flex flex-col xl:flex-row items-center gap-16 py-6">
                     <div className="relative h-80 w-full xl:w-1/2 flex items-center justify-center bg-gray-50/10 rounded-full">
                        <svg className="h-full w-full max-w-[340px]" viewBox="-40 -40 180 180">
                           {[0.25, 0.5, 0.75, 1].map((scale) => {
                              const r = 50 * scale;
                              const pts = [`50,${50-r}`, `${50+r*0.951},${50-r*0.309}`, `${50+r*0.587},${50+r*0.809}`, `${50-r*0.587},${50+r*0.809}`, `${50-r*0.951},${50-r*0.309}`].join(" ");
                              return <polygon key={scale} points={pts} fill="none" stroke="#f1f5f9" strokeWidth="1" />;
                           })}
                           {[
                              { x: 50, y: 0 }, { x: 50+50*0.951, y: 50-50*0.309 }, { x: 50+50*0.587, y: 50+50*0.809 }, { x: 50-50*0.587, y: 50+50*0.809 }, { x: 50-50*0.951, y: 50-50*0.309 }
                           ].map((pt, i) => (
                              <line key={i} x1="50" y1="50" x2={pt.x} y2={pt.y} stroke="#f1f5f9" strokeWidth="1" strokeDasharray="1 1" />
                           ))}
                           <polygon points="50,7.5 79.4,40 76.4,86.4 36.8,70.2 33,42.3" fill="rgba(79, 70, 229, 0.15)" stroke="#0e56fa" strokeWidth="2.5" strokeLinejoin="round" />
                           <circle cx="50" cy="7.5" r="3" fill="#0e56fa" /><circle cx="79.4" cy="40" r="3" fill="#0e56fa" /><circle cx="76.4" cy="86.4" r="3" fill="#0e56fa" /><circle cx="36.8" cy="70.2" r="3" fill="#0e56fa" /><circle cx="33" cy="42.3" r="3" fill="#0e56fa" />
                           <text x="50" y="-12" textAnchor="middle" fontSize="8" fontWeight="900" fill="#64748b" className="font-montserrat uppercase">Đơn điệu</text>
                           <text x="105" y="45" textAnchor="start" fontSize="8" fontWeight="900" fill="#64748b" className="font-montserrat uppercase">Cực trị</text>
                           <text x="85" y="105" textAnchor="start" fontSize="8" fontWeight="900" fill="#64748b" className="font-montserrat uppercase">GTLN-GTNN</text>
                           <text x="15" y="105" textAnchor="end" fontSize="8" fontWeight="900" fill="#64748b" className="font-montserrat uppercase">Tiệm cận</text>
                           <text x="-5" y="45" textAnchor="end" fontSize="8" fontWeight="900" fill="#64748b" className="font-montserrat uppercase">Ứng dụng</text>
                        </svg>
                     </div>

                     <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                           { label: "Điểm mạnh nhất", value: "GTLN - GTNN", sub: "Level 4 (Mastery)", icon: <Award className="h-5 w-5 text-indigo-600" />, color: "bg-indigo-50 border-indigo-100" },
                           { label: "Lỗ hổng ưu tiên", value: "Ứng dụng thực tế", sub: "Level 1 (Cần lấp)", icon: <ShieldAlert className="h-5 w-5 text-amber-600" />, color: "bg-amber-50 border-amber-100" },
                           { label: "Tỷ lệ tinh thông", value: "68%", sub: "Chuyên đề Hàm số", icon: <Target className="h-5 w-5 text-blue-600" />, color: "bg-blue-50 border-blue-100" },
                           { label: "Tiềm năng bứt phá", value: "+1.5 điểm", sub: "Nếu đạt Level 4", icon: <Zap className="h-5 w-5 text-green-600" />, color: "bg-green-50 border-green-100" }
                        ].map((stat, i) => (
                           <div key={i} className={cn("p-6 rounded-3xl border flex flex-col gap-4 transition-all hover:scale-[1.02] shadow-sm", stat.color)}>
                              <div className="flex items-center justify-between">
                                 <div className="h-10 w-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                                    {stat.icon}
                                 </div>
                                 <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Insight #{i+1}</span>
                              </div>
                              <div className="flex flex-col">
                                 <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">{stat.label}</span>
                                 <span className="text-lg font-black text-gray-900 font-montserrat tracking-tight">{stat.value}</span>
                                 <span className="text-[10px] font-medium text-gray-500 mt-0.5">{stat.sub}</span>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Section 1.2: Chi tiết năng lực */}
                  <div className="pt-10 border-t border-gray-100 flex flex-col gap-12 text-left">
                     
                     {/* Subsection 1.2.1: Kết quả từng đơn vị kiến thức */}
                     <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-2">
                           <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Chi tiết năng lực</span>
                           <h3 className="text-2xl font-black font-montserrat text-gray-900 leading-tight">Kết quả từng đơn vị kiến thức</h3>
                        </div>

                        <div className="flex flex-col gap-4">
                           {[
                              { name: "Tính đơn điệu của hàm số", value: 85, avg: "Level 3", color: "text-level-3", bg: "bg-level-3", suggested: ["Bài toán tham số m m", "Đồ thị hàm hợp nâng cao", "Hàm số chứa giá trị tuyệt đối"] },
                              { name: "Cực trị của hàm số", value: 62, avg: "Level 2", color: "text-level-2", bg: "bg-level-2", suggested: ["Cực trị hàm bậc 3, bậc 4", "Tìm m để hàm có n cực trị", "Đồ thị f'(x)"] },
                              { name: "GTLN - GTNN của hàm số", value: 92, avg: "Level 4", color: "text-level-4", bg: "bg-level-4", suggested: ["Bất đẳng thức trong Hàm số", "Min-Max hàm nhiều biến", "Ứng dụng thực tế tối ưu"] },
                              { name: "Tiệm cận của đồ thị hàm số", value: 48, avg: "Level 2", color: "text-level-2", bg: "bg-level-2", suggested: ["Tiệm cận chứa căn thức", "Tiệm cận của hàm phân thức", "Tiệm cận hàm ẩn"] },
                              { name: "Ứng dụng đạo hàm thực tế", value: 35, avg: "Level 1", color: "text-level-1", bg: "bg-level-1", suggested: ["Bài toán vật lý (Vận tốc)", "Bài toán tăng trưởng", "Tối ưu hóa diện tích/thể tích"] }
                           ].map((sub, i) => (
                              <div key={i} className={cn("flex flex-col gap-3 p-5 px-8 rounded-[1.5rem] border transition-all cursor-pointer group", expandedTopic === i ? "bg-gray-50/50 border-blue-200 shadow-sm" : "bg-white border-gray-50 hover:bg-gray-50/80")} onClick={() => setExpandedTopic(expandedTopic === i ? null : i)}>
                                 <div className="flex justify-between items-center">
                                    <h4 className="text-[15px] font-bold text-gray-800 leading-tight flex items-center gap-2 pr-4 flex-1">
                                       {sub.name}
                                       <ChevronRight className={cn("h-3 w-3 text-gray-300 transition-transform", expandedTopic === i && "rotate-90")} />
                                    </h4>
                                    <span className={cn("text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap", sub.color, sub.value >= 90 && "animate-pulse")}>
                                       {sub.avg}
                                    </span>
                                 </div>
                                 <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden relative border border-gray-100/30">
                                    <div className={cn("h-full transition-all duration-1000", sub.bg)} style={{ width: `${sub.value}%` }} />
                                 </div>
                                 <AnimatePresence>
                                    {expandedTopic === i && (
                                       <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                          <div className="pt-4 mt-1 border-t border-gray-100 flex flex-col gap-3">
                                             <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Gợi ý dạng bài trọng tâm:</span>
                                             <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                {sub.suggested.map((item, idx) => (
                                                   <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-blue-200 transition-colors">
                                                      <span className="text-[11px] font-bold text-gray-700">{item}</span>
                                                      <ChevronRight className="h-3 w-3 text-gray-300" />
                                                   </div>
                                                ))}
                                             </div>
                                          </div>
                                       </motion.div>
                                    )}
                                 </AnimatePresence>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Subsection 1.2.2: YCCĐ cần hỗ trợ */}
                     <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-2">
                           <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Gợi ý bứt phá</span>
                           <h3 className="text-2xl font-black font-montserrat text-gray-900 leading-tight">YCCĐ cần hỗ trợ để không mất điểm</h3>
                        </div>

                        <div className="flex flex-col gap-4">
                           {[
                              { name: "Tìm GTLN/GTNN hàm số có điều kiện", gain: "+0.75đ", color: "bg-red-50/20 border-red-100/50 text-red-700", dotColor: "bg-red-500" },
                              { name: "Phân tích cực trị hàm hợp", gain: "+0.75đ", color: "bg-red-50/20 border-red-100/50 text-red-700", dotColor: "bg-red-500" },
                              { name: "Khoảng đơn điệu hàm phân thức", gain: "+0.25đ", color: "bg-amber-50/20 border-amber-100/50 text-amber-700", dotColor: "bg-amber-500" }
                           ].map((item, idx) => (
                              <div key={idx} className={cn("flex flex-col md:flex-row items-center justify-between p-5 px-8 rounded-[1.5rem] border transition-all hover:scale-[1.01] shadow-sm group", item.color)}>
                                 <div className="flex items-center gap-5 text-left">
                                    <div className={cn("h-2.5 w-2.5 rounded-full group-hover:scale-125 transition-transform", item.dotColor)} />
                                    <span className="text-[15px] font-bold font-montserrat tracking-tight text-gray-800">{item.name}</span>
                                 </div>
                                 <div className="flex items-baseline gap-2 mt-3 md:mt-0 text-right opacity-80">
                                    <span className="text-[9px] font-bold uppercase tracking-widest opacity-40">Gain potential:</span>
                                    <span className="text-xl font-black font-montserrat tracking-tighter leading-none">{item.gain}</span>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>

                     <div className="p-8 md:p-10 bg-blue-50/30 rounded-[1.5rem] border border-blue-100/50">
                        <p className="text-base md:text-lg font-medium text-gray-700 leading-relaxed text-left">
                           <span className="font-black text-blue-600 leading-relaxed italic block mb-3 underline decoration-blue-200 decoration-2 text-left">KẾT LUẬN MỤC TIÊU {targetScore}:</span>
                           Bạn đang nắm tốt phần cơ bản. Điểm đang bị kéo xuống bởi tầng <span className="text-red-500 font-bold underline decoration-red-100 italic">VDC - chính xác là tầng quyết định điểm 8–9–10</span>. 
                           <br /> Chỉ cần gỡ 3 YCCĐ trên là bạn có thể lấy thêm <span className="font-black text-blue-600">~1.75 điểm</span> và tiến gần hơn tới mục tiêu {targetScore} của mình.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Section 2: Lộ trình cá nhân hoá */}
               <div className="bg-white rounded-[2.5rem] border-2 border-blue-100 shadow-2xl shadow-blue-100/30 p-10 md:p-14 text-center relative overflow-hidden flex flex-col items-center gap-12 transition-all hover:shadow-blue-200/40 w-full">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[100px] opacity-40 -mr-32 -mt-32" />
                  
                  <div className="relative z-10 w-full flex flex-col items-center">
                     <div className="inline-flex px-4 py-1.5 bg-[#0e56fa] text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6 relative w-fit mx-auto">Lộ trình cá nhân hóa - Sprint 60</div>
                     <h2 className="text-3xl md:text-5xl font-black font-montserrat text-gray-900 leading-tight mb-4 max-w-2xl mx-auto">Gỡ trọn 1.5 điểm Hàm số & Chinh phục mốc {targetScore}</h2>
                     <p className="text-sm font-bold text-gray-400 mb-12">Thiết kế riêng cho các chuyên đề bạn đang mất điểm.</p>

                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 w-full max-w-5xl">
                        {[
                           { step: "Stage 01", title: "Luyện tập để lấp lỗ hổng", desc: "Củng cố các dạng tiệm cận, cực trị hàm ẩn căn bản.", icon: <LayoutList className="h-6 w-6 text-white" /> },
                           { step: "Stage 02", title: "Quét mọi dạng bài thường thi", desc: "Luyện 50 câu VDC tương tác có giải thích từng bước.", icon: <Award className="h-6 w-6 text-white" /> },
                           { step: "Stage 03", title: "Rèn phản xạ, tối ưu thời gian làm bài", desc: "Mẹo giải nhanh các câu đồ thị phức tạp & tham số.", icon: <TrendingUp className="h-6 w-6 text-white" /> }
                        ].map((item, i) => (
                           <div key={i} className="flex flex-col items-center gap-5 p-8 rounded-[2rem] bg-blue-50/50 hover:bg-blue-50 transition-all border border-blue-100/50 hover:scale-[1.02] shadow-sm">
                              <div className="h-14 w-14 shrink-0 rounded-2xl bg-[#0e56fa] flex items-center justify-center shadow-lg shadow-blue-200">{item.icon}</div>
                              <div className="flex flex-col gap-2">
                                 <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.2em]">{item.step}</span>
                                 <h4 className="text-base font-black text-gray-900 font-montserrat">{item.title}</h4>
                                 <span className="text-xs font-medium text-gray-500 leading-relaxed max-w-[200px] mx-auto">{item.desc}</span>
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
                     </div>
                  </div>
               </div>

               {/* Section 3: Tiếp tục đánh giá */}
               <div className="bg-white p-10 md:p-14 rounded-[2.5rem] border border-amber-100 shadow-sm relative overflow-hidden text-left w-full">
                  <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none text-left"><TrendingUp className="h-40 w-40 text-amber-600" /></div>
                  <div className="border-l-4 border-amber-400 pl-6 mb-10 text-left">
                     <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500 mb-3 block">TIẾP TỤC ĐÁNH GIÁ</span>
                     <h3 className="text-3xl font-black font-montserrat text-gray-900 leading-tight">Các chuyên đề gây mất điểm còn lại</h3>
                  </div>
                  <p className="text-xl text-gray-500 font-medium leading-relaxed mb-12 max-w-3xl text-left">Số điểm bạn đang bị mất còn lại (khoảng 1.5đ nữa) đang nằm ở những chuyên đề NaviEdu chưa có đủ dữ liệu để đo đạc.</p>
                  <div className="flex flex-wrap gap-4 text-left">
                     {[
                        { label: "Hàm số", status: "Đã đo", color: "bg-blue-50 border-blue-100 text-blue-600" },
                        { label: "Hình học KG", status: "Chưa đo", color: "bg-amber-50 border-amber-100 text-amber-600" },
                        { label: "Xác suất", status: "Chưa đo", color: "bg-amber-50 border-amber-100 text-amber-600" },
                        { label: "Tích phân", status: "Chưa đo", color: "bg-amber-50 border-amber-100 text-amber-600" }
                     ].map(tag => (
                        <div key={tag.label} className={cn("px-8 py-4 rounded-2xl border text-sm font-black flex items-center gap-3 shadow-sm transition-all hover:scale-105", tag.color)}>
                           <span>{tag.label}</span>
                           <span className="opacity-50 tracking-widest text-[10px] font-bold uppercase">✓ {tag.status}</span>
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
         < DeepAnalysisResultsContent />
      </Suspense>
   );
}
