"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-gray-100 bg-white/80 px-4 py-3 backdrop-blur-md md:px-12">
      <Link href="/" className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0e56fa] text-white">
          <ArrowRight className="h-6 w-6" />
        </div>
        <span className="text-xl font-bold font-montserrat tracking-tight">Navi</span>
      </Link>
      
      <div className="hidden items-center gap-8 md:flex">
        <Link href="/thi-thu" className="text-sm font-medium text-gray-700 hover:text-[#0e56fa]">Thi thử</Link>
        <Link href="/luyen-tap" className="text-sm font-medium text-gray-700 hover:text-[#0e56fa]">Luyện tập</Link>
        <Link href="/sprint-60" className="text-sm font-medium text-gray-700 hover:text-[#0e56fa]">Sprint 60</Link>
        <Link href="/login" className="text-sm font-bold text-gray-700 hover:text-[#0e56fa] transition-colors">
          Đăng nhập
        </Link>
        <Link href="/register" className="rounded-xl bg-[#0e56fa] px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200">
          Mở tài khoản
        </Link>
      </div>
      
      <button className="md:hidden">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </nav>
  );
}
