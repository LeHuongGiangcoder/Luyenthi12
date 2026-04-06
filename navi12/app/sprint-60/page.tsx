"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  BarChart3,
  Calendar,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Flag,
  Target,
  TrendingUp,
  Zap,
  Clock,
  Star,
  ArrowRight,
  LayoutDashboard,
  ClipboardList,
  Sparkles,
  Flame,
  Play
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";

// Mock Data for Overall Progress
const topicsMastery = [
  { name: "Hàm số", value: 85, potential: 1.5 },
  { name: "Mũ - Log", value: 62, potential: 1.0 },
  { name: "Nguyên hàm", value: 45, potential: 2.0 },
  { name: "Oxyz", value: 78, potential: 0.5 },
  { name: "Lượng giác", value: 30, potential: 2.5 },
  { name: "Dãy số", value: 55, potential: 1.2 },
  { name: "Hình học KG", value: 40, potential: 1.8 },
  { name: "Số phức", value: 90, potential: 0.2 },
  { name: "Xác suất", value: 70, potential: 0.8 },
  { name: "Thống kê", value: 82, potential: 0.4 },
  { name: "Vecto", value: 50, potential: 1.5 },
  { name: "Đại số", value: 65, potential: 1.0 },
];

export default function Sprint60() {
  const [activeTab, setActiveTab] = useState<"tasks" | "progress">("tasks");
  const [hoveredTopic, setHoveredTopic] = useState<any>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnterTooltip = (topic: any) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setHoveredTopic(topic);
  };

  const handleMouseLeaveTooltip = () => {
    closeTimerRef.current = setTimeout(() => {
      setHoveredTopic(null);
    }, 100);
  };

  const [expandedMetric, setExpandedMetric] = useState<string | null>("gain");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        ".animate-fade-in",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );
    }
  }, []);

  // Logic tính ngày countdown (Mock: 20/06/2026)
  const targetDate = new Date("2026-06-20");
  const today = new Date();
  const diffTime = Math.abs(targetDate.getTime() - today.getTime());
  const daysUntilExam = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const dateStr = today.toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' });

  // Mock Data for Today's Tasks
  const todayTasks = [
    {
      id: 1,
      topic: "Hàm số",
      name: "Tìm GTLN/GTNN có điều kiện",
      desc: "Đây là YCCĐ đang kéo điểm xuống nhiều nhất",
      stats: "6 câu · ~12 phút",
      mastery: 18,
      tag: "VDC",
      path: "/luyen-tap/ham-so"
    },
    {
      id: 2,
      topic: "Hàm số",
      name: "Phân tích cực trị hàm hợp",
      desc: "Hàm số",
      stats: "4 câu · ~8 phút",
      mastery: 22,
      tag: "VDC",
      path: "/luyen-tap/ham-so"
    },
    {
      id: 3,
      topic: "Hàm số",
      name: "Khoảng đơn điệu hàm phân thức",
      desc: "Hàm số",
      stats: "4 câu · ~8 phút",
      mastery: 45,
      tag: "VD",
      path: "/luyen-tap/ham-so"
    }
  ];

  return (
    <main className="min-h-screen bg-[#fafbff] pt-24 pb-20 overflow-x-hidden" ref={containerRef}>
      <div className="mx-auto w-full max-w-7xl px-4 md:px-12">

        {/* Standardized Header Section */}
        <div className="mb-10 border-l-4 border-[#0e56fa] pl-8 relative animate-fade-in text-left">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4 block">LỘ TRÌNH CHIẾN THUẬT SPRINT 60</span>
          <h1 className="text-4xl md:text-5xl font-black font-montserrat tracking-tight text-gray-900 leading-[1.1] mb-6">
            Lộ trình <span className="text-[#0e56fa]">về đích</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-3xl">
             Chào Giang, hôm nay chúng ta sẽ bắt đầu gỡ <b>0.7đ</b> thâm hụt. Hệ thống đã chuẩn bị sẵn các câu học phù hợp nhất.
          </p>
        </div>

        {/* Master Journey Progress Bar - Stacked & Full Width Layout */}
        <div className="mb-16 w-full bg-white p-8 pb-12 rounded-[2.5rem] border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] relative group transition-all animate-fade-in text-left">
          <div className="flex items-center justify-between mb-10 relative z-10">
            <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">Hành trình cá nhân</span>
            <div className="flex items-center gap-2 bg-emerald-50/50 px-3 py-1 rounded-full border border-emerald-100/30">
              <TrendingUp className="h-3 w-3 text-emerald-600" />
              <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">+1.2đ</span>
            </div>
          </div>

          <div className="relative mt-8 mb-2 px-2">
            <div className="h-2.5 w-full bg-gray-50 rounded-full border border-gray-100 relative overflow-hidden">
               <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "40%" }}
                  transition={{ duration: 1.8, ease: "circOut", delay: 0.3 }}
                  className="absolute top-0 left-0 h-full bg-[#0e56fa] rounded-full shadow-[0_2px_10px_rgba(14,86,250,0.2)]"
               />
            </div>

            {/* Goal Flag */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 flex flex-col items-center">
               <Flag className="h-4 w-4 text-[#0e56fa] fill-current shadow-lg" />
            </div>

            {/* Current Status Bubble Only */}
            <motion.div
               initial={{ left: 0, opacity: 0 }}
               animate={{ left: "40%", opacity: 1 }}
               transition={{ duration: 1.8, ease: "circOut", delay: 0.3 }}
               className="absolute top-[-10px] -translate-x-1/2 flex flex-col items-center pointer-events-none"
            >
               <div className="bg-[#0e56fa] px-3.5 py-1.5 rounded-xl">
                  <span className="text-sm font-black font-montserrat text-white leading-none">7.4</span>
               </div>
            </motion.div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center p-1.5 bg-gray-100/50 rounded-[2rem] w-fit mb-12 border border-gray-200/50 animate-fade-in overflow-hidden">
          <button
            onClick={() => setActiveTab("tasks")}
            className={cn(
              "flex items-center gap-3 px-8 py-4 rounded-[1.6rem] font-black text-sm uppercase tracking-widest transition-all",
              activeTab === "tasks" ? "bg-white text-blue-600 shadow-lg shadow-blue-100" : "text-gray-400 hover:text-gray-600"
            )}
          >
            <ClipboardList className="h-4 w-4" />
            Nhiệm vụ hôm nay
          </button>
          <button
            onClick={() => setActiveTab("progress")}
            className={cn(
              "flex items-center gap-3 px-8 py-4 rounded-[1.6rem] font-black text-sm uppercase tracking-widest transition-all",
              activeTab === "progress" ? "bg-white text-blue-600 shadow-lg shadow-blue-100" : "text-gray-400 hover:text-gray-600"
            )}
          >
            <BarChart3 className="h-4 w-4" />
            Tiến độ tổng quan
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "tasks" ? (
            <motion.div
              key="tasks"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col gap-8 animate-fade-in"
            >
              {/* Header Info */}
              <div className="flex flex-col gap-1 text-left px-2">
                <p className="text-sm font-medium text-gray-500 italic">
                  {dateStr} · Còn <span className="text-red-500 font-black tracking-tight">{daysUntilExam} ngày</span> · Hệ thống đã chọn sẵn 3 nhiệm vụ quan trọng nhất hôm nay
                </p>
              </div>

              {/* Subheader explaination */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
                <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] flex items-center gap-2">
                  <Flame className="h-3 w-3 text-orange-500 fill-orange-500 animate-pulse" />
                  3 NHIỆM VỤ HÔM NAY
                </h2>
              </div>

              {/* Primary Task (Card Task 1) */}
              {todayTasks.filter(t => t.id === 1).map(task => (
                <div key={task.id} className="relative bg-[#0e56fa] rounded-[2.5rem] p-10 text-white overflow-hidden shadow-2xl shadow-blue-200 group text-left">
                  <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100">NHIỆM VỤ 1 · ƯU TIÊN CAO NHẤT</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black font-montserrat tracking-tight leading-tight">
                          {task.topic} – {task.name}
                        </h3>
                        <p className="text-blue-50 font-medium text-base max-w-xl leading-relaxed">
                          {task.stats} · Đây là YCCĐ đang kéo điểm xuống nhiều nhất.
                        </p>
                      </div>

                      {/* Circle Mastery */}
                      <div className="relative h-24 w-24 shrink-0">
                        <svg className="h-full w-full -rotate-90">
                          <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="transparent" />
                          <motion.circle
                            initial={{ strokeDasharray: "0 251.32" }}
                            animate={{ strokeDasharray: `${(task.mastery / 100) * 251.32} 251.32` }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                            cx="48" cy="48" r="40" stroke="white" strokeWidth="6" fill="transparent" strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-xl font-black font-montserrat leading-none">{task.mastery}%</span>
                          <span className="text-[8px] font-black uppercase tracking-widest opacity-60 mt-1">mastery</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-10 relative h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "35%" }}
                        transition={{ duration: 1.2, delay: 0.8 }}
                        className="h-full bg-white rounded-full"
                      />
                    </div>

                    <Link
                      href={task.path}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0e56fa] hover:scale-105 active:scale-95 rounded-2xl font-black text-sm transition-all shadow-xl shadow-blue-900/20"
                    >
                      Luyện ngay <ArrowRight className="h-4 w-4 stroke-[3px]" />
                    </Link>
                  </div>
                </div>
              ))}

              {/* Secondary Tasks Grid (Task 2 & 3) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {todayTasks.filter(t => t.id !== 1).map(task => (
                  <div key={task.id} className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl shadow-gray-200/20 hover:shadow-2xl transition-all group flex flex-col text-left">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex flex-col gap-2 min-w-0">
                        <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Nhiệm vụ {task.id}</span>
                        <h4 className="text-xl font-black font-montserrat text-gray-900 group-hover:text-[#0e56fa] transition-colors leading-tight truncate">
                          {task.topic} – {task.name}
                        </h4>
                        <span className="text-xs font-semibold text-gray-400 italic shrink-0">{task.stats}</span>
                      </div>
                      <Link
                        href={task.path}
                        className="w-11 h-11 bg-[#0e56fa] text-white rounded-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-lg shadow-blue-200 shrink-0"
                      >
                        <ArrowRight className="h-5 w-5 stroke-[3px]" />
                      </Link>
                    </div>

                    <div className="mt-auto">
                      <div className="h-1.5 w-full bg-gray-50 rounded-full mb-3 overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${task.mastery}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className={cn("h-full rounded-full", task.id === 2 ? "bg-red-500" : "bg-orange-500")}
                        />
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        Mastery {task.mastery}% — {task.id === 2 ? "cần luyện ngay" : "cần cải thiện"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Tip Box */}
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-gray-100 flex items-center gap-8 shadow-sm text-left">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-xl shadow-blue-100/50 shrink-0 border border-blue-50/50 group hover:scale-110 transition-transform">
                  <Clock className="h-7 w-7 group-hover:rotate-12 transition-transform" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-black text-gray-900 font-montserrat tracking-tight leading-none">Sau khi xong 3 nhiệm vụ hôm nay</p>
                  <p className="text-base font-medium text-gray-500 leading-relaxed italic opacity-80">
                    Hệ thống sẽ đề xuất Test lại năng lực chuyên đề Hàm số để đo mức độ thấu hiểu (Mastery) mới nhất của bạn.
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="progress"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 animate-fade-in"
            >
              {/* Sidebar Metrics Intelligence */}
              <div className="lg:col-span-4 flex flex-col gap-6 h-full text-left">
                <div className="bg-white p-2 rounded-[3.5rem] border border-gray-100 shadow-xl shadow-gray-200/20 h-full flex flex-col">
                  <div className="p-10 flex flex-col gap-4">
                    <span className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Hệ thống phân tích dự đoán</span>
                    <h3 className="text-2xl font-black font-montserrat text-gray-900 leading-tight">Sprint Indepth Insight</h3>
                  </div>

                  <div className="flex-1 flex flex-col gap-2 p-2 px-4 pb-4">
                    {/* Metric: Dự báo điểm */}
                    <div
                      className={cn(
                        "rounded-[2.5rem] border transition-all cursor-pointer group overflow-hidden",
                        expandedMetric === "forecast" ? "bg-blue-50/30 border-blue-200" : "bg-white border-transparent hover:bg-gray-50"
                      )}
                      onClick={() => setExpandedMetric(expandedMetric === "forecast" ? null : "forecast")}
                    >
                      <div className="p-8 flex items-center justify-between">
                        <div className="flex items-center gap-5">
                          <div className="h-12 w-12 rounded-2xl bg-gray-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center text-gray-400 transition-colors shadow-sm">
                            <TrendingUp className="h-6 w-6" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Dự báo điểm</span>
                            <span className="text-2xl font-black text-gray-900 font-montserrat tracking-tighter">9.2 — 9.4</span>
                          </div>
                        </div>
                        <ArrowRight className={cn("h-5 w-5 text-gray-300 transition-transform", expandedMetric === "forecast" && "rotate-90")} />
                      </div>
                      <AnimatePresence>
                        {expandedMetric === "forecast" && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-8 pb-8 pt-0 overflow-hidden">
                            <div className="pt-6 border-t border-blue-100 flex flex-col gap-4">
                              <p className="text-sm font-medium text-blue-800/70 leading-relaxed italic">
                                Giữ vững phong độ hiện tại, bạn dự kiến sẽ chạm mốc <b className="text-blue-900">9.2đ</b> vào ngày <b>15/05</b>.
                              </p>
                              <div className="flex items-center gap-3 bg-blue-100/40 p-4 rounded-2xl">
                                <Clock className="h-4 w-4 text-blue-600" />
                                <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest">Thời gian còn: 34 ngày</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Metric: Gỡ được */}
                    <div
                      className={cn(
                        "rounded-[2.5rem] border transition-all cursor-pointer group overflow-hidden",
                        expandedMetric === "gain" ? "bg-green-50/30 border-green-200" : "bg-white border-transparent hover:bg-gray-50"
                      )}
                      onClick={() => setExpandedMetric(expandedMetric === "gain" ? null : "gain")}
                    >
                      <div className="p-8 flex items-center justify-between">
                        <div className="flex items-center gap-5">
                          <div className="h-12 w-12 rounded-2xl bg-gray-100 group-hover:bg-green-600 group-hover:text-white flex items-center justify-center text-gray-400 transition-colors shadow-sm">
                            <TrendingUp className="h-6 w-6" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Đã gỡ được</span>
                            <span className="text-2xl font-black text-green-600 font-montserrat tracking-tighter">+1.2đ</span>
                          </div>
                        </div>
                        <ArrowRight className={cn("h-5 w-5 text-gray-300 transition-transform", expandedMetric === "gain" && "rotate-90")} />
                      </div>
                      <AnimatePresence>
                        {expandedMetric === "gain" && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-8 pb-8 pt-0 overflow-hidden">
                            <div className="pt-6 border-t border-green-100 flex flex-col gap-3">
                              {[
                                { name: "Hàm số", recovery: "+0.5đ", date: "Hôm qua" },
                                { name: "Mũ - Log", recovery: "+0.4đ", date: "Hôm qua" },
                                { name: "Số phức", recovery: "+0.3đ", date: "12/03" }
                              ].map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between p-4 bg-white/50 rounded-2xl border border-green-100/50 shadow-sm hover:border-green-300 transition-all">
                                  <div className="flex flex-col gap-0.5">
                                    <span className="text-[13px] font-black text-gray-700">{item.name}</span>
                                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{item.date}</span>
                                  </div>
                                  <span className="text-[13px] font-black text-green-600">{item.recovery}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Metric: Mục tiêu còn */}
                    <div
                      className={cn(
                        "rounded-[2.5rem] border transition-all cursor-pointer group overflow-hidden",
                        expandedMetric === "target" ? "bg-orange-50/30 border-orange-200" : "bg-white border-transparent hover:bg-gray-50"
                      )}
                      onClick={() => setExpandedMetric(expandedMetric === "target" ? null : "target")}
                    >
                      <div className="p-8 flex items-center justify-between">
                        <div className="flex items-center gap-5">
                          <div className="h-12 w-12 rounded-2xl bg-gray-100 group-hover:bg-orange-600 group-hover:text-white flex items-center justify-center text-gray-400 transition-colors shadow-sm">
                            <Target className="h-6 w-6" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Mục tiêu còn</span>
                            <span className="text-2xl font-black text-blue-600 font-montserrat tracking-tighter">1.5đ</span>
                          </div>
                        </div>
                        <ArrowRight className={cn("h-5 w-5 text-gray-300 transition-transform", expandedMetric === "target" && "rotate-90")} />
                      </div>
                      <AnimatePresence>
                        {expandedMetric === "target" && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-8 pb-8 pt-0 overflow-hidden">
                            <div className="pt-6 border-t border-orange-100 flex flex-col gap-4 text-left">
                              <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest italic px-1">Chuyên đề tiềm năng bứt phá</p>
                              <div className="flex flex-col gap-3">
                                {[
                                  { name: "Lượng giác", potential: "+1.5đ", difficulty: "Trung bình" },
                                  { name: "Hình học KG", potential: "+1.0đ", difficulty: "Khó" },
                                ].map((item, idx) => (
                                  <div key={idx} className="flex items-center justify-between p-4 bg-white/50 rounded-2xl border border-orange-100/50 shadow-sm hover:border-orange-300 transition-all">
                                    <div className="flex flex-col gap-0.5">
                                      <span className="text-[13px] font-black text-gray-700">{item.name}</span>
                                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Độ khó: {item.difficulty}</span>
                                    </div>
                                    <span className="text-[13px] font-black text-orange-600">{item.potential}</span>
                                  </div>
                                ))}
                              </div>
                              <Link href="/luyen-tap" className="mt-2 py-4 bg-gray-900 group-hover:bg-blue-600 rounded-2xl text-[10px] font-black text-white uppercase tracking-widest text-center transition-all shadow-xl shadow-gray-200 flex items-center justify-center gap-2">
                                VÀO LUYỆN NGAY <ArrowRight className="h-4 w-4" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>

              {/* Large Interactive Radar Chart */}
              <div className="lg:col-span-8 relative group">
                <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="bg-white p-6 md:p-14 rounded-[4rem] border border-gray-100 shadow-2xl shadow-blue-100/30 relative overflow-visible min-h-[700px] flex flex-col items-center justify-center">

                  <div className="mb-14 text-center">
                    <span className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4 block underline underline-offset-8 decoration-gray-100">RADAR TRÌNH ĐỘ THỰC TẾ</span>
                    <h2 className="text-3xl md:text-4xl font-black font-montserrat text-gray-900 tracking-tight">Na-Radar Analytics</h2>
                  </div>

                  <div className="relative w-full aspect-square max-w-[550px] animate-fade-in flex items-center justify-center">
                    <svg viewBox="-25 -25 150 150" className="w-full h-full drop-shadow-2xl overflow-visible">
                      {[20, 40, 60, 80, 100].map(r => (
                        <circle key={r} cx="50" cy="50" r={r / 2} fill="none" stroke="#f1f5f9" strokeWidth="0.5" strokeDasharray={r === 100 ? "0" : "2 2"} />
                      ))}

                      {topicsMastery.map((topic, i) => {
                        const angle = (i * (360 / topicsMastery.length) - 90) * Math.PI / 180;
                        const x2 = 50 + 50 * Math.cos(angle);
                        const y2 = 50 + 50 * Math.sin(angle);
                        const lx = 50 + 62 * Math.cos(angle);
                        const ly = 50 + 62 * Math.sin(angle);

                        return (
                          <g key={i}>
                            <line x1="50" y1="50" x2={x2} y2={y2} stroke="#f1f5f9" strokeWidth="0.5" />
                            <text
                              x={lx} y={ly}
                              className="text-[3px] font-black fill-gray-400 uppercase tracking-[0.2em]"
                              textAnchor="middle" dominantBaseline="middle"
                            >
                              {topic.name}
                            </text>
                          </g>
                        );
                      })}

                      <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        d={topicsMastery.map((t, i) => {
                          const angle = (i * (360 / topicsMastery.length) - 90) * Math.PI / 180;
                          const r = t.value / 2;
                          const x = 50 + r * Math.cos(angle);
                          const y = 50 + r * Math.sin(angle);
                          return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                        }).join(' ') + ' Z'}
                        fill="url(#radarGradient)"
                        stroke="#0e56fa"
                        strokeWidth="1"
                        strokeLinejoin="round"
                      />

                      <defs>
                        <linearGradient id="radarGradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="rgba(14, 86, 250, 0.4)" />
                          <stop offset="100%" stopColor="rgba(14, 86, 250, 0.1)" />
                        </linearGradient>
                      </defs>

                      {topicsMastery.map((t, i) => {
                        const angle = (i * (360 / topicsMastery.length) - 90) * Math.PI / 180;
                        const r = t.value / 2;
                        const x = 50 + r * Math.cos(angle);
                        const y = 50 + r * Math.sin(angle);
                        return (
                          <g key={i} className="cursor-pointer group/point" onMouseEnter={() => handleMouseEnterTooltip(t)} onMouseLeave={handleMouseLeaveTooltip}>
                            <circle cx={x} cy={y} r="1.5" className="fill-blue-600 transition-all group-hover/point:r-2 shadow-lg" />
                            <circle cx={x} cy={y} r="4" className="fill-transparent" />
                          </g>
                        );
                      })}
                    </svg>

                    <AnimatePresence>
                      {hoveredTopic && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="absolute z-50 pointer-events-auto"
                          onMouseEnter={() => handleMouseEnterTooltip(hoveredTopic)}
                          onMouseLeave={handleMouseLeaveTooltip}
                          style={{
                            left: `${50 + (hoveredTopic.value / 2) * Math.cos((topicsMastery.findIndex(t => t.name === hoveredTopic.name) * (360 / topicsMastery.length) - 90) * Math.PI / 180)}%`,
                            top: `${50 + (hoveredTopic.value / 2) * Math.sin((topicsMastery.findIndex(t => t.name === hoveredTopic.name) * (360 / topicsMastery.length) - 90) * Math.PI / 180)}%`,
                            transform: 'translate(-50%, -120%)'
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white shadow-2xl w-72 pointer-events-auto text-left flex flex-col gap-6">
                            <div className="flex justify-between items-start">
                              <div className="flex flex-col gap-1">
                                <h4 className="font-black text-gray-900 font-montserrat text-xl leading-tight">{hoveredTopic.name}</h4>
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Phân tích thực tế</span>
                              </div>
                              <span className="text-[11px] font-black text-blue-600 px-3 py-1 bg-blue-50 rounded-lg shrink-0">+{hoveredTopic.potential}đ</span>
                            </div>

                            <div className="flex flex-col gap-5">
                               <div className="flex items-end justify-between">
                                  <span className={cn(
                                    "text-[11px] font-black uppercase tracking-[0.1em]",
                                    hoveredTopic.value >= 90 ? "text-level-4" : hoveredTopic.value >= 60 ? "text-level-3" : hoveredTopic.value >= 30 ? "text-level-2" : "text-level-1"
                                  )}>
                                    {hoveredTopic.value >= 90 ? "Level 4" : hoveredTopic.value >= 60 ? "Level 3" : hoveredTopic.value >= 30 ? "Level 2" : "Level 1"}
                                  </span>
                                  <span className="text-sm font-black text-gray-900 font-montserrat">{hoveredTopic.value}%</span>
                               </div>

                               <div className="grid grid-cols-4 gap-2">
                                  {[1, 2, 3, 4].map((i) => {
                                    const levelColor = hoveredTopic.value >= 90 ? "bg-level-4" : hoveredTopic.value >= 60 ? "bg-level-3" : hoveredTopic.value >= 30 ? "bg-level-2" : "bg-level-1";
                                    const isReached = hoveredTopic.value >= (i-1)*25 + 10;
                                    const isFull = hoveredTopic.value >= i*25;
                                    const width = isFull ? "100%" : (hoveredTopic.value >= (i-1)*25 ? `${(hoveredTopic.value % 25) * 4}%` : "0%");
                                    
                                    return (
                                      <div key={i} className="flex flex-col gap-2">
                                        <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden relative shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] border border-gray-100/50">
                                          <div className={cn("h-full rounded-full transition-all duration-700", isReached ? levelColor : "bg-gray-100")} style={{ width }} />
                                        </div>
                                      </div>
                                    );
                                  })}
                               </div>
                            </div>

                            <Link href="/luyen-tap" className="w-11 h-11 bg-gray-900 hover:bg-[#0e56fa] text-white rounded-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xl shadow-gray-200 self-end shrink-0">
                              <ArrowRight className="h-5 w-5 stroke-[3px]" />
                            </Link>
                          </div>
                          <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-r border-b border-gray-100/50" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
