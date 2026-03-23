"use client";

import { ArrowLeft, ArrowRight, ChevronRight, Check, AlertTriangle, ShieldCheck, ClipboardCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ExamResults() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50/30 overflow-x-hidden pt-8 pb-20">
      
      <div className="mx-auto w-full max-w-5xl px-4 md:px-12">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-6">
           <div className="text-left">
             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">ĐỀ SỐ 1 · 19/3/2026</span>
             <h1 className="text-4xl md:text-5xl font-black font-montserrat tracking-tight text-gray-900">Kết quả của bạn</h1>
           </div>
           <div className="flex items-center gap-3 w-full md:w-auto">
             <Link href="/thi-thu/room" className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 border border-gray-100 bg-white rounded-2xl text-gray-400 font-bold hover:bg-gray-50 transition-colors text-sm">
                <ArrowLeft className="h-4 w-4" />
                Phòng thi
             </Link>
             <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-[#0e56fa] text-white font-bold rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all hover:scale-105 text-sm">
                Tải báo cáo chi tiết ↓
             </button>
           </div>
        </div>

        {/* Summary Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
           {/* Score Card */}
           <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex items-center gap-8 group hover:shadow-md transition-shadow">
              <div className="relative h-28 w-28 shrink-0">
                 <svg className="h-full w-full" viewBox="0 0 100 100">
                    <circle className="text-gray-100 stroke-current" strokeWidth="8" fill="transparent" r="42" cx="50" cy="50" />
                    <circle className="text-green-500 stroke-current" strokeWidth="8" strokeDasharray="264" strokeDashoffset={264 * (1 - 0.7)} strokeLinecap="round" fill="transparent" r="42" cx="50" cy="50" transform="rotate(-90 50 50)" />
                 </svg>
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-black font-montserrat text-gray-900 leading-none">7.0</span>
                    <span className="text-[10px] font-bold text-gray-400">/10</span>
                 </div>
              </div>
              <div className="flex-1 text-left">
                 <p className="text-sm font-bold text-gray-800 leading-relaxed mb-4">
                    Đúng <span className="text-green-600">28/40 câu</span> · Mạnh hơn <span className="text-blue-600">83%</span> học sinh thi cùng đợt
                 </p>
                 <div className="grid grid-cols-2 sm:flex flex-wrap gap-2 gap-y-3">
                    {[
                      { label: "NB", val: "10/10", color: "text-green-500 bg-green-50" },
                      { label: "TH", val: "8/10", color: "text-green-500 bg-green-50" },
                      { label: "VD", val: "7/10", color: "text-amber-500 bg-amber-50" },
                      { label: "VDC", val: "3/10", color: "text-red-500 bg-red-50" }
                    ].map(tag => (
                      <div key={tag.label} className={cn("px-3 py-1.5 rounded-xl border border-transparent text-[10px] font-black flex items-center gap-1.5 shadow-sm", tag.color)}>
                         <span>{tag.label}:</span>
                         <span>{tag.val}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Rank Card */}
           <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center group hover:bg-white transition-all text-left">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Xếp hạng</span>
              <div className="flex items-baseline gap-2 mb-2">
                 <span className="text-6xl font-black font-montserrat text-gray-900 tracking-tighter">#312</span>
                 <span className="text-gray-400 font-bold text-sm">/ 1.840</span>
              </div>
              <p className="text-xs font-bold text-gray-400 mb-6 tracking-wide">trong số 1.840 học sinh thi</p>
              <div className="px-6 py-2 rounded-full bg-blue-100 text-[#0e56fa] text-xs font-black uppercase tracking-widest shadow-lg shadow-blue-100/50 self-center">
                 Top 17%
              </div>
           </div>
        </div>

        {/* Review Button Section */}
        <div className="mb-16">
          <Link href="/thi-thu/review" className="w-full flex items-center justify-between p-6 bg-white border border-blue-100 rounded-[1.5rem] shadow-sm hover:shadow-md transition-shadow group">
             <div className="flex items-center gap-4 text-left">
               <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <ClipboardCheck className="h-6 w-6" />
               </div>
               <div className="flex flex-col">
                  <span className="text-base font-extrabold font-montserrat text-gray-900">Xem chi tiết bài làm đúng/sai</span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Kiểm tra lại từng câu hỏi để tối ưu hóa ôn tập</span>
               </div>
             </div>
             <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <ChevronRight className="h-5 w-5" />
             </div>
          </Link>
        </div>

        {/* Weak Points Section - CLEAN & PROFESSIONAL */}
        <div className="mb-6 px-2 text-left">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-3 block">ĐÂY LÀ ĐIỂM SỐ BẠN ĐANG ĐỂ MẤT</span>
          <p className="max-w-xl text-gray-500 font-medium leading-relaxed">
            Hệ thống phân tích thấy 3 dạng Toán dưới đây chiếm 3 điểm trong bài thi của bạn. Hãy ưu tiên khắc phục <span className="text-red-500 font-bold underline decoration-red-100">chuyên đề yếu nhất</span> trước.
          </p>
        </div>

        <div className="space-y-6 mb-20 text-left">
          {[
            {
              title: "Hàm số",
              skill: "Phân tích cực trị — Vận dụng cao",
              score: "-1.5đ",
              detail: "sai 3/4 câu VDC",
              progress: 35,
              status: "YẾU NHẤT - CẦN ƯU TIÊN KHẮC PHỤC",
              color: "bg-red-500",
              isCritical: true,
              cta: "Bắt đầu đánh giá sâu"
            },
            {
              title: "Hình học không gian",
              skill: "Khoảng cách điểm đến mặt phẳng",
              score: "-1.0đ",
              detail: "sai 2/3 câu",
              progress: 52,
              status: "CẦN THÊM LUYỆN TẬP",
              color: "bg-orange-400"
            },
            {
              title: "Xác suất",
              skill: "Tổ hợp xác suất có điều kiện",
              score: "-0.5đ",
              detail: "sai 1/2 câu",
              progress: 60,
              status: "CẦN KIỂM TRA THÊM",
              color: "bg-amber-600"
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className={cn(
                "bg-white rounded-[2.5rem] border transition-all duration-300 relative overflow-hidden",
                item.isCritical 
                  ? "border-red-500 shadow-xl shadow-red-100/50" 
                  : "border-gray-100 shadow-sm hover:shadow-md"
              )}
            >
               <div className="p-8 md:p-10 flex flex-col gap-6">
                  {/* Top Row: Title, Badge, and Score */}
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-2 text-left">
                       {item.isCritical && (
                          <span className="inline-flex items-center gap-1.5 w-fit px-3 py-1 bg-red-500 text-white rounded-lg text-[10px] font-black uppercase tracking-widest mb-1">
                             <Zap className="h-3 w-3 fill-white" />
                             Trọng tâm
                          </span>
                       )}
                       <h3 className={cn("font-montserrat text-gray-900 leading-none", item.isCritical ? "text-3xl font-black" : "text-2xl font-extrabold")}>
                         {item.title}
                       </h3>
                       <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.skill}</p>
                    </div>
                    <div className="flex flex-col items-end shrink-0">
                       <span className="text-4xl font-black font-montserrat text-red-500 leading-none">{item.score}</span>
                       <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">{item.detail}</span>
                    </div>
                  </div>

                  {/* Progress Bar Area */}
                  <div className="flex flex-col gap-3 text-left">
                    <div className="h-2.5 w-full bg-gray-50 rounded-full overflow-hidden">
                      <div 
                        className={cn("h-full transition-all duration-700", item.color)} 
                        style={{ width: `${item.progress}%` }} 
                      />
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.1em] text-gray-400">
                      <span>Mức thành thạo hiện tại ~{item.progress}%</span>
                      <span className={cn("font-black", item.isCritical ? "text-red-500" : "text-gray-900")}>— {item.status}</span>
                    </div>
                  </div>

                  {/* Refined CTA Link for Critical Weakness */}
                  {item.cta && (
                    <div className="pt-2 flex flex-col items-center gap-4">
                       <Link href="/thi-thu/deep-analysis" className="inline-flex items-center justify-center gap-2 px-10 py-3.5 bg-[#0e56fa] text-white font-black rounded-2xl shadow-xl shadow-blue-100 hover:bg-blue-700 hover:shadow-blue-200 transition-all hover:scale-105 active:scale-95 text-sm md:text-base">
                          {item.cta}
                          <ArrowRight className="h-5 w-5" />
                       </Link>
                       <p className="text-[10px] font-bold text-blue-300 uppercase tracking-[0.2em] opacity-80">
                          12 CÂU — 8 PHÚT · TỰ ĐỘNG CHỈ RA LỖ HỔNG KIẾN THỨC
                       </p>
                    </div>
                  )}
               </div>
            </div>
          ))}
        </div>

        {/* Insights Alert Section - Simplified & Cleaner */}
        <div className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm mb-12 relative overflow-hidden text-left">
           <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500" />
           <h2 className="text-2xl font-extrabold font-montserrat text-gray-900 mb-6">
              Và đây chỉ là những gì <span className="text-[#0e56fa]">bài thi này lộ ra được</span>
           </h2>
           <p className="text-gray-500 font-medium leading-relaxed mb-8 max-w-2xl text-left">
              Một đề 40 câu không thể kiểm tra hết toàn bộ chương trình. Trong chính chuyên đề Hàm số — còn 3 dạng khác bạn chưa gặp hôm nay. Và các chuyên đề như Tích phân, Mũ logarit, Số phức chỉ xuất hiện 1—2 câu — chưa đủ để biết bạn thực sự nắm hay chỉ may mắn làm đúng.
           </p>

           <div className="bg-gray-50/50 rounded-2xl p-8 border border-gray-100 space-y-6 text-left">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">DẠNG CHƯA ĐƯỢC KIỂM TRA ĐỦ:</span>
              <div className="flex flex-wrap gap-2">
                 {['Tích phân ứng dụng (1 câu)', 'Số phức (1 câu)', 'Mũ logarit VDC (2 câu)'].map(tag => (
                   <span key={tag} className="px-4 py-2 rounded-xl bg-white border border-gray-100 text-[10px] font-bold text-gray-700 shadow-sm">
                     {tag}
                   </span>
                 ))}
                 <span className="px-4 py-2 rounded-xl bg-white border border-red-100 text-[10px] font-bold text-red-500 shadow-sm">
                    Xác suất nâng cao (0 câu)
                 </span>
              </div>
           </div>
        </div>

        {/* Final Roadmap CTA */}
        <div className="bg-[#0e56fa] p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 mb-8 shadow-2xl shadow-blue-200 text-left">
           <div className="text-white text-left">
              <h3 className="text-2xl font-extrabold font-montserrat mb-3">Xem lộ trình gỡ điểm Sprint 60</h3>
              <p className="text-blue-100 text-xs font-bold opacity-80 max-w-md leading-relaxed">
                Cá nhân hóa theo đúng điểm yếu của bạn · 15 phút mỗi ngày · Cải thiện hiệu quả ngay sau 4 tuần ôn tập.
              </p>
           </div>
           <Link href="/pricing" className="whitespace-nowrap px-10 py-5 bg-white text-blue-600 font-black rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center">
              Khám phá ngay →
           </Link>
        </div>
      </div>
    </main>
  );
}
