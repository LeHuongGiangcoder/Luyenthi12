"use client";

import { cn } from "@/lib/utils";
import {
  Infinity,
  ListOrdered,
  Zap,
  Box,
  Network,
  Dices,
  PieChart,
  TrendingUp,
  ArrowUpRight,
  FunctionSquare,
  BarChart3,
  Target,
  ArrowRight,
  Search,
  BookOpen,
  LayoutGrid,
  List,
  Sparkles,
  Flame,
  CheckCircle2,
  Clock,
  Compass,
  Play,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

const topics = [
  {
    id: "ham-so",
    name: "Hàm số",
    desc: "Khảo sát, đồ thị và các bài toán tham số.",
    icon: <TrendingUp className="h-6 w-6" />,
    questions: "420+",
    mastery: 0,
    color: "blue",
    units: [
      { name: "Tính đơn điệu của hàm số", value: 35, avg: "Level 1" },
      { name: "Cực trị của hàm số", value: 20, avg: "Level 1" },
      { name: "GTLN - GTNN của hàm số", value: 92, avg: "Level 4" },
      { name: "Tiệm cận của đồ thị hàm số", value: 48, avg: "Level 2" },
      { name: "Ứng dụng đạo hàm thực tế", value: 15, avg: "Level 1" }
    ]
  },
  {
    id: "mu-logarit",
    name: "Mũ - Lôgarit",
    desc: "Biến đổi biểu thức, phương trình và bất phương trình.",
    icon: <Zap className="h-6 w-6" />,
    questions: "350+",
    mastery: 62,
    color: "blue",
    units: [
      { name: "Biến đổi mũ & logarit", value: 85, avg: "Level 3" },
      { name: "Hàm số mũ & logarit", value: 65, avg: "Level 2" },
      { name: "Phương trình mũ", value: 70, avg: "Level 3" },
      { name: "Phương trình logarit", value: 55, avg: "Level 2" }
    ]
  },
  {
    id: "nguyen-ham-tich-phan",
    name: "Nguyên hàm - Tích phân",
    desc: "Kỹ thuật tính toán và ứng dụng diện tích, thể tích.",
    icon: <FunctionSquare className="h-6 w-6" />,
    questions: "380+",
    mastery: 45,
    color: "blue",
    units: [
      { name: "Nguyên hàm cơ bản", value: 80, avg: "Level 3" },
      { name: "Tích phân xác định", value: 50, avg: "Level 2" },
      { name: "Ứng dụng diện tích hình phẳng", value: 30, avg: "Level 2" },
      { name: "Ứng dụng thể tích khối tròn xoay", value: 20, avg: "Level 1" }
    ]
  },
  {
    id: "hinh-hoc-oxyz",
    name: "Hình học không gian Oxyz",
    desc: "Phương pháp tọa độ trong không gian 3 chiều.",
    icon: <Target className="h-6 w-6" />,
    questions: "310+",
    mastery: 78,
    color: "blue",
    units: [
      { name: "Hệ tọa độ trong không gian", value: 95, avg: "Level 4" },
      { name: "Phương trình mặt thẳng", value: 85, avg: "Level 3" },
      { name: "Phương trình đường thẳng", value: 70, avg: "Level 3" },
      { name: "Phương trình mặt cầu", value: 62, avg: "Level 2" }
    ]
  },
  {
    id: "luong-giac",
    name: "Lượng giác",
    desc: "Công thức và phương trình lượng giác cơ bản đến nâng cao.",
    icon: <Infinity className="h-6 w-6" />,
    questions: "280+",
    mastery: 0,
    color: "blue",
    units: [
      { name: "Giá trị lượng giác", value: 0, avg: "Level 1" },
      { name: "Công thức lượng giác", value: 0, avg: "Level 1" },
      { name: "Phương trình lượng giác", value: 0, avg: "Level 1" }
    ]
  },
  {
    id: "day-so-cap-so",
    name: "Dãy số - Cấp số cộng - Cấp số nhân",
    desc: "Tính chất, công thức tổng quát và giới hạn dãy số.",
    icon: <ListOrdered className="h-6 w-6" />,
    questions: "240+",
    mastery: 55,
    color: "blue",
    units: [
      { name: "Dãy số cơ bản", value: 80, avg: "Level 3" },
      { name: "Cấp số cộng", value: 65, avg: "Level 2" },
      { name: "Cấp số nhân", value: 40, avg: "Level 2" }
    ]
  },
  {
    id: "hinh-hoc-khong-gian",
    name: "Hình học không gian",
    desc: "Góc, khoảng cách, diện tích và thể tích khối đa diện.",
    icon: <Box className="h-6 w-6" />,
    questions: "330+",
    mastery: 0,
    color: "blue",
    units: [
      { name: "Khối đa diện", value: 0, avg: "Level 1" },
      { name: "Góc & Khoảng cách", value: 0, avg: "Level 1" },
      { name: "Mặt nón, trụ, cầu", value: 0, avg: "Level 1" }
    ]
  },
  {
    id: "ly-thuyet-do-thi",
    name: "Lý thuyết đồ thị",
    desc: "Cấu trúc, đường đi and các bài toán đồ thị cơ bản.",
    icon: <Network className="h-6 w-6" />,
    questions: "150+",
    mastery: 0,
    color: "blue",
    units: [{ name: "Đồ thị căn bản", value: 0, avg: "Level 1" }]
  },
  {
    id: "xac-suat-co-dien",
    name: "Xác suất cổ điển",
    desc: "Các bài toán đếm, hoán vị, tổ hợp and xác suất đơn giản.",
    icon: <Dices className="h-6 w-6" />,
    questions: "200+",
    mastery: 90,
    color: "blue",
    units: [{ name: "Biến cố & Xác suất", value: 90, avg: "Level 4" }]
  },
  {
    id: "xac-suat-co-dieu-kien",
    name: "Xác suất có điều kiện",
    desc: "Công thức Bayes and các bài toán xác suất phức hợp.",
    icon: <PieChart className="h-6 w-6" />,
    questions: "180+",
    mastery: 0,
    color: "blue",
    units: [{ name: " Bayes & Conditional", value: 0, avg: "Level 1" }]
  },
  {
    id: "vecto-khong-gian",
    name: "Véctơ trong không gian",
    desc: "Tính chất and các phép toán véctơ, tích vô hướng.",
    icon: <ArrowUpRight className="h-6 w-6" />,
    questions: "160+",
    mastery: 50,
    color: "blue",
    units: [{ name: "Tích vô hướng", value: 50, avg: "Level 2" }]
  },
  {
    id: "thong-ke",
    name: "Thống kê với mẫu số liệu ghép nhóm",
    desc: "Xử lý số liệu, đo lường xu hướng trung tâm and độ phân tán.",
    icon: <BarChart3 className="h-6 w-6" />,
    questions: "220+",
    mastery: 70,
    color: "blue",
    units: [{ name: "Số liệu ghép nhóm", value: 70, avg: "Level 3" }]
  }
];

export default function LuyenTap() {
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("list");
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>(null);
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

  const filteredTopics = topics.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  // Logic tính ngày countdown (Mock: 20/06/2026)
  const targetDate = new Date("2026-06-20");
  const today = new Date();
  const diffTime = Math.abs(targetDate.getTime() - today.getTime());
  const daysUntilExam = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const dateStr = today.toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' });

  const stats = {
    total: topics.length,
    notStarted: topics.filter(t => t.mastery === 0 && t.id !== "ham-so" && t.id !== "luong-giac").length,
    readyToLearn: topics.filter(t => t.id === "ham-so").length,
    inProgress: topics.filter(t => t.mastery > 0).length,
    mastered: topics.filter(t => t.mastery >= 90).length
  };

  const needsAssessment = topics.find(t => t.id === "luong-giac" && t.mastery === 0);
  const topInProgress = [...topics].filter(t => t.mastery > 0 && t.mastery < 90).sort((a, b) => b.mastery - a.mastery)[0];

  const recommendation = needsAssessment
    ? {
      title: "Hoàn thành đánh giá",
      subject: "Lượng giác",
      desc: "Thi đánh giá năng lực để tạo lộ trình cá nhân hóa chính xác cho bạn.",
      cta: "THI ĐÁNH GIÁ",
      href: "/luyen-tap/luong-giac/deep-analysis",
      priority: "PHẢI LÀM NGAY",
      tagColor: "bg-blue-50 text-blue-600 border-blue-100"
    }
    : (topInProgress
      ? {
        title: "Luyện chuyên sâu",
        subject: topInProgress.name,
        desc: `Đến nay bạn đạt ${topInProgress.mastery}% Mastery. Cận gỡ ${90 - topInProgress.mastery}% để lọt top an toàn.`,
        cta: "LUYỆN TIẾP",
        href: `/luyen-tap/${topInProgress.id}`,
        priority: "ĐANG LUYỆN DỞ",
        tagColor: "bg-emerald-50 text-emerald-600 border-emerald-100"
      }
      : {
        title: "Bắt đầu chương mới",
        subject: "Chuyên đề Hình học",
        desc: "Khám phá chuyên đề mới để hoàn thiện nền tảng thi đánh giá tư duy.",
        cta: "KHÁM PHÁ",
        href: "/luyen-tap/hinh-hoc-khong-gian",
        priority: "GỢI Ý MỚI",
        tagColor: "bg-purple-50 text-purple-600 border-purple-100"
      }
    );

  return (
    <main className="flex min-h-screen flex-col bg-white overflow-x-hidden pt-8 pb-20 relative" ref={containerRef}>

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
        <div className="mt-12 mb-20 border-l-4 border-blue-600 pl-8 relative animate-fade-in text-left">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4 block">HỆ THỐNG LUYỆN TẬP ADAPTIVE</span>
          <h1 className="text-4xl md:text-6xl font-black font-montserrat tracking-tight text-gray-900 mb-6 leading-[1.1] max-w-4xl">
            Luyện theo chuyên đề <br /> <span className="text-blue-600">tầm soát chuyên sâu</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
            Mỗi bài giải không chỉ là đáp án, mà là thước đo chính xác lỗ hổng kiến thức hiện tại của bạn.
          </p>
        </div>

        {/* Stats & Daily Tasks - RESTRUCTURED */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 animate-fade-in">
          {/* Stats (Sidebar - 4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6 text-left">
            <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] px-2">TIẾN ĐỘ CỦA BẠN</h2>
            <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-xl shadow-blue-100/20 grid grid-cols-1 gap-8 h-full">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300"><Clock className="h-6 w-6" /></div>
                <div>
                  <p className="text-3xl font-black text-gray-900 font-montserrat tracking-tighter leading-none">{stats.notStarted}</p>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2"> Chuyên đề chưa học</p>
                </div>
              </div>
              <div className="h-px bg-gray-100 w-full" />
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform"><CheckCircle2 className="h-6 w-6" /></div>
                <div>
                  <p className="text-3xl font-black text-gray-900 font-montserrat tracking-tighter leading-none">{stats.readyToLearn}</p>
                  <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mt-2 line-clamp-1">Lộ trình sẵn sàng</p>
                </div>
              </div>
              <div className="h-px bg-gray-100 w-full" />
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform"><TrendingUp className="h-6 w-6" /></div>
                <div>
                  <p className="text-3xl font-black text-gray-900 font-montserrat tracking-tighter leading-none">{stats.inProgress}</p>
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mt-2 line-clamp-1">Đang tích cực luyện</p>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Tasks (Main - 8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6 text-left">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] px-2 flex items-center gap-2">
                <Flame className="h-3 w-3 text-orange-500 fill-orange-500 animate-pulse" />
                3 NHIỆM VỤ HÔM NAY
              </h2>
              <p className="text-[11px] font-bold text-gray-400 italic">
                {dateStr} · Còn <span className="text-red-500 font-black">{daysUntilExam} ngày</span>
              </p>
            </div>

            {/* Primary Task */}
            <div className="relative bg-[#0e56fa] rounded-[2.5rem] p-10 text-white overflow-hidden shadow-2xl shadow-blue-200 group">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100">NHIỆM VỤ 1 · ƯU TIÊN CAO NHẤT</span>
                    <h3 className="text-xl md:text-2xl font-extrabold font-montserrat tracking-tight leading-tight">
                      Hàm số – Tìm GTLN/GTNN có điều kiện
                    </h3>
                    <p className="text-blue-50/80 font-medium text-sm max-w-xl leading-relaxed mt-1">
                      6 câu · ~12 phút · Đây là YCCĐ đang kéo điểm xuống nhiều nhất.
                    </p>
                  </div>

                  <div className="relative h-20 w-20 shrink-0">
                    <svg className="h-full w-full -rotate-90">
                      <circle cx="40" cy="40" r="35" stroke="rgba(255,255,255,0.1)" strokeWidth="5" fill="transparent" />
                      <motion.circle
                        initial={{ strokeDasharray: "0 220" }}
                        animate={{ strokeDasharray: `${(18 / 100) * 220} 220` }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                        cx="40" cy="40" r="35" stroke="white" strokeWidth="5" fill="transparent" strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-lg font-extrabold font-montserrat leading-none">18%</span>
                      <span className="text-[7.5px] font-bold uppercase tracking-widest opacity-60 mt-0.5">mastery</span>
                    </div>
                  </div>
                </div>

                <Link href="/luyen-tap/ham-so" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0e56fa] hover:scale-105 active:scale-95 rounded-2xl font-black text-sm transition-all shadow-xl">
                  Luyện ngay <ArrowRight className="h-4 w-4 stroke-[3px]" />
                </Link>
              </div>
            </div>

            {/* Secondary Tasks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { id: 2, name: "Phân tích cực trị hàm hợp", mastery: 22, color: "bg-red-500", status: "cần luyện ngay" },
                { id: 3, name: "Khoảng đơn điệu hàm phân thức", mastery: 45, color: "bg-orange-500", status: "cần cải thiện" }
              ].map(task => (
                <div key={task.id} className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-xl shadow-gray-200/20 hover:shadow-2xl transition-all group flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Nhiệm vụ {task.id}</span>
                      <h4 className="text-base font-extrabold font-montserrat text-gray-900 group-hover:text-[#0e56fa] transition-colors leading-snug">
                        Hàm số – {task.name}
                      </h4>
                    </div>
                    <Link href="/luyen-tap/ham-so" className="w-10 h-10 bg-gray-50 text-gray-400 hover:bg-[#0e56fa] hover:text-white rounded-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95">
                      <ArrowRight className="h-4 w-4 stroke-[3px]" />
                    </Link>
                  </div>
                  <div className="mt-auto">
                    <div className="h-1.5 w-full bg-gray-50 rounded-full mb-2 overflow-hidden relative">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${task.mastery}%` }} transition={{ duration: 1 }} className={cn("h-full rounded-full", task.color)} />
                    </div>
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                      Mastery {task.mastery}% — {task.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Tip Box (Synced with Sprint 60) */}
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-gray-100 flex items-center gap-8 shadow-sm text-left">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-xl shadow-blue-100/50 shrink-0 border border-blue-50/50 group hover:scale-110 transition-transform">
                <Clock className="h-7 w-7 group-hover:rotate-12 transition-transform" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-base font-extrabold text-gray-900 font-montserrat tracking-tight leading-none">Sau khi xong 3 nhiệm vụ hôm nay</p>
                <p className="text-sm font-medium text-gray-400 leading-relaxed italic opacity-85">
                  Hệ thống sẽ đề xuất Test lại năng lực chuyên đề Hàm số để đo mức độ thấu hiểu (Mastery) mới nhất của bạn.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Controls - Moved Below Tasks */}
        <div className="flex flex-col md:flex-row items-center justify-end gap-6 mb-12 animate-fade-in relative z-10">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-[400px]">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Bạn muốn tìm chuyên đề nào?"
                className="w-full pl-14 pr-6 py-4 bg-white border border-gray-100 rounded-2xl text-sm font-semibold focus:ring-4 focus:ring-blue-100 placeholder:text-gray-400 transition-all outline-none shadow-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="flex items-center bg-gray-50/50 p-1 rounded-2xl gap-1 border border-gray-100">
              <button 
                onClick={() => setView("grid")} 
                className={cn(
                  "w-10 h-10 flex items-center justify-center rounded-xl transition-all", 
                  view === "grid" ? "bg-white text-[#0e56fa] shadow-sm" : "text-gray-400 hover:text-gray-600"
                )}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button 
                onClick={() => setView("list")} 
                className={cn(
                  "w-10 h-10 flex items-center justify-center rounded-xl transition-all", 
                  view === "list" ? "bg-white text-[#0e56fa] shadow-sm" : "text-gray-400 hover:text-gray-600"
                )}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Topics List */}
        <div className={cn("animate-fade-in", view === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "flex flex-col gap-4")}>
          {filteredTopics.map((topic) => {
            const isHamSo = topic.id === "ham-so";
            const isStarted = topic.mastery > 0;
            const isAnalyzed = isHamSo && !isStarted;
            const isExpanded = expandedTopicId === topic.id;

            let levelColor = "bg-level-1", textColor = "text-level-1", levelName = "Level 1";
            if (topic.mastery >= 90) { levelColor = "bg-level-4"; textColor = "text-level-4"; levelName = "Level 4"; }
            else if (topic.mastery >= 60) { levelColor = "bg-level-3"; textColor = "text-level-3"; levelName = "Level 3"; }
            else if (topic.mastery >= 30) { levelColor = "bg-level-2"; textColor = "text-level-2"; levelName = "Level 2"; }

            let cardBorder = isAnalyzed ? "border-emerald-200 border-2" : (isStarted ? "border-2 border-blue-500/30" : "border border-dashed border-gray-200 opacity-80");
            let actionHref = isAnalyzed ? "/thi-thu/deep-analysis/results" : (topic.id === "luong-giac" && !isStarted ? "/luyen-tap/luong-giac/deep-analysis" : `/luyen-tap/${topic.id}`);
            let buttonColor = isAnalyzed ? "bg-emerald-600" : (isStarted ? "bg-[#0e56fa]" : "bg-gray-900");

            return (
              <div
                key={topic.id}
                onClick={() => setExpandedTopicId(isExpanded ? null : topic.id)}
                className={cn(
                  "group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border flex flex-col cursor-pointer bg-white",
                  cardBorder,
                  view === "grid" ? "p-8 md:p-10 rounded-[2.5rem] min-h-[440px]" : "p-6 px-10 rounded-3xl md:flex-row items-center justify-between gap-8 h-fit text-left w-full",
                )}
              >
                <div className="flex flex-col gap-2 text-left pt-6 flex-1">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-xl md:text-2xl font-black font-montserrat text-gray-900 leading-tight flex items-center gap-3 group-hover:text-[#0e56fa] transition-colors">
                      {topic.name}
                      <ChevronRight className={cn("h-5 w-5 text-gray-300 transition-transform duration-300", isExpanded && "rotate-90")} />
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400 font-medium leading-relaxed italic line-clamp-2">{topic.desc}</p>

                  <AnimatePresence>
                    {isExpanded && topic.units && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden w-full mt-6">
                        <div className="pt-6 border-t border-gray-100 flex flex-col gap-2">
                          <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-2">Đơn vị kiến thức:</span>
                          <div className="flex flex-col gap-2">
                            {topic.units.map((unit, idx) => (
                              <div key={idx} className="flex items-center justify-between p-3.5 bg-gray-50/50 rounded-2xl border border-gray-100/50 hover:bg-white hover:border-blue-200 transition-all group/unit">
                                <div className="flex items-center gap-3">
                                  <div className={cn("w-1.5 h-1.5 rounded-full", unit.value >= 90 ? "bg-level-4" : unit.value >= 60 ? "bg-level-3" : unit.value >= 30 ? "bg-level-2" : "bg-level-1")} />
                                  <span className="text-[13px] font-bold text-gray-700">{unit.name}</span>
                                </div>
                                <span className={cn("text-[9px] font-black uppercase tracking-widest", unit.value >= 90 ? "text-level-4" : unit.value >= 60 ? "text-level-3" : unit.value >= 30 ? "text-level-2" : "text-level-1")}>{unit.avg}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {!isExpanded && (
                  <div className={cn("mt-6", view === "grid" ? "w-full" : "w-[360px] mt-0 shrink-0")}>
                    <div className="flex justify-between items-end mb-4 h-[30px]">
                      <div className="flex flex-col gap-1">
                        <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Tiến độ chuyên đề</span>
                        <span className={cn("text-[10px] font-black uppercase tracking-widest", isStarted ? textColor : "text-gray-400")}>{isStarted ? levelName : (isAnalyzed ? "Đã phân tích sâu" : "Đang chờ bắt đầu")}</span>
                      </div>
                      {isStarted && <span className={cn("text-xs font-black tracking-widest", textColor)}>{topic.mastery}%</span>}
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-2 w-full bg-gray-50 rounded-full overflow-hidden relative">
                          <div className={cn("h-full rounded-full transition-all duration-1000", topic.mastery >= (i - 1) * 25 + 10 ? levelColor : (isAnalyzed ? "bg-emerald-50" : "bg-gray-100"))} style={{ width: topic.mastery >= i * 25 ? "100%" : topic.mastery >= (i - 1) * 25 ? `${(topic.mastery % 25) * 4}%` : "0%", opacity: isAnalyzed && !isStarted ? 0.3 : 1 }} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className={cn("flex items-center justify-between", view === "grid" ? "mt-auto pt-6 border-t border-gray-50" : "shrink-0 ml-auto gap-8")}>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-3.5 w-3.5 text-gray-300" />
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none shrink-0">{topic.questions} câu hỏi</span>
                  </div>
                  <Link href={actionHref} onClick={(e) => e.stopPropagation()} className={cn("w-11 h-11 rounded-2xl flex items-center justify-center transition-all hover:scale-[1.1] shadow-lg shrink-0 text-white", buttonColor)}>
                    <ArrowRight className="h-5 w-5 stroke-[3px]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
