"use client";

import React, { useEffect, useRef, useState } from "react";
import { useAnimate } from "framer-motion";
import { EXAM_DATE } from "@/lib/exam-date";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export default function CountdownTimer() {
  return (
    <div className="flex items-center gap-1.5 bg-transparent font-montserrat">
      <CountdownItem unit="Day" label="ngày" />
      <span className="opacity-50">:</span>
      <CountdownItem unit="Hour" label="giờ" />
      <span className="opacity-50">:</span>
      <CountdownItem unit="Minute" label="phút" />
      <span className="opacity-50">:</span>
      <CountdownItem unit="Second" label="giây" />
    </div>
  );
}

function CountdownItem({ unit, label }: { unit: string; label: string }) {
  const { ref, time } = useTimer(unit);
  const display = String(time).padStart(2, '0');

  return (
    <div className="flex items-center gap-1">
      <div className="relative overflow-hidden">
        <span
          ref={ref}
          className="block text-sm font-bold text-pink-500 transition-colors duration-500"
        >
          {display}
        </span>
      </div>
      <span className="text-[10px] font-medium text-pink-400 uppercase tracking-tighter">
        {label}
      </span>
    </div>
  );
}

function useTimer(unit: string) {
  const [ref, animate] = useAnimate();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeRef = useRef(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    handleCountdown();
    intervalRef.current = setInterval(handleCountdown, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCountdown = async () => {
    const end = new Date(EXAM_DATE);
    const now = new Date();
    const distance = end.getTime() - now.getTime();

    let newTime = 0;
    switch (unit) {
      case "Day":
        newTime = Math.max(0, Math.floor(distance / DAY));
        break;
      case "Hour":
        newTime = Math.max(0, Math.floor((distance % DAY) / HOUR));
        break;
      case "Minute":
        newTime = Math.max(0, Math.floor((distance % HOUR) / MINUTE));
        break;
      default:
        newTime = Math.max(0, Math.floor((distance % MINUTE) / SECOND));
    }

    if (newTime !== timeRef.current) {
      if (ref.current) {
        await animate(
          ref.current,
          { y: ["0%", "-50%"], opacity: [1, 0] },
          { duration: 0.2 }
        );
      }

      timeRef.current = newTime;
      setTime(newTime);

      if (ref.current) {
        await animate(
          ref.current,
          { y: ["50%", "0%"], opacity: [0, 1] },
          { duration: 0.2 }
        );
      }
    }
  };

  return { ref, time };
}
