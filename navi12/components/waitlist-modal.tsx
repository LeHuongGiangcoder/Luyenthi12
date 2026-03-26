"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Mail, Phone, Sparkles, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const features = [
  "Bài thi thử 90 phút",
  "Test chuyên sâu theo chuyên đề",
  "Báo cáo chi tiết kiến thức mất điểm",
  "Lộ trình cá nhân hoá để lấy lại điểm",
  "Bài tập luyện hàng ngày để xoá lỗ hổng",
];

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(4);

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    try {
      await fetch("https://n8n.giangle.site/webhook/bc981e3b-a90d-4faa-8db5-676fbb216f46", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          phone,
          features: selectedFeatures,
          submittedAt: new Date().toISOString(),
          source: "Landing Page Waitlist"
        })
      });
    } catch (error) {
      console.error("Waitlist Error:", error);
    }
    
    setIsLoading(false);
    setIsSubmitted(true);

    // Auto close timer
    let timer = 4;
    const interval = setInterval(() => {
      timer -= 1;
      setCountdown(timer);
      if (timer <= 0) {
        clearInterval(interval);
        onClose();
        // Reset state for next open
        setTimeout(() => {
          setIsSubmitted(false);
          setCountdown(4);
          setEmail("");
          setPhone("");
          setSelectedFeatures([]);
        }, 500);
      }
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-2xl overflow-y-auto max-h-[90vh] pointer-events-auto custom-scrollbar"
            >
              <button
                onClick={onClose}
                className="absolute top-6 right-6 md:top-8 md:right-8 p-2 rounded-full hover:bg-gray-100 transition-colors z-10 bg-white shadow-sm"
              >
                <X className="h-6 w-6 text-gray-400" />
              </button>

              {!isSubmitted ? (
                <div className="p-8 md:p-10">
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-black text-blue-600 border border-blue-100 uppercase tracking-widest mb-6">
                      COMING SOON
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold font-montserrat tracking-tight text-gray-900 leading-tight">
                      Gần xong rùii! <br />
                      <span className="text-[#0e56fa]">Nhận tin ngay khi ra mắt</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 font-medium leading-relaxed font-primary">
                      Sản phẩm đang trong quá trình chuẩn bị cuối cùng. Navi sẽ gửi thông tin đến em sớm nhất nhé.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      {/* Email Input */}
                      <div className="relative">
                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          required
                          placeholder="Email của em..."
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-14 pr-6 py-5 rounded-[1.5rem] bg-gray-50 border border-gray-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium text-gray-900"
                        />
                      </div>

                      {/* Phone Input */}
                      <div className="relative">
                        <Phone className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          required
                          placeholder="Số điện thoại / Zalo..."
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full pl-14 pr-6 py-5 rounded-[1.5rem] bg-gray-50 border border-gray-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium text-gray-900"
                        />
                      </div>
                    </div>

                    {/* Feature Selection */}
                    <div className="space-y-4">
                      <label className="text-sm font-black text-gray-400 uppercase tracking-widest block ml-2">
                        Em mong chờ tính năng nào nhất nhỉ?
                      </label>
                      <div className="grid grid-cols-1 gap-2.5">
                        {features.map((feature) => {
                          const isSelected = selectedFeatures.includes(feature);
                          return (
                            <button
                              key={feature}
                              type="button"
                              onClick={() => toggleFeature(feature)}
                              className={cn(
                                "flex items-center gap-3 px-5 py-4 rounded-2xl border-2 transition-all text-left",
                                isSelected
                                  ? "bg-blue-50 border-blue-500 text-blue-700 font-bold"
                                  : "bg-white border-gray-100 text-gray-500 hover:border-blue-200"
                              )}
                            >
                              <div className={cn(
                                "h-5 w-5 rounded-md border-2 flex items-center justify-center transition-colors",
                                isSelected ? "bg-blue-500 border-blue-500" : "bg-white border-gray-200 shadow-sm"
                              )}>
                                {isSelected && <Check className="h-3.5 w-3.5 text-white stroke-[4]" />}
                              </div>
                              <span className="text-sm">{feature}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading || !email || !phone}
                      className="w-full py-6 rounded-[1.5rem] bg-[#0e56fa] text-white font-black text-xl shadow-2xl shadow-blue-200 hover:bg-blue-700 active:scale-[0.98] transition-all disabled:opacity-50 disabled:grayscale flex items-center justify-center gap-3"
                    >
                      {isLoading ? (
                        <div className="h-6 w-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Hóng navi!
                        </>
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative p-12 text-center overflow-hidden"
                >
                  {/* Decorative Background Elements */}
                  <div className="absolute top-0 right-0 h-32 w-32 bg-blue-500/5 blur-3xl rounded-full -mr-10 -mt-10" />
                  <div className="absolute bottom-0 left-0 h-32 w-32 bg-blue-500/5 blur-3xl rounded-full -ml-10 -mb-10" />

                  <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.2 }}
                      className="h-24 w-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner"
                    >
                      <div className="h-16 w-16 bg-[#0e56fa] rounded-full flex items-center justify-center shadow-lg shadow-blue-200/50">
                        <Check className="h-8 w-8 text-white stroke-[4]" />
                      </div>
                    </motion.div>

                    <h2 className="text-3xl font-black font-montserrat tracking-tight text-gray-900 mb-4">
                      Hóng Navi thành công!
                    </h2>
                    <p className="text-lg text-gray-500 font-medium leading-relaxed font-primary mb-10 max-w-sm mx-auto">
                      Cảm ơn em đã quan tâm. Navi sẽ liên hệ qua <span className="text-[#0e56fa] font-bold">Zalo/Email</span> cho em ngay khi sản phẩm sẵn sàng nhé!
                    </p>

                    <div className="mt-12 flex flex-col items-center">
                      <div className="h-1 w-48 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: "100%" }}
                          animate={{ width: "0%" }}
                          transition={{ duration: 4, ease: "linear" }}
                          className="h-full bg-[#0e56fa]"
                        />
                      </div>
                      <p className="mt-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Tự động đóng sau {countdown}s...
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
