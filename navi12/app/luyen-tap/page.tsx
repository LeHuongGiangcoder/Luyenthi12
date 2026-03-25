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
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const topics = [
  {
    id: "ham-so",
    name: "Hàm số",
    desc: "Khảo sát, đồ thị và các bài toán tham số.",
    icon: <TrendingUp className="h-6 w-6" />,
    questions: "420+",
    mastery: 0,
    color: "blue"
  },
  {
    id: "mu-logarit",
    name: "Mũ - Lôgarit",
    desc: "Biến đổi biểu thức, phương trình và bất phương trình.",
    icon: <Zap className="h-6 w-6" />,
    questions: "350+",
    mastery: 62,
    color: "blue"
  },
  {
    id: "nguyen-ham-tich-phan",
    name: "Nguyên hàm - Tích phân",
    desc: "Kỹ thuật tính toán và ứng dụng diện tích, thể tích.",
    icon: <FunctionSquare className="h-6 w-6" />,
    questions: "380+",
    mastery: 45,
    color: "blue"
  },
  {
    id: "hinh-hoc-oxyz",
    name: "Hình học không gian Oxyz",
    desc: "Phương pháp tọa độ trong không gian 3 chiều.",
    icon: <Target className="h-6 w-6" />,
    questions: "310+",
    mastery: 78,
    color: "blue"
  },
  {
    id: "luong-giac",
    name: "Lượng giác",
    desc: "Công thức và phương trình lượng giác cơ bản đến nâng cao.",
    icon: <Infinity className="h-6 w-6" />,
    questions: "280+",
    mastery: 0,
    color: "blue"
  },
  {
    id: "day-so-cap-so",
    name: "Dãy số - Cấp số cộng - Cấp số nhân",
    desc: "Tính chất, công thức tổng quát và giới hạn dãy số.",
    icon: <ListOrdered className="h-6 w-6" />,
    questions: "240+",
    mastery: 55,
    color: "blue"
  },
  {
    id: "hinh-hoc-khong-gian",
    name: "Hình học không gian",
    desc: "Góc, khoảng cách, diện tích và thể tích khối đa diện.",
    icon: <Box className="h-6 w-6" />,
    questions: "330+",
    mastery: 0,
    color: "blue"
  },
  {
    id: "ly-thuyet-do-thi",
    name: "Lý thuyết đồ thị",
    desc: "Cấu trúc, đường đi và các bài toán đồ thị cơ bản.",
    icon: <Network className="h-6 w-6" />,
    questions: "150+",
    mastery: 0,
    color: "blue"
  },
  {
    id: "xac-suat-co-dien",
    name: "Xác suất cổ điển",
    desc: "Các bài toán đếm, hoán vị, tổ hợp và xác suất đơn giản.",
    icon: <Dices className="h-6 w-6" />,
    questions: "200+",
    mastery: 90,
    color: "blue"
  },
  {
    id: "xac-suat-co-dieu-kien",
    name: "Xác suất có điều kiện",
    desc: "Công thức Bayes và các bài toán xác suất phức hợp.",
    icon: <PieChart className="h-6 w-6" />,
    questions: "180+",
    mastery: 0,
    color: "blue"
  },
  {
    id: "vecto-khong-gian",
    name: "Véctơ trong không gian",
    desc: "Tính chất và các phép toán véctơ, tích vô hướng.",
    icon: <ArrowUpRight className="h-6 w-6" />,
    questions: "160+",
    mastery: 50,
    color: "blue"
  },
  {
    id: "thong-ke",
    name: "Thống kê với mẫu số liệu ghép nhóm",
    desc: "Xử lý số liệu, đo lường xu hướng trung tâm và độ phân tán.",
    icon: <BarChart3 className="h-6 w-6" />,
    questions: "220+",
    mastery: 70,
    color: "blue"
  }
];

export default function LuyenTap() {
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filteredTopics = topics.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="flex min-h-screen flex-col bg-[#fafbff] overflow-x-hidden pt-12 pb-20">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-12">

        {/* Header Section */}
        <div className="mb-16 text-left border-l-4 border-blue-600 pl-8 relative">
          <span className="text-xs font-black text-blue-600 uppercase tracking-widest mb-4 block">HỆ THỐNG LUYỆN TẬP ADAPTIVE</span>
          <h1 className="text-4xl md:text-6xl font-black font-montserrat tracking-tight text-gray-900 mb-6 leading-[1.1] max-w-4xl">
            Luyện theo chuyên đề <br /> <span className="text-[#0e56fa]">tầm soát chuyên sâu</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
            Hệ thống sẽ điều chỉnh độ khó dựa trên kết quả trả lời của bạn. <span className="text-gray-900 font-bold italic">Càng luyện, càng đúng chỗ.</span>
          </p>
        </div>

        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12 bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm transition-all hover:shadow-md">
          <div className="relative w-full md:w-[400px]">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm chuyên đề..."
              className="w-full pl-14 pr-6 py-4 bg-gray-50 border-none rounded-2xl text-sm font-semibold focus:ring-2 focus:ring-blue-100 placeholder:text-gray-400 transition-all outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex items-center bg-gray-50 p-1.5 rounded-2xl gap-2 w-full md:w-auto">
            <button
              onClick={() => setView("grid")}
              className={cn(
                "flex-1 md:w-12 h-11 flex items-center justify-center rounded-xl transition-all",
                view === "grid" ? "bg-white text-blue-600 shadow-sm" : "text-gray-400 hover:text-gray-600"
              )}
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setView("list")}
              className={cn(
                "flex-1 md:w-12 h-11 flex items-center justify-center rounded-xl transition-all",
                view === "list" ? "bg-white text-blue-600 shadow-sm" : "text-gray-400 hover:text-gray-600"
              )}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Topics Grid */}
        <div className={cn(
          view === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            : "flex flex-col gap-4"
        )}>
          {filteredTopics.map((topic) => {
            // Determine current level and color
            let levelColor = "bg-level-1";
            let textColor = "text-level-1";
            let levelName = "Level 1: Nhận biết";

            if (topic.mastery >= 90) {
              levelColor = "bg-level-4";
              textColor = "text-level-4";
              levelName = "Level 4: VDC";
            } else if (topic.mastery >= 60) {
              levelColor = "bg-level-3";
              textColor = "text-level-3";
              levelName = "Level 3: Vận dụng";
            } else if (topic.mastery >= 30) {
              levelColor = "bg-level-2";
              textColor = "text-level-2";
              levelName = "Level 2: Thông hiểu";
            }

            // Determine 3 States
            const isHamSo = topic.id === "ham-so";
            const isStarted = topic.mastery > 0;
            const isAnalyzed = isHamSo && !isStarted; // Mock state: analyzed but not practiced yet

            // Dynamic Styling based on state initialized to default
            let cardBg = "bg-white";
            let cardBorder = "border-gray-100";
            let hoverShadow = "hover:shadow-gray-200/40";
            let actionText = "Vào Luyện";
            let actionHref = `/luyen-tap/${topic.id}`;
            let buttonColor = "bg-[#0e56fa]";
            let glowColor = "bg-blue-50/50";

            if (isAnalyzed) {
               cardBg = "bg-white";
               cardBorder = "border-emerald-200 border-2";
               hoverShadow = "hover:shadow-emerald-200/30";
               actionText = "Lộ Trình";
               actionHref = "/thi-thu/deep-analysis/results";
               buttonColor = "bg-emerald-600 hover:bg-emerald-700";
               glowColor = "hidden";
            } else if (isStarted) {
               cardBorder = "border-2 border-blue-500/30";
               hoverShadow = "hover:shadow-blue-500/10";
               actionText = "Tiếp Tục";
               glowColor = "bg-blue-50/50";
            } else {
               const isTrig = topic.id === "luong-giac";
               cardBorder = "border border-dashed border-gray-200 opacity-80";
               hoverShadow = "hover:shadow-gray-200/30";
               actionText = "Bắt Đầu";
               actionHref = isTrig ? "/luyen-tap/luong-giac/deep-analysis" : `/luyen-tap/${topic.id}`;
               buttonColor = "bg-gray-900";
               glowColor = "bg-gray-100/50";
            }

            // Dynamic title hover color
            let titleHoverColor = "group-hover:text-[#0e56fa]";
            if (isAnalyzed) titleHoverColor = "group-hover:text-emerald-600";
            else if (!isStarted) titleHoverColor = "group-hover:text-gray-900";

            // Minimalist Status Indicator Logic
            const StatusIndicator = () => {
              const [isExpanded, setIsExpanded] = useState(false);
              
              const statusData = isAnalyzed 
                ? { label: "Lộ trình sẵn sàng", color: "bg-emerald-500", text: "text-emerald-700", bg: "bg-emerald-100/50" }
                : isStarted 
                  ? { label: "Đang luyện tập", color: "bg-blue-500", text: "text-blue-700", bg: "bg-blue-100/50", pulse: true }
                  : { label: "Chưa bắt đầu", color: "bg-gray-400", text: "text-gray-600", bg: "bg-gray-100/50" };

              return (
                <div 
                  onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
                  onMouseEnter={() => setIsExpanded(true)}
                  onMouseLeave={() => setIsExpanded(false)}
                  className={cn(
                    "flex items-center gap-2 px-1.5 h-6 rounded-full border transition-all duration-300 cursor-pointer overflow-hidden",
                    isExpanded ? "max-w-[200px]" : "max-w-[24px]", // Width transitions
                    isExpanded ? "border-gray-100 pr-3" : "border-transparent",
                    isExpanded ? statusData.bg : "bg-transparent"
                  )}
                >
                  <div className={cn(
                    "w-2 h-2 rounded-full shrink-0", 
                    statusData.color,
                    statusData.pulse && "animate-pulse"
                  )} />
                  {isExpanded && (
                    <span className={cn("text-[9px] font-black uppercase tracking-widest whitespace-nowrap", statusData.text)}>
                      {statusData.label}
                    </span>
                  )}
                </div>
              );
            };

            return (
              <div
                key={topic.id}
                className={cn(
                  "group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border flex flex-col",
                  cardBg, cardBorder, hoverShadow,
                  view === "grid" ? "p-8 md:p-10 rounded-[2.5rem] min-h-[440px]" : "p-6 rounded-3xl md:flex-row items-center justify-between gap-8 h-fit text-left w-full",
                )}
              >
                {/* Status Indicator Dot - Top Left */}
                <div className="absolute top-8 left-8 z-10">
                  <StatusIndicator />
                </div>

                {/* Decorative background glow */}
                <div className={cn(
                  "absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity",
                  glowColor
                )} />

                <div className={cn("flex flex-col gap-2 text-left pt-6", view === "grid" ? "h-[110px]" : "flex-1")}>
                  <div className="flex justify-between items-start gap-4">
                    <h3 className={cn("text-xl md:text-2xl font-black font-montserrat text-gray-900 transition-colors leading-tight", titleHoverColor)}>{topic.name}</h3>
                    {topic.mastery > 90 && view === "grid" && (
                      <div className="px-3 py-1 bg-green-50 rounded-lg flex items-center gap-1.5 shrink-0">
                        <Sparkles className="h-3 w-3 text-green-600" />
                        <span className="text-[9px] font-black text-green-600 uppercase tracking-widest">Mastered</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 font-medium leading-relaxed italic line-clamp-2">{topic.desc}</p>
                </div>

                {/* 4 Levels Mastery UI */}
                <div className={cn("mt-6", view === "grid" ? "w-full" : "w-[360px] mt-0 shrink-0")}>
                  <div className="flex justify-between items-end mb-4 h-[30px]">
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Tiến độ chuyên đề</span>
                      <span className={cn("text-[10px] font-black uppercase tracking-widest", isStarted ? textColor : "text-gray-400")}>
                        {isStarted ? levelName : (isAnalyzed ? "Đã phân tích sâu" : "Đang chờ bắt đầu")}
                      </span>
                    </div>
                    {isStarted && <span className={cn("text-[11px] font-black tracking-widest", textColor)}>{topic.mastery}%</span>}
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { label: "NB", val: isStarted ? Math.min(100, topic.mastery * 4) : 0, active: topic.mastery >= 10, color: "bg-level-1", text: "text-level-1" },
                      { label: "TH", val: isStarted ? Math.max(0, Math.min(100, (topic.mastery - 25) * 4)) : 0, active: topic.mastery >= 35, color: "bg-level-2", text: "text-level-2" },
                      { label: "VD", val: isStarted ? Math.max(0, Math.min(100, (topic.mastery - 50) * 4)) : 0, active: topic.mastery >= 60, color: "bg-level-3", text: "text-level-3" },
                      { label: "VDC", val: isStarted ? Math.max(0, Math.min(100, (topic.mastery - 75) * 4)) : 0, active: topic.mastery >= 90, color: "bg-level-4", text: "text-level-4" }
                    ].map((lvl, i) => (
                      <div key={i} className="flex flex-col gap-2">
                        <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden relative">
                          <div
                            className={cn(
                              "h-full rounded-full transition-all duration-1000",
                              lvl.active ? lvl.color : (isAnalyzed ? "bg-emerald-50" : "bg-gray-100")
                            )}
                            style={{ width: `${lvl.val || (isAnalyzed ? 100 : 0)}%`, opacity: isAnalyzed && !isStarted ? 0.3 : 1 }}
                          />
                        </div>
                        <span className={cn(
                          "text-[8px] font-black text-center transition-colors",
                          lvl.active ? lvl.text : "text-gray-300"
                        )}>{lvl.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={cn("flex items-center justify-between", view === "grid" ? "mt-auto pt-6 border-t border-gray-50" : "shrink-0 ml-auto gap-8")}>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-3.5 w-3.5 text-gray-300" />
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none shrink-0">{topic.questions} câu hỏi</span>
                  </div>
                  <Link 
                    href={actionHref} 
                    className={cn(
                      "w-11 h-11 rounded-2xl flex items-center justify-center transition-all hover:scale-[1.1] active:scale-95 shadow-lg shrink-0 text-white",
                      buttonColor
                    )}
                    title={actionText}
                  >
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
