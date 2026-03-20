"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Check, X, Star, Calendar, Clock, Trophy, LineChart } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountdownTimer from "@/components/ui/countdown-timer";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <main className="flex min-h-screen flex-col bg-white overflow-x-hidden">
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
      <section ref={heroRef} className="hero-content relative flex flex-col items-center px-4 pt-32 pb-16 md:px-12 md:pb-24 overflow-hidden">
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
          <div className="mb-6 flex items-center gap-4 rounded-full bg-pink-50/50 px-5 py-2 text-xs font-semibold text-pink-500 border border-pink-100/50 backdrop-blur-sm">
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
          
          <h1 className="max-w-4xl text-center text-4xl font-extrabold leading-[1.1] md:text-7xl font-montserrat">
            Giai đoạn nước rút <br/>
            mỗi điểm Toán <br/>
            <span className="text-[#0e56fa] italic font-medium">đều phải có lý do</span>
          </h1>
          
          <p className="mt-8 max-w-2xl text-center text-lg leading-relaxed text-gray-600">
            Không còn thời gian để ôn dàn trải. Navi giúp bạn biết chính xác <span className="font-bold text-gray-900 surface-emphasis">đang mất điểm ở dạng Toán nào</span> để tối đa hóa từng điểm số cho kỳ thi.
          </p>
          
          <div className="mt-12 flex flex-col items-center gap-6">
            <button className="rounded-2xl bg-[#0e56fa] px-10 py-5 text-xl font-bold text-white shadow-2xl shadow-blue-200 transition-all hover:scale-105 active:scale-95 hover:bg-blue-700">
              Kiểm tra điểm yếu ngay — miễn phí
            </button>
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
          <div className="stats-container mt-16 grid w-full max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-[2rem] border border-gray-100 bg-gray-200/50 md:grid-cols-4 shadow-xl shadow-blue-100/30 relative z-20">
            <StatItem 
              value={1840} 
              label="Học sinh đã thi thử" 
              decimals={0} 
              separator="."
            />
            <StatItem 
              value={1.4} 
              label="Tăng điểm TB sau 4 tuần luyện" 
              prefix="+" 
              suffix="đ" 
              decimals={1} 
            />
            <StatItem 
              value={89} 
              label="Học sinh phát hiện điểm yếu" 
              suffix="%" 
              decimals={0} 
            />
            <StatItem 
              value={4.9} 
              label="Đánh giá sau khi sử dụng" 
              suffix="★" 
              decimals={1} 
              subLabel="312 đánh giá"
            />
          </div>
        </div>
      </section>

      {/* Trap Section - Redesigned with Stacked Cards Effect */}
      <section className="relative bg-gray-50/80 px-4 py-32 md:px-12">
        <div className="mx-auto max-w-4xl text-center mb-24">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-red-500/60 mb-4 block">CẢNH BÁO GIAI ĐOẠN CUỐI</span>
          <h2 className="text-4xl font-extrabold md:text-6xl font-montserrat tracking-tight">
            4 cái bẫy khiến điểm <br className="hidden md:block" />
            <span className="text-red-500 italic">đ�        <div className="mx-auto max-w-3xl">
          {[
            {
              id: "01",
              title: "Vòng lặp 'Sai chỗ cũ'",
              desc: "Làm 10 đề mỗi tuần nhưng hổng đúng dạng đó. Xem đáp án thấy hiểu, nhưng lần sau gặp lại vẫn 'đứng hình' như lần đầu.",
              icon: <X className="h-8 w-8 text-red-500" />,
              colorClass: "bg-white border-red-100"
            },
            {
              id: "02",
              title: "Lạc giữa 'Ma trận kiến thức'",
              desc: "Toán có 50 dạng, chỗ nào cũng thấy lo. Không biết nên dồn sức vào Tích phân hay OXY trước để kịp gỡ điểm trong 80 ngày.",
              icon: <ArrowRight className="h-8 w-8 text-orange-500 rotate-45" />,
              colorClass: "bg-white border-orange-100"
            },
            {
              id: "03",
              title: "Mất điểm 'Vô nghĩa'",
              desc: "Sai ngu ở những câu 7đ, hụt hơi ở những câu 8đ chỉ vì chưa ai chỉ ra quy luật sai của riêng bạn. Mỗi điểm mất đi đều có lý do.",
              icon: <Star className="h-8 w-8 text-blue-500" />,
              colorClass: "bg-white border-blue-100"
            },
            {
              id: "04",
              title: "Ôn tập 'Mù quáng'",
              desc: "Mỗi ngày trôi qua chỉ thấy Lo thêm chứ không thấy Vững thêm. Không có thước đo cụ thể, bạn đang đi trên một con đường sương mù.",
              icon: <LineChart className="h-8 w-8 text-purple-500" />,
              colorClass: "bg-white border-purple-100"
            }
          ].map((card, idx) => (
            <div 
              key={card.id}
              className="sticky top-40 mb-32 h-[450px]"
            >
              <div 
                className={cn(
                  "relative h-full overflow-hidden rounded-[3rem] border p-12 md:p-16 shadow-2xl transition-all duration-300",
                  card.colorClass
                )}
              >
                <div className="absolute top-0 right-0 p-8 text-9xl font-black text-gray-50 select-none font-montserrat tracking-tighter">
                  {card.id}
                </div>
                
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-10 flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-xl shadow-gray-200">
                    {card.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="mb-6 text-4xl md:text-5xl font-extrabold font-montserrat tracking-tight text-gray-900 leading-[1.1]">
                      {card.title}
                    </h3>
                    <p className="max-w-xl text-xl leading-relaxed text-gray-500 font-medium">
                      {card.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-sm font-bold text-gray-400">
                    <span className="h-1.5 flex-1 rounded-full bg-gray-100 overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: `${(idx + 1) * 25}%` }} />
                    </span>
                    <span>TRAP {card.id}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
}
                  </p>
                </div>
                <div className="mt-12 h-1.5 w-24 rounded-full bg-gray-100 overflow-hidden">
                   <div 
                     className="h-full bg-blue-500" 
                     style={{ width: `${(idx + 1) * 25}%` }}
                   />
                </div>
              </div>
            </div>
          ))}
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

function StatItem({ 
  value, 
  label, 
  prefix = "", 
  suffix = "", 
  decimals = 0,
  subLabel = "",
  separator = ","
}: { 
  value: number; 
  label: string; 
  prefix?: string; 
  suffix?: string; 
  decimals?: number; 
  subLabel?: string;
  separator?: string;
}) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = { val: 0 };
    const endValue = value;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        once: true
      }
    });

    tl.to(target, {
      val: endValue,
      duration: 2,
      ease: "power3.out",
      onUpdate: () => {
        if (numberRef.current) {
          let formattedValue = target.val.toFixed(decimals);
          if (separator === ".") {
            formattedValue = formattedValue.replace(".", ",");
            formattedValue = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
          } else if (separator === ",") {
             formattedValue = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
          numberRef.current.innerText = formattedValue;
        }
      }
    });

    return () => {
      tl.kill();
    };
  }, [value, decimals, separator]);

  return (
    <div ref={containerRef} className="stat-card flex flex-col items-center justify-center bg-white p-10 md:p-12 transition-all hover:bg-blue-50/20 group">
      <div className="flex items-baseline">
        {prefix && <span className="text-xl md:text-2xl font-bold text-[#0e56fa] mr-0.5">{prefix}</span>}
        <span 
          ref={numberRef} 
          className="text-4xl md:text-5xl font-extrabold text-blue-950 font-montserrat tracking-tight group-hover:scale-105 transition-transform duration-500"
        >
          0
        </span>
        {suffix && <span className="text-xl md:text-2xl font-bold text-[#0e56fa] ml-0.5">{suffix}</span>}
      </div>
      <span className="mt-3 text-[9px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.15em] text-center max-w-[150px] leading-relaxed">
        {label}
      </span>
      {subLabel && (
        <span className="mt-1.5 text-[10px] font-medium text-blue-400/50 italic">
          {subLabel}
        </span>
      )}
    </div>
  );
}
