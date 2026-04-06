"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import { gsap } from "gsap";

interface TestItem {
  id: number;
  status: string;
  statusColor: string;
  title: string;
  date: string;
  meta?: string;
  stats?: string;
  buttonText?: string;
  score?: string;
  top?: string;
  avgScore?: string;
  linkText?: string;
  active: boolean;
}

interface LeaderboardRow {
  rank?: string;
  name?: string;
  location?: string;
  score?: number;
  top?: string;
  vdc?: string;
  isUser?: boolean;
  isDivider?: boolean;
}
export default function MockTestRoom() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.querySelectorAll(".animate-fade-in"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );
    }
  }, []);

  const tests: TestItem[] = [
    {
      id: 2,
      status: "Đang diễn ra",
      statusColor: "bg-blue-100 text-blue-600",
      title: "Đề thi thử số 2",
      date: "Chủ nhật 23/3/2026",
      meta: "40 câu · 90 phút",
      stats: "1.245 học sinh",
      buttonText: "Vào thi ngay",
      active: true
    },
    {
      id: 1,
      status: "Để đã qua · Làm lại",
      statusColor: "bg-gray-100 text-gray-500",
      title: "Đề thi thử số 1",
      date: "19/3/2026",
      stats: "1.245 học sinh",
      score: "7.0",
      top: "Top 17%",
      avgScore: "7.2",
      linkText: "Xem kết quả + phân tích →",
      active: false
    }
  ];

  const leaderboard: LeaderboardRow[] = [
    { rank: "#1", name: "Nguyễn Minh K.", location: "Hà Nội", score: 9.5, top: "Top 1%", vdc: "8/8 ✔" },
    { rank: "#2", name: "Trần Thùy A.", location: "TP.HCM", score: 9.25, top: "Top 1%", vdc: "7/8 ✔" },
    { rank: "#3", name: "Lê Hoàng Đ.", location: "Đà Nẵng", score: 9.0, top: "Top 2%", vdc: "7/8 ✔" },
    { isDivider: true },
    { rank: "#312", name: "Bạn", location: "", score: 7.0, top: "Top 17%", vdc: "3/8 câu", isUser: true },
    { isDivider: true },
    { rank: "#1.240", name: "—", location: "", score: 2.5, top: "—", vdc: "0/8" },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-white overflow-x-hidden pt-8 pb-20" ref={containerRef}>
      
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.05}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 fixed",
        )}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-12">
        {/* Header Section */}
        <div className="mb-16 border-l-4 border-[#0e56fa] pl-8 relative animate-fade-in text-left">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4 block">HỆ THỐNG PHÒNG THI THỬ</span>
          <h1 className="text-4xl md:text-5xl font-black font-montserrat tracking-tight text-gray-900 leading-[1.1] mb-6">
            Thi thử — <br /> <span className="text-blue-600">biết ngay mất điểm ở đâu</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
            Một bài thi không đủ biết chính xác bạn đang yếu ở đâu nhưng là bước đầu để NaviEdu dẫn bạn tới nơi bạn có thể gỡ điểm.
          </p>
        </div>

        {/* User Rank Card */}
        <div className="mb-16 animate-fade-in">
          <div className="w-fit bg-white border border-gray-100 rounded-3xl p-8 shadow-xl shadow-blue-100/20 backdrop-blur-sm">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 block">XẾP HẠNG CỦA BẠN</span>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-gray-900 font-montserrat tracking-tighter">#312</span>
              <span className="text-gray-400 font-bold text-sm">/ 1.245 học sinh</span>
            </div>
            <div className="mt-2 text-xs font-bold text-blue-500 uppercase tracking-widest">Top 17%</div>
          </div>
        </div>

        {/* Test Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 mb-20 animate-fade-in">
          {tests.map((test) => (
            <div 
              key={test.id}
              className={cn(
                "relative group overflow-hidden rounded-[2.5rem] border p-8 md:p-10 transition-all duration-300",
                test.active 
                  ? "bg-white border-blue-500 ring-2 ring-blue-500/20 shadow-2xl shadow-blue-100" 
                  : "bg-white border-gray-100 hover:shadow-xl hover:shadow-gray-100"
              )}
            >
              <div className="flex justify-between items-start mb-10">
                <span className={cn("px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest", test.statusColor)}>
                  {test.status}
                </span>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                    {test.active ? "Đang thi" : "Điểm TB"}
                  </span>
                  <span className={cn("text-2xl font-black font-montserrat", test.active ? "text-gray-900" : "text-gray-400")}>
                    {test.active ? (test.stats?.split(' ')[0] ?? "0") : (test.avgScore ?? "0")}
                  </span>
                  {test.active && <span className="text-[10px] font-bold text-gray-400 uppercase">học sinh</span>}
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-3xl font-black font-montserrat mb-3 text-gray-900">{test.title}</h3>
                <p className="text-gray-400 font-bold text-sm">
                  {test.date} {test.meta && `· ${test.meta}`}
                </p>
                {!test.active && test.score && (
                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-xl border border-green-100">
                      <span className="text-[10px] font-bold text-green-600 uppercase">Điểm của bạn:</span>
                      <span className="text-lg font-black text-green-700">{test.score}</span>
                    </div>
                    <span className="text-xs font-bold text-blue-500 uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-xl border border-blue-100">
                      {test.top}
                    </span>
                  </div>
                )}
              </div>

              {test.active ? (
                <Link href="/thi-thu/room" className="w-full rounded-2xl bg-[#0e56fa] py-5 text-lg font-bold text-white shadow-xl shadow-blue-200 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
                  <Play className="h-5 w-5 fill-white" />
                  {test.buttonText}
                </Link>
              ) : (
                <button className="text-blue-600 font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  {test.linkText}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Leaderboard Table Section */}
        <div className="animate-fade-in mb-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">BẢNG XẾP HẠNG - ĐỀ SỐ 1</h2>
            <div className="flex gap-2">
               <div className="h-2 w-2 rounded-full bg-blue-500"></div>
               <div className="h-2 w-2 rounded-full bg-gray-200"></div>
               <div className="h-2 w-2 rounded-full bg-gray-200"></div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white shadow-2xl shadow-gray-200/50">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-50 text-[10px] font-black uppercase tracking-widest text-gray-400">
                    <th className="px-8 py-6">HẠNG</th>
                    <th className="px-8 py-6">HỌC SINH</th>
                    <th className="px-8 py-6">ĐIỂM</th>
                    <th className="px-8 py-6">TOP %</th>
                    <th className="px-8 py-6">VDC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {leaderboard.map((row, idx) => (
                    row.isDivider ? (
                      <tr key={`divider-${idx}`} className="bg-gray-50/30">
                        <td colSpan={5} className="px-8 py-2 text-center text-gray-300 font-black tracking-widest">
                          ...
                        </td>
                      </tr>
                    ) : (
                      <tr 
                        key={idx} 
                        className={cn(
                          "transition-colors",
                          row.isUser ? "bg-blue-50/50" : "hover:bg-gray-50/50"
                        )}
                      >
                        <td className="px-8 py-6">
                          <span className={cn(
                            "text-sm font-black",
                            row.isUser ? "text-blue-600" : "text-gray-900"
                          )}>
                            {row.rank}
                          </span>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex flex-col">
                            <span className={cn(
                              "text-sm font-bold",
                              row.isUser ? "text-gray-900" : "text-gray-800"
                            )}>
                              {row.name}
                            </span>
                            {row.location && (
                              <span className="text-[10px] font-medium text-gray-400 uppercase tracking-tighter">
                                {`— ${row.location}`}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <span className={cn(
                            "text-base font-black font-montserrat",
                            row.isUser ? "text-blue-600" : "text-gray-900"
                          )}>
                            {row.score?.toFixed(idx === 1 ? 2 : 1) ?? "0"}
                          </span>
                        </td>
                        <td className="px-8 py-6">
                          <span className={cn(
                            "px-3 py-1 rounded-full text-[10px] font-bold uppercase",
                            row.top?.includes('1%') ? "bg-green-100 text-green-600" : 
                            row.top?.includes('2%') ? "bg-yellow-100 text-yellow-600" :
                            row.isUser ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-400"
                          )}>
                            {row.top}
                          </span>
                        </td>
                        <td className="px-8 py-6">
                           <span className={cn(
                             "text-xs font-bold",
                             row.isUser ? "text-blue-400" : "text-gray-400"
                           )}>
                             {row.vdc}
                           </span>
                        </td>
                      </tr>
                    )
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
