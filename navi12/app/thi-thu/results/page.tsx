"use client";

import { ArrowLeft, ArrowRight, ChevronRight, Check, AlertTriangle, ShieldCheck, ClipboardCheck, Zap, Target, Sparkles, Brain } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ExamResultsContent() {
  const searchParams = useSearchParams();
  const targetScore = searchParams.get("target") || "8.0";

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
                Đúng <span className="text-green-600">16/22 câu</span> · Mạnh hơn <span className="text-blue-600">83%</span> học sinh thi cùng đợt
              </p>
              <div className="grid grid-cols-2 sm:flex flex-wrap gap-2 gap-y-3">
                {[
                  { label: "Trắc nghiệm", val: "2.4/3.0", color: "text-green-500 bg-green-50" },
                  { label: "Đúng sai", val: "2.8/4.0", color: "text-blue-500 bg-blue-50" },
                  { label: "Điền đáp án", val: "1.8/3.0", color: "text-amber-500 bg-amber-50" }
                ].map(tag => (
                  <div key={tag.label} className={cn("px-4 py-2 rounded-xl border border-transparent text-[10px] font-black flex items-center gap-2 shadow-sm whitespace-nowrap", tag.color)}>
                    <span className="opacity-70">{tag.label}:</span>
                    <span className="text-sm">{tag.val}</span>
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

        {/* Analysis Heading Section - HIGH ATTENTION */}
        <div className="mb-12 px-2 text-left border-l-4 border-blue-600 pl-6">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#0e56fa] mb-4 block">PHÂN TÍCH MỤC TIÊU {targetScore} ĐIỂM</span>
          <h2 className="text-3xl md:text-5xl font-black font-montserrat text-gray-900 mb-6 tracking-tight leading-tight">
            Bạn cần thêm <span className="text-red-500">{(parseFloat(targetScore) - 7.0).toFixed(1)} điểm</span> nữa
          </h2>
          <p className="max-w-2xl text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
            Hệ thống đánh giá năng lực hiện tại của bạn đang đạt <span className="font-black text-gray-900">7.0 điểm</span>.
            Để chạm tới mục tiêu <span className="text-[#0e56fa] font-black">{targetScore}</span>, đây là lộ trình khắc phục các lỗ hổng đang làm mất nhiều điểm nhất của bạn:
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
                    <Link
                      href="/thi-thu/deep-analysis"
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-gray-900 hover:bg-black text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-gray-100"
                    >
                      {item.cta}
                      <ArrowRight className="h-4 w-4" />
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

        {/* Insights Alert Section - UNIFIED STYLE */}
        <div className="mb-20 px-2 text-left border-l-4 border-amber-400 pl-6">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-amber-500 mb-4 block">CẢNH BÁO TỪ HỆ THỐNG</span>
          <h2 className="text-3xl md:text-5xl font-black font-montserrat text-gray-900 mb-6 tracking-tight leading-tight">
            Và đây chỉ là những gì <span className="text-[#0e56fa]">bài thi này lộ ra được</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-3xl">
            Một đề 22 câu không thể kiểm tra hết toàn bộ chương trình. Trong chính chuyên đề Hàm số — còn 3 dạng khác bạn chưa gặp hôm nay. Và các chuyên đề như Tích phân, Mũ logarit, Số phức chỉ xuất hiện 1—2 câu — chưa đủ để biết bạn thực sự nắm hay chỉ may mắn làm đúng.
          </p>

          <div className="bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="bg-gray-50/50 rounded-3xl p-6 md:p-10 border border-gray-100 space-y-8">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block text-center md:text-left">DẠNG CHƯA ĐƯỢC KIỂM TRA ĐỦ:</span>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: 'Tích phân ứng dụng', count: 1 },
                  { name: 'Số phức', count: 1 },
                  { name: 'Mũ logarit VDC', count: 2 }
                ].map(item => (
                  <div key={item.name} className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-gray-100 text-sm font-bold text-gray-700 shadow-sm transition-transform hover:scale-[1.02]">
                    <span>{item.name}</span>
                    <span className="px-2 py-0.5 rounded-lg bg-gray-50 text-[10px] font-black text-gray-400">({item.count} câu)</span>
                  </div>
                ))}

                <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-red-50 border border-red-100 text-sm font-bold text-red-600 shadow-sm transition-transform hover:scale-[1.02]">
                  <AlertTriangle className="h-4 w-4" />
                  <span>Xác suất nâng cao</span>
                  <span className="px-2 py-0.5 rounded-lg bg-red-600 text-[10px] font-black text-white">(0 câu)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Roadmap CTA */}
        <div className="bg-[#0e56fa] p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 mb-8 shadow-2xl shadow-blue-200 text-left">
          <div className="text-white text-left">
            <h3 className="text-2xl font-extrabold font-montserrat mb-3">Xem lộ trình cá nhân hoá giúp tăng điểm tối đa dành cho bạn</h3>
            <p className="text-blue-100 text-xs font-bold opacity-80 max-w-md leading-relaxed">
              Cá nhân hóa theo đúng điểm yếu của bạn · 15 phút mỗi ngày · Cải thiện hiệu quả ngay sau 4 tuần ôn tập.
            </p>
          </div>
          <Link href="/pricing" className="whitespace-nowrap px-10 py-5 bg-white text-blue-600 font-black rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center">
            Đừng để điểm rơi →
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function ExamResults() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-black animate-pulse text-gray-300 uppercase tracking-widest">Đang tải kết quả...</div>}>
      <ExamResultsContent />
    </Suspense>
  );
}
