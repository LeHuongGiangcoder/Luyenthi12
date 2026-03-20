"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Check, X, Star, Calendar, Clock, Trophy, LineChart } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountdownTimer from "@/components/ui/countdown-timer";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const trapSectionRef = useRef<HTMLDivElement>(null);
  const trapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Horizontal scroll for Trap Cards
      if (trapSectionRef.current && trapContainerRef.current) {
        const cards = gsap.utils.toArray(".trap-card");
        if (cards.length === 0) return;

        const mainTl = gsap.timeline({
          scrollTrigger: {
            trigger: trapSectionRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${trapContainerRef.current?.offsetWidth || 1000}`,
            invalidateOnRefresh: true,
          }
        });

        mainTl.to(trapContainerRef.current, {
          x: () => {
            const container = trapContainerRef.current;
            if (!container) return 0;
            return -(container.scrollWidth - window.innerWidth + window.innerWidth * 0.2);
          },
          ease: "none",
        });

        // Individual card animations - Using containerAnimation correctly
        cards.forEach((card: any) => {
          gsap.from(card, {
            y: 50,
            opacity: 0,
            scale: 0.95,
            duration: 1,
            scrollTrigger: {
              trigger: card,
              containerAnimation: mainTl,
              start: "left center+=30%",
              toggleActions: "play none none reverse",
            }
          });
        });
      }
    }, trapSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="hero-content relative flex flex-col items-center px-4 pt-32 pb-16 md:px-12 md:pb-32 overflow-hidden">
        <AnimatedGridPattern
          numSquares={35}
          maxOpacity={0.12}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />

        <div className="relative z-10 flex flex-col items-center w-full">
          <div className="mb-8 flex items-center gap-4 rounded-full bg-pink-50/50 px-5 py-2 text-xs font-semibold text-pink-500 border border-pink-100/50 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500 animate-pulse" />
              <span>Kỳ thi TN THPT 2026</span>
            </div>
            <div className="h-4 w-px bg-pink-200 mx-1" />
            <div className="flex items-center gap-2">
              <span className="text-pink-400 font-medium">Còn:</span>
              <CountdownTimer />
            </div>
          </div>

          <h1 className="max-w-4xl text-center text-4xl font-extrabold leading-[1.1] md:text-7xl font-montserrat tracking-tight">
            Giai đoạn nước rút <br />
            mỗi điểm Toán <br />
            <span className="text-[#0e56fa] italic font-medium">đều phải có lý do</span>
          </h1>

          <p className="mt-8 max-w-2xl text-center text-lg leading-relaxed text-gray-600 px-4">
            Không còn thời gian để ôn dàn trải. Navi giúp bạn biết chính xác <span className="font-bold text-gray-900 surface-emphasis">đang mất điểm ở dạng Toán nào</span> để tối đa hóa từng điểm số cho kỳ thi.
          </p>

          <div className="mt-12 flex flex-col items-center gap-6">
            <Link href="/thi-thu" className="rounded-2xl bg-[#0e56fa] px-10 py-5 text-xl font-bold text-white shadow-2xl shadow-blue-200 transition-all hover:scale-105 active:scale-95 hover:bg-blue-700">
              Kiểm tra điểm yếu ngay — miễn phí
            </Link>
            <div className="flex flex-col items-center gap-1.5 grayscale opacity-70">
              <span className="text-sm font-medium text-gray-600">
                ⚡️ Không cần đăng ký · Trả kết quả ngay lập tức
              </span>
              <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">
                CHUẨN CẤU TRÚC THPT QUỐC GIA 2026
              </span>
            </div>
          </div>

          {/* Stats Section */}
          <div className="stats-container mt-20 grid w-full max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-[2.5rem] border border-gray-100 bg-gray-200/50 md:grid-cols-4 shadow-xl shadow-blue-100/30 relative z-20">
            <StatItem value={1840} label="Học sinh đã thi thử" separator="." />
            <StatItem value={1.4} label="Tăng điểm TB sau 4 tuần luyện" prefix="+" suffix="đ" decimals={1} />
            <StatItem value={89} label="Học sinh phát hiện điểm yếu" suffix="%" />
            <StatItem value={4.9} label="Đánh giá sau khi sử dụng" suffix="★" decimals={1} subLabel="312 đánh giá" />
          </div>
        </div>
      </section>

      {/* Trap Section - SMOOTH HORIZONTAL STICKY SCROLL */}
      <section ref={trapSectionRef} className="relative bg-[#fafbff] overflow-hidden min-h-screen flex items-center">
        <div className="absolute top-20 left-0 w-full text-center px-4 pt-10">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-500 mb-4 block">CẢNH BÁO GIAI ĐOẠN CUỐI</span>
          <h2 className="text-4xl font-extrabold md:text-5xl font-montserrat tracking-tight text-gray-900">
            4 cái bẫy khiến điểm <span className="text-red-500 italic">dậm chân tại chỗ</span>
          </h2>
        </div>

        <div className="flex h-full items-center">
          <div ref={trapContainerRef} className="flex gap-8 px-[10vw] pt-20">
            {[
              {
                id: "01",
                title: "Vòng lặp 'Sai chỗ cũ'",
                desc: "Làm 10 đề mỗi tuần nhưng hổng đúng dạng đó. Xem đáp án thấy hiểu, nhưng lần sau gặp lại vẫn 'đứng hình' như lần đầu.",
                icon: <X className="h-8 w-8 text-red-500" />,
                color: "border-red-100",
                accent: "bg-red-500"
              },
              {
                id: "02",
                title: "Lạc giữa 'Ma trận kiến thức'",
                desc: "Toán có 50 dạng, chỗ nào cũng thấy lo. Không biết nên dồn sức vào Tích phân hay OXY trước để kịp gỡ điểm trong 80 ngày.",
                icon: <ArrowRight className="h-8 w-8 text-orange-500 rotate-45" />,
                color: "border-orange-100",
                accent: "bg-orange-500"
              },
              {
                id: "03",
                title: "Mất điểm 'Vô nghĩa'",
                desc: "Sai ngu ở những câu 7đ, hụt hơi ở những câu 8đ chỉ vì chưa ai chỉ ra quy luật sai của riêng bạn. Mỗi điểm mất đi đều có lý do.",
                icon: <Star className="h-8 w-8 text-blue-500" />,
                color: "border-blue-100",
                accent: "bg-blue-500"
              },
              {
                id: "04",
                title: "Ôn tập 'Mù quáng'",
                desc: "Mỗi ngày trôi qua chỉ thấy Lo thêm chứ không thấy Vững thêm. Không có thước đo cụ thể, bạn đang đi trên một con đường sương mù.",
                icon: <LineChart className="h-8 w-8 text-purple-500" />,
                color: "border-purple-100",
                accent: "bg-purple-500"
              }
            ].map((card, idx) => (
              <div
                key={card.id}
                className="trap-card relative shrink-0 w-[85vw] md:w-[600px] h-[480px] bg-white rounded-[3rem] border-2 p-12 md:p-14 shadow-2xl flex flex-col justify-between group transition-shadow"
                style={{ borderColor: `rgba(243, 244, 246, 0.5)` }}
              >
                <div className="absolute top-0 right-0 p-10 text-8xl font-black text-gray-50/50 select-none font-montserrat">
                  {card.id}
                </div>

                <div className="relative z-10">
                  <div className="mb-10 h-20 w-20 flex items-center justify-center rounded-[1.5rem] bg-white shadow-xl shadow-gray-100 border border-gray-50">
                    {card.icon}
                  </div>
                  <h3 className="mb-6 text-3xl md:text-4xl font-black font-montserrat tracking-tight text-gray-900 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-500 font-medium">
                    {card.desc}
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-4 text-[10px] font-black text-gray-400">
                  <span className="h-1.5 flex-1 rounded-full bg-gray-50 overflow-hidden">
                    <div className={cn("h-full transition-all duration-1000", card.accent)} style={{ width: `${(idx + 1) * 25}%` }} />
                  </span>
                  <span className="uppercase tracking-widest italic">THE TRAP {card.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-4 py-32 md:px-12 flex flex-col items-center bg-white">
        <h2 className="text-center text-3xl font-black md:text-5xl font-montserrat tracking-tight mb-4">
          Luyện nhiều chưa đủ <br className="md:hidden" /> — phải luyện đúng chỗ
        </h2>
        <p className="max-w-xl text-center text-gray-500 font-medium mb-16 px-4">
          Giai đoạn nước rút, điểm số đến từ việc <span className="text-[#0e56fa] font-bold">khắc phục đúng dạng Toán yếu nhất</span> — không phải từ việc ôn thêm nhiều hơn.
        </p>

        <div className="grid w-full max-w-6xl gap-8 md:grid-cols-2">
          {/* Old way */}
          <div className="rounded-[2.5rem] bg-white p-10 md:p-12 border border-gray-100 shadow-sm">
            <h3 className="mb-10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">ÔN THI DÀN TRẢI</h3>
            <ul className="space-y-8">
              {[
                "Làm hàng trăm câu mỗi ngày → tốn sức nhưng không rõ đang tiến bộ ở đâu",
                "Thi thử → xem điểm → không biết điểm mất ở dạng nào, kỹ năng nào",
                "Mất thời gian ôn chỗ đã vững, bỏ sót chỗ đang yếu",
                "Đến ngày thi vẫn lo vì không biết chắc mình đã vá hết lỗ hổng chưa"
              ].map((text, i) => (
                <li key={i} className="flex gap-4 text-sm font-medium text-gray-500">
                  <X className="h-5 w-5 shrink-0 text-red-300" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* New way */}
          <div className="rounded-[2.5rem] bg-[#f0f4ff] p-10 md:p-12 border-2 border-blue-100 shadow-xl shadow-blue-50">
            <h3 className="mb-10 text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">LUYỆN THÔNG MINH VỚI NAVI</h3>
            <ul className="space-y-8">
              {[
                { t: "Xác định đúng dạng Toán đang mất điểm", d: "biết ngay cần tập trung vào đâu" },
                { t: "Chỉ luyện đúng chỗ còn yếu", d: "không lãng phí thời gian ôn chỗ đã nắm" },
                { t: "15 phút mỗi ngày, đúng trọng tâm", d: "hiệu quả hơn làm 100 câu ngẫu nhiên" },
                { t: "Thấy điểm số tăng lên từng tuần", d: "biết mình đang cải thiện đúng chỗ" }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 text-sm">
                  <Check className="h-5 w-5 shrink-0 text-green-500" />
                  <span className="text-gray-900"><span className="font-bold">{item.t}</span> — {item.d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA Section Refined */}
      <section className="px-4 py-32 flex flex-col items-center bg-gray-50/50">
        <div className="w-full max-w-5xl rounded-[3rem] bg-[#0e56fa] p-16 md:p-24 text-center flex flex-col items-center shadow-2xl shadow-blue-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <AnimatedGridPattern />
          </div>
          <div className="mb-10 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-[10px] font-black text-white uppercase tracking-widest backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            89 ngày còn lại — đủ để tăng điểm nếu luyện đúng chỗ
          </div>

          <h2 className="text-4xl md:text-6xl font-black font-montserrat text-white leading-tight mb-8">
            Bạn đang mất điểm <br /> ở dạng Toán nào?
          </h2>
          <p className="max-w-2xl text-lg md:text-xl text-blue-100 font-medium mb-12">
            Thi thử 40 câu miễn phí — hệ thống chỉ ra ngay bạn đang mất điểm ở đâu và có thể gỡ thêm bao nhiêu điểm nếu tập trung đúng tâm.
          </p>

          <Link href="/thi-thu" className="rounded-2xl bg-white px-12 py-6 text-xl font-black text-[#0e56fa] shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3">
            Kiểm tra ngay — Miễn phí
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </section>
    </main>
  );
}

function StatItem({ value, label, prefix = "", suffix = "", decimals = 0, subLabel = "", separator = "," }: any) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const target = { val: 0 };
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true
        }
      });

      tl.to(target, {
        val: value,
        duration: 2,
        ease: "power3.out",
        onUpdate: () => {
          if (numberRef.current) {
            let fv = target.val.toFixed(decimals);
            if (separator === ".") fv = fv.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            numberRef.current.innerText = fv;
          }
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, [value, decimals, separator]);

  return (
    <div ref={containerRef} className="stat-card flex flex-col items-center justify-center bg-white p-12 transition-all hover:bg-blue-50/20 group">
      <div className="flex items-baseline">
        {prefix && <span className="text-2xl font-black text-[#0e56fa] mr-0.5">{prefix}</span>}
        <span ref={numberRef} className="text-5xl font-black text-gray-900 font-montserrat tracking-tight">0</span>
        {suffix && <span className="text-2xl font-black text-[#0e56fa] ml-0.5">{suffix}</span>}
      </div>
      <span className="mt-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center max-w-[140px] leading-relaxed">
        {label}
      </span>
      {subLabel && <span className="mt-2 text-[10px] font-bold text-blue-300 italic">{subLabel}</span>}
    </div>
  );
}
