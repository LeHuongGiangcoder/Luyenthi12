"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  BarChart3, 
  Calendar, 
  CheckCircle2, 
  ChevronRight, 
  Target, 
  TrendingUp, 
  Zap, 
  Clock, 
  Star,
  ArrowRight,
  LayoutDashboard,
  ClipboardList
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

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

// Mock Data for Today's Tasks
const todayTasks = [
  {
    id: 1,
    topic: "Hàm số",
    subtopic: "Cực trị hàm chứa tham số",
    intensity: "Cao",
    duration: "25 phút",
    status: "todo",
    tag: "VDC",
    potential: "+0.4đ"
  },
  {
    id: 2,
    topic: "Oxyz",
    subtopic: "Khoảng cách từ điểm đến mặt phẳng",
    intensity: "Trung bình",
    duration: "15 phút",
    status: "todo",
    tag: "TH",
    potential: "+0.2đ"
  },
  {
    id: 3,
    topic: "Lượng giác",
    subtopic: "Phương trình bậc hai",
    intensity: "Thấp",
    duration: "10 phút",
    status: "completed",
    tag: "NB",
    potential: "+0.1đ"
  }
];

export default function Sprint60() {
  const [activeTab, setActiveTab] = useState<"tasks" | "progress">("tasks");

  return (
    <main className="min-h-screen bg-[#fafbff] pt-24 pb-20 overflow-x-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-12">
        
        {/* Sprint Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-black text-blue-600 border border-blue-100 uppercase tracking-widest">
               <Zap className="h-3.5 w-3.5 fill-current" />
               Sprint 60 — Ngày 12/60
            </div>
            <h1 className="text-4xl md:text-5xl font-black font-montserrat tracking-tight text-gray-900 leading-tight">
              Lộ trình <span className="text-[#0e56fa]">về đích</span>
            </h1>
            <p className="mt-4 text-lg text-gray-500 font-medium max-w-xl">
              Chào Giang, hôm nay chúng ta sẽ bắt đầu gỡ <b>0.7đ</b> thâm hụt. Hệ thống đã chuẩn bị sẵn các câu hỏi phù hợp nhất.
            </p>
          </div>

          {/* Quick Stats Banner */}
          <div className="flex gap-4 p-2 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40">
             <div className="px-6 py-4 rounded-2xl bg-blue-50/50 flex flex-col">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest leading-none mb-1">Điểm hiện tại</span>
                <span className="text-2xl font-black text-gray-900 font-montserrat">7.4</span>
             </div>
             <div className="px-6 py-4 rounded-2xl bg-green-50/50 flex flex-col">
                <span className="text-[10px] font-black text-green-600 uppercase tracking-widest leading-none mb-1">Mục tiêu</span>
                <span className="text-2xl font-black text-gray-900 font-montserrat">9.2</span>
             </div>
             <div className="hidden sm:flex px-6 py-4 rounded-2xl bg-orange-50/50 flex-col">
                <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest leading-none mb-1">Đã gỡ được</span>
                <span className="text-2xl font-black text-gray-900 font-montserrat">+1.2đ</span>
             </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center p-1.5 bg-gray-100/50 rounded-[2rem] w-fit mb-12 border border-gray-200/50">
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
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {/* Task Sidebar - Today's Insight */}
              <div className="lg:col-span-1 flex flex-col gap-6">
                 <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/30">
                    <div className="h-14 w-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-100">
                       <Zap className="h-8 w-8 fill-current" />
                    </div>
                    <h3 className="text-2xl font-black font-montserrat text-gray-900 mb-4 leading-tight">Insight Chiến thuật</h3>
                    <p className="text-gray-500 font-medium leading-relaxed italic">
                      "Dựa trên 200 câu sai gần nhất, hệ thống nhận thấy Giang hay mất điểm ở <b className="text-[#0e56fa]">Hình học Oxyz</b> vì quên công thức khoảng cách. Hôm nay hãy dành 15p review phần này."
                    </p>
                    <div className="mt-8 pt-8 border-t border-gray-50">
                       <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Tiến độ ngày 12</span>
                          <span className="text-xs font-black text-blue-600">33%</span>
                       </div>
                       <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-600 w-1/3" />
                       </div>
                    </div>
                 </div>

                 <div className="bg-gradient-to-br from-[#0e56fa] to-blue-800 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-blue-200">
                    <Star className="h-8 w-8 text-yellow-400 fill-current mb-6" />
                    <h4 className="text-xl font-black font-montserrat mb-2">Unlock: Đề thi thật 2024</h4>
                    <p className="text-blue-100 text-sm font-medium leading-relaxed">
                      Hoàn thành 3 nhiệm vụ hôm nay để mở khóa bài giải chi tiết đề 2024 có gắn tag điểm yếu của bạn.
                    </p>
                 </div>
              </div>

              {/* Task List */}
              <div className="lg:col-span-2 flex flex-col gap-5">
                 <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-gray-900 uppercase tracking-widest pl-2">DANH SÁCH BÀI TẬP</span>
                    <div className="flex items-center gap-2">
                       <Clock className="h-3.5 w-3.5 text-gray-400" />
                       <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Ước tính: 50 phút</span>
                    </div>
                 </div>

                 {todayTasks.map((task) => (
                   <div 
                     key={task.id} 
                     className={cn(
                       "bg-white p-8 rounded-[2.5rem] border transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group",
                       task.status === "completed" ? "opacity-60 grayscale-[0.5] bg-gray-50/50 border-gray-100" : "border-gray-100 hover:border-blue-200 shadow-lg hover:shadow-xl shadow-gray-200/30"
                     )}
                   >
                     <div className="flex items-center gap-6">
                        <div className={cn(
                          "h-16 w-16 rounded-[1.5rem] flex items-center justify-center transition-transform group-hover:scale-110",
                          task.status === "completed" ? "bg-green-100 text-green-600" : "bg-blue-50 text-blue-600"
                        )}>
                           {task.status === "completed" ? <CheckCircle2 className="h-8 w-8" /> : <Zap className="h-8 w-8" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                             <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest px-2 py-0.5 bg-blue-50 rounded-md">{task.tag}</span>
                             <span className="text-[10px] font-bold text-gray-400 italic">• {task.duration}</span>
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 font-montserrat">{task.topic}: {task.subtopic}</h4>
                        </div>
                     </div>

                     <div className="flex items-center gap-6">
                        <div className="hidden md:flex flex-col items-end">
                           <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Cơ hội giành lại</span>
                           <span className="text-lg font-black text-green-600">{task.potential}</span>
                        </div>
                        {task.status !== "completed" ? (
                          <Link 
                            href={`/luyen-tap/${task.topic.toLowerCase()}`}
                            className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-black text-sm flex items-center gap-2 transition-all hover:bg-[#0e56fa] hover:translate-x-1"
                          >
                             LUYỆN NGAY
                             <ArrowRight className="h-4 w-4" />
                          </Link>
                        ) : (
                          <div className="px-8 py-4 border border-green-200 text-green-600 font-black text-sm flex items-center gap-2 rounded-2xl">
                             XONG
                          </div>
                        )}
                     </div>
                   </div>
                 ))}
                 
                 <button className="mt-4 flex items-center justify-center gap-3 py-6 rounded-[2rem] border-2 border-dashed border-gray-200 text-gray-400 font-bold hover:border-blue-200 hover:text-blue-600 transition-all active:scale-[0.98]">
                    <ChevronRight className="h-5 w-5 rotate-90" />
                    Yêu cầu nhiệm vụ mới
                 </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="progress"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
            >
               {/* Radar Chart (Simplified SVG Implementation for high visual impact) */}
               <div className="relative group">
                  <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full" />
                  <div className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-2xl shadow-blue-100/50 relative overflow-hidden h-[600px] flex items-center justify-center">
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
                       <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Radar Năng Lực 12 Chuyên Đề</span>
                    </div>

                    {/* SVG Radar Placeholder - Styled premium */}
                    <svg viewBox="0 0 100 100" className="w-[85%] h-[85%] animate-pulse">
                      {/* Grid Circles */}
                      {[20, 40, 60, 80, 100].map(r => (
                        <circle key={r} cx="50" cy="50" r={r/2} fill="none" stroke="#f1f5f9" strokeWidth="0.5" />
                      ))}
                      {/* Topic Axes */}
                      {Array.from({ length: 12 }).map((_, i) => {
                        const angle = (i * 30) * Math.PI / 180;
                        return <line key={i} x1="50" y1="50" x2={50 + 50 * Math.cos(angle)} y2={50 + 50 * Math.sin(angle)} stroke="#f1f5f9" strokeWidth="0.5" />;
                      })}
                      {/* Active Shape */}
                      <path 
                        d="M 50 15 L 75 35 L 85 50 L 70 75 L 50 85 L 30 75 L 15 50 L 25 35 Z" 
                        fill="rgba(14, 86, 250, 0.15)" 
                        stroke="#0e56fa" 
                        strokeWidth="1.5" 
                      />
                      {/* Topic Labels - Simplified */}
                      <text x="50" y="8" className="text-[3px] font-bold fill-gray-400" textAnchor="middle">Hàm số</text>
                      <text x="92" y="52" className="text-[3px] font-bold fill-gray-400" textAnchor="start">Oxyz</text>
                    </svg>
                    
                    {/* Floating Level Markers */}
                    <div className="absolute bottom-10 left-10 p-5 bg-white/80 backdrop-blur rounded-[2rem] border border-white shadow-xl flex items-center gap-4">
                       <div className="h-10 w-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-100">
                          <TrendingUp className="h-6 w-6" />
                       </div>
                       <div className="flex flex-col pr-2">
                          <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Tier hiện tại</span>
                          <span className="text-sm font-black text-gray-900">Chiến binh Vận Dụng</span>
                       </div>
                    </div>
                  </div>
               </div>

               {/* Potential Breakdown */}
               <div className="flex flex-col gap-6 pt-4">
                  <div className="flex items-center justify-between mb-4">
                     <span className="text-xs font-black text-gray-900 uppercase tracking-widest">TIỀM NĂNG GIÀNH LẠI ĐIỂM</span>
                     <span className="text-[10px] font-black text-red-500 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">Tổng +4.2đ</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {topicsMastery.filter(t => t.potential > 1).map((topic, i) => (
                      <div 
                        key={i} 
                        className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-gray-200/50 group"
                      >
                         <div className="flex justify-between items-start mb-4">
                            <span className="text-sm font-black text-gray-900 font-montserrat">{topic.name}</span>
                            <span className="text-[10px] font-black text-green-600 bg-green-50 px-2 py-1 rounded-lg">+{topic.potential}đ</span>
                         </div>
                         <div className="flex flex-col gap-2">
                            <div className="flex justify-between text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                               <span>Mastery</span>
                               <span>{topic.value}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                               <div className="h-full bg-blue-500 transition-all duration-1000" style={{ width: `${topic.value}%` }} />
                            </div>
                         </div>
                         <Link href={`/luyen-tap/${topic.name.toLowerCase()}`} className="mt-6 flex items-center justify-center gap-2 py-3 bg-gray-50 rounded-xl text-[10px] font-black text-blue-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                            Lấy lại điểm ngay <ArrowRight className="h-3 w-3" />
                         </Link>
                      </div>
                    ))}
                  </div>

                  {/* Summary Card */}
                  <div className="mt-8 bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-200/30 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-12 text-blue-500/5 rotate-12"><Target className="h-40 w-40" /></div>
                     <h3 className="text-2xl font-black font-montserrat text-gray-900 mb-6 flex items-center gap-3">
                        Kết luận lộ trình
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                     </h3>
                     <p className="text-gray-500 font-medium leading-[1.8] max-w-lg mb-8">
                       Bạn đã hoàn thành 20% lộ trình Sprint 60. Tốc độ gỡ điểm hiện tại là <b className="text-blue-600">0.12đ/ngày</b>. <br /> Nếu duy trì, bạn sẽ hoàn thành mục tiêu 9.2 vào đúng tuần cuối tháng 5.
                     </p>
                     <div className="flex items-center gap-6">
                        <div className="flex flex-col">
                           <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Dự báo điểm đạt được</span>
                           <span className="text-3xl font-black text-gray-900 font-montserrat tracking-tight">9.2 — 9.4</span>
                        </div>
                        <div className="h-12 w-[1px] bg-gray-100" />
                        <div className="flex flex-col">
                           <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Tỉ lệ hoàn thành</span>
                           <span className="text-3xl font-black text-blue-600 font-montserrat tracking-tight">20%</span>
                        </div>
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
