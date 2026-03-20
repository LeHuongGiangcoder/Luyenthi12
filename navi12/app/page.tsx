"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Check, X, Star, Calendar, Clock, Trophy, LineChart } from "lucide-react";
import { gsap } from "gsap";

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const trapsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Stats Animation
      gsap.from(".stat-card", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".stats-container",
          start: "top 80%"
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-gray-100 bg-white/80 px-4 py-3 backdrop-blur-md md:px-12">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0e56fa] text-white">
            <ArrowRight className="h-6 w-6" />
          </div>
          <span className="text-xl font-bold font-montserrat tracking-tight">Navi</span>
        </div>
        
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-[#0e56fa]">Thi thử</a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-[#0e56fa]">Luyện tập</a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-[#0e56fa]">Sprint 60</a>
          <button className="rounded-xl bg-[#0e56fa] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200">
            Kiểm tra điểm yếu — miễn phí
          </button>
        </div>
        
        <button className="md:hidden">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="hero-content relative flex flex-col items-center px-4 pt-32 pb-16 md:px-12 md:pb-24">
        <div className="mb-6 flex items-center gap-2 rounded-full bg-pink-50 px-4 py-1.5 text-xs font-semibold text-pink-500 border border-pink-100/50">
          <span className="h-1.5 w-1.5 rounded-full bg-pink-500 animate-pulse" />
          Kỳ thi TN THPT 2026 — còn 89 ngày
        </div>
        
        <h1 className="max-w-4xl text-center text-4xl font-extrabold leading-[1.1] md:text-7xl font-montserrat">
          Giai đoạn nước rút — <br/>
          mỗi điểm Toán <br/>
          <span className="text-[#0e56fa] italic font-medium">đều phải có lý do</span>
        </h1>
        
        <p className="mt-8 max-w-2xl text-center text-lg leading-relaxed text-gray-600">
          Không còn thời gian để ôn dàn trải. Navi giúp bạn biết chính xác <span className="font-bold text-gray-900 surface-emphasis">đang mất điểm ở dạng Toán nào</span>, rồi tập trung luyện đúng chỗ đó — tối đa hóa từng điểm số còn có thể gỡ được trong 89 ngày còn lại.
        </p>
        
        <div className="mt-10 flex flex-col items-center gap-4 md:flex-row">
          <button className="rounded-xl bg-[#0e56fa] px-8 py-4 text-lg font-bold text-white shadow-xl shadow-blue-200 transition-all hover:scale-105 hover:bg-blue-700">
            Kiểm tra điểm yếu ngay — miễn phí
          </button>
          <span className="text-sm text-gray-500">
            Không cần đăng ký · Biết ngay đang mất điểm ở đâu
          </span>
        </div>
        
        {/* Stats */}
        <div className="stats-container mt-20 grid w-full max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-gray-100 bg-gray-100 md:grid-cols-4 shadow-sm">
          <div className="stat-card flex flex-col items-center bg-white p-8 transition-colors hover:bg-blue-50/30">
            <span className="text-3xl font-extrabold text-blue-900 font-montserrat">1.840</span>
            <span className="mt-2 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">học sinh đã thi thử</span>
          </div>
          <div className="stat-card flex flex-col items-center bg-white p-8 transition-colors hover:bg-blue-50/30">
            <span className="text-3xl font-extrabold text-blue-900 font-montserrat">+1.4đ</span>
            <span className="mt-2 text-xs font-medium text-gray-500 uppercase tracking-wider text-center px-4">tăng điểm TB sau 4 tuần luyện đúng chỗ</span>
          </div>
          <div className="stat-card flex flex-col items-center bg-white p-8 transition-colors hover:bg-blue-50/30">
            <span className="text-3xl font-extrabold text-blue-900 font-montserrat">89%</span>
            <span className="mt-2 text-xs font-medium text-gray-500 uppercase tracking-wider text-center px-4">học sinh phát hiện điểm yếu mình không ngờ tới</span>
          </div>
          <div className="stat-card flex flex-col items-center bg-white p-8 transition-colors hover:bg-blue-50/30">
            <span className="text-3xl font-extrabold text-blue-900 font-montserrat">4.9★</span>
            <span className="mt-2 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">312 đánh giá sau khi sử dụng</span>
          </div>
        </div>
      </section>

      {/* Trap Section */}
      <section className="bg-gray-50/50 px-4 py-20 md:px-12">
        <h2 className="text-center text-3xl font-bold md:text-4xl font-montserrat mb-12">
          Giai đoạn nước rút — 4 cái bẫy khiến điểm <br className="hidden md:block" />
          không tăng dù ôn rất nhiều
        </h2>
        
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500">
               <X className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-lg font-bold">Làm rất nhiều đề nhưng vẫn sai đúng những chỗ cũ</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Xem đáp án, hiểu tại sao sai — nhưng lần sau gặp dạng đó vẫn loay hoay như lần đầu.
            </p>
          </div>
          
          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
             <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500">
               <X className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-lg font-bold">Biết mình yếu nhưng không biết bắt đầu từ đâu</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Toán có đủ thứ: Hàm số, Hình học, Tích phân, Xác suất — chỗ nào cũng cảm giác chưa chắc, không biết tập trung cái gì trước.
            </p>
          </div>
          
          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
             <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500">
               <X className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-lg font-bold">Đang mất điểm vô nghĩa ở những dạng hoàn toàn có thể gỡ được</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Không phải vì không đủ giỏi — mà vì chưa ai chỉ ra đúng chỗ để tập trung luyện.
            </p>
          </div>

          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm border border-gray-100 md:col-start-1 md:mt-4">
             <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500">
               <X className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-lg font-bold">Ôn nhiều mà không biết mình đang tiến bộ không</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Không có thước đo cụ thể — mỗi tuần trôi qua chỉ cảm thấy lo thêm chứ không thấy mình vững thêm.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-4 py-20 md:px-12 flex flex-col items-center">
        <h2 className="text-center text-3xl font-bold md:text-4xl font-montserrat">
          Luyện nhiều chưa đủ — phải luyện đúng chỗ
        </h2>
        <p className="mt-4 text-center text-gray-600">
          Giai đoạn nước rút, điểm số đến từ việc <span className="italic">khắc phục đúng điểm yếu</span> — không phải từ việc ôn thêm nhiều hơn.
        </p>

        <div className="mt-16 grid w-full max-w-5xl gap-8 md:grid-cols-2">
          {/* Old way */}
          <div className="rounded-2xl bg-gray-50 p-8 border border-gray-100">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400">Luyện thi dàn trải</h3>
            <ul className="space-y-6">
              <li className="flex gap-3 text-sm">
                <X className="h-5 w-5 shrink-0 text-red-400" />
                <span>Làm hàng trăm câu mỗi ngày → <span className="font-bold">tốn sức nhưng không rõ đang tiến bộ ở đâu</span></span>
              </li>
              <li className="flex gap-3 text-sm">
                <X className="h-5 w-5 shrink-0 text-red-400" />
                <span>Thi thử → xem điểm → <span className="font-bold">không biết điểm mất ở dạng nào, kỹ năng nào</span></span>
              </li>
              <li className="flex gap-3 text-sm">
                <X className="h-5 w-5 shrink-0 text-red-400" />
                <span>Ôn theo ngẫu hứng hoặc theo lịch chung → <span className="font-bold">mất thời gian ôn chỗ đã vững, bỏ sót chỗ đang yếu</span></span>
              </li>
              <li className="flex gap-3 text-sm">
                <X className="h-5 w-5 shrink-0 text-red-400" />
                <span>Đến ngày thi vẫn lo vì <span className="font-bold">không biết chắc mình đã vá hết lỗ hổng chưa</span></span>
              </li>
            </ul>
          </div>

          {/* New way */}
          <div className="rounded-2xl bg-blue-50/50 p-8 border-2 border-blue-500/20 ring-4 ring-blue-50/50">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-blue-600">Luyện thông minh với Navi</h3>
            <ul className="space-y-6">
              <li className="flex gap-3 text-sm">
                <Check className="h-5 w-5 shrink-0 text-green-500" />
                <span><span className="font-bold text-gray-900">Xác định đúng dạng Toán đang mất điểm</span> — biết ngay cần tập trung vào đâu</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Check className="h-5 w-5 shrink-0 text-green-500" />
                <span><span className="font-bold text-gray-900">Chỉ luyện đúng chỗ còn yếu</span> — không lãng phí thời gian ôn chỗ đã nắm</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Check className="h-5 w-5 shrink-0 text-green-500" />
                <span><span className="font-bold text-gray-900">15 phút mỗi ngày, đúng trọng tâm</span> — hiệu quả hơn làm 100 câu ngẫu nhiên</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Check className="h-5 w-5 shrink-0 text-green-500" />
                <span><span className="font-bold text-gray-900">Thấy điểm số tăng lên từng tuần</span> — biết mình đang cải thiện đúng chỗ</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Start Now Section */}
      <section className="bg-gray-50/50 px-4 py-20 md:px-12 flex flex-col items-center">
        <h2 className="text-3xl font-bold md:text-4xl font-montserrat">Bắt đầu từ đâu?</h2>
        <p className="mt-4 text-center text-gray-600">Thi thử trước — hệ thống sẽ chỉ ra ngay bạn đang mất điểm ở dạng nào.</p>
        
        <div className="mt-12 grid w-full max-w-6xl gap-6 md:grid-cols-3">
          <div className="flex flex-col rounded-2xl bg-[#0e56fa] p-10 text-white shadow-2xl shadow-blue-200">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
              <Trophy className="h-7 w-7" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-100">Bắt đầu tại đây</span>
            <h3 className="mt-4 text-2xl font-bold">Kiểm tra điểm yếu miễn phí</h3>
            <p className="mt-4 leading-relaxed text-blue-50">
              40 câu · Sát cấu trúc đề TN THPT · Phân tích chính xác bạn đang mất điểm ở dạng Toán nào
            </p>
            <button className="mt-8 flex w-fit items-center gap-2 rounded-xl bg-white/20 px-6 py-3 font-bold transition-all hover:bg-white/30">
              Vào thi ngay <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="flex flex-col rounded-2xl bg-white p-10 shadow-sm border border-gray-100 transition-all hover:shadow-lg">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-gray-400">
              <Clock className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold">Luyện theo dạng yếu</h3>
            <p className="mt-4 leading-relaxed text-gray-500">
              Tự chọn dạng Toán cần gỡ điểm · Adaptive · Câu hỏi tăng dần theo năng lực
            </p>
          </div>

          <div className="flex flex-col rounded-2xl bg-white p-10 shadow-sm border border-gray-100 transition-all hover:shadow-lg">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-gray-400">
              <Calendar className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold">Lộ trình Sprint 60</h3>
            <p className="mt-4 leading-relaxed text-gray-500">
              89 ngày · Cá nhân hóa theo điểm yếu · 15 phút/ngày đúng trọng tâm
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-20 md:px-12 flex flex-col items-center">
        <h2 className="text-center text-3xl font-bold md:text-3xl font-montserrat">Học sinh nói gì sau khi luyện thông minh với Navi</h2>
        
        <div className="mt-12 grid w-full max-w-6xl gap-6 md:grid-cols-3">
          {[
            {
              name: "Trần Minh Anh",
              info: "Hà Nội · 6.5 → 8.0đ",
              text: "Thi thử xong Navi chỉ ra mình đang mất điểm ở dạng cực trị Hàm số VDC và Hình học không gian. Tập trung gỡ đúng 2 chỗ đó trong 4 tuần — điểm tăng 1.5 ngay.",
              color: "bg-blue-100/50"
            },
            {
              name: "Bùi Thanh Long",
              info: "TP.HCM · 7.0 → 8.5đ",
              text: "Trước làm 50—60 câu mỗi ngày mà điểm vẫn dậm chân. Từ khi dùng Navi chỉ làm 15 phút đúng dạng đang yếu — hiệu quả hơn hẳn, điểm tăng đều từng tuần.",
              color: "bg-green-100/50"
            },
            {
              name: "Nguyễn Thị H.",
              info: "Phụ huynh · Đà Nẵng",
              text: "Báo cáo tuần rõ ràng: con đang mạnh chỗ nào, yếu chỗ nào, tuần này cải thiện được bao nhiêu. Yên tâm thật sự vì thấy được tiến độ cụ thể.",
              color: "bg-orange-100/50"
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col rounded-2xl bg-white p-8 shadow-sm border border-gray-100 italic transition-all hover:-translate-y-1">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="mb-8 text-sm leading-relaxed text-gray-700">
                “{item.text.split('dạng').map((part, index) => index > 0 ? <><span className="font-bold not-italic">{part.includes('.') ? part.split('.')[0] : part}</span>{part.includes('.') ? part.substring(part.split('.')[0].length) : ''}</> : part)}”
              </p>
              <div className="flex items-center gap-3 not-italic">
                <div className={`h-10 w-10 flex items-center justify-center rounded-full ${item.color} text-xs font-bold uppercase`}>
                  {item.name.split(' ').map(n=>n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-sm font-bold">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20 pb-40 md:px-12 flex flex-col items-center">
        <div className="w-full max-w-6xl rounded-3xl bg-blue-50/50 border border-blue-200/50 p-12 text-center flex flex-col items-center">
          <div className="mb-8 flex items-center gap-2 rounded-full bg-pink-50 px-4 py-1 text-xs font-bold text-pink-500">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
            89 ngày còn lại — đủ để tăng điểm nếu luyện đúng chỗ
          </div>
          
          <h2 className="text-4xl font-extrabold md:text-5xl font-montserrat">Bạn đang mất điểm ở dạng Toán nào?</h2>
          <p className="mt-6 max-w-xl text-lg text-gray-600">
            Thi thử 40 câu miễn phí — hệ thống chỉ ra ngay bạn đang mất điểm ở đâu và có thể gỡ thêm bao nhiêu điểm nếu tập trung đúng chỗ.
          </p>
          
          <button className="mt-10 rounded-xl bg-[#0e56fa] px-10 py-5 text-xl font-bold text-white shadow-2xl shadow-blue-200 transition-all hover:scale-105 hover:bg-blue-700">
            Kiểm tra ngay — miễn phí
          </button>
        </div>
      </section>
    </main>
  );
}
