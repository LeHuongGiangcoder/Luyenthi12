"use client";

import Navbar from "@/components/navbar";
import { Check, ArrowRight, Zap, Star, Users, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function DeepAnalysisResults() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50/20 overflow-x-hidden pt-24 pb-20">
      <Navbar />
      
      <div className="mx-auto w-full max-w-7xl px-4 md:px-12">
        {/* Header Section */}
        <div className="mb-12 text-left">
           <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block">KẾT QUẢ ĐÁNH GIÁ — HÀM SỐ</span>
           <h1 className="text-4xl md:text-5xl font-black font-montserrat tracking-tight text-gray-900 mb-4 leading-tight">
             Đây là bức tranh điểm số của bạn
           </h1>
           <p className="max-w-3xl text-gray-500 font-medium leading-relaxed">
             Hệ thống đã xác định chính xác bạn đang vững ở đâu và đang để mất điểm ở dạng nào — dựa trên 12 câu hỏi được chọn có chủ đích.
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
                                 <div className={cn("h-2.5 w-2.5 rounded-full", metric.color)} />
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

                <div className="p-6 md:p-8 bg-gray-50/50 rounded-3xl border border-gray-100">
                   <p className="text-sm font-medium text-gray-600 leading-relaxed text-left">
                     <span className="font-black text-gray-900 leading-relaxed italic block mb-2 underline decoration-gray-200 decoration-4">Kết luận:</span> Bạn đang nắm tốt phần cơ bản (Nhận biết + Thông hiểu). Điểm số <span className="text-red-500 font-bold underline decoration-red-100 italic">đang bị kéo xuống bởi dạng Vận dụng cao</span> — chính xác đây là tầng quyết định điểm 8—9—10 và là nơi bạn có thể gỡ lại nhiều điểm nhất trong 89 ngày còn lại.
                   </p>
                </div>
             </div>

             {/* Other Topics Card */}
             <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-amber-100 shadow-sm relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <TrendingUp className="h-24 w-24 text-amber-600" />
                </div>
                <h3 className="text-lg font-black font-montserrat text-gray-900 mb-4">Và đây mới chỉ là chuyên đề Hàm số</h3>
                <p className="text-xs font-medium text-gray-500 leading-relaxed mb-8 max-w-xl text-left">
                  Hình học không gian và Xác suất của bạn chưa được đo đủ. Rất có thể còn những dạng Toán khác đang âm thầm kéo điểm xuống mà bạn không biết — vì chưa có ai kiểm tra đúng cách. Sprint 60 sẽ quét toàn bộ, tìm và giúp bạn gỡ từng điểm một.
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

          {/* Promo Column (Right) - Sprint 60 */}
          <aside className="w-full lg:w-[420px]">
             <div className="bg-white rounded-[2.5rem] border-2 border-indigo-100 shadow-2xl shadow-indigo-100 p-8 md:p-10 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl opacity-50 -mr-16 -mt-16" />
                
                <div className="inline-flex px-4 py-1.5 bg-indigo-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6 relative">
                   Sprint 60 - Gỡ điểm thông minh
                </div>
                
                <h2 className="text-2xl font-black font-montserrat text-gray-900 leading-tight mb-4 relative">
                  Luyện đúng chỗ — tối đa hóa điểm số trong 89 ngày còn lại
                </h2>
                <p className="text-xs font-bold text-gray-400 mb-8">
                   Cá nhân hóa theo đúng điểm yếu của bạn · Dùng đến 30/6/2026
                </p>

                <div className="flex items-center gap-4 mb-8">
                   <div className="flex flex-col">
                      <span className="text-4xl font-black font-montserrat text-gray-900">299k</span>
                      <div className="flex items-center gap-2">
                         <span className="text-sm text-gray-400 line-through">499k</span>
                         <span className="text-xs font-black text-red-500 uppercase">-40%</span>
                      </div>
                   </div>
                   <div className="ml-auto flex items-center gap-1.5 text-amber-500 px-4 py-1.5 bg-amber-50 rounded-xl">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-xs font-black">4.9*</span>
                   </div>
                </div>

                <div className="space-y-5 mb-10 text-left">
                   {[
                     "Phân tích điểm yếu toàn bộ chuyên đề Toán THPT — không chỉ Hàm số",
                     "Luyện đúng dạng Toán đang yếu — không lãng phí thời gian ôn chỗ đã vững",
                     "15 phút/ngày đúng trọng tâm — hiệu quả hơn làm trăm câu ngẫu nhiên",
                     "5 đợt thi thử VIP Chủ nhật — theo dõi điểm tăng từng tuần",
                     "Kho 10.000+ câu phân loại theo dạng — luyện thêm bất cứ lúc nào"
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4 items-start">
                        <div className="mt-0.5 h-4.5 w-4.5 shrink-0 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                           <Check className="h-3 w-3 stroke-[3.5]" />
                        </div>
                        <span className="text-[11.5px] font-medium text-gray-600 leading-relaxed">
                           {item}
                        </span>
                     </div>
                   ))}
                </div>

                <Link href="/pricing" className="w-full py-5 bg-[#0e56fa] text-white font-black rounded-2xl shadow-xl shadow-blue-200 transition-all hover:bg-blue-700 hover:scale-[1.01] active:scale-95 text-lg mb-6 flex items-center justify-center gap-3">
                   Bắt đầu Sprint 60
                   <ArrowRight className="h-5 w-5" />
                </Link>

                <div className="text-center">
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
                      Thanh toán 1 lần · Dùng đến 30/6 · Hoàn tiền 7 ngày
                   </p>
                   
                   <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-100">
                      <div className="flex flex-col gap-1.5">
                         <div className="flex items-center justify-center gap-1.5 text-gray-400">
                            <Users className="h-3.5 w-3.5" />
                            <span className="text-[10.5px] font-black uppercase tracking-tight">312</span>
                         </div>
                         <span className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wide">đã mua</span>
                      </div>
                      <div className="flex flex-col gap-1.5 border-l border-gray-100">
                         <div className="flex items-center justify-center gap-1.5 text-green-600">
                            <TrendingUp className="h-3.5 w-3.5" />
                            <span className="text-[10.5px] font-black uppercase tracking-tight">+1.4đ</span>
                         </div>
                         <span className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wide">tăng / 4 tuần</span>
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
