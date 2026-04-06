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
          <div className="border-l-4 border-[#0e56fa] pl-8 relative text-left">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4 block">KẾT QUẢ TỔNG QUÁT</span>
            <h1 className="text-4xl md:text-5xl font-black font-montserrat tracking-tight text-gray-900 leading-[1.1]">
              Kết quả <span className="text-[#0e56fa]">của bạn</span>
            </h1>
            <p className="max-w-xl text-lg text-gray-500 font-medium leading-relaxed mt-6">
              Bản phân tích đa chiều giúp bạn hiểu rõ mức độ thực tế so với mục tiêu đề ra.
            </p>
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

        <div className="mb-16 border-l-4 border-blue-600 pl-8 relative animate-fade-in text-left">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4 block">PHÂN TÍCH MỤC TIÊU {targetScore} ĐIỂM</span>
          <h2 className="text-4xl md:text-6xl font-black font-montserrat text-gray-900 mb-6 tracking-tight leading-[1.1]">
            Bạn có thể <span className="text-blue-600">"ăn trọn" {(parseFloat(targetScore) - 6.5).toFixed(1)} điểm</span> <br /> nữa từ chuyên đề Hàm số
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
              skill: "PHÂN TÍCH CỰC TRỊ VDC · TÌM GTLN/GTNN",
              score: "-1.5đ",
              detail: "SAI 3/4 CÂU VDC",
              progress: 35,
              status: "ĐIỂM YẾU NGHIÊM TRỌNG CẦN ƯU TIÊN",
              scoreColor: "text-red-600",
              color: "bg-red-500",
              isCritical: true,
              suggestion: "Đánh giá sâu chuyên đề Hàm số để biết chính xác YCCĐ nào cần luyện → luyện đúng dạng đang kéo điểm xuống",
              buttonText: "Test chuyên đề",
              buttonHref: "/thi-thu/deep-analysis",
              buttonColor: "bg-red-600 hover:bg-red-700",
              suggestionBg: "bg-red-50/30",
              suggestionText: "text-gray-700 text-left",
              tagBg: "bg-red-100",
              tagText: "text-red-600"
            },
            {
              title: "Hình học không gian",
              skill: "KHOẢNG CÁCH ĐIỂM ĐẾN MẶT PHẲNG",
              score: "-1.0đ",
              detail: "SAI 2/3 CÂU",
              progress: 52,
              status: "CẦN LUYỆN TẬP THÊM",
              scoreColor: "text-amber-600",
              color: "bg-amber-500",
              isCritical: false,
              suggestion: "Bạn được miễn phí 1 lần Test chuyên đề — dùng cho Hàm số trước. Unlock Hình học không gian khi nâng cấp Sprint 60",
              buttonText: "Unlock ngay",
              buttonHref: "/pricing",
              buttonColor: "bg-amber-600 hover:bg-amber-700",
              suggestionBg: "bg-amber-50/30",
              suggestionText: "text-gray-700 text-left",
              tagBg: "bg-amber-100",
              tagText: "text-amber-600"
            },
            {
              title: "Xác suất",
              skill: "TỔ HỢP XÁC SUẤT CÓ ĐIỀU KIỆN",
              score: "-0.5đ",
              detail: "SAI 1/2 CÂU",
              progress: 60,
              status: "CẦN KIỂM TRA THÊM",
              scoreColor: "text-amber-600",
              color: "bg-amber-500",
              isCritical: false,
              suggestion: "Chuyên đề này cần thêm dữ liệu để đánh giá chính xác. Đề thi chỉ có 2 câu — chưa đủ. Unlock để Test đầy đủ.",
              buttonText: "",
              buttonHref: "",
              buttonColor: "",
              suggestionBg: "bg-amber-50/30",
              suggestionText: "text-gray-700 text-left",
              tagBg: "bg-amber-100",
              tagText: "text-amber-600"
            }
          ].map((item, i) => (
            <div
              key={i}
              className={cn(
                "bg-white rounded-[2.5rem] border transition-all duration-300 relative overflow-hidden",
                item.isCritical
                  ? "border-red-100 shadow-xl shadow-red-100/20"
                  : "border-gray-100 shadow-sm hover:shadow-md"
              )}
            >
              <div className="p-8 md:p-10 flex flex-col gap-6">
                {/* Header Row: Title & Score */}
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-2">
                    {item.isCritical && (
                      <div className="flex items-center gap-2 px-2.5 py-1 bg-red-500 text-white rounded-lg w-fit">
                        <Zap className="h-3 w-3 fill-white" />
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] leading-none">TRỌNG TÂM</span>
                      </div>
                    )}
                    <h3 className="text-3xl font-black font-montserrat text-gray-900 tracking-tight">{item.title}</h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">{item.skill}</p>
                  </div>
                  <div className="text-right">
                    <span className={cn("text-4xl font-black font-montserrat leading-none block", item.scoreColor)}>{item.score}</span>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2 block">{item.detail}</span>
                  </div>
                </div>

                {/* Progress Bar & Mastery Status */}
                <div className="flex flex-col gap-3">
                  <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden">
                    <div
                      className={cn("h-full transition-all duration-1000", item.color)}
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-[0.3em]">
                    <span className="text-gray-400">MỨC THÀNH THẠO HIỆN TẠI ~{item.progress}%</span>
                    <span className={cn("font-black", item.scoreColor)}>
                      — MASTERY ~{item.progress}% — {item.status}
                    </span>
                  </div>
                </div>

                {/* Suggestion Box - CLEAN REDESIGN */}
                <div className={cn("mt-2 p-6 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6 transition-all border border-gray-50", item.suggestionBg)}>
                  <p className={cn("text-[13px] font-bold leading-relaxed max-w-2xl italic opacity-90", item.suggestionText)}>
                    <span className={cn("font-black uppercase tracking-widest mr-2", item.tagText)}>Gợi ý:</span>
                    {item.suggestion}
                  </p>
                  {item.buttonText && (
                    <Link 
                      href={item.buttonHref}
                      className={cn("whitespace-nowrap px-8 py-3.5 rounded-2xl text-white text-[11px] font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-900/5", item.buttonColor)}
                    >
                      {item.buttonText} →
                    </Link>
                  )}
                </div>
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

        {/* Final Action Section */}
        <div className="flex flex-col gap-6 mb-12">
          {/* Primary CTA: Deep Analysis */}
          <div className="bg-[#0e56fa] p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-200 text-left">
            <div className="text-white text-left">
              <h3 className="text-2xl md:text-3xl font-black font-montserrat mb-4 tracking-tight leading-loose">
                Đánh giá chuyên sâu chuyên đề Hàm số — Miễn phí (1 lần)
              </h3>
              <p className="text-blue-100 text-sm font-bold opacity-90 max-w-xl leading-relaxed">
                12 câu · ~8 phút · Hệ thống xác định chính xác bạn đang yếu ở YCCĐ nào, mức nào — từ đó biết cần luyện gì để gỡ điểm hiệu quả nhất.
              </p>
            </div>
            <Link href="/thi-thu/deep-analysis" className="whitespace-nowrap px-10 py-5 bg-white text-blue-600 font-black rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center text-base">
              Đừng để điểm rơi →
            </Link>
          </div>

          {/* Secondary CTA: Roadmap */}
          <Link
            href="/pricing"
            className="w-full py-6 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-md transition-all text-center flex items-center justify-center gap-2 group"
          >
            <span className="text-gray-500 font-bold tracking-wide group-hover:text-blue-600 transition-colors">
              Xem lộ trình gỡ điểm Sprint 60 →
            </span>
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
