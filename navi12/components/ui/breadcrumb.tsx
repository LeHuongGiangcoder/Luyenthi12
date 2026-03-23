"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const routeMap: Record<string, string> = {
  "": "Trang chủ",
  "thi-thu": "Thi thử",
  "luyen-tap": "Luyện tập",
  "room": "Phòng thi",
  "deep-analysis": "Phân tích sâu",
  "results": "Kết quả",
  "review": "Xem lại bài thi",
  "pricing": "Bảng giá",
  "ham-so": "Hàm số",
  "mu-logarit": "Mũ - Lôgarit",
  "nguyen-ham-tich-phan": "Nguyên hàm - Tích phân",
  "hinh-hoc-oxyz": "Hình học không gian Oxyz",
  "luong-giac": "Lượng giác",
  "day-so-cap-so": "Dãy số - Cấp số cộng/nhân",
  "hinh-hoc-khong-gian": "Hình học không gian",
  "ly-thuyet-do-thi": "Lý thuyết đồ thị",
  "xac-suat-co-dien": "Xác suất cổ điển",
  "xac-suat-co-dieu-kien": "Xác suất có điều kiện",
  "vecto-khong-gian": "Véctơ không gian",
  "thong-ke": "Thống kê",
};

export function Breadcrumbs() {
  const pathname = usePathname();
  
  // Routes where breadcrumbs should NOT be shown
  const hiddenRoutes = ["/", "/thi-thu/room"];
  if (hiddenRoutes.includes(pathname)) return null;

  const paths = pathname.split("/").filter(Boolean);
  
  return (
    <div className="w-full bg-white/40 backdrop-blur-sm border-b border-gray-100/50 sticky top-[65px] z-40 mt-[65px]">
      <nav className="mx-auto flex max-w-7xl items-center space-x-2 px-4 py-3 md:px-12 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <Link 
          href="/" 
          className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#0e56fa] transition-colors"
        >
          <Home className="h-3 w-3" />
          <span className="hidden md:inline">Trang chủ</span>
        </Link>

        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join("/")}`;
          const isLast = index === paths.length - 1;
          const label = routeMap[path] || path.charAt(0).toUpperCase() + path.slice(1);

          return (
            <div key={path} className="flex items-center gap-2">
              <ChevronRight className="h-3 w-3 text-gray-300" />
               {isLast ? (
                <span className="text-[10px] font-black uppercase tracking-widest text-[#0e56fa] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 shadow-sm">
                  {label}
                </span>
              ) : (
                <Link 
                  href={href}
                  className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#0e56fa] transition-colors"
                >
                  {label}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
