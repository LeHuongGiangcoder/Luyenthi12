"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, X, Star, Calendar, Clock, Trophy, LineChart, Zap, TrendingUp, AlertTriangle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import CountdownTimer from "@/components/ui/countdown-timer";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
gsap.registerPlugin(ScrollTrigger);

import { getDaysRemaining } from "@/lib/exam-date";

export default function LandingPage() {
  const daysRemaining = getDaysRemaining();
  const heroRef = useRef<HTMLDivElement>(null);
  const trapSectionRef = useRef<HTMLDivElement>(null);
  const trapContainerRef = useRef<HTMLDivElement>(null);
  const solutionSectionRef = useRef<HTMLDivElement>(null);
  const solutionStickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Horizontal scroll for Trap Cards
      if (trapSectionRef.current && trapContainerRef.current) {
        const cards = gsap.utils.toArray(".trap-card");
        if (cards.length === 0) return;

        const getScrollDistance = () => {
          const container = trapContainerRef.current;
          if (!container) return 0;
          return container.scrollWidth - window.innerWidth + (window.innerWidth * 0.2);
        };

        const mainTl = gsap.timeline({
          scrollTrigger: {
            trigger: trapSectionRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${getScrollDistance()}`,
            invalidateOnRefresh: true,
          }
        });

        // Horizontal scroll
        mainTl.to(trapContainerRef.current, {
          x: () => -getScrollDistance(),
          ease: "none",
        });

        // Cards appearance staggered along the scroll
        mainTl.from(".trap-card", {
          y: 40,
          opacity: 0,
          scale: 0.9,
          stagger: 0.05,
          duration: 0.2,
          ease: "power2.out",
        }, 0);
      }

      // Trap cards animation remains in GSAP as it handles horizontal pinning
    }, [trapSectionRef]);

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden block">

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
            <span className="text-[#0e56fa] italic font-medium">bạn phí điểm ở đâu</span>
          </h1>

          <p className="mt-8 max-w-2xl text-center text-lg leading-relaxed text-gray-600 px-4">
            Bạn đang mất điểm ở các dạng bài lặp lại. Na chỉ ra chính xác điểm yếu <span className="font-bold text-gray-900 surface-emphasis">và cách bạn lấy lại từng điểm</span>.
          </p>

          <div className="mt-12 flex flex-col items-center gap-6">
            <InteractiveButton href="/thi-thu" className="rounded-2xl bg-[#0e56fa] px-10 py-5 text-xl font-bold text-white shadow-2xl shadow-blue-200 transition-all hover:scale-105 active:scale-95 hover:bg-blue-700">
              Tìm chỗ mất điểm
            </InteractiveButton>
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
      <section ref={trapSectionRef} className="relative bg-[#fafbff] overflow-hidden min-h-screen flex flex-col justify-center py-20">
        <div className="relative z-10 w-full text-center px-4 mb-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-xs font-black text-red-600 border border-red-100 uppercase tracking-widest">
            CẢNH BÁO GIAI ĐOẠN CUỐI
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold font-montserrat tracking-tight text-gray-900">
            4 cái bẫy khiến bạn <span className="text-red-500">mất điểm</span>
          </h2>
        </div>

        <div className="flex items-center">
          <div ref={trapContainerRef} className="flex gap-8 px-[10vw]">
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

      <section ref={solutionSectionRef} className="relative bg-white py-24 md:py-32 overflow-hidden font-montserrat">
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col gap-16 md:gap-20">

          {/* Main Header - Centered & Consistent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center mx-auto max-w-4xl mb-12"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-black text-blue-600 border border-blue-100 uppercase tracking-widest">
              GIẢI PHÁP ĐỘT PHÁ CỦA NAVIEDU
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold font-montserrat tracking-tight text-gray-900 leading-[1.1]">
              Cách NaviEdu <br />
              <span className="text-[#0e56fa]">lấy lại từng điểm số cho bạn</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed font-primary max-w-2xl mt-6">
              Na không dạy bạn mọi thứ. Na chỉ giúp bạn giỏi thứ bạn đang yếu nhất để tăng điểm nhanh nhất.
            </p>
          </motion.div>

          {[
            {
              tag: "Giai đoạn 1",
              title: "Chụp X-Quang lỗ hổng kiến thức",
              desc: "Na phân tích bài thi qua 5 cấp độ tư duy: Nhận biết, Thông hiểu, Vận dụng, Vận dụng cao. Phát hiện ngay tầng kiến thức nào đang 'âm thầm' kéo điểm số của bạn xuống.",
              features: ["Phân tích 5 cấp độ nhận thức", "Báo cáo radar điểm mạnh/yếu", "Kết luận lộ trình ngay lập tức"],
              image: "/pic1.png",
              color: "bg-blue-500"
            },
            {
              tag: "Giai đoạn 2",
              title: "Xác định rõ 'kẻ trộm điểm số'",
              desc: "Không chỉ biết sai ở đâu, Na lượng hóa tầm quan trọng của lỗi sai: Nếu sửa dạng Hàm số này, bạn gỡ lại ngay +1.5đ thâm hụt so với mục tiêu.",
              features: ["Lượng hóa điểm số bị mất", "Ưu tiên chuyên đề yếu nhất", "Dự báo mức tăng điểm tiềm năng"],
              image: "/pic2.png",
              reverse: true,
              color: "bg-red-500"
            },
            {
              tag: "Giai đoạn 3",
              title: "Luyện tập đúng trọng tâm theo lộ trình cá nhân hoá",
              desc: "Mọi đề luyện đều được cá nhân hóa. Hệ thống tự động bỏ qua 80% câu hỏi thừa, bạn dành trọn 100% sức lực vào nơi tạo ra sự thay đổi điểm số.",
              features: ["Tự động bỏ qua phần đã vững", "Cá nhân hóa 100% đề thi", "Tăng 1.4đ sau 4 tuần luyện tập"],
              image: "/pic3.png",
              color: "bg-green-500"
            }
          ].map((item, i) => (
            <SolutionItem key={i} item={item} index={i} />
          ))}
        </div>
      </section>


      {/* Testimonials Section - High Impact Results */}
      <section className="relative bg-[#fafbff] py-16 md:py-20 overflow-hidden border-t border-gray-100">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 p-32 opacity-10 pointer-events-none grayscale"><TrendingUp className="h-64 w-64" /></div>
        <div className="absolute -bottom-24 -left-24 h-96 w-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mx-auto max-w-3xl mb-16 md:mb-24">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-black text-blue-600 border border-blue-100 uppercase tracking-widest">
              KẾT QUẢ THỰC TẾ
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold font-montserrat tracking-tight text-gray-900 mb-6 leading-tight">
              Học sinh NaviEdu <br />
              <span className="text-[#0e56fa]">vượt ngưỡng</span> điểm số
            </h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed font-primary">
              Không còn học "mò", đây là cách các bạn ấy đã bứt phá khi giải quyết đúng 20% vấn đề then chốt.
            </p>
          </div>

          <div className="relative mt-8 overflow-hidden py-10">
            {/* Gradient Overlays for smooth edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#fafbff] to-transparent z-20" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#fafbff] to-transparent z-20" />

            <div className="animate-marquee flex gap-8 w-max">
              {[
                {
                  name: "Lê Hoàng Nam",
                  school: "THPT Chuyên Hà Nội - Amsterdam",
                  gap: "Lỗ hổng: Hình học & VDC",
                  result: "+1.6đ",
                  metric: "7.2 → 8.8",
                  quote: "Navi chỉ ra mình mất 1.5đ ở đúng 2 dạng bài. Thay vì cày liên tục, mình chỉ cần luyện sâu 2 chuyên đề đó là đủ.",
                  color: "text-blue-600 bg-blue-50"
                },
                {
                  name: "Nguyễn Minh Thư",
                  school: "THPT Lê Quý Đôn, TP.HCM",
                  gap: "Lỗ hổng: Sai ngu & Xác suất",
                  result: "+1.7đ",
                  metric: "6.5 → 8.2",
                  quote: "Mình từng học rất nhiều nhưng không lên. Navi bắt đúng bệnh chỗ mình mất điểm ngu và giúp mình cải thiện trong 1 tháng.",
                  color: "text-purple-600 bg-purple-50"
                },
                {
                  name: "Trần Đức Anh",
                  school: "THPT Phan Châu Trinh, Đà Nẵng",
                  gap: "Lỗ hổng: Hàm số & Tích phân",
                  result: "+1.4đ",
                  metric: "8.0 → 9.4",
                  quote: "NaviEdu giúp mình giải quyết thứ mình đang kẹt nhất. Nếu có thời gian thì mình luyện mỗi ngày, bận quá thì 1 tuần 2-3 lần là thấy chắc hơn rồi.",
                  color: "text-green-600 bg-green-50"
                },
                {
                  name: "Hồ Bảo Khánh",
                  school: "THPT Chuyên Lý Tự Trọng, Cần Thơ",
                  gap: "Lỗ hổng: Tiệm cận & Mũ log",
                  result: "+1.2đ",
                  metric: "6.8 → 8.0",
                  quote: "Lần đầu mình có tự tin khi tự ôn luyện như thế",
                  color: "text-orange-600 bg-orange-50"
                },
                {
                  name: "Đặng Hà My",
                  school: "THPT Chuyên Phan Bội Châu, Nghệ An",
                  gap: "Lỗ hổng: Oxyz & Số phức",
                  result: "+1.5đ",
                  metric: "7.5 → 9.0",
                  quote: "15 phút mỗi ngày nhưng hiệu quả hơn 3 tiếng mình tự cày đề. Mình đã đạt mục tiêu 9+.",
                  color: "text-pink-600 bg-pink-50"
                },
                {
                  name: "Vũ Gia Huy",
                  school: "THPT Thái Phiên, Hải Phòng",
                  gap: "Lỗ hổng: Bài toán thực tế",
                  result: "+1.3đ",
                  metric: "6.0 → 7.3",
                  quote: "Điểm mình lên sau 1 tháng chỉ làm bài trên lớp và ôn luyện trên Navi",
                  color: "text-cyan-600 bg-cyan-50"
                }
              ].concat([
                {
                  name: "Lê Hoàng Nam",
                  school: "THPT Chuyên Hà Nội - Amsterdam",
                  gap: "Lỗ hổng: Hình học & VDC",
                  result: "+1.6đ",
                  metric: "7.2 → 8.8",
                  quote: "Navi chỉ ra mình mất 1.5đ ở đúng 2 dạng bài này. Thay vì làm 10 đề, mình chỉ cần học 15p là đủ.",
                  color: "text-blue-600 bg-blue-50"
                },
                {
                  name: "Nguyễn Minh Thư",
                  school: "THPT Lê Quý Đôn, TP.HCM",
                  gap: "Lỗ hổng: Sai ngu & Xác suất",
                  result: "+1.7đ",
                  metric: "6.5 → 8.2",
                  quote: "Mình từng học rất dàn trải. Navi bắt đúng bệnh 'sai ngu' và giúp mình lấy lại sự tự tin cực nhanh.",
                  color: "text-purple-600 bg-purple-50"
                },
                {
                  name: "Trần Đức Anh",
                  school: "THPT Phan Châu Trinh, Đà Nẵng",
                  gap: "Lỗ hổng: Hàm số & Tích phân",
                  result: "+1.4đ",
                  metric: "8.0 → 9.4",
                  quote: "NaviEdu giúp mình giải quyết thứ mình đang kẹt nhất. Phương pháp học 15p thực sự hiệu quả.",
                  color: "text-green-600 bg-green-50"
                },
                {
                  name: "Hồ Bảo Khánh",
                  school: "THPT Chuyên Lý Tự Trọng, Cần Thơ",
                  gap: "Lỗ hổng: Tiệm cận & Mũ log",
                  result: "+1.2đ",
                  metric: "6.8 → 8.0",
                  quote: "Không còn cảm giác bế tắc khi giải đề. Navi định hướng cực tốt cho mình.",
                  color: "text-orange-600 bg-orange-50"
                },
                {
                  name: "Đặng Hà My",
                  school: "THPT Chuyên Phan Bội Châu, Nghệ An",
                  gap: "Lỗ hổng: Oxyz & Số phức",
                  result: "+1.5đ",
                  metric: "7.5 → 9.0",
                  quote: "15 phút mỗi ngày nhưng hiệu quả hơn 3 tiếng học lan man. Mình đã đạt mục tiêu 9+.",
                  color: "text-pink-600 bg-pink-50"
                },
                {
                  name: "Vũ Gia Huy",
                  school: "THPT Thái Phiên, Hải Phòng",
                  gap: "Lỗ hổng: Bài toán thực tế",
                  result: "+1.3đ",
                  metric: "6.0 → 7.3",
                  quote: "Kết quả thật, nỗ lực thật. NaviEdu thực sự là người đồng hành tin cậy cho kỳ thi 2026.",
                  color: "text-cyan-600 bg-cyan-50"
                }
              ]).map((t, idx) => (
                <div key={idx} className="flex flex-col justify-between bg-white rounded-[2.5rem] p-10 shadow-xl shadow-gray-200/50 border border-gray-100 w-[420px] shrink-0 transition-transform active:scale-95">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className={cn("px-4 py-2 rounded-2xl font-black text-sm shadow-sm", t.color)}>
                        {t.result}
                      </div>
                      <Star className="h-6 w-6 text-yellow-400 fill-current" />
                    </div>

                    <div className="mb-6 space-y-4">
                      <div className="text-xs font-black uppercase tracking-widest text-gray-400">{t.gap}</div>
                      <div className="text-2xl font-black font-montserrat text-gray-900">{t.metric}</div>
                    </div>

                    <p className="text-gray-500 font-medium leading-relaxed italic mb-10 relative">
                      <span className="text-4xl text-blue-100 absolute -top-4 -left-4 font-serif">“</span>
                      {t.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-8 border-t border-gray-50">
                    <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-400 shadow-inner">
                      {t.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-gray-900">{t.name}</span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{t.school}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-16 flex flex-col items-center gap-4 opacity-50 grayscale">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => <div key={i} className="h-6 w-6 rounded-full border-2 border-white bg-gray-200" />)}
              </div>
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Được tin dùng bởi 15k+ học sinh 2k8</span>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-16 md:py-20 flex flex-col items-center bg-gray-50/50 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-5xl rounded-[3rem] bg-[#0e56fa] p-16 md:p-24 text-center flex flex-col items-center shadow-2xl shadow-blue-200 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <AnimatedGridPattern />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-[10px] font-black text-white uppercase tracking-widest backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            {daysRemaining} ngày còn lại — đủ để tăng điểm nếu luyện đúng chỗ
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-extrabold font-montserrat text-white leading-tight mb-8"
          >
            Bạn đang mất điểm <br /> ở dạng Toán nào?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl text-lg md:text-xl text-blue-100 font-medium mb-12"
          >
            Thi thử 22 câu miễn phí — hệ thống chỉ ra ngay bạn đang mất điểm ở đâu và có thể gỡ thêm bao nhiêu điểm nếu tập trung đúng tâm.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <InteractiveButton href="/thi-thu" className="rounded-2xl bg-white px-12 py-6 text-xl font-black text-[#0e56fa] shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3">
              Kiểm tra ngay
            </InteractiveButton>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}

function SolutionItem({ item, index: i }: any) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "solution-item-row grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-16 md:mb-20",
        item.reverse ? "lg:flex-row-reverse" : ""
      )}
    >
      {/* Text Content */}
      <div className={cn("order-2 lg:order-none", item.reverse ? "lg:order-2" : "lg:order-1")}>
        <motion.div
          initial={{ opacity: 0, x: item.reverse ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 + (i * 0.1) }}
        >
          <div className="mb-6 inline-flex items-center gap-2 text-xs font-black text-blue-600 uppercase tracking-widest">
            {item.tag}
          </div>
          <h3 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 mb-8 leading-tight">
            {item.title}
          </h3>
          <p className="text-lg text-gray-500 font-medium leading-relaxed mb-10 font-primary">
            {item.desc}
          </p>
        </motion.div>

        <div className="grid gap-4">
          {item.features.map((f: string, j: number) => (
            <motion.div
              key={j}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + (j * 0.1) + (i * 0.1) }}
              className="flex items-center gap-4 text-gray-900 font-bold"
            >
              <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                <Check className="h-4 w-4 stroke-[3]" />
              </div>
              {f}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Mockup */}
      <motion.div
        style={{ y }}
        initial={{ opacity: 0, scale: 0.9, rotate: item.reverse ? -2 : 2 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }}
        className={cn("order-1 lg:order-none relative h-full flex items-center justify-center", item.reverse ? "lg:order-1" : "lg:order-2")}
      >
        <div className="relative w-full max-w-[600px] aspect-[4/3] rounded-[3rem] bg-white p-4 shadow-2xl border-4 border-white overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
          <div className="absolute inset-0 opacity-10"><AnimatedGridPattern /></div>

          <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden bg-gray-50 flex items-center justify-center border border-gray-100">
            <motion.img
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain p-4 md:p-8"
            />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={cn("absolute top-8 right-8 h-14 w-14 rounded-[1.2rem] flex items-center justify-center text-white shadow-xl", item.color)}
          >
            <Zap className="h-8 w-8 fill-current" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
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

function InteractiveButton({ children, href, className }: any) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link
      ref={buttonRef}
      href={href}
      className={cn("relative group/btn", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{children}</span>

      {/* Interactive Cursor Label */}
      <motion.div
        animate={{
          x: position.x + 10,
          y: position.y + 10,
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.5,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 200, mass: 0.5 }}
        className="pointer-events-none absolute left-0 top-0 z-20 rounded-full bg-blue-400 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-lg backdrop-blur-md"
      >
        tốc độ
      </motion.div>
    </Link>
  );
}


