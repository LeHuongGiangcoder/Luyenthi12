"use client";

import Navbar from "@/components/navbar";
import { ArrowRight, ChevronRight, Check, AlertTriangle, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ExamResults() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50/30 overflow-x-hidden pt-24 pb-20">
      <Navbar />
      
      <div className="mx-auto w-full max-w-4xl px-4 md:px-8">
        {/* Header Title */}
        <div className="mb-10 text-center md:text-left">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-3 block">BÁO CÁO PHÂN TÍCH</span>
          <h1 className="text-3xl font-extrastrong md:text-4xl font-montserrat tracking-tight mb-4 text-gray-900">
            ĐÂY LÀ ĐIỂM SỐ BẠN <span className="text-red-500">ĐANG ĐỂ MẤT</span>
          </h1>
          <p className="max-w-2xl text-gray-500 font-medium leading-relaxed">
            3 dạng Toán dưới đây chiếm 3 điểm trong bài thi của bạn. Đây là những chỗ <span className="text-gray-900 font-bold underline decoration-blue-500/30">hoàn toàn có thể gỡ lại được</span> nếu luyện đúng.
          </p>
        </div>

        {/* Weak Points Section */}
        <div className="space-y-4 mb-12">
          {[
            {
              title: "Hàm số",
              skill: "Phân tích cực trị — Vận dụng cao",
              score: "-1.5đ",
              detail: "sai 3/4 câu VDC",
              progress: 35,
              status: "cần cải thiện đáng kể",
              color: "bg-red-500"
            },
            {
              title: "Hình học không gian",
              skill: "Khoảng cách điểm đến mặt phẳng",
              score: "-1.0đ",
              detail: "sai 2/3 câu",
              progress: 52,
              status: "cần thêm luyện tập",
              color: "bg-orange-400"
            },
            {
              title: "Xác suất",
              skill: "Tổ hợp xác suất có điều kiện",
              score: "-0.5đ",
              detail: "sai 1/2 câu",
              progress: 60,
              status: "cần kiểm tra thêm",
              color: "bg-amber-600"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
               <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-extrabold font-montserrat text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.skill}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black font-montserrat text-red-500 leading-none block">{item.score}</span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1 block">{item.detail}</span>
                  </div>
               </div>

               <div className="flex flex-col gap-3">
                  <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden">
                    <div 
                      className={cn("h-full transition-all duration-700", item.color)} 
                      style={{ width: `${item.progress}%` }} 
                    />
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.1em] text-gray-400">
                    <span>Mức thành thạo hiện tại ~{item.progress}%</span>
                    <span className="text-gray-900">— {item.status}</span>
                  </div>
               </div>
            </div>
          ))}
        </div>

        {/* Insights Alert Section */}
        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 mb-12 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500" />
           <div className="max-w-3xl">
              <h2 className="text-xl font-extrabold font-montserrat text-gray-900 mb-6">
                 Và đây chỉ là những gì <span className="text-[#0e56fa]">bài thi này lộ ra được</span>
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed mb-8">
                 Một đề 40 câu không thể kiểm tra hết toàn bộ chương trình. Trong chính chuyên đề Hàm số — còn 3 dạng khác bạn chưa gặp hôm nay. Và các chuyên đề như Tích phân, Mũ logarit, Số phức chỉ xuất hiện 1—2 câu — chưa đủ để biết bạn thực sự nắm hay chỉ may mắn làm đúng.
              </p>

              <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100">
                 <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-4">NHỮNG DẠNG CHƯA ĐƯỢC KIỂM TRA ĐỦ TRONG BÀI THI NÀY:</span>
                 <div className="flex flex-wrap gap-2">
                    {['Tích phân ứng dụng (1 câu)', 'Số phức (1 câu)', 'Mũ logarit VDC (2 câu)'].map(tag => (
                      <span key={tag} className="px-3 py-1.5 rounded-xl bg-white border border-gray-100 text-[10px] font-bold text-gray-700 shadow-sm">
                        {tag}
                      </span>
                    ))}
                    <span className="px-3 py-1.5 rounded-xl bg-white border border-red-100 text-[10px] font-bold text-red-500 shadow-sm">
                       Xác suất nâng cao (0 câu)
                    </span>
                 </div>
                 <p className="mt-6 text-[10px] font-medium italic text-gray-400">
                    Mỗi dạng chưa biết là điểm bạn có thể mất trong phòng thi thật — hoặc điểm bạn có thể gỡ được nếu biết trước.
                 </p>
              </div>
           </div>
        </div>

        {/* Deep Analysis CTA */}
        <div className="bg-blue-50/50 p-6 md:p-8 rounded-[2.5rem] border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6 mb-12 relative overflow-hidden group">
           <div className="flex flex-col">
              <h3 className="text-lg md:text-xl font-extrabold font-montserrat text-blue-900 mb-2">Đánh giá sâu chuyên đề Hàm số — miễn phí</h3>
              <p className="text-blue-500 font-bold text-xs max-w-lg">
                12 câu · 8 phút · Hệ thống xác định chính xác bạn đang yếu ở dạng nào, mức độ nào — từ đó biết cần luyện gì để gỡ điểm hiệu quả nhất.
              </p>
           </div>
           <button className="whitespace-nowrap px-8 py-4 bg-[#4a6cf7] text-white font-bold rounded-2xl shadow-xl shadow-blue-200 transition-all hover:bg-blue-700 hover:scale-[1.02]">
              Đánh giá ngay →
           </button>
        </div>

        {/* Sprint CTA - Center Button */}
        <div className="flex justify-center">
           <button className="px-10 py-5 border border-gray-100 rounded-[1.5rem] bg-white text-gray-800 font-extrabold shadow-sm transition-all hover:border-gray-200 hover:shadow-md flex items-center justify-center gap-2">
              Xem lộ trình gỡ điểm Sprint 60 <ArrowRight className="h-5 w-5" />
           </button>
        </div>
      </div>
    </main>
  );
}
