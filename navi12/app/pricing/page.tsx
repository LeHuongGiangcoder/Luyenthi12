"use client";

import { useState } from "react";
import { Check, X, ChevronDown, ChevronUp, Star, Users, TrendingUp, Zap, ShieldCheck, Timer, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { DynamicDayCounter } from "@/components/ui/dynamic-day-counter";

interface PlanFeature {
  label: string;
  bold?: boolean;
  disabled?: boolean;
  highlight?: boolean;
}

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(4);
  const [selectedPlan, setSelectedPlan] = useState<number>(1); // Default to Sprint 60

  const plans: Array<{
    name: string;
    price: string;
    originalPrice?: string;
    sub: string;
    badge?: string;
    tag?: string;
    features: PlanFeature[];
    color: string;
    cta: string;
  }> = [
    {
      name: "Sprint Free",
      price: "0đ",
      sub: "Không cần đăng ký",
      features: [
        { label: "5 đề thi thử miễn phí", bold: true },
        { label: "Phân tích điểm yếu cơ bản" },
        { label: "Lộ trình cá nhân", disabled: true },
        { label: "Luyện adaptive", disabled: true }
      ],
      color: "blue",
      cta: "Bắt đầu miễn phí"
    },
    {
      name: "Sprint 60",
      price: "299k",
      originalPrice: "499k",
      sub: "Dùng đến 30/6/2026",
      badge: "Phổ biến nhất",
      features: [
        { label: "Tất cả Free +", bold: true, highlight: true },
        { label: "Diagnostic tất cả chuyên đề", bold: true },
        { label: "Luyện adaptive + 10.000+ câu", bold: true },
        { label: "Nhiệm vụ 15 phút mỗi ngày", bold: true },
        { label: "5 đề thi thử VIP Chủ nhật", bold: true }
      ],
      color: "blue",
      cta: "Bắt đầu Sprint 60 - 299.000đ"
    },
    {
      name: "Sprint 60 Plus",
      price: "499k",
      originalPrice: "799k",
      sub: "Dùng đến 30/6/2026",
      tag: "Kèm phụ huynh",
      features: [
        { label: "Tất cả Sprint 60 +", bold: true },
        { label: "Báo cáo tuần gửi qua Zalo" },
        { label: "Dashboard phụ huynh" },
        { label: "Dự báo điểm thi cuối kỳ" }
      ],
      color: "amber",
      cta: "Đăng ký Plus - 499.000đ"
    }
  ];

  const faqs = [
    {
      q: "Sprint 60 khác gì so với làm đề thi thử bình thường?",
      a: "Khác với việc làm đề ngẫu nhiên, Sprint 60 tập trung vào việc 'lấp lỗ hổng'. Hệ thống sẽ tự động phân tích từng câu sai của bạn, chỉ ra chính xác chuyên đề bạn đang yếu và cung cấp lộ trình luyện tập riêng biệt cho chuyên đề đó. Bạn không tốn thời gian cho những thứ đã vững."
    },
    {
      q: "Mỗi ngày tốn bao nhiêu thời gian?",
      a: "Lộ trình được thiết kế tối ưu chỉ với 15-20 phút mỗi ngày. Đây là khoảng thời gian 'vàng' để não bộ tiếp thu kiến thức trọng tâm mà không gây quá tải, phù hợp với lịch học dày đặc của học sinh lớp 12."
    },
    {
      q: "Hệ thống adaptive khác gì làm ngân hàng câu hỏi thông thường?",
      a: "Ngân hàng câu hỏi thông thường là tĩnh. Hệ thống adaptive của chúng tôi thay đổi độ khó và dạng bài dựa trên kết quả trả lời của bạn theo thời gian thực. Nếu bạn sai, hệ thống sẽ đưa ra câu hỏi gợi mở; nếu bạn đúng, hệ thống sẽ nâng level để bạn tiến bộ nhanh hơn."
    },
    {
       q: "Tôi đang ôn thi với nhiều thứ khác — Sprint 60 phù hợp không?",
       a: "Phù hợp hoàn toàn. Sprint 60 không thay thế bất kỳ cách ôn nào bạn đang làm — nó bổ sung thêm một thứ quan trọng mà mọi cách ôn thi khác đều thiếu: biết chính xác mình đang yếu dạng Toán nào và tập trung luyện đúng chỗ đó. Chỉ 15 phút mỗi ngày, không xung đột với lịch học hiện tại của bạn."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-white overflow-x-hidden pt-8 pb-20">
      
      {/* Hero Section - SYNCED WITH LANDING PAGE FOR CONSISTENCY */}
      <section className="mx-auto w-full max-w-5xl px-4 md:px-12 text-center mt-12 mb-16 flex flex-col items-center">
        <div className="inline-flex px-5 py-2 bg-[#0e56fa] text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-10 shadow-lg shadow-blue-100">
           Sprint 60 · Toán THPT 2026 · Gỡ điểm thông minh
        </div>
        <h1 className="max-w-4xl text-center text-4xl font-extrabold leading-[1.1] md:text-7xl font-montserrat text-gray-900 mb-8">
           <DynamicDayCounter /> ngày còn lại. <br/>
           <span className="text-[#0e56fa] italic font-medium">Mỗi phút phải đúng chỗ.</span>
        </h1>
        <p className="max-w-2xl text-center text-lg leading-relaxed text-gray-600">
           Giai đoạn nước rút không còn chỗ cho việc ôn dàn trải. Chọn gói Sprint 60 phù hợp để rà soát chính xác lỗ hổng và tối đa hóa điểm số ngay hôm nay.
        </p>
      </section>

      {/* Interactive Pricing Cards - MOVED UP TO PREVENT CONFUSION */}
      <section className="mx-auto w-full max-w-7xl px-4 md:px-12 mb-40">
         <div className="text-center mb-16">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">CHỌN GÓI PHÙ HỢP CỦA BẠN</span>
         </div>
         
         <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8">
            {plans.map((plan, idx) => {
              const isActive = selectedPlan === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => setSelectedPlan(idx)}
                  className={cn(
                    "flex-1 max-w-sm p-8 md:p-10 rounded-[3rem] border transition-all duration-500 cursor-pointer relative overflow-hidden flex flex-col items-start min-h-[580px] text-left",
                    isActive 
                      ? plan.color === "blue" 
                        ? "bg-white border-[#0e56fa] shadow-2xl shadow-blue-200 transform scale-[1.03] z-10" 
                        : "bg-white border-amber-400 shadow-2xl shadow-amber-100 transform scale-[1.03] z-10"
                      : "bg-white border-gray-100 opacity-60 hover:opacity-100 hover:border-gray-200"
                  )}
                >
                  {plan.badge && isActive && (
                    <div className="absolute top-0 right-0 px-6 py-2 bg-[#0e56fa] text-white text-[9px] font-black uppercase tracking-widest rounded-bl-2xl">
                      {plan.badge}
                    </div>
                  )}
                  
                  {plan.tag && (
                    <div className={cn(
                      "inline-flex px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest mb-4",
                      isActive ? "bg-amber-50 text-amber-600" : "bg-gray-50 text-gray-400"
                    )}>
                      {plan.tag}
                    </div>
                  )}

                  <span className={cn(
                    "text-[10px] font-black uppercase tracking-widest mb-3",
                    isActive ? (plan.color === "blue" ? "text-[#0e56fa]" : "text-amber-600") : "text-gray-400"
                  )}>
                    {plan.name}
                  </span>

                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-5xl font-black font-montserrat text-gray-900">{plan.price}</span>
                    {plan.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">{plan.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight mb-10">{plan.sub}</p>
                  
                  <div className="space-y-4 mb-12 w-full flex-1">
                    {plan.features.map((feat, i) => (
                      <div key={i} className={cn("flex items-center gap-3", feat.disabled ? "opacity-30" : "")}>
                        {feat.disabled ? (
                          <X className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Check className={cn(
                            "h-4 w-4 stroke-[3.5]",
                            isActive 
                              ? plan.color === "blue" ? "text-blue-600" : "text-amber-500" 
                              : "text-gray-300"
                          )} />
                        )}
                        <span className={cn(
                          "text-[12px]",
                          feat.bold ? "font-black" : "font-semibold",
                          isActive 
                            ? feat.highlight ? "text-[#0e56fa]" : "text-gray-800" 
                            : "text-gray-500"
                        )}>
                          {feat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button className={cn(
                    "w-full py-5 font-black rounded-3xl transition-all text-base flex items-center justify-center gap-3 mt-auto",
                    isActive 
                      ? plan.color === "blue" 
                        ? "bg-[#0e56fa] text-white shadow-xl shadow-blue-100 hover:bg-blue-700 hover:scale-[1.02]" 
                        : "bg-amber-500 text-white shadow-xl shadow-amber-100 hover:bg-amber-600 hover:scale-[1.02]"
                      : "bg-gray-50 text-gray-400 py-4 opacity-50"
                  )}>
                    {plan.cta}
                    {isActive && <ArrowRight className="h-5 w-5" />}
                  </button>
                  
                  {isActive && idx === 1 && (
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center w-full mt-5">
                      Thanh toán 1 lần · Hoàn tiền 7 ngày không phí
                    </p>
                  )}
                </div>
              );
            })}
         </div>
      </section>

      {/* How it Works (1-2-3) - MOVED DOWN */}
      <section className="mx-auto w-full max-w-6xl px-4 md:px-12 mb-40">
         <div className="text-center mb-20">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">LUYỆN THÔNG MINH VỚI SPRINT 60 — HOẠT ĐỘNG NHƯ THẾ NÀO</span>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {[
              { 
                step: 1, 
                title: "Thi thử → Biết ngay mất điểm ở đâu", 
                desc: "22 câu sát đề thật. Hệ thống phân tích từng câu sai — chỉ ra đúng dạng Toán, kỹ năng nào đang kéo điểm xuống và chiếm bao nhiêu điểm trong đề."
              },
              { 
                step: 2, 
                title: "Đánh giá sâu → Lộ trình riêng cho bạn", 
                desc: "Hệ thống đo chính xác bạn đang yếu ở mức nào trong từng dạng Toán — rồi tạo lộ trình luyện cá nhân hóa, ưu tiên những chỗ có thể gỡ điểm hiệu quả nhất."
              },
              { 
                step: 3, 
                title: "15 phút/ngày → Gỡ điểm từng tuần", 
                desc: "Mỗi ngày hệ thống chọn sẵn 5—8 câu đúng dạng bạn cần cải thiện. Không phải bạn chọn — không mất thời gian loay hoay. Thi thử mỗi Chủ nhật để thấy điểm tăng rõ ràng."
              }
            ].map(item => (
              <div key={item.step} className="flex flex-col items-center text-center group">
                 <div className="h-14 w-14 rounded-full bg-blue-50 text-[#0e56fa] flex items-center justify-center font-black text-xl mb-8 ring-8 ring-blue-50/50 group-hover:bg-[#0e56fa] group-hover:text-white transition-all duration-300">
                    {item.step}
                 </div>
                 <h3 className="font-extrabold text-lg text-gray-900 mb-5 px-4 leading-tight">{item.title}</h3>
                 <p className="text-[13px] font-medium text-gray-500 leading-relaxed max-w-xs">{item.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto w-full max-w-3xl px-4 md:px-12 mb-40 text-left">
         <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-16 block text-center">CÂU HỎI THƯỜNG GẶP</span>
         
         <div className="space-y-6">
            {faqs.map((faq, i) => (
               <div key={i} className="border-b border-gray-100">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-8 text-left group"
                  >
                     <span className={cn("text-lg font-extrabold font-montserrat tracking-tight transition-colors", openFaq === i ? "text-[#0e56fa]" : "text-gray-900 underline decoration-gray-100 group-hover:text-blue-600")}>
                        {faq.q}
                     </span>
                     {openFaq === i ? <ChevronUp className="h-6 w-6 text-blue-500" /> : <ChevronDown className="h-6 w-6 text-gray-300" />}
                  </button>
                  {openFaq === i && (
                     <div className="pb-10 animate-in fade-in slide-in-from-top-2 duration-300">
                        <p className="text-base font-medium text-gray-500 leading-relaxed italic border-l-4 border-blue-50 pl-6">
                           {faq.a}
                        </p>
                     </div>
                  )}
               </div>
            ))}
         </div>
      </section>

      {/* Trust Footer */}
      <footer className="bg-gray-50/50 py-24">
         <div className="mx-auto w-full max-w-6xl px-4 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
               {[
                 { icon: ShieldCheck, label: "THANH TOÁN AN TOÀN", sub: "Bảo mật 100%" },
                 { icon: Zap, label: "KÍCH HOẠT NGAY", sub: "Truy cập lộ trình tức thì" },
                 { icon: Timer, label: "HOÀN TIỀN 7 NGÀY", sub: "Nếu không hài lòng" },
                 { icon: Star, label: "4.9/5 ĐÁNH GIÁ", sub: "Từ +2.500 học sinh" }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center text-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-sm border border-gray-100">
                       <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                       <span className="text-[11px] font-black text-gray-900 block tracking-wider uppercase mb-1">{item.label}</span>
                       <span className="text-[10px] font-bold text-gray-400 block">{item.sub}</span>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </footer>
    </main>
  );
}
